const sensor = require('node-dht-sensor');

const TIMEINTERVAL = 10; // seconds
const SENSORTYPE = 11; // 11=DHT11, 22=DHT22
const GPIOPIN = 4; // The Raspi gpio pin where data from the DHT11 is read

function readSensor(){
    sensor.read(SENSORTYPE, GPIOPIN, function(err, temperature, humidity) {
        if (!err) {
            console.log('temp: ' + temperature.toFixed(1) + 'C, ' + 'humidity: ' + humidity.toFixed(1) + '%');
        } else {
            console.log(err);
        }
    });
}

readSensor();

// Automatically update sensor value every N seconds
setInterval(readSensor, TIMEINTERVAL*1000);