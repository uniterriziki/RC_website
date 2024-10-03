<div>
    {articles.map((article) => (
      <Article
        key={article.id}
        id={article.id}
        title={article.title}
        body={article.body}
        image={article.image}
        author={article.author}
        date={article.date}
      />
    ))}
  </div>