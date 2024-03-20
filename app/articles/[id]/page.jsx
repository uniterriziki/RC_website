import { cache } from "react";

//fast fetching the data from posts, this makes the page change from dynamically rendered (lambda) to SSG at build time
// export async function generateStaticParams() {
//   const response = await fetch();
//   const { posts } = await response.json();

//   return posts.map(({ id }) => id); //return array sample [ "1", "2", "3"]
// }

//manual fetch duplication if fetch is through an ORM
const getPost = cache(async (postId) => {
  const post = await prisma.post.findUnique(postId);
  return post;
});

//DYNAMIC METADATA FOR EACH ARTICLE
export async function generateMetadata() {
  //fetch the article here again. fetch requests is duplicated and executed once only. No effect on performances
  return {
    title: article.title,
    description: article.body,
    // openGraph: {
    //   images: [
    //     {
    //       url: Post.imageurl, //samples imageurl
    //     },
    //   ],
    // },
  };
}

//Fetch post data from here
async function getArticle(id) {
  const res = await fetch(`http://localhost:4000/articles` + id, {
    next: {
      revalidate: 300, //number of seconds to refresh where 0 means opt out of caching
    },
  });

  return res.json();
}

//The post function takes in an Id as a param, it is async to allow code above fetch data
export default async function Post({ params }) {
  const article = await getArticle(params.id);
  return (
    <main>
      <div>
        <p>{id}</p>
      </div>
    </main>
  );
}
