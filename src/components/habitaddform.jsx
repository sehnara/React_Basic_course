// import React, { PureComponent } from 'react';

import React, { memo } from 'react';

const Habitaddform = memo(
    props => {
        const inputRef =  React.createRef();
    
        const onSubmit = event =>{
            event.preventDefault();
            const name = inputRef.current.value;
            name && props.onAdd(name); // name이 빈 것이 아니라면,,,
            inputRef.current.value = '';
        };
    
        return (
            <form action="" className="add-form" onSubmit = {onSubmit}>
                <input
                    ref={inputRef} 
                    type="text" 
                    className = "inputAdd" 
                    placeholder="Habit"
                />
                <button className="btnAdd">Add</button>
            </form>
        );
    }
);

export default Habitaddform;





