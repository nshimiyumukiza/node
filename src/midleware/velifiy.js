import ErrorMessage from "../utils/errorMessage"
import jwt from "jsonwebtoken"

const VelifyAccess= (passRole)=>{
    return (req,res,next)=>{
        const token = req.headers["auth-token"]
        if(!token){
            ErrorMessage(res,403,"No token provided")
        }else{
          try {
            const VerfyToken = jwt.verify(token,process.env.SCRETKEY,{expiresIn:"1d"})
            req.user=VerfyToken.user
            if(passRole!== VerfyToken.user.role){
              return  ErrorMessage(res,401,"You don't have access")
            }else{
                return next()
            }
          } catch (error) {
            if(error.name="JsonWebTokenError"){
                return ErrorMessage(res,401,"Invalid token or expired")
            }
          }
        }
    }

}
export default VelifyAccess