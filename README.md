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
## Course Management

Effortlessly manage courses within the LMS.


### Endpoint: `/courses`

* Method: `POST`
* Headers:

```
Authorization: Bearer your-access-token
```

* Request Body:

```json
{
  "title": "Introduction to Programming",
  "description": "Learn the fundamentals of coding."
}
```
* Response Body:

```json
{
  "_id": "course-id",
  "title": "Introduction to Programming",
  "description": "Learn the fundamentals of coding."
}
```

## Student Enrollment:

Enroll students in courses for a dynamic learning experience.

### Endpoint: `/enroll`

* Method: `POST`
* Headers:

```
Authorization: Bearer your-access-token
```

* Request Body:

```json
{
  "studentId": "student-id",
  "courseId": "course-id"
}

```
* Response Body:

```json
{
  "_id": "enrollment-id",
  "student": "student-id",
  "course": "course-id",
  "enrolledAt": "enrollment-date"
}

```

## Error Responses

In case of errors, the API will provide relevant error messages.

Example:

```json
{
  "message": "Invalid token"
}

```

Replace placeholders like `your-access-token`, `course-id`, `student-id`, and `enrollment-id` with actual values for effective interaction with the API.

This documentation offers a concise overview of how to utilize the LMS API endpoints, facilitating seamless integration and empowering you to create a seamless educational experience.