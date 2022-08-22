import React, { useEffect, useState } from 'react'
import { Todo } from '../interface'
import './NewTodo.css'

interface newTodoInterface {
  onaddTodo: (todo: Todo) => void
  updateTodo: (todo: Todo) => void
  current: number | null
  todos: Todo[]
}

const NewTodo: React.FC<newTodoInterface> = (props) => {
  console.log(props)

  const [todo, setTodo] = useState<Todo>({
    id: 0,
    name: '',
    description: '',
  })

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodo((prevtodo) => ({
      ...prevtodo,
      [e.target.name]: e.target.value as string,
    }))
  }

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(todo.id === 0)
        props.onaddTodo({ ...todo, id: Math.ceil(Math.random() * 10000) })
    else
        props.updateTodo(todo);
    setTodo({
      id: 0,
      name: '',
      description: '',
    })
  }

  useEffect(() => {
    if (props.current) {
      let currentTodo = props.todos.find((t) => t.id === props.current)
      if (currentTodo) setTodo(currentTodo)

      console.log(currentTodo);
      
    }
  }, [props.current])

  return (
    <form onSubmit={onFormSubmit}>
      <div className="parent">
        <label htmlFor="name">Todo Name</label>
        <input value={todo.name} onChange={onInputChange} name="name" />
      </div>
      <div className="parent">
        <label htmlFor="description">Todo Name</label>
        <input
          value={todo.description}
          onChange={onInputChange}
          name="description"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default NewTodo
