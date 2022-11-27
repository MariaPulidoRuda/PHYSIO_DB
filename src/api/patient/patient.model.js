const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    age: { type: Number },
    weight: { type: Number },
    height: { type: Number },
    quotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "quotes" }],
    image: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("patients", patientSchema);
