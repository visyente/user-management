## Getting Started

run to install node modules:

```bash
npm i
# or
npm install
```

create database name user-management

change db config details from src/db/knexfile.js

run knex for migration and seeds inside src/db:

```bash
knex migrate:latest

knex seed:run
```
run the development server:

```bash
npm run dev
# or
yarn dev
```

[API routes] 
can be accessed on [http://localhost:4000/user/list](http://localhost:4000/user). This endpoint can be edited in `src/routes/getAllUser.js`.

## Open Endpoints

Open endpoints require no Authentication.

* [Login] : `POST /login/`

default username & password

Key: username Value: admin
Key: password Value: password

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

Headers

Key           Value
Authorization bearer [token]

Each endpoint manipulates or displays information related to the User whose
Token is provided with the request:

* [Show user list]: `GET /user/list/`
* [Create user] : `POST /user/create`
* [Update user] : `PUT /user/update/:id`
* [Remove user] : `DELETE /user/remove/:id`
* [Multiple remove user] : `DELETE /user/multipleRemove`

To test the api endpoint is postman.

create fields

Key: first_name, last_name, address,
post_code,
contact_no,
password,
username,
email,

multiple remove user

raw JSON(application/json)

```json
[{
	"id": 28,
	"first_name": "John"
}, {
	"id": 56,
	"first_name": "Ken"
}, {
	"id": 89,
	"first_name": "Mary"
}]
```



