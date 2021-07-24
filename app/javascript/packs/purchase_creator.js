const purchaseForm = document.getElementById("purchase_form");


function calculator() {

    if (purchaseForm) {
    const weeklyContribution = document.getElementById("weekly-contribution").innerHTML;
    purchaseForm.addEventListener('submit', (event) => {
      event.preventDefault()
      const impact = document.getElementById("impact")
      const setback = document.getElementById("setback")

      const context = document.getElementById("context")
      const visual = document.getElementById("visual")
      // const goal_name = document.getElementById("select").innerHTML
      // const goal_reason = document.getElementById("goal_reason").value

      const days_reason = document.getElementById("days_reason")
      const purchase = purchaseForm.querySelectorAll("input")[0].value
      const cost = purchaseForm.querySelectorAll("input")[1].value

      const calculatedImpact = (parseInt(cost) / parseInt(weeklyContribution)) * 7

      const coffees= (parseInt(cost) / 5)
      const object= `☕️`;


      impact.innerHTML = `If you buy this ${purchase} for $${cost}:`
      setback.innerHTML = `⭐️ You won’t achieve your {goal_name} for another ${calculatedImpact} days`
      days_reason.innerHTML = `📆 That's ${calculatedImpact} days without your {goal_reason}`
      context.innerHTML = `Plus, ${cost} is equivalent to ${coffees} coffees`;
      visual.innerHTML = object.repeat(coffees);

      const days_reason = document.getElementById("days_reason")
      const purchase = purchaseForm.querySelectorAll("input")[0].value
      const cost = purchaseForm.querySelectorAll("input")[1].value
      const calculatedImpact = (parseInt(cost) / parseInt(weeklyContribution)) * 7

      impact.innerHTML = `If you buy this ${purchase} for $${cost}:`
      setback.innerHTML = `⭐️ You won’t achieve your {insert savings goal} for another ${calculatedImpact} days`
      days_reason.innerHTML = `📆 That's ${calculatedImpact} days without your {reason for saving}`
    });
  }
}

// function calculateImpact(){
//   const parsedWeeklyContribution = parseInt(weeklyContribution)
//   const parsedCost = parseInt(cost)
//   console.log(cost,parsedCost)
//   return (parsedCost)
// }

export {calculator};
