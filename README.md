Perform npm i when you have successfully cloned the project.
Create your own .env file consisting of PORT and DB_URL.
Enter npm start to start the server.

API's -

1.Create Account -> /setup
  Endpoint - https://assignment-production-0a62.up.railway.app/eBank/v1/setup
  Request - POST
  Sample payload -
      {
    "balances": 6000,
     "names":"Shubham Pawar" 
    }
    
2. Credit & Debit amount -> transact/:walletID
 Endpoint - https://assignment-production-0a62.up.railway.app/eBank/v1/transact/user_1674594445787
 Request - POST
 Sample payload - 
     {
    "amount" : -1000,
    "description": "food"
    }

3. Fetch transactions -> /transactions?walletId={walletId}&skip={skip}&limit={limit}
   Endpoint - https://assignment-production-0a62.up.railway.app/eBank/v1/transact/user_1674594445787](https://assignment-production-0a62.up.railway.app/eBank                  /v1/transactions?walletId=user_1674381663521&skip=7&limit=10)
   Request - Get
   
4. Get Wallet -> /wallet/:id
   Endpoint - https://assignment-production-0a62.up.railway.app/eBank/v1/wallet/user_1674381663521
   Request - Get
   
   
   DataBase -
   We have used mongoose as ODM in our project.
   We have 2 models which handles schema of transactions and wallet's.
   We are using MongoDB as our database.
   Data is stored on cloud(MongoDB Atlas).
   

