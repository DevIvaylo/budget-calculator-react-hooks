import React from 'react';
import ExpenseItem from "./ExpenseItem";
import {MdDelete} from "react-icons/all";

const ExpenseList = ({expenses, clearExpenses, handleDelete, handleEdit}) => {
    return (
        <>
            <ul className='list'>
                {expenses.map((expense) => {
                    return <ExpenseItem handleDelete={handleDelete} handleEdit={handleEdit} expense={expense}
                                        key={expense.id}/>
                })}
            </ul>
            {expenses.length > 0 ?
                <button onClick={clearExpenses} className='btn'>clear expenses<MdDelete className='btn-icon'/>
                </button> : null}
        </>
    )
};

export default ExpenseList;
