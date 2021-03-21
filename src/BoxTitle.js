import React, { useState } from "react";
import Editable from "./Editable";

function BoxTitle() {
    const [boxTitleText, setTask] = useState("");

    return (
        <h2>
            <Editable text={boxTitleText} placeholder="Write a title" type="input">
                    <input type="text" name="boxTitleText" placeholder="Write a title" 
                    value={boxTitleText} onChange={e => setTask(e.target.value)}
                    />
            </Editable>
        </h2>
    );
}

export default BoxTitle;