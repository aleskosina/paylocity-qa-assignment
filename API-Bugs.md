# API Bugs

## API-001
### Title
API accepts invalid negative dependents value and silently normalizes it

### Severity
High

### Description
The API accepts invalid input for the `dependents` field (negative numbers) and processes the request successfully instead of rejecting it.

Additionally, the API silently modifies the value to `0` without informing the client.

There is also an inconsistency in field naming:
- request uses `dependents`
- response returns `dependants`

This violates API contract consistency and can cause confusion for API consumers.

### Steps to Reproduce
1. Open the application in a web browser:  
   https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Benefits

2. Log in using the provided credentials

3. Open browser Developer Tools:
   - Press `F12`
   - Switch to the **Console** tab

4. Execute the following request in the browser console (replace `<YOUR_TOKEN>` with the provided token):

    fetch("https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees", {
      method: "POST",
      headers: {
        "Authorization": "Basic <YOUR_TOKEN>",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: "Test",
        lastName: "User",
        dependents: -5
      })
    }).then(async r => {
      console.log("STATUS:", r.status);
      console.log("TEXT:", await r.text());
    });

5. Press Enter to execute the request  
6. Observe the output in the Console

### Expected Result
- API should return `400 Bad Request`
- A validation error should indicate that `dependents` must be a non-negative integer
- API should not silently modify input values
- Field naming should remain consistent (`dependents`)

### Actual Result
- API returns `200 OK`
- Employee is successfully created
- `dependents` value is silently changed to `0`
- Response contains inconsistent field name `dependants`

### Evidence
Console output example:

    STATUS: 200
    TEXT: {"firstName":"Test","lastName":"User","dependants":0,...}

Screenshot:

![API invalid dependents](screenshots/api-001-invalid-dependents.png)

### Impact
- Invalid data is accepted by the system
- Silent data modification can lead to data integrity issues
- Inconsistent API field naming may break client integrations
- Lack of validation reduces reliability of the API


## API-002
### Title
Potential data integrity risk – duplicate employee creation

### Severity
Medium

### Description
The API allows creation of multiple employee records with identical business data (e.g. first name, last name, dependents), generating a new unique ID for each request.

There is no visible mechanism to detect or prevent accidental duplicate submissions.

### Steps to Reproduce
1. Send a `POST /api/Employees` request with valid employee data (e.g. First Name = "Alesko", Last Name = "Test", Dependents = 2)
2. Repeat the same request with identical payload
3. Observe that each request creates a new employee record with a different ID

### Expected Result
The system should mitigate duplicate record creation, for example by:

- enforcing business-level uniqueness (if required), or
- detecting duplicate submissions, or
- supporting idempotency for repeated requests

### Actual Result
Each request creates a new employee record with a unique ID, even when all business-relevant fields are identical.

### Impact
- Risk of accidental duplicate employee records
- Data quality and reporting inconsistencies
- Potential issues in retry scenarios (e.g. network timeouts or repeated submissions)

### Notes
While `POST` operations are not inherently idempotent, the absence of any visible duplicate handling mechanism increases the risk of unintended data duplication in real-world usage scenarios.

This could be improved through UI-level feedback (e.g. duplicate warning), backend validation, or idempotency handling depending on business requirements.