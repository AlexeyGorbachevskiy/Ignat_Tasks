import React from 'react';
import obj from "./Your_Message.module.css";

function Your_Message() {

    let name = "I'm";
    let message_text = "I'am fine. How're you? "
    let time = "20:00";
    return (
        <div className={obj.message_container}>

            <div className={obj.message_body}>
                <h4>{name}</h4>

                <div className={obj.message_wrapper}>
                    <p className={obj.message_text}>{message_text}</p>
                </div>

                <div className={obj.time_wrapper}>
                    <p className={obj.time}>{time}</p>
                </div>
            </div>

            {/*<div className={obj.img_wrapper}>*/}
            {/*    <img className={obj.image} src={require("../../../images/img.png")} alt="img"/>*/}
            {/*</div>*/}
        </div>
    );
}


export default Your_Message;