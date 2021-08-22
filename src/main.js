import "./form";

const form = document.querySelector("[data-js='form-input']");
const divColors = document.querySelector("[data-js='colors-selected']");
const select = document.createElement("select");
const colors = ["red", "green", "blue", "orange", "black"];

colors.forEach((color) => {
  const option = document.createElement("option");
  option.value = `${color}`;
  option.textContent = `${color}`;
  select.appendChild(option);
});

select.setAttribute("multiple", "");
form.appendChild(select);

select.addEventListener("change", (e) => {
  divColors.innerHTML = "";
  return [...e.target.selectedOptions].map((element) => {
    addBoxColors(element);
    return element;
  });
});

function addBoxColors(element) {
  const boxColor = document.createElement("div");
  boxColor.setAttribute("class", element.value);
  divColors.appendChild(boxColor);
}

function removeBoxColors(element) {
  const selectedElement = document.querySelector(`.${element.value}`);
  divColors.remove(selectedElement);
}
