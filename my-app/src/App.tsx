import React, {useState} from 'react';
import './App.css';
import {StatePropsType} from "./redux/state";
import Header from "./components/Header/Header";
import {BrowserRouter, HashRouter, NavLink, Route} from "react-router-dom";
import FirstTask from "./components/FirstTask/FirstTask";
import SecondTask from "./components/SecondTask/SecondTask";
import ThirdTask from "./components/ThirdTask/ThirdTask";
import FourthTask from "./components/FourthTask/FourthTask";


export type FilterStateType = 'all' | 'high' | 'medium' | 'low';

function App(props: StatePropsType) {
    return (
        <HashRouter>
            <div className={'container'}>
                <header>
                    <Header/>
                    <NavLink to={'/'}><i className="fa fa-home fa-2x home"/></NavLink>
                </header>

                <div className={'main_content'}>
                    <Route exact path='/' render={() => <span className={'greeting'}>Hi, how u doing?</span>}/>
                    <Route path='/first_task' render={() => <FirstTask state={props.state}/>}/>
                    <Route path='/second_task' render={() => <SecondTask state={props.state}/>}/>
                    <Route path='/third_task' render={() => <ThirdTask state={props.state}/>}/>
                    <Route path='/fourth_task' render={() => <FourthTask/>}/>
                    <Route exact path='/pre_junior'
                           render={() => <span className={'pre_junior'}>Pre Junior: <br/>Fifth task is done.</span>}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
