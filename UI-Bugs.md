# UI Bugs

## UI-001
### Title
First Name and Last Name are displayed in reversed order in employee table

### Severity
Medium

### Description
Employee first name and last name are displayed in the wrong columns in the employee table.

### Steps to Reproduce
1. Log in to the application
2. Click **Add Employee**
3. Enter:
   - First Name: Joža
   - Last Name: Nováček
   - Dependents: 2
4. Submit the form
5. Observe the employee table

### Expected Result
The **First Name** column should display `Joža` and the **Last Name** column should display `Nováček`.

### Actual Result
The **First Name** column displays `Nováček` and the **Last Name** column displays `Joža`.

### Evidence
Request payload shows:
- `firstName: "Joža"`
- `lastName: "Nováček"`

UI table displays these values in reversed columns:

![Swapped names bug](screenshots/ui-001-swapped-names.png)

### Impact
Incorrect employee data is presented to the user, which may lead to confusion and misidentification.