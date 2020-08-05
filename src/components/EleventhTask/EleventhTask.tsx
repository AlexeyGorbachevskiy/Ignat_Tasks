import React, {useCallback, useState} from 'react';
import style from './EleventhTask.module.css'
import {Range} from "../Common/Range/Range";


function EleventhTask() {

    const [value, setValue] = useState(5);
    const changeRangeValue = useCallback((newValue: number) => {
        setValue(newValue)
    }, []);

    return (
        <div className={style.wrapper}>
            <Range minValue={0}
                   maxValue={10}
                   value={value}
                   onChange={changeRangeValue}/>
        </div>
    )
}

export default EleventhTask;