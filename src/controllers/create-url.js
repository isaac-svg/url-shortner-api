import {nanoid} from "nanoid"
import UrlData from "../models/URL.js"


const createUrl =  async (req ,res)=>{
const {url} = req.body
let resData ;
try {
    const available = await  UrlData.findOneAndUpdate({originalUrl:url},{$inc:{count:1}})
    
    const baseUrl = "https://stly.vercel.app"
    if (available){
        // console.log(available.shortUrl, "SHORT URL");
        resData  = {payload:available.shortUrl, success:true, count:available.count}
        return (res.status(200).json(resData))
    }

    const code = nanoid(6);
// console.log(code,url);
    const newUrl = UrlData({
        urlCode:code,
        originalUrl:url,
        shortUrl:`${baseUrl}/${code}`,
        count:0
    })

    const shortUrl =   await newUrl.save();

    return res.status(200).json({payload:shortUrl.shortUrl, success:true})
    

} catch (error) {
    console.log(error)
}
}


export default createUrl