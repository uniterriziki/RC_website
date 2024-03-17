'use client'
//use client in order to actually reset the form when used

const ArticleForm = () => {
  return (
    <div>
      <form action={async formData={
        await addArticle(formData)
      }}>
        <div>
          <input
            required
            type="text"
            name="articleTitle"
            placeholder="Write your title here"
            className="border border-red-500"
          />
          <input
            required
            type="text"
            name="articleBody"
            placeholder="Write your article here"
            className="border border-red-500"
          />
          <button type="submit">Submit Article</button>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
