import React, { useRef } from "react";
import { TodoContext } from "@/context/todoContext";
import { TodoContextType, ITodo } from "@/type/todo";

const TodoField = () => {
  const { saveTodo } = React.useContext(TodoContext) as TodoContextType;

  const refTodo = useRef();

  function onSubmit(e: any) {
    e.preventDefault();
    const { value } = refTodo.current;
    const body: any = {
      todo: value,
      completed: false,
      userId: 26,
    };

    saveTodo(body);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-3 rounded mx-3 flex flex-row gap-3"
    >
      <input
        ref={refTodo}
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Your Todo"
        required
      />

      <button
        className="rounded shadow-md p-3 text-black bg-green-500"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default TodoField;
