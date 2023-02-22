import { useState } from "react";

import ExpenseFilter from "./expenses-filter/ExpensesFilter";
import ExpensesChart from "./expenses-cart/ExpensesChart";
import ExpensesList from "./expenses-list/ExpensesList";
import Card from "../UI/card/Card";
import "../Expenses/Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList ListOfitems={filteredExpenses}></ExpensesList>
    </Card>
  );
};

export default Expenses;
