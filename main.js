import { ERRORS } from "./src/libs";
console.log(ERRORS);

const formEls =[ 
    ...Array.from(document.querySelectorAll("input")),
    document.querySelector("#message"),
];

const submitBtn = document.querySelector("Button[type='submit']");

formEls.forEach((el) => {
    el.addEventListener("blur", (e) => {
      console.log(ERRORS.find(error => error.id === e.target.id).validate(e.target.value));
    });
  });