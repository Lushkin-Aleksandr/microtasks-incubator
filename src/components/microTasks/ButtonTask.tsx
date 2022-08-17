import React from 'react';
import Button from "../Button";

const ButtonTask = () => {
    // Button
    const buttonFoo = (name: string) => {
        console.log(`I'm ${name}`)
    }

    return (
        <div>
            <Button buttonText='My youtube channel 1' callback={() => buttonFoo('Vasya')}/>
            <Button buttonText='My youtube channel 2' callback={() => buttonFoo('Ivan')}/>
            <Button buttonText='Stupid button' callback={() => buttonFoo('a Stupid Button')}/>
        </div>
    );
};

export default ButtonTask;