import { compare } from "bcryptjs";
import config from "../../shared/config";
import User from "./User";
import jwt from 'jsonwebtoken';
import { UnauthorizedError } from "../../shared/errors";

interface LoginUserInput {
  username: string;
  password: string;
};

const loginUser = async ({ username, password }: LoginUserInput) => {
  const existing = await User.findOne({ username, is_deleted: false });

  if (!existing) {
    throw new UnauthorizedError("Incorrect username or password.");
  };

  const match = await compare(password, existing.password);

  if (!match) {
    throw new UnauthorizedError("Incorrect username or password.");
  };

  const token = jwt.sign({ user: { id: existing._id } }, config.jwt.secret);

  return token;
};

export default loginUser;