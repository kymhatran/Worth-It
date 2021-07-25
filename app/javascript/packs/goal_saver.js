import { format } from 'date-fns'
if (document.getElementById('goal_form')) {
  const selectElement = document.querySelector('#goal_form');

  selectElement.addEventListener('change', (event) => {
    const result = document.querySelector('#result');
    result.textContent = selectElement.options[selectElement.selectedIndex].dataset.balance;
  });


  const todaysDate = format(new Date(), 'dd/MM/yyyy')
  console.log(todaysDate)



  function parseDate(str) {
      var mdy = str.split('/');
      return new Date(mdy[2], mdy[1]-1, mdy[0]);
  }

  function datediff(first, second) {
      return Math.round((second-first)/(1000*60*60*24));
  }

  const selectedDate = document.querySelector('#goal_due_date');

  selectedDate.addEventListener('change', (event) => {
    const balance = parseInt(document.querySelector('#result').innerText);
    const goal_amount = parseFloat(document.querySelector('#amount').value);
    const weeks = document.querySelector('#weeks');
    const noWeeks = Math.floor(datediff(parseDate(todaysDate), parseDate(selectedDate.value)) / 7);
    const amount = Math.round((goal_amount - balance) / noWeeks);
    weeks.textContent = amount;
  });
}
