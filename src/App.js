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
    // ************* state values ********************
    // array destructuring for state values
    // all expenses, add expense
    const [expenses, setExpenses] = useState(initialExpenses);
    // single expense + destructuring
    const [charge, setCharge] = useState('');
    // single amount + destructuring
    const [amount, setAmount] = useState('');
    // alert
    const [alert, setAlert] = useState({show: false});

    // ************* functionality ******************

    const handleCharge = (event) => {
        setCharge(event.target.value);
    };
    const handleAmount = (event) => {
        setAmount(event.target.value);
    };

    const handleAlert = ({type, text}) => {
        setAlert({show: true, type, text});
        setTimeout(() => {
            setAlert({show: false})
        }, 5000)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(charge, amount);
        if (charge !== '' && amount > 0) {
            const singleExpense = {
                id: uuid(),
                charge: charge,
                amount: amount
            };
            setExpenses([...expenses, singleExpense]);
            setCharge('');
            setAmount('');
            handleAlert({type: 'success', text: 'item added'})
        } else {
            handleAlert({
                type: 'danger',
                text: `charge can't be empty value and amount value has to be bigger than zero`
            })
        }
    };


    return (
        <>
            {alert.show ? <Alert type={alert.type} text={alert.text}/> : null}
            <h1>
                budget calculator
            </h1>
            <main className='App'>
                <ExpenseForm charge={charge} amount={amount} handleCharge={handleCharge} handleAmount={handleAmount}
                             handleSubmit={handleSubmit}/>
                <ExpenseList expenses={expenses}/>
            </main>
            <h1>
                total spending <span className='total'>
                £{expenses.reduce((total, currentItem) => {
                return total += parseInt(currentItem.amount)
            }, 0)}
            </span>
            </h1>
        </>
    );
}

export default App;
