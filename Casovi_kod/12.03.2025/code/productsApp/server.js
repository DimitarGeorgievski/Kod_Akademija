import express from "express";
import router from "./routes/products.routes.js";

const app = express();

app.use(express.json()); // sluzi za vrakanje na json podatoci samo
const port = process.env.port || 3000;
const host = process.env.host || "0.0.0.0";

app.use("/api/products", router);
app.listen(port, host, () => {
    console.log(`Server is listening on port ${port}`);
})