import React, { useState } from 'react';
import TodoList from './TodoList';

// type Props = {
//   items: TodoItem[]
// }

const TodoApp: React.FC = () => {
  const [todoItems, setTodos] = useState([
    {
      id: 1,
      title: 'TODO 1',
      completed: false,
    },
    {
      id: 2,
      title: 'TODO 2',
      completed: false,
    },
  ]);

  const [filter, setFilter] = useState('all');

  const handleTodoClick = (id: number) => {
    setTodos(
      todoItems.map((todoItem) =>
      todoItem.id === id ? { ...todoItem, completed: !todoItem.completed } : todoItem
      )
    );
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const handleAddTodo = (title: string) => {
    setTodos([...todoItems, { id: Date.now(), title, completed: false }]);
  };

  const filteredTodos = todoItems.filter((todoItem) => {
    if (filter === 'all') {
      return true;
    }
    if (filter === 'active') {
      return !todoItem.completed;
    }
    if (filter === 'completed') {
      return todoItem.completed;
    }
    return false;
  });

  return (
    <div>
      <h1>TODO LIST</h1>
      <TodoList todoItems={filteredTodos} onTodoClick={handleTodoClick} />
      <div>
        <label htmlFor="filter">Filter: </label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div>
        <label htmlFor="add-todo">Add Todo: </label>
        <input
          id="add-todo"
          type="text"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const { target } = e;

              if (!(target instanceof HTMLTextAreaElement)) {
                return;
              }
              handleAddTodo(target.value);
              target.value = '';
            }
          }}
        />
      </div>
    </div>
  )
}

export default TodoApp;