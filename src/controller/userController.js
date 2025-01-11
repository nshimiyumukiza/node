import User from "../modle/user"

class UserController{
   static async Sigup(req,res){
     const user = await User.create(req.body)
     if(!user){
        return res.status(403).json({
           message:"User not created"
        })
     }else{
        return res.status(401).json({
            message:"User successfuly created",
            data:user
        })
     }
   }

   static async getUsers(req,res){
       const users = await User.find()

       if(!users){
        return res.status(403).json({
            message:"User not found"
         })
       }else{
        return res.status(200).json({
            message:"User successfulydisplayed",
            data:users
        })
       }
   }

}
export default UserController