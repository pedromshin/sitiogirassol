#!/bin/bash
# Generate a single printable PDF from all planning & research documents
# Usage: bash .planning/generate-pdf.sh
# Output: .planning/sitio-girassol-plan.pdf

set -e

DIR="$(cd "$(dirname "$0")" && pwd)"
OUT="$DIR/sitio-girassol-plan.pdf"

# Create temp directory for processing
TMPDIR=$(mktemp -d /tmp/sitio-plan-XXXXXX)
trap "rm -rf $TMPDIR" EXIT

# Create metadata file
cat > "$TMPDIR/meta.yaml" << 'EOF'
---
title: "Sítio Girassol — Revenue Maximization Plan"
subtitle: "Complete Research, Strategy & Roadmap"
date: "March 2026"
geometry: "margin=2.2cm"
fontsize: 11pt
mainfont: "Arial Unicode MS"
sansfont: "Helvetica Neue"
monofont: "Menlo"
colorlinks: true
linkcolor: "teal"
urlcolor: "teal"
toc: true
toc-depth: 3
header-includes:
  - \usepackage{fancyhdr}
  - \pagestyle{fancy}
  - \fancyhead[L]{\small Sítio Girassol — Revenue Plan}
  - \fancyhead[R]{\small \thepage}
  - \fancyfoot[C]{}
  - \renewcommand{\headrulewidth}{0.4pt}
---
EOF

# Strip any YAML frontmatter from a markdown file
strip_frontmatter() {
  local file="$1"
  awk '
    BEGIN { in_fm=0; fm_done=0 }
    /^---$/ && !fm_done {
      if (in_fm) { fm_done=1; next }
      else { in_fm=1; next }
    }
    !in_fm || fm_done { print }
  ' "$file"
}

# Build combined markdown
COMBINED="$TMPDIR/combined.md"
> "$COMBINED"

# --- Part I: Project Overview ---
echo '\part*{Part I: Project Overview}' >> "$COMBINED"
echo '\addcontentsline{toc}{part}{Part I: Project Overview}' >> "$COMBINED"
echo "" >> "$COMBINED"

echo "# Project Definition" >> "$COMBINED"
echo "" >> "$COMBINED"
strip_frontmatter "$DIR/PROJECT.md" | sed 's/^# /## /' >> "$COMBINED"
echo "" >> "$COMBINED"
echo '\newpage' >> "$COMBINED"
echo "" >> "$COMBINED"

echo "# Project State" >> "$COMBINED"
echo "" >> "$COMBINED"
strip_frontmatter "$DIR/STATE.md" | sed 's/^# /## /' >> "$COMBINED"
echo "" >> "$COMBINED"
echo '\newpage' >> "$COMBINED"
echo "" >> "$COMBINED"

echo "# Requirements" >> "$COMBINED"
echo "" >> "$COMBINED"
strip_frontmatter "$DIR/REQUIREMENTS.md" | sed 's/^# /## /' >> "$COMBINED"
echo "" >> "$COMBINED"
echo '\newpage' >> "$COMBINED"
echo "" >> "$COMBINED"

echo "# Roadmap" >> "$COMBINED"
echo "" >> "$COMBINED"
strip_frontmatter "$DIR/ROADMAP.md" | sed 's/^# /## /' >> "$COMBINED"
echo "" >> "$COMBINED"

# --- Part II: Research ---
echo '\newpage' >> "$COMBINED"
echo '\part*{Part II: Research}' >> "$COMBINED"
echo '\addcontentsline{toc}{part}{Part II: Research}' >> "$COMBINED"
echo "" >> "$COMBINED"

echo "# Research Summary" >> "$COMBINED"
echo "" >> "$COMBINED"
strip_frontmatter "$DIR/research/SUMMARY.md" | sed 's/^# /## /' >> "$COMBINED"
echo "" >> "$COMBINED"
echo '\newpage' >> "$COMBINED"
echo "" >> "$COMBINED"

echo "# Architecture Patterns" >> "$COMBINED"
echo "" >> "$COMBINED"
strip_frontmatter "$DIR/research/ARCHITECTURE.md" | sed 's/^# /## /' >> "$COMBINED"
echo "" >> "$COMBINED"
echo '\newpage' >> "$COMBINED"
echo "" >> "$COMBINED"

echo "# Feature Landscape" >> "$COMBINED"
echo "" >> "$COMBINED"
strip_frontmatter "$DIR/research/FEATURES.md" | sed 's/^# /## /' >> "$COMBINED"
echo "" >> "$COMBINED"
echo '\newpage' >> "$COMBINED"
echo "" >> "$COMBINED"

echo "# Technology Stack" >> "$COMBINED"
echo "" >> "$COMBINED"
strip_frontmatter "$DIR/research/STACK.md" | sed 's/^# /## /' >> "$COMBINED"
echo "" >> "$COMBINED"
echo '\newpage' >> "$COMBINED"
echo "" >> "$COMBINED"

echo "# Domain Pitfalls" >> "$COMBINED"
echo "" >> "$COMBINED"
strip_frontmatter "$DIR/research/PITFALLS.md" | sed 's/^# /## /' >> "$COMBINED"

echo "Generating PDF..."
pandoc "$TMPDIR/meta.yaml" "$COMBINED" \
  -o "$OUT" \
  --pdf-engine=xelatex \
  --syntax-highlighting=tango \
  -V documentclass=report \
  -V classoption=oneside \
  --number-sections \
  2>&1

echo "Done: $OUT"
