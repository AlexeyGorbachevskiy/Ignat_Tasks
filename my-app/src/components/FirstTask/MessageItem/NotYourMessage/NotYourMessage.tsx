import React from 'react';
import obj from './NotYourMessage.module.css';
import {MessageItemType} from "../../../../redux/state";


type NotYourMessagePropsType={
    notYourMessage:MessageItemType;
}
function NotYourMessage(props: NotYourMessagePropsType) {

    return (
        <div key={props.notYourMessage.id} className={obj.message_container}>
            <div className={obj.img_wrapper}>
                <img className={obj.image} src={process.env.PUBLIC_URL+'/images/'+props.notYourMessage.img_name} alt='img'/>
            </div>
            <div className={obj.message_body}>
                <h4>{props.notYourMessage.friend_name}</h4>

                <div className={obj.message_wrapper}>
                    <p className={obj.message_text}>{props.notYourMessage.message_text}</p>
                </div>

                <div className={obj.time_wrapper}>
                    <p className={obj.time}>{props.notYourMessage.time}</p>
                </div>
            </div>
        </div>
    );
}


export default NotYourMessage;