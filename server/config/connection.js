
const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://ceewizzhuhwin:rKSWtbGsIzff9G0f@amakonstore.mjb85gs.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  

});

module.exports = mongoose.connection;
