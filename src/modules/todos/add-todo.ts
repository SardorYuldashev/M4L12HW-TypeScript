import { NotFoundError } from "../../shared/errors";
import List from "../lists/List";
import Todo from "./Todo";

interface AddTodoInput {
  list: string;
  user: {
    id: string;
  };
  rest: {
    text: string;
    list: string;
  };
};

const addTodo = async ({ list, user, ...rest }: AddTodoInput) => {
  const existingList = await List.findOne({ _id: list, user });

  if (!existingList) {
    throw new NotFoundError("List topilmadi.");
  }

  const result = await Todo.create({ list, user, ...rest });

  existingList.todos.push(result._id);
  existingList.save();

  const { is_deleted, ...other } = result.toObject();

  return other;
};

export default addTodo;
