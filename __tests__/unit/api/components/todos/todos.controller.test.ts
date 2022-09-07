import { requestMock, responseMock, todosMock, updateControllerResponseMock } from '../../../../../__mocks__/ToDos.mock';

var mockGetSpy = jest.fn().mockResolvedValue(todosMock[0]);
var mockGetAllSpy = jest.fn().mockResolvedValue(todosMock);
var mockCreateSpy = jest.fn().mockResolvedValue(todosMock[0]);
var mockUpdateSpy = jest.fn().mockResolvedValue(updateControllerResponseMock);

jest.mock('../../../../../src/api/components/todos/todos.service', jest.fn(() => ({
   get: mockGetSpy,
   getAll: mockGetAllSpy,
   create: mockCreateSpy,
   update: mockUpdateSpy,
})));

import ToDosController from '../../../../../src/api/components/todos/todos.controller';

describe('ToDos controller', () => {

    afterEach(() => jest.clearAllMocks());

    it('Get method must execute service get to retrieve a todo, and respond with a 200 status code', async () => {
        await ToDosController.get(requestMock, responseMock);
        expect(responseMock.status).toBeCalledTimes(1);
        expect(responseMock.status).toBeCalledWith(200);
        expect(mockGetSpy).toBeCalledTimes(1);
        expect(responseMock.status(200).send).toBeCalledWith(todosMock[0]);
    });

    it('GetAll method must execute service getAll to retrieve a all users ToDos, and respond with a 200 status code', async () => {
        await ToDosController.getAll(requestMock, responseMock);
        expect(responseMock.status).toBeCalledTimes(1);
        expect(responseMock.status).toBeCalledWith(200);
        expect(mockGetAllSpy).toBeCalledTimes(1);
        expect(responseMock.status(200).send).toBeCalledWith(todosMock);
    });

    it('Create method must execute service create to create a new User ToDo, and respond with a 201 status code', async () => {
        await ToDosController.create(requestMock, responseMock);
        expect(responseMock.send).toBeCalledTimes(1);
        expect(responseMock.send).toBeCalledWith(todosMock[0]);
        expect(responseMock.send().status).toBeCalledWith(201);
        expect(mockCreateSpy).toBeCalledTimes(1);
    });

    it('Update method must execute service update to modify a User ToDo, and respond with a 200 status code', async () => {
        await ToDosController.update(requestMock, responseMock);
        expect(responseMock.send).toBeCalledTimes(1);
        expect(responseMock.send).toBeCalledWith(updateControllerResponseMock);
        expect(responseMock.send().status).toBeCalledWith(200);
        expect(mockUpdateSpy).toBeCalledTimes(1);
    });

})