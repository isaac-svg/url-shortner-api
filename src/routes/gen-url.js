import  express  from "express"
import  createUrl  from  "../controllers/create-url.js"
import  validateUrl  from  "../middlewares/valid-url.js"
import redirectClient from "../controllers/redirect.js"


const router = express.Router()


router.post("/stly", validateUrl,createUrl)
router.get("/:shortcode",redirectClient)




export default  router
