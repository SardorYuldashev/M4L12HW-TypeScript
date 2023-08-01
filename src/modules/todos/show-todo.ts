import { NotFoundError } from "../../shared/errors";
import Todo from "./Todo";

interface ShowTodoInput {
  id: string;
  user: {
    id: string;
  };
};

const showTodo = async ({ id, user }: ShowTodoInput) => {
  const todo = await Todo.findOne({ _id: id, is_deleted: false, user })
    .select("-is_deleted")
    .populate("list", "name")
    .populate("user", "username");

  if (!todo) {
    throw new NotFoundError("Todo topilmadi.");
  }

  return todo;
};

export default showTodo;
