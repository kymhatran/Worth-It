import { format } from 'date-fns'
function goalSaver() {
  const goalForm = document.getElementById("goal_form")
    if (goalForm) {
      const selectElement = document.querySelector('#goal_form');
      const todaysDate = format(new Date(), 'dd/MM/yyyy');
      const selectedDate = document.querySelector('#goal_due_date');

      function parseDate(str) {
          var mdy = str.split('/');
          return new Date(mdy[2], mdy[1]-1, mdy[0]);
      }

      function datediff(first, second) {
          return Math.round((second-first)/(1000*60*60*24));
      }

      selectElement.addEventListener('change', (event) => {
        const result = document.querySelector('#result');
        result.textContent = selectElement.options[selectElement.selectedIndex].dataset.balance;
      });

      selectedDate.addEventListener('change', (event) => {
        const balance = parseInt(document.querySelector('#result').innerText);
        const goal_amount = parseFloat(document.querySelector('#amount').value);
        const weeks = document.querySelector('#weeks');
        const noWeeks = Math.floor(datediff(parseDate(todaysDate), parseDate(selectedDate.value)) / 7);
        const amount = Math.round((goal_amount - balance) / noWeeks);
        weeks.textContent = amount;
    });
  };
}
export {goalSaver};
