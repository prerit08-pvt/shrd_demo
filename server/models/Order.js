const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  totalAmount: { type: Number, required: true },
  paymentType: { type: String, enum: ['full', 'advance'], required: true }, // 'full' or 'advance'
  paymentStatus: { type: String, default: 'Pending' }, // 'Pending', 'Verified', 'Failed'
  transactionId: { type: String, required: false }, // UPI transaction ID
  paymentAmount: { type: Number, required: false }, // Amount paid (60% or 100%)
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
