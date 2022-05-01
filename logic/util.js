'use strict';
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
                //console.log("In If.", passengers[i], totalPassengers);
            }
        }
        return totalPassengers;
    }
    function checkInput(input){
        if ( parseFloat(input).toString() =="NaN"){
            throw new Error("The input should not be empty");
        }else{
            return Number(input);
        }
    }
    function calculateTotalDistance(distancesArray){
        let totalDistances = 0;
        for(let i =0; i< distancesArray.length; i++){
            if (distancesArray[i]>=0){
                totalDistances +=distancesArray[i];
            }
        }
        return totalDistances;
    }
    function calculateBonusPoints(distancesArrayWithBusiness, distancesArrayWithEconomy, businessBonus, economyBonus){
        let totalBusinessBonus = 0;
        let totalEconomyBonus = 0;
        totalBusinessBonus = calculateTotalDistance(distancesArrayWithBusiness) * businessBonus/100;
        totalEconomyBonus = calculateTotalDistance(distancesArrayWithEconomy) * economyBonus/100;
        let totalBonus = 0;
        totalBonus = totalBusinessBonus + totalEconomyBonus;
        return totalBonus
    }
    return {
        calculateTotalDistributedPassengers,
        calculateTotalNumberOfPassengers,
        checkInput,
        calculateTotalDistance,
        calculateBonusPoints
    };
}
module.exports = Util();