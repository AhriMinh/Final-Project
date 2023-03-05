const realTimeClock = document.getElementById("realTimeClock");
export function updateTime() {
  var timeInfo = new Date()
    .toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    })
    .toString();
  // console.log(timeInfo);
  // /* time */
  // let hr,
  //   _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
  //   sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
  //   ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";

  // // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
  // if (dateInfo.getHours() == 0) {
  //   hr = 12;
  // } else if (dateInfo.getHours() > 12) {
  //   hr = dateInfo.getHours() - 12;
  // } else {
  //   hr = dateInfo.getHours();
  // }

  //   if (realTimeClock.innerText.split(':').length === 1) {
  //   // if it's not, set the actual time
  //   realTimeClock.innerText = time;
  // } else {
  //   // if it is, remove the colon
  //   realTimeClock.innerText = time.split(':').join(' ');
  // }
  var currentTime = timeInfo;

  // print time
  realTimeClock.innerHTML = currentTime;
}
