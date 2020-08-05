import React, {useState} from 'react';
import Select from "../Common/Select/Select";
import Radio from "./Radio";


function SeventhTask() {
    const optionArray = ['Boris', 'Bob', 'Adam', 'Howard', 'John'];
    const radioArray = ['Britva', 'Dylan', 'Clark', 'Lovecraft', 'Phillips '];
    const [value, setValue] = useState(optionArray[0]);
    const [radioValue, setRadioValue] = useState(radioArray[0]);


    const onChangeSelect = (newValue: string) => setValue(newValue);
    const onChangeRadio = (newRadioValue: string) => {
        setRadioValue(newRadioValue);
    }


    return (
        <div>
            <Select
                optionArray={optionArray}
                value={value}
                onChange={onChangeSelect}
            />
            <Radio
                radioArray={radioArray}
                name={'radio'}
                value={radioValue}
                onChange={onChangeRadio}
            />
        </div>)
}


export default SeventhTask;