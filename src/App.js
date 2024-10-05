import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";


function App() {

  const expenses = [
    { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(2023, 8, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(2023, 2, 10), price: 1 },
    { id: 4, title: "Laptop", date: new Date(2023, 9, 17), price: 200 },
  ];

  const [data, setData] = useState(expenses);


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
