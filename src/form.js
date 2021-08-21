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
