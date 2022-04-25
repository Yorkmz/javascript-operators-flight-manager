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
    function distributeAllSeatsToAllPassengers(numVIPPassengers, numRegularPassensgers,numFlight,numBusinessPerFlight,numEconomyPerFlight){
        let numVIPWithBusiness = 0;
        let numVIPWithEconomy = 0;
        let numRegularWithBusiness = 0;
        let numRegularWithEconomy = 0;
        let numBusiness= numBusinessPerFlight*numFlight;
        let numEconomy= numEconomyPerFlight*numFlight;
        //const distribution = {vipWithBusiness: numVIPWithBusiness, vipWithEconomy: numVIPWithEconomy, regularWithBusiness: numRegularWithBusiness, regularWithEconomy: numRegularWithEconomy};
        if (numVIPPassengers <= numBusiness){
            // First, assign VIP passengers to business seats, until either the VIP passengers or the business seats are consumed.
            numVIPWithBusiness = numVIPPassengers;
            numBusiness-=numVIPWithBusiness;
            // Then, if there are still business seats, assign regular passengers to business seats, until either the regular passengers or the business seats are consumed.
            numRegularWithBusiness=numBusiness;
            // Then, if there are still economy seats, assign regular passengers to economy seats, until either the regular passengers or the economy seats are consumed. 
            numRegularPassensgers-=numRegularWithBusiness;
            if(numEconomy>=numRegularPassensgers){
            numRegularWithEconomy=numRegularPassensgers;}else{
                numRegularWithEconomy=numEconomy;
            }
        }else{
            // Then, if there are still VIP passengers, assign them to economy seats, until either the VIP passengers or the economy seats are consumed.
            numVIPWithBusiness = numBusiness;
            numVIPWithEconomy=numVIPPassengers-numVIPWithBusiness;
            numEconomy-=numVIPWithEconomy;
            if(numEconomy>=numRegularPassensgers){
                numRegularWithEconomy=numRegularPassensgers;
            }else{
                numRegularWithEconomy=numEconomy;
            }
            // Then, if there are still economy seats, assign regular passengers to economy seats, until either the regular passengers or the economy seats are consumed. 
            
        }
        //console.log(numVIPWithBusiness,numVIPWithEconomy,numRegularWithBusiness,numRegularWithEconomy);
        const distribution = {vipPassengersWithBusinessSeats: numVIPWithBusiness, vipPassengersWithEconomySeats: numVIPWithEconomy, regularPassengersWithBusinessSeats: numRegularWithBusiness, regularPassengersWithEconomySeats: numRegularWithEconomy};
        //console.log(distribution);
        //console.log(distribution.vipPassengersWithBusinessSeats + distribution.vipPassengersWithEconomySeats + distribution.regularPassengersWithBusinessSeats + distribution.regularPassengersWithEconomySeats);
        return distribution;
    }
    return {
        checkFlightCapacity,
        distributeAllSeatsToAllPassengers
    };
}
module.exports = Passengers();
