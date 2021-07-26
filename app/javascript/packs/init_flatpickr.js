 import flatpickr from "flatpickr";
require("flatpickr/dist/flatpickr.css")
document.addEventListener("turbolinks:load", (event) => {

 flatpickr('#goal_due_date',{
    altInput: true,
    dateFormat: 'd/m/Y',
  });
});
