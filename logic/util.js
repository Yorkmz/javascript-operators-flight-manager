function Util() {
    function calculateTotalDistributedPassengers(distribution) {
        let totalDistributedPassengers = 0;
        totalDistributedPassengers = distribution.vipPassengersWithBusinessSeats + distribution.vipPassengersWithEconomySeats + distribution.regularPassengersWithBusinessSeats + distribution.regularPassengersWithEconomySeats;
        return totalDistributedPassengers;
    }

    function calculateTotalNumberOfPassengers(passengers) {
        let totalPassengers = 0;
        for (let i = 0; i < passengers.length; i++) {
            if (!Number.isNaN(Number(passengers[i]))) {
                totalPassengers += passengers[i];
                console.log("In If.", passengers[i], totalPassengers);
            }
        }
        return totalPassengers;
    }
    return {
        calculateTotalDistributedPassengers,
        calculateTotalNumberOfPassengers
    };
}
module.exports = Util();