const formCars = document.querySelector('[data-js="form-cars"]');
const table = document.querySelector('[data-js="table"]');

const getElementsForm = (e) => (elementName) => {
  return e.target.elements[elementName];
};

formCars.addEventListener("submit", (e) => {
  e.preventDefault();

  const getElements = getElementsForm(e);
  const image = getElements("image");
  const brandModel = getElements("brand-model");
  const year = getElements("year");
  const plate = getElements("plate");
  const color = getElements("color");

  const arrElements = [image, brandModel, year, plate, color];

  const tr = document.createElement("tr");
  arrElements.forEach((el) => {
    const td = document.createElement("td");
    td.textContent = el.value;
    tr.appendChild(td);
  });

  table.appendChild(tr);
  e.target.reset();
  image.focus();
});
