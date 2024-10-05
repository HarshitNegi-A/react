import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const initialData={
    enteredTitle:'' ,
    enteredAmount:'',
    enteredDate:'' ,
};

const ExpenseForm=()=>{
    // const [enteredTitle, setEntertedTitle]=useState("")
    // const [enteredAmount, setEntertedAmount]=useState("")
    // const [enteredDate, setEntertedDate]=useState("")

    const [userInput, setUserInput] = useState(initialData)

    const titleChangeHandler=(event)=>{
      
        setUserInput((prevState)=>{
            return{
                ...prevState,
                enteredTitle : event.target.value,
            }
        })
    }
    const amountChangeHandler=(event)=>{
        // setUserInput({
        //     ...userInput ,
        //     enteredAmount: event.target.value
        // });
        setUserInput((prevState)=>{
            return{
                ...prevState,
                enteredAmount : event.target.value,
            }
        })
    }
    const dateChangeHandler=(event)=>{
        // setUserInput({
        //     ...userInput ,
        //     enteredDate: event.target.value
        // });
        setUserInput((prevState)=>{
            return{
                ...prevState,
                enteredDate : event.target.value,
            }
        })
    }



    return (
        
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" onChange={titleChangeHandler} id="title"/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" onChange={amountChangeHandler} id="amount"/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" min="2023-01-01" max="2024-12-31" onChange={dateChangeHandler} id="date"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;