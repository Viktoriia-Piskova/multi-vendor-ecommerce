const { Schema, model } = require("mongoose");

const sellerToCustomerSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    friends: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = model("seller_customers", sellerToCustomerSchema);
