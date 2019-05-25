const mongoose = require("mongoose");
const generateToken = require("../helpers/generateRandomToken");
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
      index: true,
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
        type: String,
        ref: "Order"
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Vendor", vendorSchema);
