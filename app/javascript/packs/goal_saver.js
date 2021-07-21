const selectElement = document.querySelector('#select');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('#result');
  result.textContent = selectElement.value;
});
