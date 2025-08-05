"use client";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "./BlogList";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="group relative bg-white/[0.02] border border-white/[0.05] rounded-2xl overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Featured Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-red-500/90 to-purple-600/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center space-x-4">
              <span>{post.author}</span>
              <span>•</span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <span className="bg-white/[0.05] px-2 py-1 rounded-full text-xs">
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500 leading-tight line-clamp-2">
              {post.title}
            </h3>
          </Link>

          {/* Excerpt */}
          <p className="text-gray-300 leading-relaxed line-clamp-3 text-sm">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-white/[0.05] text-gray-400 text-xs rounded-md hover:bg-white/[0.1] hover:text-gray-300 transition-colors duration-300"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-2 py-1 text-gray-500 text-xs">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>

          {/* Read More Link */}
          <div className="pt-4 border-t border-white/[0.05]">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-gray-300 hover:text-white text-sm font-medium group/link transition-colors duration-300"
            >
              Read full article
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}