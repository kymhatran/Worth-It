
function progressBar() {
  const elem = document.querySelectorAll(".value-bar");
  elem.forEach(ele => {
    let end_width = +ele.dataset.max;
    let width = 1;
    let speed = 10;
    function frame() {
      if (width <= end_width) {
        width++;
        ele.style.width = width + '%';
      }
    }
    const timer = setInterval(frame, speed);
    if (width == end_width) {
      clearInterval(timer)
    }
  });

  const elemb = document.querySelectorAll(".date-bar");
  elemb.forEach(ele => {
    let end_width = +ele.dataset.date;
    let width = 1;
    let speed = 10;
    function frame() {
      if (width <= end_width) {
        width++;
        ele.style.width = width + '%';
      }
    }
    const timer = setInterval(frame, speed);
    if (width == end_width) {
      clearInterval(timer)
    }
  });
}
export {progressBar};
