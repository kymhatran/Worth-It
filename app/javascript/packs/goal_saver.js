// Package to have easy formatting of dates cause Javascript hates dates.
import { format } from 'date-fns'

// Function to only work on pages with a goal_form
// This grabs balance of selected savings account and weekly contribution
function goalSaver() {
  const goalForm = document.getElementById("goal_form")
    if (goalForm) {
      const selectElement = document.querySelector('#goal_form');
      const todaysDate = format(new Date(), 'dd/MM/yyyy');
      // Grabs the date, which is in format dd/mm/yyyy
      const selectedDate = document.querySelector('#goal_due_date');

      // Parse a date from string format of dd/mm/yyyy into a date
      function parseDate(str) {
          var mdy = str.split('/');
          return new Date(mdy[2], mdy[1]-1, mdy[0]);
      }
      // Finds the amount of milliseconds difference between two dates and then
      // returns it into days
      function datediff(first, second) {
          return Math.round((second-first)/(1000*60*60*24));
      }
      // Block of code to retrieve the balance of selected savings account
      selectElement.addEventListener('change', (event) => {
        const result = document.querySelector('#result');
        result.textContent = selectElement.options[selectElement.selectedIndex].dataset.balance;
      });

      // Block of code to find out weekly contributions
      selectedDate.addEventListener('change', (event) => {
        const balance = parseInt(document.querySelector('#result').innerText);
        const goal_amount = parseFloat(document.querySelector('#amount').value);
        const weeks = document.querySelector('#weeks');
        // use date diff to find amount of days between two dates then divide into weeks
        const noWeeks = Math.floor(datediff(parseDate(todaysDate), parseDate(selectedDate.value)) / 7);
        const amount = Math.round((goal_amount - balance) / noWeeks);
        weeks.textContent = amount;
    });
  };
}
export {goalSaver};
