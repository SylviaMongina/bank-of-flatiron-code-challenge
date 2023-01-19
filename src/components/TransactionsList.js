import React from 'react';
import Transaction from './Transaction';

function TransactionsList({ transactions, deleteTransactions}) {

  const deleteTransaction = async (transId) => {
		console.log(transId);
		try {
      // eslint-disable-next-line 
			/*const res = await fetch("http://localhost:3000/transactions/" + transId, {
				method: "DELETE",
			});*/
			deleteTransactions(transId);
		} catch (error) {
			console.log(error);
		}
	};


    return (
        <table className='ui celled striped padded table'>
          <tbody>
            <tr>
            {/* <th>
                <h3 className="ui center aligned header">#Ref</h3>
              </th> */}
              <th>
                <h3 className='ui center aligned header'>Date</h3>
              </th>
              <th>
                <h3 className='ui center aligned header'>Description</h3>
              </th>
              <th>
                <h3 className='ui center aligned header'>Category</h3>
              </th>
              <th>
                <h3 className='ui center aligned header'>Amount</h3>
              </th>
              <th><h3 className='ui center aligned header'>Delete</h3></th>
            </tr>
            {/* render a list of <Transaction> components here */}
            {transactions.map((transaction, idx) => {
              return (
              <Transaction transaction={transaction} deleteTransaction={deleteTransaction}  key={transaction.id}/>
              );
            })}
          </tbody>
        </table>
      );
    }
    
    export default TransactionsList;