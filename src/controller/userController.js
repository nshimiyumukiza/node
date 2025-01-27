import User from "../modle/user"
import ErrorMessage from "../utils/errorMessage"
import SuccesseMessage from "../utils/successMessage"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import TokenResponse from "../utils/tokenResponse"

class UserController{
   static async Sigup(req,res){
    const {names,email,password,confrimPassword,role} = req.body

    if(req.body.password !== req.body.confrimPassword){
        return ErrorMessage(res,403,"please you password and confrim password not match")
    }

    const hashPassword = bcrypt.hashSync(req.body.password,10)

     const user = await User.create({names,email,password:hashPassword,confrimPassword,role})
     if(!user){
        return ErrorMessage(res,403,"User not created")
     }else{
        const {confrimPassword,...dataOfUser}=user.toObject()
        return SuccesseMessage(res,201,"User successfuly created",dataOfUser)
       
     }
   }

   static async Login(req,res){
     const {email,password}=req.body
       
     const user = await User.findOne({email})
      if(!user){
        return ErrorMessage(res,401,'Invalid email ')
      }else{
        const comparePassword = bcrypt.compareSync(password,user.password)
        if(!comparePassword){
          return ErrorMessage(res,401,'Invalid  password')
        }else{
          const token = jwt.sign({user:user},process.env.SCRETKEY,{expiresIn:"1d"})
          return TokenResponse(res,201,"Login successfuly",token)
        }
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

   static async getUserById(req,res){
      const id = req.params.id
      const user = await User.findById(id)
      if(!user){
        return ErrorMessage(res,403,"user not found")
      }else{
        return SuccesseMessage(res,200, `User on this id ${id} successfuly retrived`,user)
      }
   } 

   static async deleteUserById(req,res){
    const id = req.params.id
    const user = await User.findByIdAndDelete(id)
    if(!user){
      return ErrorMessage(res,403,"user not found")
    }else{
      return SuccesseMessage(res,200, `User on this id ${id} successfuly deleted`)
    }
 } 

}
export default UserController