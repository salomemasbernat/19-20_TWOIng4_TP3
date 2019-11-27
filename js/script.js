// Fonction appelée lors du click du bouton
function start(city) {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);

  // Appel de la fonction fetchTodayForecast
  apiWeather
  .getThreeDayForecast()
  .then(function(response) {
    
      // Récupère la donnée d'une API
      const data = response.data.list;

      for(let i=0; i<4; i++) {

      // On récupère l'information principal
      const main = data[i].weather[0].main;
      const description = data[i].weather[0].description;
      const temp = data[i].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data[i].weather[0].icon);

      const a = i+1;

      // Modifier le DOM
      document.getElementById('today'+a+'-forecast-main').innerHTML = main;
      document.getElementById('today'+a+'-forecast-more-info').innerHTML = description;
      document.getElementById('icon'+a+'-weather-container').innerHTML = icon;
      document.getElementById('today'+a+'-forecast-temp').innerHTML = `${temp}°C`;
    }

  })
  .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function cities(){

  const city= document.getElementById('city-input').value;
  // Pas de valeur nulle
  if (city=== ""){alert("Veuillez saisir une ville");}
  start(city);
}