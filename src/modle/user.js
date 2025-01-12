

import mongoose from "mongoose";

const userSchemas = new mongoose.Schema({
   names:{
     type:String,
     required:true
   },
   email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
},
 confrimPassword:{
    type:String,
    required:true
},
})
const User = mongoose.model("User",userSchemas)
export default User