const express=require("express")
const {UserModel}=require('../Model/user.model')
const userRouter=express.Router()
userRouter.post("/command",async(req,res)=>{
    try{
       
    }
    catch(err){
           res.status(400).send({"err":err})
    }
})