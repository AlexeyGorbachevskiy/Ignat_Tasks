import React, {useCallback} from 'react';
import style from './TwelfthTask.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../../redux/store";
import {setThemeAC} from "../../redux/themeRedcer";
import Select from "../Common/Select/Select";


function TwelfthTask() {
    const dispatch = useDispatch();
    const state = useSelector<AppRootType, any>(state => state.color);


    const colorsArray = ['#27ae60', '#1d49aa', 'indigo', 'white', 'black'];

    const changeTheme = useCallback((newValue: string) => {
        dispatch(setThemeAC(newValue))
    }, [dispatch]);


    return (
        // style attribute intended for StoryBook testing only
        <div className={style.wrapper} style={{background:state.color}}>
            <h3>Select Theme (Background color)</h3>
            <Select optionArray={colorsArray} value={state.color} onChange={changeTheme}/>
        </div>
    )
}

export default TwelfthTask;