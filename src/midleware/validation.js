import {check, validationResult } from "express-validator"
import ErrorMessage from "../utils/errorMessage"
class Validator{
 
    static async validationRules(req,res,next){
        const error = validationResult(req)
        
        if(!error===error.isEmpty()){
          const message= error.array().map(err =>err.msg)
          return ErrorMessage(res,403,message)
        }
      else{
        return next()
      }  
    }

    static userAcountRule(){
        return [
            check("names","please name must be in upper case").isUppercase(),
            check("email","please email must be containing @gmail.com").isEmail(),
            check("password","password is strong password").isStrongPassword()
        ]
    }
    

}
export default Validator