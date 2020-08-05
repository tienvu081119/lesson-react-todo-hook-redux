import React from 'react';
import { useSelector } from 'react-redux';
import { getTodos } from '../redux/selectors';
import Todo from './Todo';

const TodoList = () => {
    const allTodos = useSelector(getTodos);
    const todos = allTodos;
    console.log(todos);
    return (
        <>
            {todos.map((todo, index) => {
                return <Todo key={index} todo={todo} index={index} />
                })
            }
        </>
    );
};

export default TodoList;
