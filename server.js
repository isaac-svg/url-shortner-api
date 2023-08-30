import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import  express  from 'express';
import startDB from './DB/connection.js';
import  createRoute from "./routes/gen-url.js"
const app = express();
const port = 3000;


app.use(cors({origin:"*"}))
app.use(express.json())
app.use("/",createRoute)
app.get("/",async (req, res)=>{

  res.send(`<h1> Welcome </h1>`)
})
app.listen(port, () => {
  startDB()
  return console.log(`Express is listening at http://localhost:${port}`);
});