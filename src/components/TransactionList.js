import React from 'react';
import Transaction from './Transaction';

function TransactionsList({ transactions, handleDeleteTransaction, handleAddForm}) {

    const deleteTransaction = async (transId) => {
          console.log(transId);
          try {
              const res = await fetch("http://localhost:8001/transactions/" + transId, {
                  method: "DELETE",
              });
              handleDeleteTransaction(transId);
          } catch (error) {
              console.log(error);
          }
      };
    