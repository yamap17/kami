// TodoList.tsx
import React from 'react';
import TodoItem from './TodoItem';

type TodoListProps = {
  todoItems: {
    id: number;
    title: string;
    completed: boolean;
  }[];
  onTodoClick: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todoItems, onTodoClick }) => (
  <ul>
    {todoItems.map((todo) => (
      <TodoItem key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

export default TodoList;