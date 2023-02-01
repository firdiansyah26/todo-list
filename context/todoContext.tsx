import React from "react";
import { TodoContextType, ITodo } from "@/type/todo";
import service from "@/services/todolist.service";

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<React.ReactNode> = (props: any) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  const fetchTodo = async () => {
    const { data } = await service().getData();

    setTodos(data.todos);
  };

  const refreshTodo = (todo: ITodo) => {
    const findIndex = todos.findIndex((x) => x.id === todo.id);
    todos[findIndex] = todo;
    setTodos(todos);
  };

  const saveTodo = async (todo: ITodo) => {
    setTodos([...todos, todo]);

    await service().saveData({ ...todo });
  };

  const updateTodo = async (todo: ITodo) => {
    const findIndex = todos.findIndex((x) => x.id === todo.id);
    todos[findIndex] = todo;
    setTodos(todos);

    await service().updateData(todo.id, todo);
  };

  const removeTodo = async (id: number) => {
    await service().removeData(id);

    const temp = todos.filter((x) => x.id !== id);
    setTodos(temp);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        saveTodo,
        updateTodo,
        removeTodo,
        fetchTodo,
        refreshTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
