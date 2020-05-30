import React from 'react';
import obj from "./Not_Your_Message.module.css";

function Not_Your_Message() {

    let name = "Boris Berezovskiy";
    let message_text = "Hey, how you doing? "
    let time = "20:00";
    return (
        <div className={obj.message_container}>
            <div className={obj.img_wrapper}>
                <img className={obj.image} src={require("../../../images/img.png")} alt="img"/>
            </div>
            <div className={obj.message_body}>
                <h4>{name}</h4>

                <div className={obj.message_wrapper}>
                    <p className={obj.message_text}>{message_text}</p>
                </div>

                <div className={obj.time_wrapper}>
                    <p className={obj.time}>{time}</p>
                </div>

            </div>
        </div>
    );
}


export default Not_Your_Message;