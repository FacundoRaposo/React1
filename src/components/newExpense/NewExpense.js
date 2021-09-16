import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'; 
const NewExpense = (props) =>{
    const [toggle, setToggle] = useState(false);
    const saveDataHandler = expenseData =>{
        const newExpense ={
            ...expenseData,
            id: Math.random().toString()
        }
        setToggle(false);
        props.onAddExpense(newExpense);
    }

     
    const toggleHandler = () =>{
        setToggle(!toggle);
    }
    const cancelToggle = ()=>{
        setToggle(false);
    }
    
    
    return(
        <div className="new-expense">
            {toggle ? <ExpenseForm onCancel={cancelToggle} onSaveData={saveDataHandler}/> : <button onClick={toggleHandler}>Add a new Expense</button>}
            
        </div>)
}

export default NewExpense;