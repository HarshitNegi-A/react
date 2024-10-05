import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEntertedTitle] = useState("");
  const [enteredAmount, setEntertedAmount] = useState("");
  const [enteredDate, setEntertedDate] = useState("");

  const titleChangeHandler = (event) => {
    setEntertedTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEntertedAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEntertedDate(event.target.value);
  };

  const formSubmitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date (enteredDate),
    }
    setEntertedTitle("")
    setEntertedAmount("")
    setEntertedDate("")
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} id="title" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChangeHandler} id="amount" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2023-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
            id="date"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
