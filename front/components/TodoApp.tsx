import { useEffect, useState } from 'react'
import { useQuery, useMutation } from "@apollo/client";
import TodoList from './TodoList';
import { GetAllTodoItemsDocument, TodoItem, AddTodoItemDocument, CompleteTodoItemDocument } from '../graphql/types';

const TodoApp: React.FC = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([])
  const { loading, error, data } = useQuery(GetAllTodoItemsDocument)

  console.log(loading)
  console.log(error)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const { TodoItems } = data;
  setTodoItems(TodoItems)

  const [filter, setFilter] = useState('all');

  const handleTodoClick = (id: number) => {
    const [completeTodoItem, {}] = useMutation(CompleteTodoItemDocument);
    completeTodoItem({
      variables: {
        id: id,
      },
    });
    setTodoItems(
      todoItems.map((todoItem) =>
      todoItem.id === id ? { ...todoItem, completed: !todoItem.completed } : todoItem
      )
    );
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const handleAddTodo = async (title: string) => {
    const [addTodoItem, { data }] = await useMutation(AddTodoItemDocument);
    addTodoItem({
      variables: {
        title: title,
      },
    })
    setTodoItems([...todoItems, data.TodoItem]);
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