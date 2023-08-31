import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import  express  from 'express';
import startDB from './src/DB/connection.js';
import  createRoute from "./src/routes/gen-url.js"
const app = express();
const port = process.env.PORT || 3000;


app.use(cors({origin:"*"}))
app.use(express.json())
app.use("/",createRoute)
app.get("/",async (req, res)=>{

  res.send(`<h1> Welcome </h1>`)
})
const start = () =>{
 try {
  startDB()
  app.listen(port, () => {
   
     console.log(`Express is listening at ${port}`);
  });
 } catch (error) {
  console.log(error.message)
 }
}

start()