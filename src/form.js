const form = document.querySelector("[data-js='form-input']");
const divColors = document.querySelector("[data-js='colors-selected']");
const select = document.createElement("select");
const colors = ["red", "green", "blue", "orange", "black"];
const inputText = document.querySelector('[data-js="inputName"]');
const prohibetedWord = ["de", "da", "do", "dos"];

function capitalize(str) {
  const auxArray = str.currentTarget.value.split(" ");
  const capitalized = auxArray
    .map((item) => {
      return prohibetedWord.includes(item.toLowerCase())
        ? item.toLowerCase()
        : item.charAt(0).toUpperCase() + item.slice(1);
    })
    .join()
    .replaceAll(",", " ");
  str.currentTarget.value = capitalized;
}

inputText.addEventListener("input", capitalize);

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
