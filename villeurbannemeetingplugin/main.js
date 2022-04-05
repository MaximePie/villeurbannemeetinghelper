console.log("Loading");

const URL = "https://mairie-meeting.herokuapp.com";

setInterval(() => {
  console.log("Fetching");
  document.getElementById("anchorCal")?.click();

  const selectDayAvailable = document.querySelector('[data-handler=selectDay]');
  console.log(selectDayAvailable);
  if (selectDayAvailable) {
    // A day has been found !!

    const month = selectDayAvailable.dataset.month;
    const day = selectDayAvailable.firstChild?.innerHTML;

    fetch(`${URL}/meetingFound?day=${day}&month=${month}`)
  }
  else {
    fetch(`${URL}/meetingGone`)
  }
}, 5000)