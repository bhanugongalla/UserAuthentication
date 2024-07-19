// src/components/TodoList.js

import React from 'react';
import { useSelector } from 'react-redux';



const TodoList = () => {
  const isAuthenticated = useSelector((state) => state?.isAuthenticated ?? false);
 

  if (!isAuthenticated) {
    return <div>Please log in to see your todo list.</div>;
  }

  




  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Todo List for {isAuthenticated.username}</h2>
          <ul>
            
            <li>gym</li>
            <li>reading</li>
            <li>work</li>
          </ul>
        </div>
      ) : (
        <p>Please login to view your tasks.</p>
      )}
    </div>
  );
};

export default TodoList;
