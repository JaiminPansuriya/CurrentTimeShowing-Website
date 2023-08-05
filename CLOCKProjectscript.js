function clockUpdate(){
  let now = new Date();
  let Seconds = String(now.getSeconds()).padStart(2,"0");
  let Minutes = String(now.getMinutes()).padStart(2,"0");
  let Hours = String(now.getHours()).padStart(2,"0");
  let timeStrings = `Current Time Is : ${Hours}:${Minutes}:${Seconds}`
  
  const timeElement = document.getElementById("timeDisplay");
  timeElement.textContent = timeStrings;
}

setInterval(clockUpdate,1000);
