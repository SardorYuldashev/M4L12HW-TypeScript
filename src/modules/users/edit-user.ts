import { NotFoundError } from '../../shared/errors';
import User from './User';

interface EditUserInput {
  id: string,
  changes: {
    first_name?: string;
    last_name?: string;
    username?: string;
    password?: string;
  }
}

const editUser = async ({ id, ...changes }: EditUserInput) => {
  const existing = await User.findOne({ _id: id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return User.findByIdAndUpdate(id, changes, { new: true }).select(
    "-password -is_deleted"
  );
};

export default editUser;