import mongoose, { Schema } from "mongoose";

//connect to our database through env variable
mongoose.connect(process.env.MONGODB_URL);
mongoose.Promise = global.Promise;

//ARTICLE Schema which is the database parameters
const articleSchema = new Schema(
  {
    title: String,
    description: String,
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
  },
  {
    timestamps: true,
  }
);

//declare the article model/table and if it doesn't exist, pick it a new
const Article =
  mongoose.models.Article || mongoose.model("Article", articleSchema);

export default Article;
