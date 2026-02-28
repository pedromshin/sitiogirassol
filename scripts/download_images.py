#!/usr/bin/env python3
"""
Download images from HTML content with their categories (locations in the property).
Expects HTML with structure: button[aria-label] > picture > img[data-original-uri]
Category is extracted from aria-label (e.g., "Photo 1 of 81, Cover photo" -> "Cover photo").
"""

import argparse
import re
import sys
from pathlib import Path

import requests
from bs4 import BeautifulSoup


def sanitize_filename(name: str) -> str:
    """Make a string safe for use as a filename/folder name."""
    # Replace problematic chars, collapse spaces
    s = re.sub(r'[<>:"/\\|?*]', "_", name.strip())
    s = re.sub(r"\s+", " ", s).strip()
    return s or "uncategorized"


def extract_category_from_label(label: str) -> str | None:
    """Extract category from various aria-label formats. Returns None if no match."""
    if not label or not isinstance(label, str):
        return None
    label = label.strip()
    # "Photo X of Y, Category" (old format)
    if "," in label:
        return sanitize_filename(label.split(",", 1)[1])
    # "Scroll to Category"
    if label.lower().startswith("scroll to "):
        return sanitize_filename(label[10:])
    # "Category image N" (e.g. "Living room image 1")
    if " image " in label:
        return sanitize_filename(label.split(" image ", 1)[0])
    return None


def extract_images(html: str) -> list[tuple[str, str]]:
    """
    Parse HTML and return list of (image_url, category) tuples.
    Prefers data-original-uri for full-resolution URLs.
    Deduplicates by URL (keeps first occurrence).
    Supports: aria-label="Photo X of Y, Category", aria-label="Scroll to X",
    aria-label="X image N", and div._p85x14 text.
    """
    soup = BeautifulSoup(html, "html.parser")
    results = []
    seen_urls: set[str] = set()

    for img in soup.find_all("img"):
        url = img.get("data-original-uri") or img.get("src")
        if not url or not url.startswith(("http://", "https://")):
            continue
        # Strip query params for dedup; use clean URL for storage
        url_base = url.split("?")[0]
        if url_base in seen_urls:
            continue
        seen_urls.add(url_base)

        category = "uncategorized"
        parent = img.parent
        while parent and parent.name != "body":
            label = parent.get("aria-label")
            if label:
                cat = extract_category_from_label(label)
                if cat:
                    category = cat
                    break
            # div._p85x14 contains category text (new structure)
            if parent.name == "div" and "_p85x14" in (parent.get("class") or []):
                text = parent.get_text(strip=True)
                if text:
                    category = sanitize_filename(text)
                    break
            # Sibling div._p85x14 (button contains both img area and label div)
            if parent.name == "button":
                for sib in parent.find_all("div", class_="_p85x14"):
                    text = sib.get_text(strip=True)
                    if text:
                        category = sanitize_filename(text)
                        break
                if category != "uncategorized":
                    break
                if label:
                    cat = extract_category_from_label(label)
                    if cat:
                        category = cat
                break
            parent = parent.parent

        results.append((url, category))

    return results


def download_image(url: str, dest_path: Path) -> bool:
    """Download image from URL to dest_path. Returns True on success."""
    try:
        r = requests.get(url, timeout=30, stream=True)
        r.raise_for_status()
        dest_path.parent.mkdir(parents=True, exist_ok=True)
        with open(dest_path, "wb") as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
        return True
    except Exception as e:
        print(f"  Error: {e}", file=sys.stderr)
        return False


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Download images from HTML with their categories (property locations)"
    )
    parser.add_argument(
        "input",
        nargs="?",
        help="Path to HTML file. If omitted, reads from stdin.",
    )
    parser.add_argument(
        "-o",
        "--output",
        default="downloaded_images",
        help="Output directory (default: downloaded_images)",
    )
    parser.add_argument(
        "-n",
        "--by-number",
        action="store_true",
        help="Use numeric prefix in filename (001_, 002_, ...) for ordering",
    )
    args = parser.parse_args()

    if args.input:
        path = Path(args.input)
        if not path.exists():
            print(f"Error: file not found: {path}", file=sys.stderr)
            sys.exit(1)
        html = path.read_text(encoding="utf-8", errors="replace")
    else:
        html = sys.stdin.read()

    pairs = extract_images(html)
    if not pairs:
        print("No images found in HTML.", file=sys.stderr)
        sys.exit(1)

    out_dir = Path(args.output)
    out_dir.mkdir(parents=True, exist_ok=True)

    # Track counts per category for unique filenames
    category_counts: dict[str, int] = {}

    print(f"Found {len(pairs)} images. Downloading to {out_dir}...")

    for i, (url, category) in enumerate(pairs, 1):
        category_counts[category] = category_counts.get(category, 0) + 1
        count = category_counts[category]

        # Determine extension from URL or default to .jpg
        ext = ".jpg"
        if "." in url.split("?")[0]:
            ext = "." + url.split("?")[0].rsplit(".", 1)[-1].lower()
        if ext not in (".jpg", ".jpeg", ".png", ".webp", ".gif"):
            ext = ".jpg"

        prefix = f"{i:03d}_" if args.by_number else ""
        safe_cat = sanitize_filename(category)
        filename = f"{prefix}{safe_cat}_{count}{ext}"
        subdir = out_dir / safe_cat
        dest = subdir / filename

        print(f"  [{i}/{len(pairs)}] {category} -> {dest.relative_to(out_dir)}")
        if download_image(url, dest):
            print(f"    OK")
        else:
            print(f"    FAILED")


if __name__ == "__main__":
    main()
