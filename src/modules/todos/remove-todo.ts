import { NotFoundError } from "../../shared/errors";
import Todo from "./Todo";

interface RemoveTodoInput {
  id: string;
  user: {
    id: string;
  };
};

const removeTodo = async ({ id, user }: RemoveTodoInput) => {
  const existing = await Todo.findOne({ _id: id, is_deleted: false, user });

  if (!existing) {
    throw new NotFoundError("Todo topilmadi.");
  };

  return Todo.findByIdAndUpdate(id, { is_deleted: true }).select("-is_deleted");
};

export default removeTodo;