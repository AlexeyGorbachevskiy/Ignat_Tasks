import React, {ChangeEvent} from 'react';
import style from './Radio.module.css';


type RadioPropsType = {
    radioArray: Array<string>
    name: string
    value: string
    onChange: (newRadioValue: string) => void
}

function Radio(props: RadioPropsType) {
    return (
        <div>
            {props.radioArray.map((t, index) => {

                return (
                    <p key={index}
                       className={style.radio_text}>
                        <input
                            key={index}
                            className={style.radio}
                            name={props.name}
                            type="radio"
                            value={t}
                            checked={props.value === t}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value)}
                        />{t}</p>
                )
            })}

        </div>)
}


export default Radio;