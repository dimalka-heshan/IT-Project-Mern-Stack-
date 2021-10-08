const mongoose = require('mongoose')



const discountSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: true,
      },

      percentage: {
        type: String,
        required: true,
      },
  
      realprice: {
        type: Number,
        required: true,
      },

      newprice: {
        type: Number,
        required: true,
      },

      startingdate: {
        type: String,
        required: true,
      },
      endingdate: {
        type: String,
        required: true,
      },

});

const discount = mongoose.model("discount",discountSchema);
module.exports = discount;