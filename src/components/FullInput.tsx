import React, {ChangeEvent, MouseEvent, useState} from 'react';


type FullInputPropsType = {
    addMessage: (message: string) => void
}

const FullInput = (props: FullInputPropsType) => {
    const [inputValue, setInputValue] = useState<string>('');

    const changeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

    const addMessageButtonHandler = () => {
        props.addMessage(inputValue)
        setInputValue('')
    }

    return (
        <div>
            <input  onChange={changeInputHandler} value={inputValue}/>
            <button onClick={addMessageButtonHandler}>+</button>
        </div>
    );
};

export default FullInput;