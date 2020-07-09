import React from 'react';
import obj from './FirstTask.module.css';
import {StatePropsType} from "../../state/state";
import NotYourMessage from "./MessageItem/NotYourMessage/NotYourMessage";
import YourMessage from "./MessageItem/YourMessage/YourMessage";



function FirstTask(props:StatePropsType) {

    return (
        <div>
            <YourMessage yourMessage={props.state.yourMessage[0]}/>
            <NotYourMessage notYourMessage={props.state.notYourMessage[0]}/>
            <YourMessage yourMessage={props.state.yourMessage[1]}/>
            <NotYourMessage notYourMessage={props.state.notYourMessage[1]}/>
        </div>

    );
}


export default FirstTask;