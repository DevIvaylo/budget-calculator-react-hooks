import React, {useState} from 'react';
import './App.css';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import uuid from 'uuid/v4';

const initialExpenses = [
    {id: uuid(), charge: 'rent', amount: 1300},
    {id: uuid(), charge: 'car insurance', amount: 1900},
    {id: uuid(), charge: 'credit card bill', amount: 160}
];

function App() {
    // array destructuring
    const [expenses, setExpenses] = useState(initialExpenses);
    console.log(expenses);
    console.log(setExpenses);

    return (
        <>
            <Alert/>
            <h1>
                budget calculator
            </h1>
            <main className='App'>
                <ExpenseForm/>
                <ExpenseList expenses={expenses}/>
            </main>
            <h1>
                total spending <span className='total'>
                £{expenses.reduce((total, currentItem) => {
                return total += currentItem.amount
            }, 0)}
            </span>
            </h1>
        </>
    );
}

export default App;
