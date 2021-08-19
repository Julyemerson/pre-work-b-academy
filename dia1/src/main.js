import "./style.css";

const app = document.querySelector('[data-js="app"]');
const link = document.querySelector('[data-js="link"]');

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`;

link.addEventListener("click", (element) => {
  const HtmlElement = element.currentTarget;
  app.classList.toggle("hidden-div");

  HtmlElement.innerText === "Esconder"
    ? (HtmlElement.innerHTML = "Mostrar")
    : (HtmlElement.innerHTML = "Esconder");
});
