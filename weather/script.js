const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3b5be594e5mshd5e2d5830d45f1dp1cc14ajsn4f8a2d2d9c81',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cityname.innerHTML=city
            cloud_pct.innerHTML = response.cloud_pct
            cloud_pct2.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            windspeed2.innerHTML = response.wind_speed
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>
{   
    e.preventDefault()
    getWeather(city.value)
})

document.getElementById("dropdown-men").addEventListener("click",function(e){
    if(e.target.id=='dc')
    getWeather('Delhi')
    if(e.target.id=='rcb')
    getWeather('Bangalore')
    if(e.target.id=='mi')
    getWeather('Mumbai')
})
getWeather('Bangalore')

const getWeather2 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            
            cloud_pct3.innerHTML = response.cloud_pct
            
            temp3.innerHTML = response.temp
            feels3.innerHTML = response.feels_like
            humidity3.innerHTML = response.humidity
            min_temp3.innerHTML = response.min_temp
            max_temp3.innerHTML = response.max_temp
            wind_speed3.innerHTML = response.wind_speed
            wind_deg3.innerHTML=response.wind_degrees
            sunrise3.innerHTML = response.sunrise
            sunset3.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
getWeather2('London')

const getWeather3 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            
            cloud_pct4.innerHTML = response.cloud_pct
            
            temp4.innerHTML = response.temp
            feels4.innerHTML = response.feels_like
            humidity4.innerHTML = response.humidity
            min_temp4.innerHTML = response.min_temp
            max_temp4.innerHTML = response.max_temp
            wind_speed4.innerHTML = response.wind_speed
            wind_deg4.innerHTML=response.wind_degrees
            sunrise4.innerHTML = response.sunrise
            sunset4.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
getWeather3('Shangai')

const getWeather4 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            
            cloud_pct5.innerHTML = response.cloud_pct
            
            temp5.innerHTML = response.temp
            feels5.innerHTML = response.feels_like
            humidity5.innerHTML = response.humidity
            min_temp5.innerHTML = response.min_temp
            max_temp5.innerHTML = response.max_temp
            wind_speed5.innerHTML = response.wind_speed
            wind_deg5.innerHTML=response.wind_degrees
            sunrise5.innerHTML = response.sunrise
            sunset5.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
getWeather4('Paris')

const getWeather5 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            
            cloud_pct6.innerHTML = response.cloud_pct
            
            temp6.innerHTML = response.temp
            feels6.innerHTML = response.feels_like
            humidity6.innerHTML = response.humidity
            min_temp6.innerHTML = response.min_temp
            max_temp6.innerHTML = response.max_temp
            wind_speed6.innerHTML = response.wind_speed
            wind_deg6.innerHTML=response.wind_degrees
            sunrise6.innerHTML = response.sunrise
            sunset6.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
getWeather5('New York')

const getWeather6 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            
            cloud_pct7.innerHTML = response.cloud_pct
            
            temp7.innerHTML = response.temp
            feels7.innerHTML = response.feels_like
            humidity7.innerHTML = response.humidity
            min_temp7.innerHTML = response.min_temp
            max_temp7.innerHTML = response.max_temp
            wind_speed7.innerHTML = response.wind_speed
            wind_deg7.innerHTML=response.wind_degrees
            sunrise7.innerHTML = response.sunrise
            sunset7.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
getWeather6('California')

const getWeather7 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            
            cloud_pct8.innerHTML = response.cloud_pct
            
            temp8.innerHTML = response.temp
            feels8.innerHTML = response.feels_like
            humidity8.innerHTML = response.humidity
            min_temp8.innerHTML = response.min_temp
            max_temp8.innerHTML = response.max_temp
            wind_speed8.innerHTML = response.wind_speed
            wind_deg8.innerHTML=response.wind_degrees
            sunrise8.innerHTML = response.sunrise
            sunset8.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
getWeather7('Sydney')