const purchaseForm = document.getElementById("purchase_form");


function calculator() {

    if (purchaseForm) {
      const weeklyContribution = document.getElementById("weekly-contribution").innerHTML
        purchaseForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const heading = document.getElementById("heading")
        const impact = document.getElementById("impact")
        const setback = document.getElementById("setback")
        const context = document.getElementById("context")
        const days_reason = document.getElementById("days_reason")
        const visual = document.getElementById("visual")
        const goal_name = document.getElementById("goal_name").innerHTML
        const goal_reason = document.getElementById("goal_reason").value
        const purchase = purchaseForm.querySelectorAll("input")[0].value
        const cost = purchaseForm.querySelectorAll("input")[1].value

      const calculatedImpact = (parseInt(cost) / parseInt(weeklyContribution)) * 7

// This is randomizing the objects, value and emojis

      const object= [
      [`☕️`, 5, "cups of coffee"],
      [`🍹`, 10, "Aperol Spritzes"],
      [`🍕`, 5, "slices of Pizza"],
      [`🥖`, 7, "loaves of artisanal bread"],
      [`🥑`, 10, "servings of smashed avo"],
      [`🍔`, 4, "Maccas cheeseburgers"]
      ]

      const randomObject = object[Math.floor(Math.random() * object.length)];
      console.log(randomObject);

      const items= (parseInt(cost) / randomObject[1]).toFixed()
      const emoji = randomObject[0]
      const emoji_name = randomObject[2]

// randomise the heading
      const quotes= ["Not so fast, Moneybags 💰 ", "Are you Jerry Maguire? Coz I'm going to need you to SHOW ME THE MONEY! 💵", "Look's like someone's got champagne 🥂 taste on a beer 🍺 budget"]
      const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

// the output to the calculator builder results

      heading.innerHTML = `${randomQuotes}`
      impact.innerHTML = `If you buy this (these) ${purchase} for $${cost}:`
      setback.innerHTML = `⭐️ You'll need to wait another ${calculatedImpact} days to achieve your goal`
      days_reason.innerHTML = `📆 That's ${calculatedImpact} days without your ${goal_reason}`
      context.innerHTML = `Plus, $${cost} is equivalent to ${items} ${emoji_name}`;
      visual.innerHTML = emoji.repeat(items);
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
