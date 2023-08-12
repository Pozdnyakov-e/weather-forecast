const apiKey = 'bccd972e7b52ed4dd852975794d57690';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&zip={zip code},{country code}&appid=${apiKey}`;
const weatherIcon = document.querySelector('.weather-image i');

const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');


async function checkWeather (city){
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	const data = await response.json();
	
	document.querySelector('.city').innerHTML = data.name;
	document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
	document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
	document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' km/h';

	if (data.weather[0].main == 'Clear'){
		weatherIcon.className = 'fa-solid fa-sun'
	} else if (data.weather[0].main == 'Rain'){
		weatherIcon.className = 'fa-solid fa-cloud-rain';
	} else if (data.weather[0].main == 'Mist'){
		weatherIcon.className = 'fa-solid fa-cloud-mist';
	} else if (data.weather[0].main == 'Drizzle'){
		weatherIcon.className = 'fa-solid fa-cloud-dirzzle';
	}
}


searchButton.addEventListener('click', () => {
	checkWeather(searchInput.value);
	searchInput.value = '';
});


