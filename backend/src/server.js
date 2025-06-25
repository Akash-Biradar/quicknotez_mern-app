import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import notesRoute from "./routes/notesRoutes.js";
import connectDb from "./config/dbConnection.js";
import rateLimiter from "./middlewares/rateLimiter.js";
import helmet from "helmet";
import path from "path"
const app = express();
dotenv.config();
const port = process.env.PORT || 5001;
const __dirname = path.resolve();

app.use(helmet());


if(process.env.NODE_ENV !== "production"){

  app.use(cors({
    origin:"http://localhost:5173"
  }));
}
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoute);

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get('*' , (req,res) =>{
    res.sendFile(path.join(__dirname, "../frontend" ,"dist" ,"index.html"))
  });
  
}
connectDb().then(() => {
  app.listen(port, () => {
    console.log("server startd on port " + port);
  })
})