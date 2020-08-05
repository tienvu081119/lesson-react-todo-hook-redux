import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
export default function TodoApp()
{
    return(
        <>
            <h1>Todo List</h1>
            <AddTodo /> 
            <TodoList />
        </>
    )
}