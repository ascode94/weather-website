const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/beacde57a15bd2675753e8d599749a0f/${latitude},${longitude}?units=si`;
    
    request( {url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather server', undefined);
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is ${body.currently.precipProbability}% chance of the rain`)
        }
    })
}
  

module.exports = forecast