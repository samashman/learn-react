import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  };

  const [isEditingEnabled, enableEditing] = useState(false);

  const enableEditingHandler = () => {
    enableEditing(true);
  }
  const cancelEditingHandler = () => {
    enableEditing(false);
  }


  return (

    <div className="new-expense">
      {!isEditingEnabled && <button onClick={enableEditingHandler}>Add new expense</button>}
      {isEditingEnabled && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} 
      onCancelEditing={cancelEditingHandler} />}
    </div>
  );
};

export default NewExpense;
