import mongoose from 'mongoose';
import { StatusEnum } from '../interfaces/todos';

const toDoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  status: {
    type: Number,
    enum: StatusEnum,
    default: StatusEnum.TODO,
  },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const ToDo = mongoose.model('ToDo', toDoSchema);

export { ToDo };
