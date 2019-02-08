import React, {useState} from 'react';

const useInputvalue = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        onChange: e => setValue(e.target.value),
        resetValue: () => setValue("")
    }
}

export default React.memo(({dispatch}) => {
    console.log('test')
    const {resetValue, ...text} = useInputvalue("");
    return(
        <form onSubmit={e => {
            e.preventDefault();
            dispatch({text: text.value, type: 'ADD_TODO'});
            resetValue();
            }}>
            <input {...text}/>
        </form>
    );
});