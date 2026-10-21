import rateLimit from "../config/upstash.js";


async function rateLimiter(req,res,next){
    try {
        const {success} = await rateLimit.limit("limit-key");
        if(!success){
            return res.status(429).json({message:"Too many requests"})
        }
        next();
    } catch (error) {
        console.log("Error: ",error);
        next(error);
    }
    
}

export default rateLimiter;