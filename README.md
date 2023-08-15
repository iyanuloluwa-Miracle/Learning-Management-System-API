# Learning-Management-System-API
#### Welcome to the official documentation for the Learning Management System (LMS) API. This API empowers you to seamlessly manage user registration, authentication, course creation, and student enrollment within your educational platform.

## Base URL

The base URL for all API endpoints is: http://localhost:3000/api


## Authenication

To access protected endpoints, you must first obtain an access token by making a POST request to the `/login` endpoint.

### Endpoint: `/login`

* Method: `POST`

* Request: 

```json
{
 "email": "your.email@example.com",
  "password": "your-password"
}

```

* Response:
```json
{
  "token": "your-access-token"
}

```
Include the access token in the `Authorization` header for subsequent requests

## User Registration

Create a new user account.


### Endpoint: `/signup`

* Method: `POST`

* Request Body:

```json
{
  "username": "new-username",
  "email": "new.email@example.com",
  "password": "your-password"
}


```

* Response:

```json
{
  "message": "Registration successful"
}



```
