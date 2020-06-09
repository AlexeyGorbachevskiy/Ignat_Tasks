import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import obj from './ThirdTask.module.css';
import {StatePropsType} from "../../redux/state";
import {v1} from "uuid";

type ArrayElementType = {
    id: string
    name: string
}

function ThirdTask(props: StatePropsType) {

    let [arr, setArr] = useState<Array<ArrayElementType>>([]);
    let [inputValue, setInputValue] = useState('');


    const onSendBtnClickHandler = () => {
        inputValue && alert('Hello, ' + inputValue);
        inputValue && setArr([...arr, {id: v1(), name: inputValue}]);
        setInputValue('');
    }
    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value);
    const onInputEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            inputValue && alert('Hello, ' + inputValue);
            inputValue && setArr([...arr, {id: v1(), name: inputValue}]);
            setInputValue('');
        }
    }


    return (
        <div className={obj.container}>
            <span className={obj.input_container}>
            <input onKeyPress={onInputEnterPressHandler} onChange={onInputChangeHandler} value={inputValue}
                   className={obj.input} type={'text'}/>
            <button onClick={onSendBtnClickHandler} className={obj.send_btn}>Send</button>
            </span>

            <span>
                Quantity of objects (names) = {arr.length}
            </span>

        </div>

    );
}


export default ThirdTask;