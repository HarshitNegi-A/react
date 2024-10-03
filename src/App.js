import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div className="App">
      <h1>Lets get Started</h1>
      <ExpenseItem date={new Date(2023, 7, 15)} title='Insurance' price='50' location='Banglore'></ExpenseItem>
      <ExpenseItem date={new Date(2023, 7, 25)} title='Book' price='20' location='Delhi'></ExpenseItem>
      <ExpenseItem date={new Date(2023, 7, 10)} title='Pen' price='10' location='Hyderabad'></ExpenseItem>
      <ExpenseItem date={new Date(2023, 7, 5)} title='Laptop' price='100' location='Mumbai'></ExpenseItem>
    </div>
  );
}

export default App;
