import validator from "validator";

export const VALIDATIONS = [
  {
    fieldId: "name",
    errorMessage: "Please enter your full name.",
    validate: (value) => value.length > 6 && value.includes(" "),
  },
  {
    fieldId: "email",
    errorMessage: "Please enter a valid email address.",
    validate: validator.isEmail,
  },
  {
    fieldId: "phone",
    errorMessage: "Please enter a valid phone number.",
    validate: (value) => validator.isMobilePhone(value, "en-US"),
  },
  {
    fieldId: "message",
    errorMessage: "Please enter a message between 10 and 100 characters.",
    validate: (value) => value.length >= 10 && value.length <= 100,
  },
];

export const DISPLAY_ERROR = (element, message) => {
    const parent = element.parentNode;
    let errorElement = parent.querySelector(".error");
  
    if (!errorElement) {
      errorElement = document.createElement("span");
      errorElement.className = "error"; 
      parent.appendChild(errorElement);
    }
  
    errorElement.textContent = message;
    errorElement.classList.add("is-error"); 
  };
  
  export const CONCEAL_ERROR = (element) => {
  const errorDisplay = element.parentNode.querySelector(".error");
  if (errorDisplay) {
    errorDisplay.classList.remove("is-error"); 
    errorDisplay.textContent = ''; 
  }
};
