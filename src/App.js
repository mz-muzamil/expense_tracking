import React, { useState } from "react";
import "./App.css";
import FormAddExpense from "./components/FormAddExpense";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [expnData, setExpnData] = useState([]);

  return (
    <div className="App" style={{ maxWidth: "800px", margin: "60px auto" }}>
      <FormAddExpense expnData={expnData} setExpnData={setExpnData} />
      <ExpenseTable expnData={expnData} setExpnData={setExpnData} />
    </div>
  );
}

export default App;
