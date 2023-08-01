import mongoose from "mongoose";

interface Todo {
  _id: string;
  text: string;
  is_done: boolean;
  is_deleted: boolean;
  user: any;
  list: any;
  createdAt: Date;
  updatedAt: Date;
};

const todoSchema = new mongoose.Schema<Todo>(
  {
    text: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    is_done: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
    is_deleted: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    list: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "List",
      required: true,
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

const Todo = mongoose.model<Todo>("Todo", todoSchema);

export default Todo;