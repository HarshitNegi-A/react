import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEntertedTitle] = useState("");
  const [enteredPrice, setEntertedPrice] = useState("");
  const [enteredDate, setEntertedDate] = useState("");
  const [form, setForm] = useState(false)

  const titleChangeHandler = (event) => {
    setEntertedTitle(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEntertedPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEntertedDate(event.target.value);
  };

  const formSubmitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
        
        price : +enteredPrice,
        date : new Date (enteredDate),
        title : enteredTitle,
    }
    props.onSaveExpenseData(expenseData);
    setEntertedTitle("")
    setEntertedPrice("")
    setEntertedDate("")
    setForm(false)
  }

  

  const handleAddExpense = () =>{
    setForm(true)
  }
  const handleCancelExpense = () =>{
    setForm(false)
  }


  return (
    <>
    {form? (<form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} id="title" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="price">Amount</label>
          <input type="number" value={enteredPrice} onChange={priceChangeHandler} id="price" />
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
      <div className="new-expense__actions2">
      <button type="click" onClick={handleCancelExpense}>Cancel</button>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>) : <button onClick={handleAddExpense}>Add Expense</button>}
    
    

    </>
  );
};

export default ExpenseForm;
