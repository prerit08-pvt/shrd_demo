// Route for admin to verify payment
router.post('/verify-payment', async (req, res) => {
    const { orderId, verified } = req.body;
  
    try {
      // Update the order payment status to "Verified" or "Failed"
      const updatedOrder = await Order.findByIdAndUpdate(
        orderId,
        {
          paymentStatus: verified ? 'Verified' : 'Failed'
        },
        { new: true }
      );
  
      if (!updatedOrder) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      res.status(200).json({ message: `Payment ${verified ? 'verified' : 'failed'}`, order: updatedOrder });
    } catch (error) {
      res.status(500).json({ error: 'Error updating payment status' });
    }
  });
  