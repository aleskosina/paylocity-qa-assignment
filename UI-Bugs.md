# UI Bugs

## UI-001
### Title
First Name and Last Name are displayed in reversed order in employee table

### Severity
Medium

### Description
Employee first name and last name are displayed in the wrong columns in the employee table.
The issue occurs despite correct data being sent in the request payload.

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

## UI-002
### Title
No feedback is provided when invalid values are entered in Dependents field

### Severity
High

### Description
When invalid input (e.g., non-numeric values, negative numbers, or empty input) is entered into the Dependents field and the user attempts to submit the form, no validation message or feedback is displayed.

### Steps to Reproduce
1. Log in to the application
2. Click Add Employee
3. Enter valid First Name and Last Name
4. Enter invalid value into Dependents:
   - `abc`
   - `-1`
   - empty
5. Click Add

### Expected Result
The application should provide clear feedback to the user indicating that the input is invalid (e.g., "Dependents must be a non-negative integer").

### Actual Result
No feedback or validation message is displayed. The form remains open and no action occurs.

### Impact
Users receive no guidance on how to correct their input, leading to confusion and poor user experience.

## UI-003
### Title
Edit Employee modal incorrectly labeled as "Add Employee"

### Severity
Low

### Description
When editing an existing employee, the modal dialog is labeled "Add Employee" instead of indicating edit/update mode.

### Steps to Reproduce
1. Log in to the application
2. Click the Edit action for an employee
3. Observe the modal dialog title

### Expected Result
Modal should display a context-appropriate title such as "Edit Employee" or "Update Employee".

### Actual Result
Modal title displays "Add Employee" even in edit mode, while the action button says "Update".

### Evidence
![Edit modal label issue](screenshots/ui-002-edit-modal-label.png)

### Impact
This creates inconsistent UI behavior and may confuse users about whether they are creating a new employee or editing an existing one.