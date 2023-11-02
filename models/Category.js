import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [2, "Must be at least 2 characters"],
      maxlength: [32, "Must be at least 32 characters"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category =
  mongoose.models.category || mongoose.model("Category", categorySchema);

export default Category;
