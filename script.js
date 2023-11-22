let weather = {
    "apikey": "ddac257c03aae2f9d4b3c4916ff3304a"
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apikey
        )
        .then((Response) => Response.json)
    .then((data) => this.displayWeather(data))
    }
    displayWeather: function(data){
        const{name} = data;
        const{icon, description} = data.weather;
        const{temp, humidity} = data.main;
        const{speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed)

    }
}
