"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

export type LinkPreviewData = {
  url: string;
  title: string;
  description: string;
  image: string | null;
  siteName: string | null;
};

type Props = {
  placeholder?: string;
  className?: string;
};

const URL_REGEX = /^https?:\/\/[^\s]+$/;

export default function LinkPreview({
  placeholder = "Paste a link to see a preview...",
  className = "",
}: Props) {
  const [input, setInput] = useState("");
  const [preview, setPreview] = useState<LinkPreviewData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPreview = useCallback(async (url: string) => {
    setLoading(true);
    setError(null);
    setPreview(null);
    try {
      const res = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "Failed to fetch preview");
      }
      setPreview(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch preview");
    } finally {
      setLoading(false);
    }
  }, []);

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const text = e.clipboardData.getData("text").trim();
    if (URL_REGEX.test(text)) {
      e.preventDefault();
      setInput(text);
      fetchPreview(text);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setInput(v);
    setError(null);
    if (!v) setPreview(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() && URL_REGEX.test(input.trim())) {
      fetchPreview(input.trim());
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <input
        type="url"
        value={input}
        onChange={handleChange}
        onPaste={handlePaste}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent-gold/50 text-white placeholder-white/40"
      />

      {loading && (
        <div className="bg-[#1A2620] border border-white/10 rounded-xl p-6 flex items-center gap-4">
          <div className="w-16 h-16 bg-white/5 rounded-lg animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse" />
            <div className="h-3 bg-white/5 rounded w-1/2 animate-pulse" />
          </div>
        </div>
      )}

      {error && !loading && (
        <p className="text-sm text-red-400 flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">error</span>
          {error}
        </p>
      )}

      {preview && !loading && (
        <a
          href={preview.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative bg-[#1A2620] border border-white/10 rounded-xl overflow-hidden hover:border-accent-gold/30 transition-all group"
        >
          {preview.image && (
            <div className="relative w-full aspect-video bg-white/5">
              <Image
                src={preview.image}
                alt=""
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 600px"
                unoptimized
              />
            </div>
          )}
          <div className="relative p-4">
            {preview.siteName && (
              <p className="text-xs uppercase tracking-widest text-accent-gold mb-1">
                {preview.siteName}
              </p>
            )}
            <h3 className="font-bold text-white group-hover:text-accent-gold transition-colors line-clamp-2">
              {preview.title}
            </h3>
            {preview.description && (
              <p className="text-sm text-white/70 mt-1 line-clamp-2">
                {preview.description}
              </p>
            )}
            <p className="text-xs text-white/40 mt-2 truncate">{preview.url}</p>
            <span className="material-symbols-outlined absolute right-4 top-4 text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity">
              open_in_new
            </span>
          </div>
        </a>
      )}
    </div>
  );
}
