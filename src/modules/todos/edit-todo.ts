import { NotFoundError } from "../../shared/errors";
import List from "../lists/List";
import Todo from "./Todo";

interface EditTodoInput {
  id: string;
  user: {
    id: string;
  };
  list: string;
  changes: {
    text?: string;
    list?: string;
    is_done?: boolean;
  };
};

const editTodo = async ({ id, user, list, ...changes }: EditTodoInput) => {
  const existing = await Todo.findOne({ _id: id, is_deleted: false, user });

  if (!existing) {
    throw new NotFoundError("Todo topilmadi.");
  }

  if (list) {
    const existingList = await List.findOne({ _id: list, user });

    if (!existingList) {
      throw new NotFoundError("List topilmadi.");
    }
  }

  return Todo.findByIdAndUpdate(id, changes, { new: true }).select(
    "-is_deleted"
  );
};

export default editTodo;