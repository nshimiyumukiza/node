import User from "../modle/user"
import ErrorMessage from "../utils/errorMessage"

class DatorChecker{

    static async userResterIsEmpty(req,res,next){
        const {names,email,password}=req.body

        if(names===""){
            return ErrorMessage(res,404,"Please names is not provided")
        }else if(email === ""){
            return ErrorMessage(res,404,"Please email is not provided")
        }else if(password===""){
            return ErrorMessage(res,404,"Please password is not provided")
        }else{
            return next()
        }
    }

    static async UserExist(req,res,next){
        const email = req.body.email
        const user = await User.findOne({email})
        if(user){
          return ErrorMessage(res,403," Please user already exist")
        }else{
          return next()
        }
    }

}
export default DatorChecker