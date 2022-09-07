import { Request, Response } from "express";
import { CreateToDoDto } from "../src/api/components/todos/interfaces/todos.dto";

export const logggedUserMock = {
    _id: '1234',
    username: 'testUser'
}

export const todosMock = [
    {
        "_id": "63170c0d9631ce8c901f761a",
        "title": "Finish code challenge",
        "description": "To finish the code challenge, including docs",
        "status": 1,
        "owner": "631708d24c7d624eb0460e37",
        "__v": 0
    }
];

export const updateResponseMock  = {
    _id: todosMock[0]._id,
    status:todosMock[0].status,
    owner: todosMock[0].owner
}

export const deleteResponseMock = {
    "message": `ToDo ${todosMock[0]._id} was deleted`
};

export const createToDoDtoMock: CreateToDoDto = {
    title: 'Test ToDo',
    description: 'Unit testing creation',
    owner: logggedUserMock._id
}

export const updateControllerResponseMock = {
    _id: '1234',
    description: 'Unit testing creation',
    owner: '63170c0d9631ce8c901f761a',
    title: 'Test ToDo',
    status: 1
}

export const requestMock = {
    app: {
        locals: {
            user: {
                _id: '63170c0d9631ce8c901f761a',
                username: 'Test User'
            }
        }
    },
    params: {
        id: '1234'
    },
    body: {
        title: 'Test ToDo',
        description: 'Unit testing creation',
        status: 1,
        owner: '631708d24c7d624eb0460e37'
    }
} as unknown as Request;

export const responseMock = {
        status: jest.fn().mockReturnValue({
            send: jest.fn(),
        }),
        send: jest.fn().mockReturnValue({
            status: jest.fn(),
        }),
        json: jest.fn().mockReturnValue({})
} as unknown as Response;