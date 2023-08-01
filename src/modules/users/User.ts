import mongoose from 'mongoose';

interface User {
  _id: string;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  is_deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const userSchema = new mongoose.Schema<User>(
  {
    first_name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    last_name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    username: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    password: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    is_deleted: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const User = mongoose.model<User>("User", userSchema);

export default User;