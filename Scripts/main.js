
var newline = "\r\n";

function geoFindMe() {

  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = "Click pentru zona ta pe harta" + "\r\n" + "Coordonatele tale sunt:" + "\r\n" + `longitudine: ${longitude}` + "\r\n" + `latitudine: ${latitude}`;
  }

  function error() {
    status.textContent = 'Activeaza localizarea';
  }

  if (!navigator.geolocation) {
    status.textContent = 'Localizarea nu e suportata';
  } else {
    status.textContent = 'Localizare...';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

document.querySelector('#find-me').addEventListener('click', geoFindMe);