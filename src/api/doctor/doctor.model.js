const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true},
    speciality: { type: String, trim: true},
    image: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("doctors", doctorSchema);