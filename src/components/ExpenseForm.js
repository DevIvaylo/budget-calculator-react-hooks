import React from 'react';
import {MdSend} from "react-icons/all";

const ExpenseForm = () => {
    return (
        <form>
            <div className='form-center'>
                <div className="form-group">
                    <label htmlFor="charge">charge</label>
                    <input type="text" className="form-control" placeholder='e.g rent' id='charge' name='charge'/>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input type="text" className="form-control" placeholder='e.g 100' id='amount' name='amount'/>
                </div>
            </div>
            <button type='submit' className='btn'>submit <MdSend className='btn-icon'/></button>
        </form>
    )
};

export default ExpenseForm;
