import React, {ChangeEvent, useState} from 'react';


const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState <string | undefined>('none')
    const onChangeHandlerSelect = (e: ChangeEvent<HTMLSelectElement>) => {
setParentValue(e.currentTarget.value)
    }
    return (
        <div>
            <select value={parentValue} onChange={onChangeHandlerSelect}>
                <option value='none'>none</option>
                <option value="1">Minsk</option>
                <option value="2">Moscow</option>
                <option value="3">Kiev</option>
            </select>
        </div>
    );
};

export default ControlledSelect;