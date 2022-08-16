import React from 'react';

type ButtonPropsType = {
    buttonText: string,
    callback: () => void
}

const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback();
    }
    return (
        <button onClick={onClickHandler}>{props.buttonText}</button>
    );
};

export default Button;