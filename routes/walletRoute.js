const express = require("express");
const router = express.Router();
const { upload } = require("../utils/db");
const { setUpWallet , creditAndDebit , getWalletDetails ,getWalletTransaction } = require("../controller/walletController.js");




router.route("/setup").post(setUpWallet);
router.route("/transact/:walletId").post(creditAndDebit);
router.route("/transactions").get(getWalletTransaction);
router.route("/wallet/:walletId").get(getWalletDetails);




module.exports = router;
