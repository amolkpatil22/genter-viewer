const express=require('express')
const app=express()
const connection=require('./db')
require('dotenv').config();
const port = process.env.PORT
const cors=require("cors")
 app.use(cors)
 app.use(express.json())
 app.get('/',(req,res)=>{
    res.status(200).send("Helllo this is home page")
})
 app.listen(port,async()=>{
   try{
     await connection
    console.log("DB is connected")
    console.log(`App is running at port ${port}` )
   } catch(err){
       console.log(err)
   }
 })