# Paylocity QA Assignment

This repository contains the results of a QA test assignment focused on identifying issues in a sample Benefits Dashboard application.

## Scope
Testing focused on:
- Employee management (Add, Edit, Delete)
- Data consistency and calculations
- Input validation and user experience
- Basic API validation

## Findings
Identified issues are documented in:

- `UI-Bugs.md` – User interface and UX issues
- `API-Bugs.md` – API-related issues

## Notes
- API behavior was inspected using browser DevTools and direct API calls.
- One critical API validation issue was identified.
- Calculations for salary, benefits cost, and net pay were verified and found to be correct.

## Summary
The main issues identified include:
- Incorrect mapping of First Name and Last Name in the UI
- Missing user feedback for invalid input in the Dependents field
- Inconsistent labeling in the Edit Employee modal
- API accepts invalid input and silently modifies data