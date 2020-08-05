import React, {ChangeEvent} from 'react';
import style from './Select.module.css';


type SelectPropsType = {
    optionArray: Array<string>
    value: string
    onChange: (newValue: string) => void
}

const Select = React.memo((props: SelectPropsType) => {
    return (
        <div>
            <select value={props.value}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => props.onChange(e.currentTarget.value)}
                    className={style.select}
            >
                {
                    props.optionArray.map((t, index) => {
                        return (
                            <option key={index}>
                                {t}
                            </option>
                        )
                    })
                }
            </select>
        </div>)
})


export default Select;