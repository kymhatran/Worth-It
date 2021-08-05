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
      const isSingular = require('is-singular')

      const calculatedImpact = (parseInt(cost) / parseInt(weeklyContribution)).toFixed() * 7
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
      const quotes= ["Not so fast, Moneybags", "Are you Jerry Maguire? Coz I'm going to need you to SHOW ME THE MONEY!", "Look's like someone's got champagne taste on a beer budget"]
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

      let i = 0;
      const speed = 100; /* The speed/duration of the effect in milliseconds */

      function typeWriter() {
        if (i < randomQuote.length) {
          document.getElementById("heading").innerHTML += randomQuote.charAt(i);
          i++;

          if (isSingular(purchase)) {
            impact.innerHTML =  `If you buy this ${purchase} for $${cost}:`
          } else {
           impact.innerHTML = `If you buy these ${purchase} for $${cost}:`
         }

         setback.innerHTML = `You'll need to wait another ${calculatedImpact} days to achieve your goal`
         days_reason.innerHTML = `That's ${calculatedImpact} days longer, you're whinging about ${goal_reason}`
         context.innerHTML = `Plus, $${cost} is equivalent to ${items} ${emoji_name}`;
         visual.innerHTML = emoji.repeat(items);
         impactBtns.style.display = "flex"
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

