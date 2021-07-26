 import flatpickr from "flatpickr";
document.addEventListener("turbolinks:load", (event) => {

 flatpickr('#goal_due_date',{
    altInput: true,
    dateFormat: 'd/m/Y',
  });
});
