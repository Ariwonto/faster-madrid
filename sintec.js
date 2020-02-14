'use strict';

function Sensor(/* options */) {
  // nothing todo
}

Sensor.prototype.init = function (callback) {
  // nothing todo
  callback();
}

Sensor.prototype.read = function (callback) {
  callback(null, {
    temperature: random(20, 30),
    humidity: random(60, 80),
    altitude: random(73,76),
    latitude: random(-12,-13),
    longitude:randon(70,72)
  });
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

module.exports = Sensor;