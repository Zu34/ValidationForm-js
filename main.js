

document.addEventListener('DOMContentLoaded', function () {
  const formElements = {
    name: document.getElementById("name"),
    address: document.getElementById("address"),
    email: document.getElementById("email"),
    password: document.getElementById("password"),
    subject: document.getElementById("subject"),
    comment: document.getElementById("comment"),
    agree: document.getElementById("agree"),
    submitButton: document.getElementById("submit"),
    resetButton: document.getElementById("reset"),
  };

  const errorMessages = {
    name: document.getElementById("name-error"),
    address: document.getElementById("address-error"),
    email: document.getElementById("email-error"),
    password: document.getElementById("password-error"),
    subject: document.getElementById("subject-error"),
    agree: document.getElementById("agree-error"),
  };

  // single function with several features for form validation. 
  // It combines all the necessary validation checks into one submit event listener!!!
  
  formElements.submitButton.addEventListener("click", function (event) {
    let isValid = true;

    // Name validation
    if (formElements.name.value.trim() === "") {
      errorMessages.name.textContent = "Name is required.";
      isValid = false;
    } else {
      errorMessages.name.textContent = "";
    }

    // Address validation
    if (formElements.address.value.trim() === "") {
      errorMessages.address.textContent = "Address is required.";
      isValid = false;
    } else {
      errorMessages.address.textContent = "";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formElements.email.value.trim())) {
      errorMessages.email.textContent = "Please enter a valid email address!!.";
      isValid = false;
    } else {
      errorMessages.email.textContent = "";
    }

    // Password validation
    if (formElements.password.value.trim().length < 6) {
      errorMessages.password.textContent =
        "Password must be at least 6 characters.";
      isValid = false;
    } else {
      errorMessages.password.textContent = "";
    }

    // Subject validation
    if (formElements.subject.value === "") {
      errorMessages.subject.textContent = "Please pick up a course.";
      isValid = false;
    } else {
      errorMessages.subject.textContent = "";
    }

    // Agree checkbox validation
    if (!formElements.agree.checked) {
      errorMessages.agree.textContent = "You must agree to the all above.";
      isValid = false;
    } else {
      errorMessages.agree.textContent = "";
    }

    // Prevent form submission if validation fails
    if (!isValid) {
      event.preventDefault();
    } else {
      resetForm();
    }
  });

  formElements.resetButton.addEventListener("click", resetForm);

  function resetForm() {
    // Clear all error messages
    Object.values(errorMessages).forEach((msg) => (msg.textContent = ""));

    // Reset form inputs
    for (let key in formElements) {
      if (formElements[key] instanceof HTMLElement) {
        if (formElements[key].type !== "checkbox") {
          formElements[key].value = "";
        } else {
          formElements[key].checked = false;
        }
      }
    }

    // Reset button styles after reset
    formElements.submitButton.style.width = "";
    formElements.submitButton.style.height = "";
    formElements.resetButton.style.width = "";
    formElements.resetButton.style.height = "";
  }
});


