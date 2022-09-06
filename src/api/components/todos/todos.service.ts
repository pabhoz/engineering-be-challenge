import { CreateToDoDto, UpdateToDoDto } from './interfaces/todos.dto';
import { ToDo } from './schemas/todo.schema';

const ToDosService = {
  get: async (id: string, userId: string) => ToDo.findOne({ _id: id, owner: userId }),
  getAll: async (userId: string) => ToDo.find({ owner: userId }),
  create: async (data: CreateToDoDto) => {
    const todo = new ToDo(data);
    return todo.save();
  },
  update: async (id: string, data: UpdateToDoDto) => ToDo.updateOne({ _id: id }, { $set: {...data}}),
  delete: async (id: string) => ToDo.deleteOne({ _id: id }),
};

export default ToDosService;
