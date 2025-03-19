import moongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config(); // bez ova ne mozi da se pristapat environment variablite
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_CLUSTER, MONGO_DATABASE } =
  process.env;

const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`

// database connection
export async function connectDB(){
    try {
       const connection = await moongoose.connect(MONGO_URI);
       console.log(`MongoDb Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error,", error);
        process.exit(1);
    }
}