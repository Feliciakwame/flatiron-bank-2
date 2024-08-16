import React, { useState } from "react";
import DateInput from "./DateInput";
import DescriptionInput from "./DescriptionInput";
import CategoryInput from "./CategoryInput";
import AmountInput from "./AmountInput";
import AddTranscations from "./AddTranscations";

function UserInput({ onAddTransaction }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { date, description, category, amount };

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
    })
      .then((res) => res.json())
      .then((data) => {
        onAddTransaction(data);
        setDate("");
        setDescription("");
        setCategory("");
        setAmount("");
      })
      .catch((error) => console.error("Error adding transaction:", error));
  };

  return (
    <div className="InputContainer">
      <form onSubmit={handleSubmit}>
        <DateInput value={date} onChange={(e) => setDate(e.target.value)} />
        <CategoryInput
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <AmountInput
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <DescriptionInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <AddTranscations handleSubmit={handleSubmit} />
      </form>
    </div>
  );
}

export default UserInput;
