import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [toggleForm, setToggleForm] = useState(false);

  const showFormHandler = () => {
    setToggleForm(true);
  };

  const hideFormHandler = () => {
    setToggleForm(false);
  };

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setToggleForm(false);
  };
  return (
    <div className="new-expense">
      {toggleForm && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancelAddExpense={hideFormHandler}
        />
      )}
      {!toggleForm && (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
