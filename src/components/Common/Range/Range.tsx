import React, {ChangeEvent} from 'react';
import style from './Range.module.css'


type RangePropsType = {
    minValue: number
    maxValue: number
    value: number
    onChange: (value: number) => void
}

export const Range = React.memo((props: RangePropsType) => {
    console.log('range')
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(parseInt(e.currentTarget.value))
    }
    return (
        <div className={style.wrapper}>
            <div className={style.slideContainer}>
                <input type="range"
                       min={props.minValue}
                       max={props.maxValue}
                       value={props.value}
                       onChange={changeValue}
                       className={style.slider}
                       id={style.myRange}
                />
            </div>
            {props.value}
        </div>
    )
})

