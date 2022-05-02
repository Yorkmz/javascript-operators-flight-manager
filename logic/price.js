'use strict';
const { base } = require("mocha/lib/reporters");
const { consoleLog } = require("mocha/lib/reporters/base");

function Prices() {
    function calculateFinalPrice(basePrice, passengerType, flightType) {
        //console.log("\n****Input****\n"+basePrice,passengerType,flightType+"\n----Price Of Passenger Type----");
        let priceOfpassengerType = 0;
        let priceOfFlightType = 0;
        let basePriceToFloat = parseFloat(basePrice);
        let passengerTypeToFloat = parseFloat(passengerType);
        let flightTypeToFloat = parseFloat(flightType);
        //console.log(basePriceToFloat,passengerTypeToFloat,flightTypeToFloat);
        priceOfpassengerType = basePriceToFloat * (100 + passengerTypeToFloat) / 100;
        //console.log(priceOfpassengerType+"\n----Price Of Flight Type----");
        priceOfFlightType = priceOfpassengerType * flightTypeToFloat / 100;
        //console.log(priceOfFlightType);
        let finalPrice = priceOfpassengerType + priceOfFlightType;
        //console.log("\n----Final Price----\n"+Math.round(finalPrice*100)/100+"\n++++++++++++++++\n\n");
        //return finalPrice;
        return Math.round(finalPrice*100)/100;
    }
    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
        //console.log(basePrice,passengerType,flightType);
        const defaultType = new Map([["vip", 5],["regular",-5],["economy",-3],["business",10]]);
        let defaultPassengerType = passengerType.trim();
        let defaultFlightType = flightType.trim();
        //console.log(defaultPassengerType,defaultFlightType);
        defaultPassengerType = defaultPassengerType.toLowerCase();
        //console.log(defaultPassengerType);
        //console.log(defaultType.get(defaultPassengerType));
        defaultFlightType = defaultFlightType.toLowerCase();
        //console.log(defaultFlightType);
        //console.log(defaultType.get(defaultFlightType));
        let defaultPassengerPrice = 0;
        let defaultFlightPrice = 0;
        let defaultFinalPrice = 0;
        defaultPassengerPrice = basePrice * (1+defaultType.get(defaultPassengerType)/100);
        //console.log(defaultPassengerPrice);
        defaultFlightPrice = defaultPassengerPrice*defaultType.get(defaultFlightType)/100;
        //console.log(defaultFlightPrice);
        defaultFinalPrice = defaultPassengerPrice + defaultFlightPrice;
        //console.log(defaultFinalPrice);
        return defaultFinalPrice;
    }
    function calculateTotalFinalPrice(numOfSeats, passengersType, flightType, basePrice){
        let totalFinalePrice = 0;
        let defaultFinalPrice = 0;
        defaultFinalPrice = calculateDefaultFinalPrice(basePrice,passengersType,flightType);
        totalFinalePrice = numOfSeats * defaultFinalPrice;
        return totalFinalePrice;
    }
    return {
        calculateFinalPrice,
        calculateDefaultFinalPrice,
        calculateTotalFinalPrice
    }
}
module.exports = Prices();