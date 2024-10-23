"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  article1,
  article2,
  article3,
  article4,
} from "../../../lib/article/index";
import { Loader2 } from "lucide-react";

const articlesMap = {
  1: article1,
  2: article2,
  3: article3,
  4: article4,
};

export default function ArticlePage() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    console.log(router.query); // Debug line
    if (router.query?.id) {
      const id = parseInt(router.query.id, 10); // Convert to integer
      const data = articlesMap[id];
      if (data) {
        setArticle(data);
      }
      setLoading(false);
    }
  }, [router.query]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Article Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            We couldn't find the article you're looking for.
          </p>
          <button
            onClick={() => router.push("/articles")}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Return to Articles
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Article Header */}
          <div className="p-6 border-b">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4">
              <div className="flex items-center">
                <span className="font-medium">Authors:</span>
                <span className="ml-2">{article.authors.join(", ")}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium">Published:</span>
                <time className="ml-2">{article.publishedDate}</time>
              </div>
            </div>
          </div>

          {/* Abstract Section */}
          <div className="p-6 bg-gray-50 border-b">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Abstract
            </h2>
            <p className="text-gray-700 leading-relaxed">{article.abstract}</p>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Full Article
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {article.content}
              </p>
            </div>
          </div>

          {/* Article Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t flex justify-between items-center">
            <button
              onClick={() => router.push("/articles")}
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              ← Back to Articles
            </button>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Print Article
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
