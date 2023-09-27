class Device {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isOn = false;
    }

    turnOn() {
        this.isOn = true;
        console.log(`${this.name} is turned on.`);
    }

    turnOff() {
        this.isOn = false;
        console.log(`${this.name} is turned off.`);
    }
}

class Lamp extends Device {
    constructor(brightness, name, power) {
        super(name, power);
        this.brightness = brightness;
    }

    makeDimmer() {
        this.adjustBrightness(-10);
    }

    makeBrighter() {
        this.adjustBrightness(10);
    }

    adjustBrightness(delta) {
        this.brightness = Math.min(Math.max(this.brightness + delta, 0), 100);
    }
}

class Computer extends Device {
    constructor(memory, name, power) {
        super(name, power);
        this.memory = memory;
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


let lamp = new Lamp(50, "My lamp", 20)
let computer = new Computer(16, "My computer", 2000)

console.log("lamp: ", lamp) 
console.log("computer: ", computer) 