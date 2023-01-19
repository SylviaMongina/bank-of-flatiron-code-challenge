import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
    const [transactions, setTransactions] = useState([]);

    // req.open("GET", "https://api.jsonbin.io/v3/b/63c5194a01a72b59f24c15f4/<BIN_VERSION | latest>", true);
    // req.setRequestHeader("X-Master-Key", "<YOUR_API_KEY>");

    useEffect(() => {
        fetch("http://localhost:3000/transactions", {
            method:"GET",
            headers:{
                // "Content-Type":"application/json",
                // "Accept":"application/json",
                // "X-Master-Key":"$2b$10$81GFpWlAFSY.L9UGrP7.heQMLIppxY1PH2w37N9fljccXwsBGZtlq"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            //console.log (data.record.transactions)
            setTransactions(data)
        })
        }, []);
        //console.log(transactions);

        function addTransactionInfo(newTransaction) {
            const update = [...transactions, newTransaction];
            setTransactions(update);
            }
        //remove transaction
        function deleteTransact(id) {
        fetch(`http://localhost:3000/transactions/${id}`,{
            method:"DELETE",
            headers:{
                //"Content-Type":"application/json",
                // "Accept":"application/json",
            }
        })
            const update = transactions.filter((transaction) => transaction.id !== id);
            setTransactions(update);
        }
        function handleSearch(event){
            let search = event.target.value.toLowerCase()
            //  const somevalue = undefined
            // const val = somevalue || ""
            setTransactions(transactions.filter(val=>val.description.toLowerCase().includes(search)))
            console.log(handleSearch)
        }

        return (
            <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm anewTransaction={addTransactionInfo} />
      <TransactionsList
        transactions={transactions}
        deleteTransactions={deleteTransact}
      />
    </div>
    );
}

export default AccountContainer;