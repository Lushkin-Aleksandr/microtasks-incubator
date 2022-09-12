import React, {useState} from 'react';
import FullInput from "../FullInput";
import Input from "../Input";
import Button from "../Button";

type InputTaskPropsType = {
    addMessage: (message: string) => void
}

const InputTask = (props: InputTaskPropsType) => {

    const [inputValue, setInputValue] = useState<string>('');
    const changeInput = (text: string) => {
        setInputValue(text);
    }
    const onClickHandler = () => {
        props.addMessage(inputValue)
        setInputValue('')
    }


    return (
        <div>
            {/*<FullInput addMessage={props.addMessage}/>*/}
            <Input inputValue={inputValue} changeInput={changeInput}/>
            <Button buttonText={'+'} callback={onClickHandler}/>
        </div>
    );
};

export default InputTask;