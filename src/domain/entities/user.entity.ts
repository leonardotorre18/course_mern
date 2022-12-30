import mongoose from "mongoose";

export const userEntity = () => {
  let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
  },{
    versionKey: false
  });
  return mongoose.models.users || mongoose.model('users', userSchema);
}