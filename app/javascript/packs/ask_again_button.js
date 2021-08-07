function askAgainButton() {
  const again = document.getElementById("again")
  const heading = document.getElementById("heading")
  const impact = document.getElementById("impact")
  const setback = document.getElementById("setback")
  const context = document.getElementById("context")
  const days_reason = document.getElementById("days_reason")
  const visual = document.getElementById("visual")
  const whatToBuy = document.getElementById("what-to-buy");
  const whatIsCost = document.getElementById("what-is-cost");

    if (again) {
      again.addEventListener("click",() =>  {
        heading.innerHTML= ""
        impact.innerHTML= ""
        setback.innerHTML=""
        context.innerHTML=""
        days_reason.innerHTML=""
        visual.innerHTML=""
        again.classList.add("d-none")
        whatToBuy.value= ""
        whatIsCost.value= ""
      })
    }


}

export {askAgainButton}
