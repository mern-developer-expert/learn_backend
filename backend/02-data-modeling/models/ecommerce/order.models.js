import mongoose from "mongoose";

// (like: which product + how many pieces)
const orderItemSchema = new mongoose.Schema({
  // Which product is being bought
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // connects to your Product model
    required: true,
  },

  // How many of this product
  quantity: {
    type: Number,
    required: true,
    min: [1, "Quantity must be at least 1"], // ← added useful validation
    // default: 0 is usually NOT good for order items
  },
});

// 2. Now the main blueprint for the whole Order
const orderSchema = new mongoose.Schema(
  {
    // Final total price of the entire order
    orderPrice: {
      type: Number,
      required: true,
      min: [0, "Price cannot be negative"],
    },

    // Who placed this order (which user)
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // List of all items in this order (array of the small schema we made above)
    orderItems: [orderItemSchema],

    // Delivery address (you can also make it an object later with pincode, city, etc.)
    address: {
      type: String,
      required: true,
      trim: true,
    },

    // Current status of the order
    status: {
      type: String,
      enum: ["PENDING", "CONFIRMED", "SHIPPED", "DELIVERED", "CANCELLED"],
      default: "PENDING",
    },

    // Optional: you can add payment info later, example:
    paymentMethod: {
      type: String,
      enum: ["COD", "ONLINE"],
      default: "COD",
    },

    isPaid: { type: Boolean, default: false },
  },

  // Auto adds createdAt & updatedAt fields
  { timestamps: true },
);

// Create the model we can use everywhere
export const Order = mongoose.model("Order", orderSchema);
