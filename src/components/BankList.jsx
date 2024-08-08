import React from "react";
import { useEffect, useState } from "react";

function BankList() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3000/transactions`)
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(transactions);
  return (
    <div>
      <form onChange={(e) => setSearch(e.target.value)}>
        <input type="text" name="Search" placeholder="Search Here" />
      </form>
      <table className="BankList">
        <thead>
          <tr>
            <th className="DateList">
              <h2>Date</h2>
            </th>
            <th className="DescriptionList">
              <h2>Description</h2>
            </th>
            <th className="CategoryList">
              <h2>Category</h2>
            </th>
            <th className="AmountList">
              <h2>Amount</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions
            .filter((data) => {
              return search.toLowerCase() === ""
                ? data
                : data.description.toLowerCase().includes(search.toLowerCase());
            })
            .map((data, id) => (
              <tr key={id}>
                <td>{data.date}</td>
                <td>{data.description}</td>
                <td>{data.category}</td>
                <td>{data.amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default BankList;
