const express = require('express');
const cors = require('cors'); 
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
const productRoutes = require('./routes/productRoutes'); // Import product routes
const paymentRoutes = require('./routes/paymentRoutes');
const adminRoutes = require('./routes/admin');
require('dotenv').config();
const dbURI = process.env.dbURI;
const PORT = process.env.PORT;

  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.json());

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  app.listen(PORT, () => console.log('Server is running Successfully'));
}).catch((error) => console.error('Error connecting to DB:', error));


  app.use('/api/payments', paymentRoutes);
  app.use('/api/admin', adminRoutes);
  app.use('/api/products', productRoutes);
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
