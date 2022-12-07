import React from 'react';

type TodoItemProps = {
  title: string;
  completed: boolean;
  onClick: () => void;
};

const Todo: React.FC<TodoItemProps> = ({ title, completed, onClick }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {title}
  </li>
);

export default Todo;