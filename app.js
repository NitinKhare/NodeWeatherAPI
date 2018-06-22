const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const args = yargs
  .options({
    a :{
      demand: true,
      alias: 'Address',
      describe: 'Address to fetch weather report',
      string : true
    }
  })
  .help()
  .alias('help','h')
  .argv;

geocode.geocodeAddresss(args.a,(errorMessage, results)=>{
  if (errorMessage) {
    console.log(errorMessage);
  }
  else{
    console.log(results.address);
    weather.getWeather(results.Latitude,results.Longitude ,(errorMessage,weatherResults)=>{
      if (errorMessage){
        console.log(errorMessage);
      }
      else{
        console.log('Temperature '+ weatherResults.temp+'F');
        console.log('Summary '+ weatherResults.summary);
      }
    });
  }

});
