import { CreateToDoDto } from './interfaces/todos.dto';
import { ToDo } from './schemas/todo.schema';

const ToDosService = {
  get: async (id: string) => ToDo.findOne({ _id: id }),
  getAll: async () => ToDo.find({}),
  create: async (data: CreateToDoDto) => {
    const todo = new ToDo(data);
    return todo.save();
  }
};

export default ToDosService;
