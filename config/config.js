require('dotenv').config(); 

const PORT = process.env.PORT || 3000;
const NEXMO_KEY = process.env.NEXMO_KEY;
const NEXMO_SECRET = process.env.NEXMO_SECRET;

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: NEXMO_KEY,
  apiSecret: NEXMO_SECRET,
});

module.exports = {
  nexmo,
  PORT
 };