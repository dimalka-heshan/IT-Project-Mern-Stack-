const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8071;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;
process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';

mongoose.connect(URL, {

    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection success!!!");
})

// @import routes
const customerRouter = require("./routes/DH_routes/customer")


// report generate routes


// rotues
app.use("/customer",customerRouter);


//@import NT Routes
const adminRouter = require("./routes/NT_routes/admin");
app.use("/admin",adminRouter);
const discountRouter =require("./routes/NT_routes/discount");
app.use("/discount",discountRouter);





app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})

