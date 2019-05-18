const mongoose = require("mongoose");
const generateToken = require("../helpers/generateToken");
const { Schema } = mongoose;

const vendorSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    vendorId: {
      type: String,
      default: generateToken(16)
    },
    password: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true,
      unique: true
    },
    orders: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Order"
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Vendor", vendorSchema);
