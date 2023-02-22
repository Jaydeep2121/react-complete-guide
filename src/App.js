import { useState } from "react";

import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  { id: "e2", title: "Grocerries", amount: 20.12, date: new Date(2018, 2, 21) },
  { id: "e3", title: "New Mobile", amount: 95.18, date: new Date(2019, 1, 12) },
  { id: "e4", title: "Laptop", amount: 1254.84, date: new Date(2016, 6, 29) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExp) => {
      return [expense, ...prevExp];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
