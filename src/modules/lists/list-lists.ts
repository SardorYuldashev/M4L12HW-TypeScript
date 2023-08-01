import List from "./List";

const listLists = async ({ filters = {} }) => {
  const lists = await List.find({ ...filters, is_deleted: false });

  return lists;
};

export default listLists;