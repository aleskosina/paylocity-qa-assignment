# API Bugs

## API-001
### Title
API accepts invalid negative dependents value and silently normalizes it

### Severity
High

### Description
The API accepts invalid input for the `dependents` field (negative numbers) and processes the request successfully instead of rejecting it.  
Additionally, the API silently modifies the value to `0` without informing the client.  

The response also uses inconsistent field naming (`dependants` instead of `dependents`), which violates API contract consistency.

### Steps to Reproduce
1. Open the application in a web browser:  
   https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Benefits

2. Log in using the provided credentials

3. Open browser Developer Tools:
   - Press `F12`
   - Switch to the **Console** tab

4. Paste the following code into the Console (replace `<YOUR_TOKEN>` with the provided token):

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