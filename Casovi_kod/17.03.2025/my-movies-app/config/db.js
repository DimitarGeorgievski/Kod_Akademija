import { MongoClient } from "mongodb";
import dotenv from "dotenv";

// Load environment variables
dotenv.config(); // bez ova ne mozi da se pristapat environment variablite
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_CLUSTER, MONGO_DATABASE } =
  process.env;
// validate required environment variables
const requiredEnvVariables = [
  "MONGO_USERNAME",
  "MONGO_PASSWORD",
  "MONGO_CLUSTER",
  "MONGO_DATABASE",
];
const missingEnvVars = requiredEnvVariables.filter(
  (envVar) => !process.env[envVar]
);
if (missingEnvVars.length > 0) {
  console.error(
    "missing required environment variables:",
    missingEnvVars.join(",")
  );
  process.exit();
}

const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`
const client = new MongoClient(MONGO_URI);

// database connection
let db = null;
export async function connectDB(){
    try {
        // connect to MongoDB
        const connection = await client.connect();
        // assigning the db
        db = connection.db();
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("MongoDB connection error,", error);
    }
}
export function getDB(){
    if(!db){
        console.error("Database not initialized:" ,error)
    }
    return db;
}