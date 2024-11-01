
const Order = require('../models/Payment');


const confirmPayment = async (req, res) => {
    const { orderId, transactionId, paymentType } = req.body;
  
    try {
      // Update the order with the transaction ID and payment status
      const paymentAmount = paymentType === 'full' ? 100 : 60; // 100% or 60%
  
      const updatedOrder = await Order.findByIdAndUpdate(
        orderId,
        {
            transactionId,
            amount,
            userId,
            status: 'Pending Verification'
        },
        { new: true }
      );
  
      if (!updatedOrder) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      res.status(200).json({ message: 'Payment confirmation received', order: updatedOrder });
    } catch (error) {
      res.status(500).json({ error: 'Error confirming payment' });
    }
  }
module.exports = {confirmPayment,};