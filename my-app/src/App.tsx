import React, {useState} from 'react';
import './App.css';
import NotYourMessage from './components/MessageItem/NotYourMessage/NotYourMessage';
import YourMessage from './components/MessageItem/YourMessage/YourMessage';
import {StatePropsType} from "./redux/state";
import MyAffairs from "./components/MyAffairs/MyAffairs";

export type FilterStateType = 'all' | 'high' | 'medium' | 'low';

function App(props: StatePropsType) {

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

    if (filter === 'all') {
        restOfAffairs = affairsArray.filter((t) => true);
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
        <div className={'container'}>
            <div className={'messages_container'}>
                <YourMessage yourMessage={props.state.yourMessage[0]}/>
                <NotYourMessage notYourMessage={props.state.notYourMessage[0]}/>
                <YourMessage yourMessage={props.state.yourMessage[1]}/>
                <NotYourMessage notYourMessage={props.state.notYourMessage[1]}/>
            </div>
            <div className={'affairs_container'}>
                <MyAffairs affairs={restOfAffairs} removeAffair={removeAffair} filterAffair={filterAffair}/>
            </div>
        </div>
    );
}

export default App;
