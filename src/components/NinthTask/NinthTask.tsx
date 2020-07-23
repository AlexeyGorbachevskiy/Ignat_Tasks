import React, {useState} from 'react';
import style from './NinthTask.module.css'

function NinthTask() {
    const [date, setDate] = useState<any>(new Date())
    const [timerId, setTimerId] = useState<any>(null);
    const [isHoveredDate, setIsHoveredDate] = useState<boolean>(false)

    const monthZero = (date.getMonth() + 1).toString().length === 1 ? 0 : '';
    const fullDate = date.getDate() + '.' + monthZero + (date.getMonth() + 1) + '.' + date.getFullYear();

    const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();


    const onUpdateClick = () => {
        clearInterval(timerId);
        const timer_id = setInterval(() => setDate(new Date()), 1000);
        setTimerId(timer_id);
    }

    const onStopClick = () => {
        clearInterval(timerId)
    }
    return (
        <div className={style.wrapper}>
            <div onMouseLeave={() => setIsHoveredDate(false)}>
                <div onMouseOver={() => setIsHoveredDate(true)}
                     className={style.time}
                >Time: {time}
                </div>
                <span className={style.date + ' ' + (isHoveredDate ? style.isHoveredDate : '')}
                >Date: {fullDate}
                </span>

            </div>
            <button className={style.update_btn} onClick={onUpdateClick}>Update</button>
            <button className={style.stop_btn} onClick={onStopClick}>Stop Updating</button>
        </div>
    )
}

export default NinthTask;