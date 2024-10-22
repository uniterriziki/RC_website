import { useEffect, useState } from "react";

// Function to fetch article data from local files
const fetchArticle = async (id) => {
  try {
    const article = await import(`../articles/${id}.json`);
    return article.default;
  } catch (error) {
    console.error("Failed to load article:", error);
    return null;
  }
};

export default function ArticlePage({ params }) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const data = await fetchArticle(params.id);
        setArticle(data);
      } catch (error) {
        console.error("Failed to fetch article:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [params.id]);

  if (loading) {
    return <ArticleSkeleton />;
  }

  if (!article) {
    return <div className="text-center py-10">Article not found</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="mb-8 p-6 bg-white shadow rounded">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
          <p>
            By {article.authors.join(", ")} | Published on{" "}
            {article.publishedDate}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Abstract</h2>
          <p className="mb-4 text-muted-foreground">{article.abstract}</p>
          <div className="h-[300px] overflow-y-auto rounded-md border p-4">
            <h2 className="text-xl font-semibold mb-2">Content</h2>
            <p className="whitespace-pre-wrap">{article.content}</p>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white shadow rounded">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">References</h2>
        </div>
        <div>
          <ul className="list-disc pl-5 space-y-2">
            {article.references.map((ref, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                {ref}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ArticleSkeleton() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="mb-8 p-6 bg-white shadow rounded">
        <div className="mb-4">
          <div className="h-8 w-3/4 bg-gray-300 mb-2" />
          <div className="h-4 w-1/2 bg-gray-300" />
        </div>
        <div>
          <div className="h-4 w-full bg-gray-300 mb-2" />
          <div className="h-4 w-full bg-gray-300 mb-2" />
          <div className="h-4 w-3/4 bg-gray-300" />
          <div className="mt-4 h-[300px] w-full rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="p-6 bg-white shadow rounded">
        <div className="mb-4">
          <div className="h-6 w-1/4 bg-gray-300" />
        </div>
        <div>
          <div className="h-4 w-full bg-gray-300 mb-2" />
          <div className="h-4 w-full bg-gray-300 mb-2" />
          <div className="h-4 w-3/4 bg-gray-300" />
        </div>
      </div>
    </div>
  );
}
