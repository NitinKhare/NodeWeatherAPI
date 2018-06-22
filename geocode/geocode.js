
const request = require('request');

const googleGeolocationApiKey = 'AIzaSyC03Yh9u4Xn3p3iL9elwGkbHFRn6IUlVBQ';

var requests = (address,callback)=>{
  request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURI(address)+'&key='+googleGeolocationApiKey,
  json : true
},(error,response,body) =>{

  if (error){
    callback('Unable to connect');
  }
  else if (body.status === 'ZERO_RESULTS') {
    callback('Wrong Address');
  }
else
  {
    callback(undefined,{
      address:body.results[0].formatted_address,
      Latitude:body.results[0].geometry.location.lat,
      Longitude:body.results[0].geometry.location.lng
    });
  }


});
};

module.exports = {
  geocodeAddresss : requests
};
