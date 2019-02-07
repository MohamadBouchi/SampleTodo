import React, {useState} from 'react';

const useInputvalue = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        onChange: e => setValue(e.target.value),
        resetValue: () => setValue("")
    }
}

export default ({onSubmit}) => {
    const {resetValue, ...text} = useInputvalue("");
    return(
        <form onSubmit={e => {
            e.preventDefault();
            onSubmit(text.value);
            resetValue();
            }}>
            <input {...text}/>
        </form>
    );
}