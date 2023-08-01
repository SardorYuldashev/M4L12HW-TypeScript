import { NotFoundError } from "../../shared/errors";
import User from "./User";

interface ShowUserInput {
  id: string;
};

const showUser = async ({ id }: ShowUserInput) => {
  const user = await User.findOne({ _id: id, is_deleted: false }).select(
    "-password -is_deleted"
  );

  if (!user) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  };

  return user;
};

export default showUser;