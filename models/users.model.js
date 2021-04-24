const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username:{
        type: String,
        unique: "Account already exists for this email",
        required:"Email id is required",
        
        },
    password: {
        type: String,
        required:"Password is required",
        
        },
    email:{
        type:String,
        required:"email is required !"
    },

   
},{
    timestamps: true
});

const User = mongoose.model("User", UserSchema);

module.exports = {User};