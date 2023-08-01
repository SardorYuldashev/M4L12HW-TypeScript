import { NotFoundError } from "../../shared/errors";
import List from "./List";

interface EditListInput {
  id: string;
  user: {
    id: string;
  }
  changes: {
    name?: string;
  };
};

const editList = async ({ id, user, ...changes }: EditListInput) => {
  const existing = await List.findOne({ _id: id, is_deleted: false, user });

  if (!existing) {
    throw new NotFoundError("List topilmadi.");
  };

  return List.findByIdAndUpdate(id, changes, { new: true }).select(
    "-is_deleted"
  );
};

export default editList;