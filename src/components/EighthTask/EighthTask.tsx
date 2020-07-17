import React, {useState} from 'react';
import {
    hwReducer, PayloadType, setStatusAC
} from "./homeWorkReducer";
import {v1} from "uuid";
import style from './EighthTask.module.css'

function EighthTask() {

    const state = [
        {id: v1(), name: 'Alex', age: 23},
        {id: v1(), name: 'Boris', age: 16},
        {id: v1(), name: 'Clark', age: 18},
        {id: v1(), name: 'Bob', age: 13},
        {id: v1(), name: 'Alexander', age: 30},
    ]

    const endState = hwReducer(state, setStatusAC('down'))

    const [newPeopleArray, setNewPeopleArray] = useState(endState);


    const peopleArray = newPeopleArray.map((human) => {
        return (
            <li>{human.name}: {human.age}</li>
        )

    });

    function sort(sortParam: PayloadType) {
        const newPeopleArray = hwReducer(endState, setStatusAC(sortParam))
        setNewPeopleArray([...newPeopleArray])
    }

    const onAsc = () => {
        sort('up')
    }
    const onDesc = () => {
        sort('down')
    }
    const on18 = () => {
        sort('18')
    }
    return (
        <div className={style.container}>
            <h3>Sorting by age:</h3>
            <div className={style.btns_wrapper}>
                <button className={style.btns} onClick={onAsc}>Asc</button>
                <button className={style.btns} onClick={onDesc}>Desc</button>
                <button className={style.btns} onClick={on18}>18</button>
            </div>
            <ul>
                {peopleArray}
            </ul>
        </div>

    );
}


export default EighthTask;