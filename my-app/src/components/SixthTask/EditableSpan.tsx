import React, {ChangeEvent, useState} from 'react';
import Input from "../FourthTask/Input";
import obj from "./EditableSpan.module.css";


type EditableSpanPropsType = {
    value: string
    onInputChange: (value: string) => void
    inputValue: string
}

function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);

    const onSpanDblClick = () => {
        setEditMode(true);
    }
    return (

        <>
            {
                editMode ?
                    <Input
                        value={props.inputValue}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => props.onInputChange(e.currentTarget.value)}
                        autoFocus
                        className={obj.input}
                        onBlur={() => {
                            setEditMode(false);
                        }}
                    />
                    :
                    <span onDoubleClick={onSpanDblClick} className={obj.editable_span}>{props.value}</span>
            }
        </>
    )
}


export default EditableSpan;