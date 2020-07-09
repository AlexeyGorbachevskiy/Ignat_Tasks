import MyAffairs from "./MyAffairs/MyAffairs";
import React, {useState} from "react";
import {StatePropsType} from "../../state/state";
import {FilterStateType} from "../../App";


function SecondTask(props: StatePropsType) {


    const [affairsArray, setAffairsArray] = useState(props.state.myAffairs.affairsInitArray);
    const [filter, setFilter] = useState<FilterStateType>('all');
    let restOfAffairs = affairsArray;

    function removeAffair(id: number) {
        const filteredAffairsArray = affairsArray.filter(affairsArrayElement => id !== affairsArrayElement.id);
        setAffairsArray(filteredAffairsArray);
    };

    function filterAffair(priority: FilterStateType) {
        setFilter(priority);
    }


    if (filter === 'high') {
        restOfAffairs = affairsArray.filter((t) => t.priority === 'high');
    }
    if (filter === 'medium') {
        restOfAffairs = affairsArray.filter((t) => t.priority === 'medium');
    }
    if (filter === 'low') {
        restOfAffairs = affairsArray.filter((t) => t.priority === 'low');
    }

    return (
        <div>
            <MyAffairs affairs={restOfAffairs} removeAffair={removeAffair} filterAffair={filterAffair}/>
        </div>

    );
}


export default SecondTask;