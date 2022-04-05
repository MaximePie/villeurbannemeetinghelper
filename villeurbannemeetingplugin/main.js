console.log("Loading");

const URL = "https://mairie-meeting.herokuapp.com";

let repetitionDelay = 60000;
setInterval(() => {
  document.getElementById("anchorCal")?.click();

  const selectDayAvailable = document.querySelector('[data-handler=selectDay]');
  if (selectDayAvailable) {
    // A day has been found !!

    const month = selectDayAvailable.dataset.month;
    const day = selectDayAvailable.firstChild?.innerHTML;

    fetch(`${URL}/meetingFound?day=${day}&month=${month}`)
  }
  else {
    fetch(`${URL}/meetingGone`)
  }
}, repetitionDelay)