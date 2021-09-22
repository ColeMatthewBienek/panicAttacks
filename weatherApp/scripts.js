const api = "a798043f176ee0593d54f6796a0981c0"
const image = document.getElementById('weather-icon');
const tC = document.querySelector('.cel');
const tF = document.querySelector('.fahr');
const loc = document.querySelector('.location');
const des = document.querySelector('.desc');



//use an onLoad event listener to get user location
window.addEventListener('load', () => {
    let long, lat, city;
    
    
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            lat=position.coords.latitude;
            long=position.coords.longitude;
            
            console.log(position.coords.latitude)
            const weatherObj=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`
            //console.log("weather", weatherObj)
            fetch(weatherObj)
            .then(response => {
                return response.json()
            })
            
            .then ((data)=>{
                const temperature = data.main.temp;
                const place = data.name;
                const {description, icon} = data.weather[0];
                const fahr = Math.round((temperature * 9) / 5 +32);
                
                const iconLoc = `http://openweathermap.org/img/wn/${icon}@2x.png`
                console.log('t', temperature)
                image.src=iconLoc;
                loc.textContent=place;
                tC.textContent=temperature;
                tF.textContent=fahr;
                des.textContent=description;
            })           
        });

    }
      
})
