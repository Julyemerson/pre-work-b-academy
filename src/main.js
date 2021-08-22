import "./form";

const form = document.querySelector("[data-js='form-input']");
const divColors = document.querySelector("[data-js='colors-selected']");
const select = document.createElement("select");

const blue = document.createElement("option");
blue.setAttribute("data-js", "azul");
const orange = document.createElement("option");
orange.setAttribute("data-js", "laranja");
const green = document.createElement("option");
green.setAttribute("data-js", "verde");
const red = document.createElement("option");
red.setAttribute("data-js", "vermelho");
const black = document.createElement("option");
black.setAttribute("data-js", "preto");

blue.text = "azul";
orange.text = "laranja";
green.text = "verde";
red.text = "vermelho";
black.text = "preto";

select.add(blue);
select.add(orange);
select.add(green);
select.add(red);
select.add(black);

select.setAttribute("multiple", true);
form.appendChild(select);

select.addEventListener("change", (e) => {
  const colorsElements = [...e.target.selectedOptions].map((element) => {
    addBoxColors(element);
    return element;
  });

  const elementsToRemove = [...e.currentTarget].filter((opt) => {
    if (!opt.selected) {
      return removeBoxColors(opt);
    }
  });

  console.log(elementsToRemove);
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
