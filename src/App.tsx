import React from 'react';
import './App.css';
import {StatePropsType} from "./state/state";
import Header from "./components/Header/Header";
import {BrowserRouter, HashRouter, NavLink, Route} from "react-router-dom";
import FirstTask from "./components/FirstTask/FirstTask";
import SecondTask from "./components/SecondTask/SecondTask";
import ThirdTask from "./components/ThirdTask/ThirdTask";
import FourthTask from "./components/FourthTask/FourthTask";
import SixthTask from "./components/SixthTask/SixthTask";
import SeventhTask from "./components/SeventhTask/SeventhTask";
import EighthTask from "./components/EighthTask/EighthTask";
import NinthTask from "./components/NinthTask/NinthTask";
import TenthTask from "./components/TenthTask/TenthTask";
import EleventhTask from "./components/EleventhTask/EleventhTask";
import TwelfthTask from "./components/TwelfthTask/TwelfthTask";
import {useSelector} from "react-redux";
import {AppRootType} from "./redux/store";
import {InitialStateType} from "./redux/themeRedcer";
import ThirteenthTask from "./components/ThirteenthTask/ThirteenthTask";


export type FilterStateType = 'all' | 'high' | 'medium' | 'low';




function App(props: StatePropsType) {

    const state = useSelector<AppRootType, InitialStateType>(state => state.color);
    return (
        <HashRouter>
            <div className={'container'} style={{background:state.color}}>
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
                    <Route path='/sixth_task' render={() => <SixthTask/>}/>
                    <Route path='/seventh_task' render={() => <SeventhTask/>}/>
                    <Route path='/eighth_task' render={() => <EighthTask/>}/>
                    <Route path='/ninth_task' render={() => <NinthTask/>}/>
                    <Route path='/tenth_task' render={() => <TenthTask/>}/>
                    <Route path='/eleventh_task' render={() => <EleventhTask/>}/>
                    <Route path='/twelfth_task' render={() => <TwelfthTask/>}/>
                    <Route path='/thirteenth_task' render={() => <ThirteenthTask/>}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
