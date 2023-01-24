const Transaction = require("../models/transaction.js");
const Wallet = require("../models/wallet.js");
const { v4: uuidv4 } = require("uuid");
const CustomError = require("../utils/CustomError");

exports.setUpWallet = async function (req, res, next) {
  const { balances, names } = req.body;

  if (!balances || !names) {
    return next(
      new CustomError("Email, Name and password are required field", 400)
    );
  }

  let dates = new Date();
  let walletIDs = "user_" + Date.now().toString();
  console.log(typeof walletIDs);
  let transactionIDs = uuidv4();

  Wallet.create(
    {
      walletId: walletIDs,
      balance: balances,
      transactionID: transactionIDs,
      name: names,
      date: dates,
    },
    (error, wallet) => {
      if (error) {
        console.log(error);
        new CustomError("Error in creating wallet", 400);
      } else {
        console.log("Wallet created successfully:", wallet);
        res.send({ wallet });
      }
    }
  );
};

exports.creditAndDebit = async function (req, res, next) {
  const { amount, description } = req.body;
  let walletId = req.params.walletId;
  let type = amount > 0 ? "CREDIT" : "DEBIT";

  let wallet = await Wallet.findOne({ walletId: walletId });
  let transactionID = uuidv4();
  let balance = wallet.balance + amount;
  wallet.balance = balance;
  wallet.save();
  let date = Date.now();
  console.log(wallet);
  Transaction.create(
    {
      transactionID: transactionID,
      walletId: walletId,
      amount: amount,
      balance: balance,
      description: description,
      date: date,
      type: type,
    },
    (error, transaction) => {
      if (error) {
        console.log(error);
        new CustomError("Error in creating wallet", 400);
      } else {
        console.log("Transaction successfull : ", transaction);
        res.send({ transaction });
      }
    }
  );
};

exports.getWalletTransaction = async function (req, res, next) {

  let { walletId, skip, limit } = req.query;
    skip = skip ? parseInt(skip) : 0;
    limit = limit ? parseInt(limit) : 10;

    Transaction.find({ walletId: walletId })
        .skip(skip)
        .limit(limit)
        .exec((error, transactions) => {
            if (error) {
                res.send(error);
            } else {
                res.send(transactions);
            }
        });






};

exports.getWalletDetails = async function (req, res, next) {

  let walletId = req.params.walletId;
  let walletDetails = await Wallet.find({ walletId : walletId });

  res.send(walletDetails);


};
