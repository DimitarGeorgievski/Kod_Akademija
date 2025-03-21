import express from "express";
import dotenv from "dotenv"; // environment za da gi vcitame variblite
import { connectDB} from "./config/db.js"
import movieRouter from "./routes/movies.routes.js";
import userRouter from "./routes/user.routes.js";

//Load environment variables
dotenv.config();

const app = express();
const PORT = 3000; // nemora sekogas da se napisi hostot bidejki local host e sekogas default value

app.use(express.json()) // za da vraka sekogas json

//Routes
app.use("/api/movies", movieRouter);
app.use("/api/users", userRouter);

app.get("/health", (req,res) => { // na realni proekti najcesto ova se praj za da se proveri dali servero dobro raboti
    res.json({status: "OK"});
})
// connect to mongodb and start server
async function startServer() {
    try {
        await connectDB();
        app.listen(PORT, () =>{
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    } catch (error) {
        console.error("Failed to start server", error);
        process.exit();
    }
}
startServer();