class Uber {
    constructor(distance, rate, waitingperiod) {
        this.distance = distance;
        this.rate = rate;
        this.waitingperiod = waitingperiod;
        
    }
    setDistance(dist) {
        this.distance = dist;
    }
    getRideDetails() {
        return (`the distance of the ride is ${this.distance}
     kms with the rate of Rs.${this.rate}`);
    }
    getPrice() {
        let price = (this.rate * this.distance) + (5
            * this.waitingperiod);
        return price;
    }
}
let uber1 = new Uber(300,30,20);
let uber2 = new Uber(500,50,100);

console.log("-----------------------------------------");
console.log("uber1", uber1)
console.log("uber1 Price:",uber1.getPrice());
console.log("uber1 RideDetails:",uber1.getRideDetails());
console.log("-----------------------------------------");

console.log("uber2", uber2)
console.log("uber2 Price:",uber2.getPrice());
console.log("uber2 RideDetails:",uber2.getRideDetails());
console.log("-----------------------------------------");


// uber1.setDistance(300);
// console.log("Uber1");
// console.log(uber1.getPrice());
// console.log(uber1.getRideDetails());

// uber2.setDistance(1000);
// console.log("Uber2");
// console.log("Ride Details:", uber2.getRideDetails());
// console.log("Ride Price", uber2.getPrice());