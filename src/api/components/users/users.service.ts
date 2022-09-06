import bcrypt from 'bcrypt';
import { CreateUserDto } from './interfaces/users.dto';
import { User } from './schemas/user.schema';

const UsersService = {
  get: async (id: string) => User.findOne({ _id: id }),
  getByUsername: async (username: string) => User.findOne({ username }),
  getAll: async () => User.find({}),
  create: async (data: CreateUserDto) => {
    console.log(data);
    const password = await bcrypt.hash(data.password, 10);
    console.log(password);
    const user = new User({...data, password});
    return user.save();
  }
};

export default UsersService;
