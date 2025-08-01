const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require("bcrypt");


const  userSchema = new Schema({
    username: { 
        type: String,
        required: true,
        unique: true 
    },

    email:{ 
        type: String,
        required: true, 
        unique: true 
    },
    
    password: { 
        type: String, 
        required: true 
    },
});

 userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
 try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('User', userSchema);