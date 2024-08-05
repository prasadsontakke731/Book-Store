import mongoose from "mongoose";
const schema = mongoose.Schema
const bookSchema = new schema({
    title: String,
    auther: String,
    price: Number,
    category: String,
    image: String,

})

const Book = mongoose.model("Books", bookSchema)
export default Book