import { CreateUserDto } from './interfaces/users.dto';
import { User } from './schemas/user.schema';

const UsersService = {
  get: async (id: string) => User.findOne({ _id: id }),
  getAll: async () => User.find({}),
  create: async (data: CreateUserDto) => {
    const user = new User(data);
    return user.save();
  }
};

export default UsersService;
