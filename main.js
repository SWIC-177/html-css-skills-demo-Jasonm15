import { CONCEAL_ERROR, DISPLAY_ERROR, VALIDATIONS } from "./src/libs";

const formElements = [
  ...document.querySelectorAll("input"),
  document.querySelector("#message"),
];

formElements.forEach(element => {
  element.addEventListener("blur", (event) => {
    const validation = VALIDATIONS.find(v => v.fieldId === event.target.id);
    if (validation && !validation.validate(event.target.value)) {
      DISPLAY_ERROR(event.target, validation.errorMessage);
    } else {
      CONCEAL_ERROR(event.target);
    }
  });

  element.addEventListener("input", (event) => {
   
    const validation = VALIDATIONS.find(v => v.fieldId === event.target.id);
    if (validation && validation.validate(event.target.value)) {
      CONCEAL_ERROR(event.target);
    }
  });
});
