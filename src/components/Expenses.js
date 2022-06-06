import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const expenses = props.expenses.map((expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  return (
    <div className="expenses">
      <h2>Let's get started!</h2>
      {expenses}
    </div>
  );
}

export default Expenses;
