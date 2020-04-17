import React from 'react';
import ExpenseItem from "./ExpenseItem";
import {MdDelete} from "react-icons/all";

const ExpenseList = ({expenses}) => {
    return (
        <>
            <ul className='list'>
                {expenses.map((expense) => {
                    return <ExpenseItem expense={expense} key={expense.id}/>
                })}
            </ul>
            {expenses.length > 0 ?
                <button className='btn'>clear expenses <MdDelete className='btn-icon'/></button> : null}
        </>
    )
};

export default ExpenseList;
