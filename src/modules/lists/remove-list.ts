import { NotFoundError } from "../../shared/errors";
import List from "./List";

interface RemoveListInput {
  id: string;
  user: {
    id: string
  }
};

const removeList = async ({ id, user }: RemoveListInput) => {
  const existing = await List.findOne({ _id: id, is_deleted: false, user });

  if (!existing) {
    throw new NotFoundError("List topilmadi.");
  };

  return List.findByIdAndUpdate(id, { is_deleted: true }).select("-is_deleted");
};

export default removeList;