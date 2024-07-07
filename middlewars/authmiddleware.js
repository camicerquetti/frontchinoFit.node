//ponemos verificaciones de si se armo mal o si se armo bien 
const jwt=require("jsonwebtoken")
const config=require("../config/config")
module.exports=(req,res,next)=>{
const authheader=req.headers["autorization"]

if(!authheader) return res.status(404).send({auth:false,message:"no se proveyo un token"}) 
const token=authheader.split("")[1]

if(!authheader) return res.status(404).send({auth:false,message:"malformed token"}) 
    jwt.verify(token,config.secretKey),(err,decoded)=>{
        if(!err) return res.status(500).send({auth:false,message:"fallo autorizacion token"})
            req.userId=decoded.id
        }

}
