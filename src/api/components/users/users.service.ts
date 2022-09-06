import bcrypt from 'bcrypt';
import { CreateUserDto, UpdateUserDto } from './interfaces/users.dto';
import { User } from './schemas/user.schema';

const UsersService = {
  get: async (id: string) => User.findOne({ _id: id }),
  getByUsername: async (username: string) => User.findOne({ username }),
  getAll: async () => User.find({}),
  create: async (data: CreateUserDto) => {
    const password = await bcrypt.hash(data.password, 10);
    const user = new User({ ...data, password });
    return user.save();
  },
  update: async (id: string, data: UpdateUserDto) => {
    const update = {...data};
    if (data?.password) {
      update.password = await bcrypt.hash(data.password, 10);
    }
    return User.updateOne({ _id: id }, { $set: update});
  },
  delete: async (id: string) => User.deleteOne({ _id: id }),
};

export default UsersService;
