const { base } = require("mocha/lib/reporters");

function Prices() {
    function calculateFinalPrice(basePrice, passengerType, flightType) {
        console.log("\n****Input****\n"+basePrice,passengerType,flightType+"\n----Price Of Passenger Type----");
        let priceOfpassengerType = 0;
        let priceOfFlightType = 0;
        priceOfpassengerType = basePrice * (100 + passengerType) / 100;
        console.log(priceOfpassengerType+"\n----Price Of Flight Type----");
        priceOfFlightType = priceOfpassengerType * flightType / 100;
        console.log(priceOfFlightType);
        let finalPrice = priceOfpassengerType + priceOfFlightType;
        console.log("\n----Final Price----\n"+Math.round(finalPrice*100)/100+"\n++++++++++++++++\n\n");
        //return finalPrice;
        return Math.round(finalPrice*100)/100;
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {

    }
    return {
        calculateFinalPrice
    }
}
module.exports = Prices();