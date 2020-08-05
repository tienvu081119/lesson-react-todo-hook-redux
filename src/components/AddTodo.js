import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';

const AddTodo = props => {
    const [input, setInput] = useState(undefined);
    const dispatch = useDispatch();

    return(
        <>
            <input onBlur={e=>setInput(e.target.value)} />
            <button className="add-todo" onClick={()=> dispatch(addTodo(input))}>
                Add Todo
            </button>
        </>
    )
};

export default AddTodo;
