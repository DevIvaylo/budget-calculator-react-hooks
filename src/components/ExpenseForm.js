import React from 'react';
import {MdSend} from "react-icons/all";

const ExpenseForm = ({charge, amount, handleCharge, handleAmount, handleSubmit, edit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-center'>
                <div className="form-group">
                    <label htmlFor="charge">charge</label>
                    <input value={charge} onChange={handleCharge} type="text" className="form-control"
                           placeholder='e.g rent' id='charge'
                           name='charge'/>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input value={amount} onChange={handleAmount} type="number" className="form-control"
                           placeholder='e.g 100' id='amount'
                           name='amount'/>
                </div>
            </div>
            <button type='submit' className='btn'>{edit ? 'edit' : 'submit'}<MdSend className='btn-icon'/></button>
        </form>
    )
};

export default ExpenseForm;
