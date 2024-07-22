import React, {useState} from 'react'
export const AddTransaction = () => {
    const [text,setText] =useState('');
    const [amount,setAmount] =useState(0);
    return (
        <>
        <h3>Add new Transaction</h3>
        <form>
        <div className="form-control">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Transaction Name..."/>
            </div>
            <div className="form-control">
                <br/>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount...." />
            </div>
            <button className="btn">Add Transaction</button>
        
        </form>
        
        </>
    );
}