function animateValue() {
   const counters = document.querySelectorAll('.animatednumber');
   const speed = 100;

   counters.forEach( counter => {
      const animate = () => {
         const value = +counter.dataset.max;
         const data = +counter.innerText;

         const time = value / speed;
        if(data < value) {
             counter.innerText = Math.ceil(data + time);
             setTimeout(animate, 1);
           }else{
             counter.innerText = value;
           }

      }

      animate();
   });



}

export {animateValue};

// animateValue("value", 100, 25, 5000);
