import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
const __dirname = path.resolve();

//import routes
import { prodRouter } from "./routes/products.routes.js";
// server initialization
const app = express();

//middlewares
app.use(cors());
dotenv.config();
app.use(express.static("./public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api", prodRouter);

// port configuration

const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log(`The server is running in http://localhost:${port}`);
});
