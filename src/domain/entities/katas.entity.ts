import mongoose from "mongoose";

export const katasEntity = () => {
  let katasSchema = new mongoose.Schema({
    name: String,
    description: String,
    level: Number,
    date: { type: Date, default: Date.now() },
    user: { type: mongoose.Schema.Types.ObjectId, refs: 'Users' },
    valoration: { type: Number, min: 0, max: 5 },
    changes: Number
  },{
    versionKey: false
  });
  return mongoose.models.katas || mongoose.model('katas', katasSchema);
}