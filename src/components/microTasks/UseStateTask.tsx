import React, {useState} from 'react';
import Button from "../Button";

const UseStateTask = () => {
    // Hook useState
    let [a, setA] = useState(1);
    const increment = () => {
        setA(++a);
    }
    const setZero = () => {
        setA(0);
    }

    return (
        <div>
            <h3>{a}</h3>
            <Button buttonText={'plus 1'} callback={increment}/>
            <Button buttonText={'set 0'} callback={setZero}/>
        </div>
    );
};

export default UseStateTask;