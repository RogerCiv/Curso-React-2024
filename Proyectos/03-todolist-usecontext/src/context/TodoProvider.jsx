import React from 'react'
import { useState } from 'react'

const initialState = [
    {
        id: 1,
        title: 'Todo 1',
        completed: false
    },

    {
        id: 2,
        title: 'Todo 2',
        completed: false
    },

    {
        id: 3,
        title: 'Todo 3',
        completed: false
    },

    {
        id: 4,
        title: 'Todo 4',
        completed: false
    },
]
const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(initialState)
    // de una tarea querré: a) crear tareas, b) completar tareas, c) borrar tareas , d) contar tareas incompletas
    const addTodo = (title) => {
        const newTodo = {
            id: todos.length + 1,
            title,
            completed: false
        }
        setTodos([...todos, newTodo])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const completeTodo = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    }   

    const countIncompleteTodos = () => {
        return todos.filter((todo) => !todo.completed).length
    }


    return (
        <TodoContext.Provider value={(todos, setTodos)}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider