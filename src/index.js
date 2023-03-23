const express = require('express');
const app = express();
const morgan = require('morgan');
require("dotenv").config();


app.set("trust proxy", 1);
// CORS
const cors = require("cors");
const FRONTEND_URL = process.env.ORIGIN || "http://localhost:3000";

  // controls a very specific header to pass headers from the frontend
  app.use(
    cors({
      credentials: true,
      origin: [FRONTEND_URL]
    })
  );

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/phones", require('./phones'));


const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})

module.exports = app