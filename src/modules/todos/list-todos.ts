import Todo from "./Todo";

const listTodos = async ({ filters = {} }) => {
  const lists = await Todo
    .find({ ...filters, is_deleted: false })
    .populate("list", "name")
    .populate("user", "username");;

  return lists;
};

export default listTodos;