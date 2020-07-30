import React from 'react';
import style from './TenthTask.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../../redux/store";
import {InitialStateType, setLoadingAC} from "../../redux/loadingReducer";

function TenthTask() {

    const dispatch = useDispatch();
    const state = useSelector<AppRootType, InitialStateType>(state => state.loading);


    return (
        <div className={style.wrapper}>
            {
                state.loading ?
                    <img src={process.env.PUBLIC_URL + '/images/spinner.svg'}/>
                    :
                    ''
            }

            <button className={style.run_btn}
                onClick={() => {
                    dispatch(setLoadingAC(true))
                    setTimeout(() => {
                        dispatch(setLoadingAC(false))
                    }, 3000)
                }}
            >Run Spinner
            </button>
        </div>
    )
}

export default TenthTask;