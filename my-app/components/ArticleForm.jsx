"use client";

//useRouter. The useRouter hook allows you to programmatically change routes inside Client Components.
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ArticleForm = () => {
  //After creating an article, redirect user to the home page
  const router = useRouter();
  //handle change of the form input fields here: 1. get value and name of what we want to change, then update the name with the new value
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  //handle the submission of the form input here
  const handleSubmit = async (e) => {
    //prevent the form from doing its normal behavior at first
    e.preventDefault();
    //the response awaits actions from the api route.js
    const res = await fetch("srcappapiArticles", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });
    // //catch error in posting a new article
    // if (!res.ok) {
    //   throw new Error("Failed to create Article");
    // }
    //if no error, refresh the page and reroute to home
    
    router.refresh();
    router.push("/");
  };

  //initialize how the form looks, to be used in the state function
  const startingArticleData = {
    title: "",
    description: "",
    body: "",
  };

  //Make a state managed form to pick any changes by the user
  const [formData, setFormData] = useState(startingArticleData);
  return (
    <div>
      <h3 className="text-3xl text-blue-800 justify-center flex">
        Write an article
      </h3>
      <div className="pt-4 flex justify-center">
        <form className="flex flex-col" method="post" onSubmit={handleSubmit}>
          <label className="p-0">Title</label>
          <input
            className="rounded bg-slate-500"
            id="title"
            name="title"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.title}
          />
          <label className="p-0">Description</label>
          <textarea
            className="rounded bg-slate-500"
            id="description"
            name="description"
            onChange={handleChange}
            required={true}
            value={formData.description}
            rows="5"
          />
          <input
            type="submit"
            value="Create Article"
            className="rounded hover:bg-red-200 hover:shadow-2xl"
          />
        </form>
      </div>
    </div>
  );
};

export default ArticleForm;
