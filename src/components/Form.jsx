import React, { useState } from "react";

function Form() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const handleChangeDate = (e) => setDate(e.target.value);
  const handleChangeDescription = (e) => setDescription(e.target.value);
  const handleChangeCategory = (e) => setCategory(e.target.value);
  const handleChangeAmount = (e) => setAmount(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionData = {
      date: date,
      description: description,
      category: category,
      amount: amount,
    };
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(transactionData),
    })
      .then((res) => res.json)
      .then((data) => data("posted"));
    setDate("");
    setCategory("");
    setDescription("");
    setAmount("");
  };
  return (
    <div className="TransactionData">
      <Form className="formData" onSubmit={handleSubmit}>
        <div>
          <input
            type="date"
            placeholder="Enter Date"
            value={date}
            onChange={handleChangeDate}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={handleChangeDescription}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={handleChangeCategory}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Amount"
            value={amount}
            onChange={handleChangeAmount}
          ></input>
        </div>
        <div>
          <input type="submit" value="Add Transaction"></input>
        </div>
      </Form>
    </div>
  );
}

export default Form;
