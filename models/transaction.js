const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    transactionID: { 
        type: String, 
        required: true 
    },
    walletId: { 
        type: String, 
        required: true 
    },
    amount: { 
        type: Number,
         required: true
         },
    balance: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String 
    },
    date: {
         type: Date,
         default: Date.now
         },
    type: {
        type: String,
        enum: ['CREDIT', 'DEBIT'],
        required: true
    }
});



module.exports = mongoose.model("Transaction", transactionSchema);