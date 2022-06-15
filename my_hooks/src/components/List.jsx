import React, { useState } from 'react';

const List = () => {

  const [todos, setTodos] = useState([]);

  return (
    <div>
      {
        todos.map((todo) => {
          
        })
      }
    </div>
  );
};

export default List;