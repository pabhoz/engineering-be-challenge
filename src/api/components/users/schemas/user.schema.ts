import mongoose from 'mongoose';
import { RoleEnum } from '../interfaces/users';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    enum: RoleEnum,
    default: RoleEnum.REGULAR,
  },
});

const User = mongoose.model('User', userSchema);

export { User };
