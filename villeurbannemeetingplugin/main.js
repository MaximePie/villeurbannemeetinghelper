console.log("Loading");

setInterval(() => {
  console.log("Fetching");
  document.getElementById("anchorCal")?.click();

  const selectDayAvailable = document.querySelector('[data-handler=selectDay]');
  console.log(selectDayAvailable);
  if (selectDayAvailable) {
    // A day has been found !!

    const month = selectDayAvailable.dataset.month;
    const day = selectDayAvailable.firstChild?.innerHTML;

    fetch(`http://localhost:5000/meetingFound?day=${day}&month=${month}`)
  }
  else {
    fetch(`http://localhost:5000/meetingGone`)
  }
}, 5000)