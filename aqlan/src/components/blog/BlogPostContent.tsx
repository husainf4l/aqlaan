"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "./BlogList";

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const processContent = (content: string) => {
    const lines = content.trim().split('\n');
    const processedContent: React.ReactElement[] = [];
    let inCodeBlock = false;
    let codeBlockContent = '';
    let codeBlockLanguage = '';

    lines.forEach((line, index) => {
      // Handle code blocks
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          // Starting code block
          inCodeBlock = true;
          codeBlockLanguage = line.replace('```', '');
          codeBlockContent = '';
        } else {
          // Ending code block
          inCodeBlock = false;
          processedContent.push(
            <div key={`code-${index}`} className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-x-auto my-6">
              <div className="flex items-center justify-between px-4 py-2 bg-gray-800/50 border-b border-gray-700">
                <span className="text-sm text-gray-400">{codeBlockLanguage || 'Code'}</span>
                <button className="text-gray-400 hover:text-white text-sm">Copy</button>
              </div>
              <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                <code>{codeBlockContent}</code>
              </pre>
            </div>
          );
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent += line + '\n';
        return;
      }

      // Handle headings
      if (line.startsWith('# ')) {
        processedContent.push(
          <h1 key={index} className="text-4xl font-bold text-white mb-6 mt-8 first:mt-0">
            {line.replace('# ', '')}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        processedContent.push(
          <h2 key={index} className="text-3xl font-semibold text-white mb-4 mt-8">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        processedContent.push(
          <h3 key={index} className="text-2xl font-semibold text-white mb-4 mt-6">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('- ')) {
        // Handle bullet points
        const listItem = line.replace('- ', '');
        const isStrong = listItem.includes('**');
        
        processedContent.push(
          <li key={index} className="text-gray-300 mb-2 ml-6">
            {isStrong ? (
              <span dangerouslySetInnerHTML={{ 
                __html: listItem.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') 
              }} />
            ) : (
              listItem
            )}
          </li>
        );
      } else if (line.trim() === '') {
        // Empty line
        processedContent.push(<div key={index} className="h-4" />);
      } else {
        // Regular paragraph
        const processedLine = line
          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
          .replace(/\*(.*?)\*/g, '<em class="text-gray-200">$1</em>')
          .replace(/`(.*?)`/g, '<code class="bg-gray-800 px-2 py-1 rounded text-red-400 text-sm">$1</code>');

        processedContent.push(
          <p key={index} className="text-gray-300 leading-relaxed mb-4" 
             dangerouslySetInnerHTML={{ __html: processedLine }} />
        );
      }
    });

    return processedContent;
  };

  return (
    <article className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>/</li>
                <li className="text-gray-300">{post.category}</li>
              </ol>
            </nav>

            {/* Category Badge */}
            <div className="mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-red-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-white">{post.author}</p>
                  <p className="text-sm text-gray-400">AI Specialist</p>
                </div>
              </div>
              <div className="text-sm">
                <p>{formatDate(post.publishedAt)}</p>
                <p className="text-gray-400">{post.readTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          {processContent(post.content)}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 text-sm rounded-full hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
              <span>Twitter</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Copy Link</span>
            </button>
          </div>
        </div>

        {/* Related Articles CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-red-500/10 to-purple-600/10 border border-white/10 rounded-2xl">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Explore More AI Insights
          </h3>
          <p className="text-gray-300 mb-6">
            Stay updated with the latest trends in enterprise AI and discover how AQLAAN can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors text-center"
            >
              Read More Articles
            </Link>
            <Link
              href="/aqlanai"
              className="px-6 py-3 border border-white/20 text-white hover:bg-white/5 rounded-xl transition-colors text-center"
            >
              Ask AQLAAN AI
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}