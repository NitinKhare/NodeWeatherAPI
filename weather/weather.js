const request = require('request');
const forecastIOAPIkey = '';
var getWeather = (lat , lng,callback) =>{
  var forecastURL = `https://api.darksky.net/forecast/`+${forecastIOAPIkey}+`/${lat},${lng}`;

request({
  url:forecastURL,
  json:true
},(error,response,body)=>{
   if(error){
     callback('Unable to connect');
   }
   else if(response.statusCode === 200){
     callback(undefined,{
     temp : body.currently.temperature,
     apparentTemp : body.currently.apparentTemperature,
     summary : body.currently.summary
   });
   }
   else {
     callback("wrong address")
   }

});
};

module.exports.getWeather = getWeather;
