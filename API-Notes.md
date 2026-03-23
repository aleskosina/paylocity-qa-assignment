# API Reference

Based on the provided Swagger documentation for the Paylocity Benefits API.

## Base URL
`https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod`

## Authentication
API requests require Basic Authorization using the assigned auth token.

Example header:
`Authorization: Basic <authToken>`

## Employees Endpoint

### Create Employee
- **Method:** `POST`
- **Path:** `/api/Employees`

### Get All Employees
- **Method:** `GET`
- **Path:** `/api/Employees`

### Get Employee By ID
- **Method:** `GET`
- **Path:** `/api/Employees/{id}`

### Delete Employee
- **Method:** `DELETE`
- **Path:** `/api/Employees/{id}`

## Employee Payload Notes

Required fields:
- `firstName`
- `lastName`
- `username`

Relevant optional fields used in tests:
- `dependants`
- `salary`

Important note:
- The API uses the field name `dependants` (not `dependents`).

## Validation Notes

- According to the API contract, negative `dependants` values should be rejected with HTTP `400 Bad Request`.
- In practice, the API accepts invalid values and normalizes them, which represents a validation defect.