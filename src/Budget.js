import React, { useState } from "react";
import Editable from "./Editable";
import './Budget.css';

function Budget(props) {
    const [budgetText, setName] = useState("");
    const [budgetCost, setNumber] = useState("");

    function handleChange(e) {
        setNumber(e.target.value);
        props.updateTotal([e.target.value, props.budgNum]);
    }
    
    return (
        <div>
        <button className="btn" onClick={() => props.deleteBudget(props.budgNum)}>X</button>
        <Editable text={budgetText} placeholder="Budget expense" type="input" className="sideBySide">
                <input type="text" name="budgetText" placeholder="Budget expense" 
                value={budgetText} onChange={e => setName(e.target.value)}
                />
        </Editable>
        <Editable text={budgetCost} placeholder="$0.00" type="input" className="sideBySide">
             <input type="number" name="budgetCost" placeholder="$0.00" 
                value={budgetCost} onChange={handleChange}
             />
        </Editable>
        </div>
    );
}

export default Budget;