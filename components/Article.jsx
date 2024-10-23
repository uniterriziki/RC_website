import Link from 'next/link';
import Image from 'next/image';
import { articles } from 'lib/article';

export const Article = ({ id, title, body, image, author, date }) => {
  // Create a blurb by truncating the body for display
  const blurb = body.length > 100 ? `${body.slice(0, 100)}...` : body;

  return (
    <div className="article my-5 p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105">
      <Link href={`/articles/${id}`}>
        <h2 className="text-2xl font-bold hover:text-blue-500 transition-colors">
          {title}
        </h2>
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="rounded mt-2"
        />
        <p className="mt-2 text-gray-700">{blurb}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="badge bg-blue-200 text-blue-800 py-1 px-2 rounded-full text-xs font-semibold">
            {author}
          </span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
      </Link>
    </div>
  );
};


  


