const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    name: [
      { type: mongoose.Schema.Types.ObjectId, ref: "patients", required: true },
    ],
    quotes: { type: String },
    reason: { type: String },
    doctor: [
      { type: mongoose.Schema.Types.ObjectId, ref: "doctors", required: true },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("quotes", quoteSchema);
