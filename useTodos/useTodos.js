import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "./08-useReducer/todoReducer";


const init=()=>{
    return JSON.parse(localStorage.getItem('todos'))||[]
}

export const useTodos = () => {

    // Controlar los estados de todos (objeto con los datos de cada tarea)
    // Dispatch(action) envío a todoReducer lo que quiero hacer, el estado retornado se actualiza en "todos"
    const [todos, dispatch] = useReducer(todoReducer, [], init)
    //Guardamos en el localStorage cuando cambie el estado de todos
    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos))
      


    
    }, [todos])   


    //-todoReducer agregar nueva tarea X al arreglo
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch (action);
    }

    //-todoReducer borrar una tarea con el id X
    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        dispatch (action);
    }

    //-todoReducer cambia toggle el estado done de la tarea con X id
    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatch (action);
    }

    return ({
        todos,
        handleDeleteTodo, 
        handleToggleTodo,
        handleNewTodo,
        todosCoun: todos.length, //cantidad tareas, tareas por her
        pendingTodosCount:todos => todo.filter(!todo.done).length
    })
}
