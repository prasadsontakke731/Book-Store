import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./routes/bookRoutes.js"
import userRoute from "./routes/userRoutes.js"
// import cors from "cors"


const app = express()
dotenv.config()
app.use(express.json())
// app.use(cors)
const PORT = process.env.PORT || 8090
const MONGODB_URI = process.env.MONGO_URI
//connect to mongoDB
try {
    mongoose.connect(MONGODB_URI)
    console.log("Connected to DB");

} catch (error) {
    console.log("Error:", error);

}

//defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () => {
    console.log(`server is running on Port:${PORT}`);

})