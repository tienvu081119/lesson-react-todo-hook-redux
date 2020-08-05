import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/action';

const Todo = ({todo,index}) =>{       
    const dispatch = useDispatch();
    return(
        <>
            <li onClick={()=> dispatch(toggleTodo(index))}>
                {todo.content}
            </li>
        </>
    )
};

export default Todo;