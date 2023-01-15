import React from "react";

function Transaction({id, date, description, category, amount, deleteTransactions}) {

  function handleDeleteTransaction(){
    fetch (`http://localhost:3000/transactions/${id}`, {
      method: "DELETE"
    })
    deleteTransactions(id);
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={handleDeleteTransaction} className="ui button">Delete Button</button></td>
    </tr>
  );
}

export default Transaction;