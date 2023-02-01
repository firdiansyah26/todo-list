import React, { useState } from "react";
import { ITodo } from "@/type/todo";
import service from "@/services/todolist.service";

type Props = {
  todo: ITodo;
  updateTodo: (todo: ITodo) => void;
  removeTodo: (id: number) => void;
  refreshTodo: (todo: ITodo) => void;
};

const TodoCard: React.FunctionComponent<Props> = ({
  todo,
  updateTodo,
  removeTodo,
  refreshTodo,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [todos, setTodos] = useState(todo.todo);
  const [completed, setCompleted] = useState(todo.completed);

  async function onEdit(field: string, value: any) {
    const body = {
      ...todo,
      [field]: value,
    };

    refreshTodo(body);

    if (field === "completed") setCompleted(value);
    else setTodos(value);

    updateTodo(body)
    setIsEdit(false);
  }

  function onRemove() {
    removeTodo(todo.id);
  }

  return (
    <div className="grid grid-cols-[50px_1fr_100px] gap-3 p-3 shadow-md rounded hover:bg-gray-300 bg-white items-center">
      <div className="text-center">
        <input
          id="default-checkbox"
          type="checkbox"
          onChange={() => onEdit("completed", !completed)}
          checked={completed}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        />
      </div>
      {isEdit ? (
        <div className="flex flex-row gap-3">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Your Todo"
            value={todos}
            onChange={(e) => setTodos(e.target.value)}
            required
          />
          <button
            className="rounded shadow-md p-3 text-black bg-green-500"
            onClick={() => onEdit("todo", todos)}
          >
            Update
          </button>
          <button
            className="rounded shadow-md p-3 text-white bg-red-500"
            onClick={() => {
              setTodos(todo.todo);
              setIsEdit(false);
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <span
          className={completed ? "line-through" : ""}
          onClick={() => setIsEdit(true)}
        >
          {todos}
        </span>
      )}
      <button
        className="rounded shadow-md p-3 text-white bg-red-800"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoCard;
