import mongoose from 'mongoose';

interface List {
  _id: string;
  name: string;
  is_deleted: boolean;
  user: any;
  todos: any;
  createdAt: Date;
  updatedAt: Date;
};

const listSchema = new mongoose.Schema<List>(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: true,
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
    todos: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: "Todo",
      default: [],
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

const List = mongoose.model<List>("List", listSchema);

export default List;