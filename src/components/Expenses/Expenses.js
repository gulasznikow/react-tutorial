import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ items }) => {
  const [year, setYear] = useState("2019");

  const onChangeFilterHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });


  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesFilter selected={year} onChangeFilter={onChangeFilterHandler} />
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
