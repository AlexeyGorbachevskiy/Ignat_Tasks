import React, {useRef, useState} from 'react';
import style from './Request.module.css'
import {requestAPI} from "./RequestsAPI";


function Request() {

    const checkbox = useRef<any>();
    const [response, setResponse] = useState<any>(null);

    const sendRequest = async () => {
        try {
            const response = await requestAPI.sendStatus(checkbox.current.checked);
            setResponse(response.status)
            console.log(response)
        } catch (error) {
            setResponse(error.message)
            console.log(error)
        }
    }

    return (
        <div className={style.wrapper}>
            <div className={style.extra_wrapper}>
                <button onClick={sendRequest} className={style.send_btn}>Send</button>
                <input ref={checkbox} className={style.checkbox} type="checkbox"/> Status
            </div>
            <div className={style.response}>{response &&
            response!.toString()[0] === '2' ? `Status code=${response}.\nRequest was sent successfully.` : response}
            </div>
        </div>
    )
}

export default Request;