import React, { useState } from "react";
import "./Expenses.css";

import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [yearSelected, setYearSelected] = useState("2020");
  const yearSelectionHandler = (yearSelected) => {
    setYearSelected(yearSelected);

  };

   const filteredByYear = props.expenses.filter(expense =>{
     return expense.date.getFullYear().toString() === yearSelected
   })
  


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filtered={yearSelected}
          onYearFilter={yearSelectionHandler}
        />
      <ExpensesChart expenses={filteredByYear} />
      <ExpensesList items={filteredByYear}/>
      </Card>
    </div>
  );
  
  }
export default Expenses;
