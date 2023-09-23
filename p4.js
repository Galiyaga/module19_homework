function Device(name, power) {
    this.name = name;
    this.power = power;
    this.isOn = false;
}

Device.prototype.turnOn = function() {
    this.isOn = true;
    console.log(this.name + ' is turned on.');
}

Device.prototype.turnOff = function() {
    this.isOn = false;
    console.log(this.name + ' is turned off.');
}

function Lamp(brightness, name, power) {
    this.brightness = brightness;
    this.name = name;
    this.power = power;
}

Lamp.prototype = new Device();

Lamp.prototype.makeDimmer = function() {
    if (this.brightness > 0) {
        this.brightness -= 10;
        return "Brightness: " + this.brightness
    }
}

Lamp.prototype.makeBrighter = function() {
    if (this.brightness < 100) {
        this.brightness += 10;
        return "Brightness: " + this.brightness
    }
}

function Computer(memory, name, power) {
    this.memory = memory;
    this.name = name;
    this.power = power;
    this.CDromOpened = false;
}

Computer.prototype = new Device();

Computer.prototype.openCDrom = function() {
    this.CDromOpened = true;
    return "CDrom is opened"
}

Computer.prototype.closeCDrom = function() {
    this.CDromOpened = false;
    return "CDrom is closed"
}

let lamp = new Lamp (50, "My lamp", 20)
let computer = new Computer(16, "My computer", 2000)

console.log("lamp: ", lamp, lamp.makeBrighter()) 
console.log("computer: ", computer, computer.openCDrom()) 


