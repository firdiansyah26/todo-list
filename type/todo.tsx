export interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
}
export type TodoContextType = {
  todos: ITodo[];
  fetchTodo: () => void;
  refreshTodo: (todo: ITodo) => void;
  saveTodo: (todo: ITodo) => void;
  updateTodo: (todo: ITodo) => void;
  updateCheckTodo: (todo: ITodo) => void;
  removeTodo: (id: number) => void;
};
