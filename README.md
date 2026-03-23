# Paylocity QA Assignment

This repository contains the results of a QA test assignment focused on identifying issues and implementing automated tests for a sample Benefits Dashboard application.

## Scope

Testing focused on:

- Employee management (Add, Edit, Delete)
- Data consistency and calculations
- Input validation and user experience
- Basic API behavior verification

## Repository Contents

- UI-Bugs.md – User interface and UX issues
- API-Bugs.md – API-related issues
- cypress/ – automated API and UI tests
- README.md – summary and execution notes

## Approach

For this assignment, I prioritized depth over breadth.

Instead of attempting to cover all possible scenarios, I focused on a smaller set of high-value tests targeting:

- core user workflows
- validation boundaries
- defect-prone API behavior
- scenarios identified during exploratory testing

This reflects a practical risk-based testing approach: validating the most critical functionality first and building coverage where it provides the highest value.

## Findings

Identified issues are documented in:

- UI-Bugs.md
- API-Bugs.md

### Key Issues

- Incorrect mapping of First Name and Last Name in the UI
- Missing user feedback for invalid input in the Dependents field
- Inconsistent labeling in the Edit Employee modal
- API accepts invalid input and silently modifies data

One of the most significant findings is an API validation defect where invalid dependent values are accepted instead of being rejected.

## Automation Coverage

The Cypress test suite includes focused API and UI tests for selected high-risk scenarios:

- employee creation with valid input (API + UI)
- validation of invalid input (API + UI), including negative dependents case
- verification of API behavior for invalid data (known defect case)

The scope of automation was intentionally limited to these scenarios to demonstrate validation logic, API behavior, and end-to-end flow coverage.
Update and delete operations were covered during exploratory (manual) testing as part of the bug-finding phase, but were not included in the automated test suite.
Additional automation coverage could be extended in a real project if needed.

## API Notes

The API test design was based on the provided Swagger documentation.

During implementation, the contract was used to identify:

- endpoint: /api/Employees
- required request fields (e.g. username)
- field naming (dependants)
- expected validation behavior

Actual API behavior was verified against real responses using DevTools and direct API calls.

## How to Run

Install dependencies:

npm install

Run Cypress (interactive mode):

npx cypress open

Run Cypress (headless mode):

npx cypress run

## Local Configuration

API tests require an authentication token.

Create a local file named cypress.env.json in the project root with the following content:

{
  "authToken": "Basic <token I got via email>"
}

## Notes

- API behavior was validated using both Swagger documentation and real responses
- Exploratory testing was used to identify high-risk areas
- Calculations for salary, benefits cost, and net pay were verified and found to be correct
- API tests use unique usernames to ensure repeatability and independence, while UI tests focus on flow validation with simplified test data.