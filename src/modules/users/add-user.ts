import { hash } from 'bcryptjs';
import User from './User';

interface AddUserInput {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
};

const addUser = async (data: AddUserInput) => {
  const hashedPassword = await hash(data.password, 10);
  const result = await User.create({
    ...data,
    password: hashedPassword,
  });

  const { password, is_deleted, ...rest } = result.toObject();

  return rest;
};

export default addUser;
