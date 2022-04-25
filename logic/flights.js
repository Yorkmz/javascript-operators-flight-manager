const {
    createMochaInstanceAlreadyDisposedError
} = require("mocha/lib/errors");
const {
    supportsEsModules
} = require("mocha/lib/utils");

function Flights() {
    function calculateNumberOfFlights(numPassengers, capFlight) {
        console.log(numPassengers<0);
        console.log(!Number.isInteger(numPassengers));
        if (numPassengers < 0 || !Number.isInteger(Number(numPassengers))) {
            throw new Error("The number of passengers must be a positive integer value");
        }else
        if (capFlight < 0 || !Number.isInteger(Number(capFlight)))  {
            throw new Error("The capacity of the flight must be a positive integer value");
        }
        if (numPassengers % capFlight == 0) {
            return numPassengers / capFlight;
        } else {
            return parseInt(numPassengers / capFlight) + 1;
        }
    }
function checkAircraftRevision(distanceLimite, disArray) {
    let totalDistance = 0;
    for (let i = 0; i < disArray.length; i++) {
        console.log("totalDis= " + totalDistance);
        console.log("DistancesArray[" + i + "]: " + disArray[i]);
        if (!Number.isNaN(Number(disArray[i]))) {
            totalDistance += disArray[i];
            console.log("Ran If!");
        }
    }
    // console.log(totalDistance);
    // console.log(distanceLimite/2);
    if (totalDistance <= distanceLimite / 2) {
        return String("The revision needs to be done within the next 3 months");
    } else if (totalDistance <= distanceLimite * 3 / 4) {
        return String("The revision needs to be done within the next 2 months");
    } else if (totalDistance <= distanceLimite) {
        return String("The revision needs to be done within the next month");
    }
    if (totalDistance > distanceLimite) {
        throw new Error("The total covered distances can NOT be larger than distance Limite!");
    }
}
return {
    calculateNumberOfFlights,
    checkAircraftRevision
};
module.exports = Flights();
}