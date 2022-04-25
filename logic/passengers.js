function Passengers() {
    function checkFlightCapacity(flightCap, passengersArray) {
        let totalPassengers = 0;
        //console.log(totalPassengers);
        for (let i = 0; i < passengersArray.length; i++) {
            if (!Number.isNaN(Number(passengersArray[i]))) {
                totalPassengers += passengersArray[i];
                //console.log(passengersArray[i]);
            }
        }
        //console.log(totalPassengers);
        if (totalPassengers <= flightCap) {
            return totalPassengers;
        } else {
            throw new Error("Total passengers more than flight capacity!!");
        }
    }
    return {
        checkFlightCapacity
    };
}
module.exports = Passengers();