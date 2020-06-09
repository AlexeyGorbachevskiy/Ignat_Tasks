import React from 'react';
import obj from './YourMessage.module.css';
import {MessageItemType} from "../../../../redux/state";


type YourMessagePropsType = {
    yourMessage: MessageItemType;
}

function YourMessage(props: YourMessagePropsType) {

    return (
        <div key={props.yourMessage.id} className={obj.message_container}>
            <div className={obj.message_body}>
                <h4>{props.yourMessage.friend_name}</h4>

                <div className={obj.message_wrapper}>
                    <p className={obj.message_text}>{props.yourMessage.message_text}</p>
                </div>

                <div className={obj.time_wrapper}>
                    <p className={obj.time}>{props.yourMessage.time}</p>
                </div>
            </div>
        </div>
    );
}


export default YourMessage;