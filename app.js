// btn1 = document.querySelector('.btn1')

// btn1.addEventListener('click',(e) => {
//     window.location.href =
//       "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D1%81%D0%BF%D1%80%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9,_%D0%98%D1%81%D0%BC%D0%B0%D0%B8%D0%BB";
// })

document.addEventListener("DOMContentLoaded", () => {

  const hour = document.querySelector(".hour");
  const minute = document.querySelector(".minute");

  function clock() {
    const timeNow = new Date();
    const hr = timeNow.getHours();
    const min = timeNow.getMinutes();
    hour.textContent = hr < 10 ? "0" + hr : hr;
    minute.textContent = min < 10 ? "0" + min : min;
  }
  clock();
  setInterval(clock, 1000);

  const wrap = document.querySelector(".weather");
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=5f1077f561d87b1be334b15838fc01b4";
  async function weatherFetch() {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    weather(data);
  }

  weatherFetch();

  function weather(item) {
    const card = document.createElement("div");
    const card2 = document.createElement("div");

    const h3 = document.createElement("h2");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    img.classList.add("w-7");
    card2.appendChild(img);
    h3.textContent = Math.round(item.main.temp - 273.15) + " " + "°C";
    h3.classList.add("text-xl");
    h2.classList.add("text-xl");

    card.append(h3, h2);
    wrap.append(card2, card);
    switch (item.weather[0].main) {
      case "Clear":
        h2.textContent = "Clear";
        img.src = "./img/sun.png";
        img.classList.add("animat-spin");
        break;
      case "Clouds":
        h2.textContent = "Clouds";
        img.src = "./img/cloud.png";
        break;
      case "Mist":
        h2.textContent = "Mist";
        img.src = "./img/mist.png";
        break;

      case "Rain":
        h2.textContent = "Rain";
        img.src = "./img/rain.png";
        break;
      case "Snow":
        h2.textContent = "Snow";
        img.src = "./img/snow.png";
        break;
    }
    }

  });