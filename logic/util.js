
function Util() {
    function calculateTotalDistributedPassengers(distribution) {
        let totalDistributedPassengers = 0;
        totalDistributedPassengers = distribution.vipPassengersWithBusinessSeats + distribution.vipPassengersWithEconomySeats + distribution.regularPassengersWithBusinessSeats + distribution.regularPassengersWithEconomySeats;
        return totalDistributedPassengers;
    }
    return {calculateTotalDistributedPassengers};
}
module.exports = Util();