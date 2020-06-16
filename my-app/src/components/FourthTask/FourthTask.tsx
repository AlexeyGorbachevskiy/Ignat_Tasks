import React, {
    DetailedHTMLProps,
    InputHTMLAttributes,
    KeyboardEvent,
    ButtonHTMLAttributes,
    useState,
    ChangeEvent
} from 'react';
import obj from './FourthTask.module.css';
import Input from "./Input";
import Button from "./Button";
import {v1} from "uuid";

type ArrayElementType = {
    id: string
    name: string
}

function FourthTask() {
    let [arr, setArr] = useState<Array<ArrayElementType>>([]);
    let [inputValue, setInputValue] = useState('');
    let [errorMessage, setErrorMessage] = useState('');
    const onSendBtnClickHandler = () => {
        if (inputValue.trim() === '') {
            setErrorMessage('Field is required');
            inputValue && setArr([...arr, {id: v1(), name: inputValue}]);
            setInputValue('');
            return
        }
        alert('Hello, ' + inputValue);
        inputValue && setArr([...arr, {id: v1(), name: inputValue}]);
        setInputValue('');
    }
    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
        setErrorMessage('')
    }

    return (
        <div className={obj.container}>
            <Input onChange={onInputChangeHandler}
                   value={inputValue}
                   className={obj.input}
                   onEnter={onSendBtnClickHandler}
                   error={errorMessage}
            />
            <Button
                onClick={onSendBtnClickHandler}
                className={obj.send_btn}
            />
        </div>

    );
}


export default FourthTask;