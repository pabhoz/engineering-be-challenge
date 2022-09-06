import { CreateToDoDto } from './interfaces/todos.dto';
import { ToDo } from './schemas/todo.schema';

const ToDosService = {
  get: async (id: string, userId: string) => ToDo.findOne({ _id: id, owner: userId }),
  getAll: async (userId: string) => ToDo.find({owner: userId}),
  create: async (data: CreateToDoDto) => {
    const todo = new ToDo(data);
    return todo.save();
  }
};

export default ToDosService;
