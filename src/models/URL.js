
import mongoose from "mongoose"


const urlSchema = new mongoose.Schema({

    urlCode:String,
    originalUrl:String,
    shortUrl:String,
    count:Number,
    date: {
        type:Date,
        default: new Date()
    }
})

const UrlData =  mongoose.model("URL",urlSchema);

export default UrlData;