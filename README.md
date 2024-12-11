# Form Validation Script
## Overview

**This script provides a comprehensive form validation mechanism using plain JavaScript. It validates multiple fields within a form and displays appropriate error messages if the user inputs invalid data. The script also includes a reset feature to clear all input fields and error messages.**

## Features
* Name Validation: Ensures the 'Name' field is not empty.

* Address Validation: Ensures the 'Address' field is not empty.

* Email Validation: Validates that the 'Email' field contains a properly * formatted email address.

* Password Validation: Requires the 'Password' field to be at least 6 characters long.

* Subject Selection: Ensures the user picks a subject from the dropdown.

* Agree Checkbox: Requires the user to check the 'Agree' checkbox.
* Form Reset: Clears all input fields and error messages when the 'Reset' button is clicked.

### Note;
## If valid: ``Calls resetForm()`` to clear the form!

## ```resetForm()``` Function:
- Iterates over all form elements to clear their values.
- Ensures checkboxes are unchecked and text inputs are emptied.
- Clears all error messages by setting their text content to an empty string

## problem_Faced

 Using the <button> tag instead of <input type="button"> for form  submission and reset actions significantly improves the clarity and functionality of the JavaScript code.

  ``<button>`` is meant for actions and can be used both within and outside of forms, unlike ```<input type="button">``` which is primarily used for non-form elements and does not inherently belong to a form context. Using <button> with ```type="submit" and type="reset"```

##  JavaScript Integration:
Direct Reference: By using <button> instead of <input type="button">, the JavaScript directly interacts with these elements using their .value or .checked properties if needed. This simplifies the JavaScript logic since there’s no need for type-specific methods or conditional checks to handle button states.

![Theme Setting](./Screen%20Recording.gif)
