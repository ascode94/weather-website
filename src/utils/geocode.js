const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYWxpcmV6YTc2MTIiLCJhIjoiY2p4bmRoaHM1MGRsczNicXAzcnpjbWc0ZCJ9.VvG9h-FbxYy296qm2VFGmA&limit=1`

    request( {url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to Connect to the server', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode