const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    response:String
},{
    versionKey:false
})

const UserModel=mongoose.model("GenUser",UserSchema)

module.exports={
    UserModel
}