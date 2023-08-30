// check if the original url from the client side is vald 
// and also exists

import dns  from "dns/promises" 

const validateUrl = async (req, res, next)=>{
const {url} = req.body
    let originalURL;
    try {
        originalURL = new URL(url)
        // console.log(originalURL)
        if (!originalURL)
        {
            res.status(400).json({message:"Invalid Url please check", success:false})
        }

     const result =   await dns.lookup(originalURL.hostname)
     if (!result.address)
     {
        res.status(400).json({message:"Address does  not exist"})
     }

      next()
    } catch (error) {
        res.status(400).json({payload:`The url {${url}} is invalid`, success:false})
    }


}


export default validateUrl