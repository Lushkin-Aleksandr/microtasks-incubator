import React from 'react';

type InputPropsType = {
    inputValue: string
    changeInput: (text: string) => void
}

const Input = (props: InputPropsType) => {
    return (
        <input onChange={(event) => props.changeInput(event.currentTarget.value)} value={props.inputValue} />
    );
};

export default Input;