import List from "./List";

interface AddListInput {
  name: string;
};

const addList = async (data: AddListInput) => {
  const result = await List.create(data);

  const { is_deleted, ...rest } = result.toObject();

  return rest;
};
export default addList;