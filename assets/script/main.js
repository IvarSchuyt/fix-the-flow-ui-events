let interaction = document.querySelector("a:nth-of-type(12)");

interaction.addEventListener("click", jumpHandler);
interaction.addEventListener("animationend", jumpHandler);

function jumpHandler() {
  interaction.classList.toggle("jump");
}

// -------------------------------------------------------------
// -------------------------------------------------------------

let frontend = document.querySelector("a:nth-of-type(1)");

frontend.addEventListener("click", highlightHandler);
frontend.addEventListener("animationend", highlightHandler);

function highlightHandler() {
  frontend.classList.toggle("frontend");
}

// -------------------------------------------------------------
// -------------------------------------------------------------

let design = document.querySelector("a:nth-of-type(2)");

design.addEventListener("click", scaleHandler);
design.addEventListener("animationend", scaleHandler);

function scaleHandler() {
  design.classList.toggle("design");
}

// -------------------------------------------------------------
// -------------------------------------------------------------

let and = document.querySelector("a:nth-of-type(3)");

and.addEventListener("click", rotationHandler);
and.addEventListener("animationend", rotationHandler);

function rotationHandler() {
  and.classList.toggle("and");
}

// -------------------------------------------------------------
// -------------------------------------------------------------

let development = document.querySelector("a:nth-of-type(4)");

development.addEventListener("click", fallHandler);
development.addEventListener("animationend", fallHandler);

function fallHandler() {
  development.classList.toggle("development");
}

// -------------------------------------------------------------
// -------------------------------------------------------------

let sprint5 = document.querySelector("a:nth-of-type(5)");

sprint5.addEventListener("click", shapeHandler);
sprint5.addEventListener("animationend", shapeHandler);

function shapeHandler() {
  sprint5.classList.toggle("sprint5");
}
