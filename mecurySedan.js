
const VehicleModule = require('./vehicle').Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkSerive() {
        if (this.mileage > 30000) {
            this.scheduleService = true;
            return this.scheduleService;
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log("engine has started.");
            return this.started = true;
        } else {
            console.log("no fuel");
            return this.stated = false;
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");
            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
}

//this shows how to call from this module...

let v = new Car('mercury', 'super_sedan', '1965', 'white', '30000')

v.start()
v.loadPassenger(5)
v.stop()
v.checkSerive()

console.log(v);

