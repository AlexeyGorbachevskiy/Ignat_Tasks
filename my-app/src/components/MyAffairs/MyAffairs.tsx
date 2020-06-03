import React from 'react';
import obj from './MyAffairs.module.css';
import {AffairsInitArrayType} from   '../../redux/state';
import {FilterStateType} from "../../App";



type MyAffairsPropsType={
    affairs:Array<AffairsInitArrayType>;
    removeAffair:(id:number)=>void;
    filterAffair: (priority:FilterStateType)=>void;
}


function MyAffairs(props:MyAffairsPropsType) {


    let affairMapElement = props.affairs.map((t:AffairsInitArrayType) =>
        <li className={obj.affair} key={t.id}>{t.affair + ' has ' + t.priority + ' priority'}
            <button className={obj.remove} onClick={() => {
                props.removeAffair(t.id)
            }}>x
            </button>
        </li>
    )

    return (
        <span className={obj.affairs_container}>
            <ol>
                <h1 className={obj.header}>My Affairs</h1>
                {affairMapElement}
            </ol>
            <span className={obj.filter_btn_wrapper}>
                <button onClick={() => {
                    props.filterAffair('all')
                }} className={obj.filter_btn}>All</button>
                <button onClick={() => {
                    props.filterAffair('high')
                }} className={obj.filter_btn}>High priority</button>
                <button onClick={() => {
                    props.filterAffair('medium')
                }} className={obj.filter_btn}>Medium priority</button>
                <button onClick={() => {
                    props.filterAffair('low')
                }} className={obj.filter_btn}>Low priority</button>
            </span>
        </span>
    );
}


export default MyAffairs;