const express = require("express");
const app = express();
const cors = require('cors')
const PORT =3000
const db=require('./database/model')
const userRoutes = require('./routes/route')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/appoinments',userRoutes)

app.listen(PORT, function () {
    console.log("listening on port 3000!");
  });
  