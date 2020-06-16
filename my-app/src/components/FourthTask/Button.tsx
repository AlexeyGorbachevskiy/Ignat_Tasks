import React, {DetailedHTMLProps, ButtonHTMLAttributes} from 'react';
import obj from './FourthTask.module.css';


export type ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;


function Button(props: ButtonPropsType) {


    return (
        <button{...props}>Send</button>
    );
}


export default Button;