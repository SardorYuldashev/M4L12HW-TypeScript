import { NotFoundError } from "../../shared/errors";
import List from "./List";

interface ShowListInput {
  id: string;
  user: {
    id: string
  }
};

const showList = async ({ id, user }: ShowListInput) => {
  const list = await List.findOne({ _id: id, is_deleted: false, user })
    .select("-is_deleted")
    .populate({
      path: "todos",
      select: "-is_deleted",
    });

  if (!list) {
    throw new NotFoundError("List topilmadi.");
  };

  return list;
};

export default showList;