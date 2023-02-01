import React, { useEffect } from "react";
import { TodoContextType, ITodo } from "@/type/todo";
import { TodoContext } from "@/context/todoContext";
import Todo from "@/components/TodoCard";

const TodoList = () => {
  const { todos, updateTodo, removeTodo, fetchTodo, refreshTodo, updateCheckTodo } =
    React.useContext(TodoContext) as TodoContextType;

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="m-3 flex gap-2 flex-col">
      {todos.map((todo: ITodo) => (
        <Todo
          key={todo.id}
          updateTodo={updateTodo}
          updateCheckTodo={updateCheckTodo}
          todo={todo}
          removeTodo={removeTodo}
          refreshTodo={refreshTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
