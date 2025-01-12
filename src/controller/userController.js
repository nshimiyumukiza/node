import User from "../modle/user"
import ErrorMessage from "../utils/errorMessage"
import SuccesseMessage from "../utils/successMessage"
import bcrypt from "bcrypt"

class UserController{
   static async Sigup(req,res){
    const {names,email,password,confrimPassword} = req.body

    if(req.body.password !== req.body.confrimPassword){
        return ErrorMessage(res,403,"please you password and confrim password not match")
    }

    const hashPassword = bcrypt.hashSync(req.body.password,10)

     const user = await User.create({names,email,password:hashPassword,confrimPassword})
     if(!user){
        return ErrorMessage(res,403,"User not created")
     }else{
        const {confrimPassword,...dataOfUser}=user.toObject()
        return SuccesseMessage(res,201,"User successfuly created",dataOfUser)
       
     }
   }

   static async getUsers(req,res){
       const users = await User.find()

       if(!users){
        return ErrorMessage(res,403,"User not found")
       }else{
        return SuccesseMessage(res,200,`All  ${users.length} User successfuly retrived`,users)

       }
   }

   static async deleteUser(req,res){
    const users = await User.deleteMany()
    if(!users){
        return ErrorMessage(res,403,"User not found") 
    }else{
        return SuccesseMessage(res,201,`All ${users.length} has been successfuly deleted`)
    }
   }

}
export default UserController