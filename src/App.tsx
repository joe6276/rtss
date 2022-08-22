import React, { useState } from 'react'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'
import { Todo } from './interface'
import './App.css'
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<number | null>(null)

  const onTodoAdded = (todo: Todo) => {
    setTodos((prev) => [...prev, todo])
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  const updateTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)))
    setCurrentTodo(null)
  }

  return (
    <div className="content">
      <NewTodo
        updateTodo={updateTodo}
        onaddTodo={onTodoAdded}
        todos={todos}
        current={currentTodo}
      />
      <TodoList
        items={todos}
        onDeleteTodo={deleteTodo}
        onUpdateTodo={(id) => setCurrentTodo(id)}
      />
    </div>
  )
}

export default App
