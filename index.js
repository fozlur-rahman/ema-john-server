const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv');
const port = process.env.PORT || 5000;

// middle ware 
app.use(cors())
app.use(express.json());