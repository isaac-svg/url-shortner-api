import UrlData from "../models/URL.js"


const redirectClient = async (req, res)=>{
    const {shortcode} = req.params

try {
    const isPresent = await UrlData.findOne({urlCode:shortcode})

if (isPresent.shortUrl)
{
   return res.redirect(isPresent.originalUrl);
}
else {
  return  res.status(404).json({payload:"Incorrect url", success:false})
}
} catch (error) {
    console.log(error.message)
}

}


export default redirectClient