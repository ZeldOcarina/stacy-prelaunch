import { countdownDiv } from "../model/model";

function setTimeValue(value) {
  if (value > 9) return JSON.stringify(value).split("");
  else return ["0", value];
}

export default function countdown() {
  // Set the date we're counting down to
  const countDownDate = new Date("Jun 21, 2020 00:00:00").getTime();

  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Set inner HTML
    const daysArr = setTimeValue(days);
    const hoursArr = setTimeValue(hours);
    const minutesArr = setTimeValue(minutes);
    const secondsArr = setTimeValue(seconds);

    countdownDiv.innerHTML = /*html*/ `
    <div class="countdown__figures-container">
    ${daysArr
      .map((figure) => {
        return /*html*/ `<span class="countdown__input">${figure}</span>`;
      })
      .join("")}
      <div class="countdown__label">Days</div>
    </div>
    <div class="countdown__figures-container">
    ${hoursArr
      .map((figure) => {
        return /*html*/ `<span class="countdown__input">${figure}</span>`;
      })
      .join("")}
      <div class="countdown__label">Hours</div>
    </div>
    <div class="countdown__figures-container">
    ${minutesArr
      .map((figure) => {
        return /*html*/ `<span class="countdown__input">${figure}</span>`;
      })
      .join("")}
      <div class="countdown__label">Minutes</div>
    </div>
    <div class="countdown__figures-container">
    ${secondsArr
      .map((figure) => {
        return /*html*/ `<span class="countdown__input">${figure}</span>`;
      })
      .join("")}
      <div class="countdown__label">Seconds</div>
    </div>`;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      countdownDiv.innerHTML = "EXPIRED";
    }
  }, 1000);
}
