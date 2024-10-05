import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  { id: 1, title: "Insurance", date: new Date(2024, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(2023, 8, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(2025, 2, 10), price: 1 },
    { id: 4, title: "Laptop", date: new Date(2024, 9, 17), price: 200 },
]

function App() {

  const [data, setData] = useState(DUMMY_EXPENSES);


  const saveExpenseDataHandler = (enteredExpenseData) => {
    let newData=[...data,enteredExpenseData]
    setData(newData);
   
   
  }

  return (
    <div>
      <NewExpense onSaveExpense={saveExpenseDataHandler}/>
      <Expenses expenses={data} />
    </div>
  );
}

export default App;
