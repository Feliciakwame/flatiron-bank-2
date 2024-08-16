import React from "react";

function AddTranscations({ handleSubmit }) {
  return (
    <div className="addBtn">
      <input type="submit" value="Add Transaction" onClick={handleSubmit} />
    </div>
  );
}

export default AddTranscations;
