const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
    walletId: { 
        type: String, 
        required: true 
    },
    balance: { 
        type: Number,
         required: true 
        },
    transactionID: { 
        type: String, 
        required: true 
    },
    name: { 
        type: String,
         required: true 
        },
    date: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model("Wallet", walletSchema);