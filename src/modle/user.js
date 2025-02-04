

import mongoose from "mongoose";

const userSchemas = new mongoose.Schema({
   names:{
     type:String,
   },
   email:{
    type:String,
  },
  password:{
    type:String,
},
 confrimPassword:{
    type:String,
},
role:{
  type:String,
  enum:["user","admin"],
  default:"user"
},
})
const User = mongoose.model("User",userSchemas)
export default User