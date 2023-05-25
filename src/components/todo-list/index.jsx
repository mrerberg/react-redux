import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";
import React, { useState } from "react";

import styles from './index.module.css';

export const TodoList = () => {
  const todos = useSelector(todosSelector);
 
  const [isFiltered, setIsFiltered] = useState(false)

  const taskComplete = (todolist) => todolist.filter((task) => task.completed)

  const filteredTodos = isFiltered ? taskComplete(todos) : todos

  return (
    <>
      <div className="Filter">
        <button type="button" className="Filter__btn" onClick={()=> setIsFiltered(!isFiltered)}>
          {isFiltered ? 'All' : 'Completed'}
          
        </button>
      </div>
      <ul className={styles.list}>
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};
