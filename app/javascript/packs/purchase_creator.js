const isSingular = require('is-singular')

function calculator() {
  const purchaseForm = document.getElementById("purchase_form");
  if (purchaseForm) {
    const weeklyContribution = document.getElementById("weekly-contribution").innerHTML
    purchaseForm.addEventListener('submit', (event) => {
      event.preventDefault()
      const heading = document.getElementById("heading")
      const impact = document.getElementById("impact")
      const list = document.getElementById("list")
      const setback = document.getElementById("setback")
      const context = document.getElementById("context")
      const days_reason = document.getElementById("days_reason")
      const visual = document.getElementById("visual")
      const goal_name = document.getElementById("goal_name").getAttribute("value")
      const goal_reason = document.getElementById("goal_reason").innerHTML
      const purchase = purchaseForm.querySelectorAll("input")[0].value
      const cost = purchaseForm.querySelectorAll("input")[1].value
      const listChildren = document.querySelectorAll('#list>li')
      const impactBtns = document.querySelector('.impact-btns')
      const again = document.getElementById("again")



      const calculatedImpact = (parseInt(cost) / parseInt(weeklyContribution)).toFixed() * 7

      // This is randomizing the objects, value and emojis
      const object= [
      [`☕️`, 5, "coffees served by a bearded Fitzroy hipster"],
      [`🍹`, 10, "Aperol Spritzes."],
      [`🍕`, 25, "large pizzas from Crust."],
      [`🥃`, 10, "shots of patron."],
      [`🥖`, 7, "loaves of Baker's Delight bread."],
      [`🥑`, 10, "servings of smashed avo."],
      [`🍔`, 4, "Maccas cheeseburgers."],
      [`🍆`, 30, "months worth of a subscription to Tinder Gold."],
      [`💪`, 40, "weeks worth of a membership to F45."],
      [`💻`, 11, "months worth of a Netflix subscription."],
      [`⛽️`, 60, "tanks of petrol."],
      ]

      const randomObject = object[Math.floor(Math.random() * object.length)];
      console.log(randomObject);

      const items= (parseInt(cost) / randomObject[1]).toFixed();
      const emoji = randomObject[0];
      const emoji_name = randomObject[2];
      // let randomQuote = "";
      // let positiveQuote = "";

      const quotes= ["Not so fast, Moneybags.", "Are you Jerry Maguire? Coz I'm going to need you to SHOW ME THE MONEY!", "Look's like someone's got champagne taste on a beer budget.", "Seems like you've got 99 problems and money would solve 98 of them.", "Someone's gonna have to live off Mi Goreng until payday.", "Money can't buy happiness - every rich person ever.", "If a was a rich girl, na na na na.", "You can't pay your bills with a hug."]
      let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      const positiveQuote = "Treat yourself, you deserve it!"

      let finalQuote = (calculatedImpact > 7 ? randomQuote : positiveQuote);
      console.log(finalQuote);
      let i = 0;
      const speed = 50; /* The speed/duration of the effect in milliseconds */

      function typeWriter() {
        if (i < finalQuote.length) {
            document.getElementById("heading").innerHTML += finalQuote.charAt(i);
            // document.getElementById("heading").innerHTML += positiveQuote.charAt(i);
            i++;
            if (i == finalQuote.length - 1) {
            if (isSingular(purchase)) {
              impact.innerHTML =  `If you buy this ${purchase} for $${cost}:`
            } else {
             impact.innerHTML = `If you buy these ${purchase} for $${cost}:`
            }

            if (calculatedImpact > 7) {
              setback.innerHTML = `You'll need to wait another ${calculatedImpact} days to achieve your goal`
              days_reason.innerHTML = `That's ${calculatedImpact} days longer you're whinging ${goal_reason}`
            } else {
              setback.innerHTML = `It'll only set you back by less than a week to achieve your goal`
              days_reason.innerHTML = `That's only a few days longer you're whinging ${goal_reason}`
            }



           context.innerHTML = `Plus, $${cost} is equivalent to ${items} ${emoji_name}`;
           visual.innerHTML = emoji.repeat(items);
           impactBtns.style.display = "flex"
           again.classList.remove("d-none")
         }
       }

       setTimeout(typeWriter, speed);

     }

      listChildren.forEach((listChild) => {
        console.log(listChild)
        listChild.classList.add("list-item")
      });


      // the output to the calculator builder results

      typeWriter()
          // list.style.listStyleType = "disc"
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

