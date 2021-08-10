function yourName() {
  let myName = prompt("Lütfen adınızı giriniz!");
  myName = ` ${myName[0].toUpperCase()}${myName.slice(1)}`;
  document.querySelector(".myName").innerText = myName;
}

function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let today = date.getDay();

  switch (today) {
    case 1:
      today = " Pazartesi";
      break;
    case 2:
      today = " Salı";
      break;
    case 3:
      today = " Çarşamba";
      break;
    case 4:
      today = " Perşembe";
      break;
    case 5:
      today = " Cuma";
      break;
    case 6:
      today = " Cumartesi";
      break;
    case 7:
      today = " Pazar";
      break;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let myClock = `${h}:${m}:${s}${today}`;
  document.querySelector(".myClock").innerText = myClock;

  setTimeout(showTime, 1000);
}

yourName();
showTime();
