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
  const article = await getArticle(params.id)
  return (
    <main>
      <div>
        <p>{id}</p>
      </div>
    </main>
  );
}
