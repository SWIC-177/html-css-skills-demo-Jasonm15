import {ERRORS} from"./src/lib"

const formEls =[ 
    ...Array.from(document.querySelectorAll("input")),
    document.querySelector("#message"),
];

const submitBtn = document.querySelector("Button[type='submit']");

formEls.forEach((el) => {
    el.addEventListener("blur", (e) => {
      console.log("blur event fired", e.target.id, e.target.value);
    });
  });