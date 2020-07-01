import React from 'react';
import obj from "./SixthTask.module.css";
import EditableSpan from "./EditableSpan";


type StateType = {
    x: string
    y: number
}

function SixthTask() {

    function saveState<T>(key: string, state: T) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

    function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }

    let inputValue = '';

    const onInputChange = (value: string) => {
        inputValue = value;
    }

    const onSaveClick = () => {
        saveState<StateType>("test", {x: inputValue, y: 1});
    }

    const onRestoreClick = () => {
        const state: StateType = restoreState<StateType>("test", {x: "", y: 0});
        if(state.x===''){
            alert('state.x is empty')
        }
        else{
            alert(state.x);
        }

    }

    const onClearClick=()=>{
        localStorage.clear();
    }

    return (
        <div className={obj.wrapper}>
            <EditableSpan onInputChange={onInputChange} value='Click on me twice'/>
            <div className={obj.btn_wrapper}>
                <button onClick={onSaveClick} className={obj.save}>Save</button>
                <button onClick={onRestoreClick} className={obj.restore}>Restore</button>
                <button onClick={onClearClick} className={obj.clear}>Clear LS</button>
            </div>
        </div>
    )
}


export default SixthTask;