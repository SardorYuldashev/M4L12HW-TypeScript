import { NotFoundError } from "../../shared/errors";
import User from "./User";

interface RemoveUserInput {
  id: string;
};

const removeUser = async ({ id }: RemoveUserInput) => {
  const existing = await User.findOne({ _id: id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  };

  return User.findByIdAndUpdate(id, {
    is_deleted: true,
    username: `${existing.username}_${Date.now()}_deleted`,
  }).select("-password -is_deleted");
};

export default removeUser;