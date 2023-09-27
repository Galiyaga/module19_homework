class Device {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.turnOnOff = new TurnOnOff();
    }
}

class TurnOnOff {
    constructor() {
        this.isOn = false;
    }
    turnOn() {
        this.isOn = true;
        console.log('Device is turned on.');
    }
    turnOff() {
        this.isOn = false;
        console.log('Device is turned off.');
    }
}

class Lamp extends Device {
    constructor(brightness, name, power) {
        super(name, power);
        this.brightnessControl = new BrightnessControl(brightness);
    }
}

class BrightnessControl {
    constructor(brightness) {
        this.brightness = brightness;
    }
    makeDimmer() {
        if (this.brightness > 0) {
            this.brightness -= 10;
            return "Brightness: " + this.brightness
        }
    }
    makeBrighter() {
        if (this.brightness < 100) {
            this.brightness += 10;
            return "Brightness: " + this.brightness
        }
    }
}

class Computer extends Device {
    constructor(memory, name, power) {
        super(name, power);
        this.memory = memory;
        this.cdRomControl = new CdRomControl();
    }
}

class CdRomControl {
    constructor() {
        this.CDromOpened = false;
    }
    openCDrom() {
        this.CDromOpened = true;
        return "CDrom is opened"
    }
    closeCDrom() {
        this.CDromOpened = false;
        return "CDrom is closed"
    }
}

let lamp = new Lamp (50, "My lamp", 20)
let computer = new Computer(16, "My computer", 2000)

console.log("lamp: ", lamp, lamp.makeBrighter()) 
console.log("computer: ", computer, computer.openCDrom()) 
