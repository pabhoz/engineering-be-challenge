import { createToDoDtoMock, deleteResponseMock, logggedUserMock, todosMock, updateResponseMock } from '../../../../../__mocks__/ToDos.mock';

var mockFindOneSpy = jest.fn().mockResolvedValue(todosMock[0]);
var mockFindSpy = jest.fn().mockResolvedValue(todosMock);
var mockSaveSpy = jest.fn(() => todosMock[0]);
var mockUpdateOneSpy = jest.fn().mockResolvedValue(updateResponseMock);
var mockDeleteOneSpy = jest.fn().mockResolvedValue(deleteResponseMock);

jest.mock('../../../../../src/api/components/todos/schemas/todo.schema', jest.fn(() => ({
    ToDo: {
        save: mockSaveSpy,
        findOne: mockFindOneSpy,
        find: mockFindSpy,
        updateOne: mockUpdateOneSpy,
        deleteOne: mockDeleteOneSpy
    }
})));

/* jest.mock('../../../../../src/api/components/todos/schemas/todo.schema', () => ({
    ToDo: jest.fn(() => ({
        ...todosMock[0],
        save: mockSaveSpy
    }))
})); */

import ToDosService from '../../../../../src/api/components/todos/todos.service';

describe('ToDos service', () => {

    afterEach(() => jest.clearAllMocks());

    xit('create method must create a new ToDo for a logged user and return the created ToDo', async () => {
        const todo = await ToDosService.create(createToDoDtoMock);
        expect(todo).toBe(todosMock[0]);
        expect(mockSaveSpy).toBeCalledTimes(1);
        expect(mockSaveSpy).toBeCalledWith();
    });

    it('get method must return an specific ToDo by provided id own by a logged user ', async () => {
        const id = todosMock[0]._id;
        const todo = await ToDosService.get(id, logggedUserMock._id);
        const expectedQueryObject = {
            _id: id,
            owner: logggedUserMock._id
        };
        expect(todo).toBe(todosMock[0]);
        expect(mockFindOneSpy).toBeCalledTimes(1);
        expect(mockFindOneSpy).toBeCalledWith(expectedQueryObject);
    });

    it('getAll method must return all ToDos owned by a logged user ', async () => {
        const todo = await ToDosService.getAll(logggedUserMock._id);
        const expectedQueryObject = {
            owner: logggedUserMock._id
        };
        expect(todo).toBe(todosMock);
        expect(mockFindSpy).toBeCalledTimes(1);
        expect(mockFindSpy).toBeCalledWith(expectedQueryObject);
    });

    it('update method must return an updated ToDo for a logged user', async () => {
        const id = todosMock[0]._id;
        const todo = await ToDosService.update(id, { title: 'changed title' });
        expect(todo).toBe(updateResponseMock);
        expect(mockUpdateOneSpy).toBeCalledTimes(1);
    });

    it('delete method must delete a ToDo using the provided id by a logged user ', async () => {
        const id = todosMock[0]._id;
        const todo = await ToDosService.delete(id);
        const expectedQueryObject = {
            _id: id,
        };
        expect(todo).toBe(deleteResponseMock);
        expect(mockDeleteOneSpy).toBeCalledTimes(1);
        expect(mockDeleteOneSpy).toBeCalledWith(expectedQueryObject);
    });
})