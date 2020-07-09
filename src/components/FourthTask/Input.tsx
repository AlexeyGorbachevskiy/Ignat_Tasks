import React, {DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, ButtonHTMLAttributes} from 'react';
import obj from './FourthTask.module.css';


export type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string };


function Input(propsI: InputPropsType) {
    const {onEnter, error, ...props} = propsI;

    const onEnterCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            onEnter && onEnter();
        }
    }

    return (
        <span className={obj.input_container}>
            <input {...props} onKeyPress={onEnterCallback} type={'text'}/>
            {propsI.error !== '' ? <div className={obj.error_mess}>{propsI.error}</div> : ''}
        </span>
    );
}


export default Input;