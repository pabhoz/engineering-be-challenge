# Every.io Engineer BE Challenge

REST API to manage TODOs with Auth implementation.

## Set-Up

This project is Dockerized to speed up and guarantee its execution in any environment. The steps for its execution are described below:

1. Build the docker Image by using the command `docker-compose build`
2. Compose the containers by using the command `docker-compose up -d`
3. Start using the API.

## API Specs

You can access the API Docs [here](https://documenter.getpostman.com/view/395131/VV4zQuyo) and also you can use the following json to import the collection on postman:

```json
{
	"info": {
		"_postman_id": "744b77a0-4278-4f4e-b493-a59ba0c6f1fb",
		"name": "EveryIO REST API",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "395131"
	},
	"item": [
		{
			"name": "Users",
			"item": [
				{
					"name": "Create User",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "username",
									"value": "john",
									"type": "text"
								},
								{
									"key": "password",
									"value": "doe",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3000/users",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users"
							]
						}
					},
					"response": [
						{
							"name": "Create User",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "username",
											"value": "john",
											"type": "text"
										},
										{
											"key": "password",
											"value": "doe",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://localhost:3000/users",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"users"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "143"
								},
								{
									"key": "ETag",
									"value": "W/\"8f-2UgmHb8mEyKIaSOYcJaDlkVEoeM\""
								},
								{
									"key": "Date",
									"value": "Tue, 06 Sep 2022 08:46:10 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"username\": \"john\",\n    \"password\": \"$2b$10$AlA5HTs0/smjLKI1cN76eewdxch3enR7Qrq2LGeDS.v1T4HJDVljK\",\n    \"role\": 2,\n    \"_id\": \"631708d24c7d624eb0460e37\",\n    \"__v\": 0\n}"
						}
					]
				},
				{
					"name": "Update User",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "x-access-token",
								"value": "{{client_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "password",
									"value": "321",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3000/users/:id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "6316f04c6f23e011c39819ab"
								}
							]
						}
					},
					"response": [
						{
							"name": "Update User",
							"originalRequest": {
								"method": "PUT",
								"header": [
									{
										"key": "x-access-token",
										"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE3MDhkMjRjN2Q2MjRlYjA0NjBlMzciLCJ1c2VybmFtZSI6ImpvaG4iLCJpYXQiOjE2NjI0NTQyNDAsImV4cCI6MTY2MjQ1Nzg0MH0.P7T4RH_fV6ra14o90EWGamIWOTmUr5KRO-qwyXswDCQ",
										"type": "text"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "password",
											"value": "321",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://localhost:3000/users/:id",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"users",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "6316f04c6f23e011c39819ab"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "51"
								},
								{
									"key": "ETag",
									"value": "W/\"33-Ad01KHQ5RD8wEQT1+WjDOolX98w\""
								},
								{
									"key": "Date",
									"value": "Tue, 06 Sep 2022 09:40:38 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"_id\": \"6316f04c6f23e011c39819ab\",\n    \"password\": \"321\"\n}"
						}
					]
				},
				{
					"name": "Delete User",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "x-access-token",
								"value": "{{client_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:3000/users/:id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "6316f62aab70f71d6e733b65"
								}
							]
						}
					},
					"response": [
						{
							"name": "Delete User",
							"originalRequest": {
								"method": "DELETE",
								"header": [
									{
										"key": "x-access-token",
										"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE3MDhkMjRjN2Q2MjRlYjA0NjBlMzciLCJ1c2VybmFtZSI6ImpvaG4iLCJpYXQiOjE2NjI0NTQyNDAsImV4cCI6MTY2MjQ1Nzg0MH0.P7T4RH_fV6ra14o90EWGamIWOTmUr5KRO-qwyXswDCQ",
										"type": "text"
									}
								],
								"url": {
									"raw": "http://localhost:3000/users/:id",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"users",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "6316f62aab70f71d6e733b65"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "55"
								},
								{
									"key": "ETag",
									"value": "W/\"37-XvotrChCSZc3BeIKAz3EthUQbmc\""
								},
								{
									"key": "Date",
									"value": "Tue, 06 Sep 2022 09:41:54 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"User 6316f62aab70f71d6e733b65 was deleted\"\n}"
						}
					]
				},
				{
					"name": "Get User",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/users/:id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "631708d24c7d624eb0460e37"
								}
							]
						}
					},
					"response": [
						{
							"name": "Get User",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:3000/users/:id",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"users",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "631708d24c7d624eb0460e37"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "143"
								},
								{
									"key": "ETag",
									"value": "W/\"8f-rbVstvSHhz7Pb24mkz5UDB0vlW8\""
								},
								{
									"key": "Date",
									"value": "Tue, 06 Sep 2022 08:55:58 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"_id\": \"631708d24c7d624eb0460e37\",\n    \"username\": \"john\",\n    \"password\": \"$2b$10$AlA5HTs0/smjLKI1cN76eewdxch3enR7Qrq2LGeDS.v1T4HJDVljK\",\n    \"role\": 2,\n    \"__v\": 0\n}"
						}
					]
				},
				{
					"name": "Get All Users",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/users",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users"
							]
						}
					},
					"response": [
						{
							"name": "Get All Users",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:3000/users",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"users"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "584"
								},
								{
									"key": "ETag",
									"value": "W/\"248-BwYNE7CI3jXjTFPsUhhetWXmrFE\""
								},
								{
									"key": "Date",
									"value": "Tue, 06 Sep 2022 08:54:54 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "[\n    {\n        \"_id\": \"6316f04c6f23e011c39819ab\",\n        \"username\": \"pabhoz\",\n        \"password\": \"$2b$10$tb4JOL2np/KKBgqh9kEIOOBBKawH/7m7idqAYKYDrE8lnUFLGLHwS\",\n        \"role\": 2,\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"631708d24c7d624eb0460e37\",\n        \"username\": \"john\",\n        \"password\": \"$2b$10$AlA5HTs0/smjLKI1cN76eewdxch3enR7Qrq2LGeDS.v1T4HJDVljK\",\n        \"role\": 2,\n        \"__v\": 0\n    }\n]"
						}
					]
				},
				{
					"name": "Login",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Setting JWT Token\", function () {",
									"    var jsonData = pm.response.json();",
									"    console.log(jsonData);",
									"    pm.collectionVariables.set(\"client_token\", jsonData.access_token);",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "username",
									"value": "john",
									"type": "text"
								},
								{
									"key": "password",
									"value": "doe",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3000/users/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								"login"
							]
						}
					},
					"response": [
						{
							"name": "Login",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "username",
											"value": "john",
											"type": "text"
										},
										{
											"key": "password",
											"value": "doe",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://localhost:3000/users/login",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"users",
										"login"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "215"
								},
								{
									"key": "ETag",
									"value": "W/\"d7-P2R5L3X0lfpN97kAWP9qxI1P9NY\""
								},
								{
									"key": "Date",
									"value": "Tue, 06 Sep 2022 08:57:31 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE3MDhkMjRjN2Q2MjRlYjA0NjBlMzciLCJ1c2VybmFtZSI6ImpvaG4iLCJpYXQiOjE2NjI0NTQ2NTEsImV4cCI6MTY2MjQ1ODI1MX0.yVZmfnAKrdPy_65o4L6QPH4tZ6nFoJego9l8faDf2JE\"\n}"
						}
					]
				}
			]
		},
		{
			"name": "ToDos",
			"item": [
				{
					"name": "Create ToDo",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "x-access-token",
								"value": "{{client_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "title",
									"value": "Finish code challenge",
									"type": "text"
								},
								{
									"key": "description",
									"value": "To finish the code challenge, including docs",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3000/todos",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"todos"
							]
						}
					},
					"response": [
						{
							"name": "Create ToDo",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "x-access-token",
										"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE3MDhkMjRjN2Q2MjRlYjA0NjBlMzciLCJ1c2VybmFtZSI6ImpvaG4iLCJpYXQiOjE2NjI0NTQyNDAsImV4cCI6MTY2MjQ1Nzg0MH0.P7T4RH_fV6ra14o90EWGamIWOTmUr5KRO-qwyXswDCQ",
										"type": "text"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "title",
											"value": "Finish code challenge",
											"type": "text"
										},
										{
											"key": "description",
											"value": "To finish the code challenge, including docs",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://localhost:3000/todos",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"todos"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "187"
								},
								{
									"key": "ETag",
									"value": "W/\"bb-m2G4RE3agAHJCtl/KvQOPVrWujg\""
								},
								{
									"key": "Date",
									"value": "Tue, 06 Sep 2022 08:59:57 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"title\": \"Finish code challenge\",\n    \"description\": \"To finish the code challenge, including docs\",\n    \"status\": \"To do\",\n    \"owner\": \"631708d24c7d624eb0460e37\",\n    \"_id\": \"63170c0d9631ce8c901f761a\",\n    \"__v\": 0\n}"
						}
					]
				},
				{
					"name": "Update ToDo",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "x-access-token",
								"value": "{{client_token}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "status",
									"value": "2",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3000/todos/:id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"todos",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "63170c0d9631ce8c901f761a"
								}
							]
						}
					},
					"response": [
						{
							"name": "Update ToDo",
							"originalRequest": {
								"method": "PUT",
								"header": [
									{
										"key": "x-access-token",
										"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE3MDhkMjRjN2Q2MjRlYjA0NjBlMzciLCJ1c2VybmFtZSI6ImpvaG4iLCJpYXQiOjE2NjI0NTQyNDAsImV4cCI6MTY2MjQ1Nzg0MH0.P7T4RH_fV6ra14o90EWGamIWOTmUr5KRO-qwyXswDCQ",
										"type": "text"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "status",
											"value": "2",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://localhost:3000/todos/:id",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"todos",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "63170c0d9631ce8c901f761a"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "82"
								},
								{
									"key": "ETag",
									"value": "W/\"52-7CqWIzk2FXAe3iBqDNKAGVZZJr8\""
								},
								{
									"key": "Date",
									"value": "Tue, 06 Sep 2022 09:23:34 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"_id\": \"63170c0d9631ce8c901f761a\",\n    \"status\": \"2\",\n    \"owner\": \"631708d24c7d624eb0460e37\"\n}"
						}
					]
				},
				{
					"name": "Delete ToDo",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "x-access-token",
								"value": "{{client_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:3000/todos/:id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"todos",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "63170c0d9631ce8c901f761a"
								}
							]
						}
					},
					"response": [
						{
							"name": "Delete ToDo",
							"originalRequest": {
								"method": "DELETE",
								"header": [
									{
										"key": "x-access-token",
										"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE3MDhkMjRjN2Q2MjRlYjA0NjBlMzciLCJ1c2VybmFtZSI6ImpvaG4iLCJpYXQiOjE2NjI0NTQyNDAsImV4cCI6MTY2MjQ1Nzg0MH0.P7T4RH_fV6ra14o90EWGamIWOTmUr5KRO-qwyXswDCQ",
										"type": "text"
									}
								],
								"url": {
									"raw": "http://localhost:3000/todos/:id",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"todos",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "63170c0d9631ce8c901f761a"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "55"
								},
								{
									"key": "ETag",
									"value": "W/\"37-yJ9Te2hRaq+7P8Fplf5EtPKLVFI\""
								},
								{
									"key": "Date",
									"value": "Tue, 06 Sep 2022 09:30:29 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"ToDo 63170c0d9631ce8c901f761a was deleted\"\n}"
						}
					]
				},
				{
					"name": "Get All User ToDos",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "x-access-token",
								"value": "{{client_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:3000/todos",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"todos"
							]
						}
					},
					"response": [
						{
							"name": "Get All User ToDos",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "x-access-token",
										"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE3MDhkMjRjN2Q2MjRlYjA0NjBlMzciLCJ1c2VybmFtZSI6ImpvaG4iLCJpYXQiOjE2NjI0NTQyNDAsImV4cCI6MTY2MjQ1Nzg0MH0.P7T4RH_fV6ra14o90EWGamIWOTmUr5KRO-qwyXswDCQ",
										"type": "text"
									}
								],
								"url": {
									"raw": "http://localhost:3000/todos",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"todos"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "189"
								},
								{
									"key": "ETag",
									"value": "W/\"bd-DPRQGRu9G6IdbDMJp7apfshEAaE\""
								},
								{
									"key": "Date",
									"value": "Tue, 06 Sep 2022 09:00:07 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "[\n    {\n        \"_id\": \"63170c0d9631ce8c901f761a\",\n        \"title\": \"Finish code challenge\",\n        \"description\": \"To finish the code challenge, including docs\",\n        \"status\": 1,\n        \"owner\": \"631708d24c7d624eb0460e37\",\n        \"__v\": 0\n    }\n]"
						}
					]
				},
				{
					"name": "Get User ToDo",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "x-access-token",
								"value": "{{client_token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:3000/todos/:id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"todos",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "63170c0d9631ce8c901f761a"
								}
							]
						}
					},
					"response": [
						{
							"name": "Get User ToDo - Not Logged in",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:3000/todos/:id",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"todos",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "63170c0d9631ce8c901f761a"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "76"
								},
								{
									"key": "ETag",
									"value": "W/\"4c-23F48J53T5Gow3Fx3t/V98aqPnk\""
								},
								{
									"key": "Date",
									"value": "Tue, 06 Sep 2022 09:00:17 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"error\": true,\n    \"message\": \"You don't have permissions to perform this action\"\n}"
						},
						{
							"name": "Get User ToDo",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "x-access-token",
										"value": "{{client_token}}",
										"type": "text"
									}
								],
								"url": {
									"raw": "http://localhost:3000/todos/:id",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"todos",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "63170c0d9631ce8c901f761a"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "187"
								},
								{
									"key": "ETag",
									"value": "W/\"bb-T7dPNmI71mxVlHcl2/EKVp96GoU\""
								},
								{
									"key": "Date",
									"value": "Tue, 06 Sep 2022 09:01:02 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"_id\": \"63170c0d9631ce8c901f761a\",\n    \"title\": \"Finish code challenge\",\n    \"description\": \"To finish the code challenge, including docs\",\n    \"status\": 1,\n    \"owner\": \"631708d24c7d624eb0460e37\",\n    \"__v\": 0\n}"
						}
					]
				}
			]
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "client_token",
			"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE3MDhkMjRjN2Q2MjRlYjA0NjBlMzciLCJ1c2VybmFtZSI6ImpvaG4iLCJpYXQiOjE2NjI0NTQyNDAsImV4cCI6MTY2MjQ1Nzg0MH0.P7T4RH_fV6ra14o90EWGamIWOTmUr5KRO-qwyXswDCQ",
			"type": "string"
		}
	]
}
```

