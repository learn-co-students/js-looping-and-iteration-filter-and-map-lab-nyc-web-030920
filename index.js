// Code your solution here:
function driversWithRevenueOver(listOfDrivers, revenue){
    return listOfDrivers.filter(function(driver){
        return driver.revenue > revenue;
    });
   
}

function driverNamesWithRevenueOver(listOfDrivers, revenue){
    return driversWithRevenueOver(listOfDrivers, revenue)
    .map(function (driver){
                return driver.name;
    });
}

function exactMatch(drivers, object){
    return drivers.filter(function (driver){
        let match = false;

        for (const key in object){
            match = driver[key] === object[key];
        }
        return match;
    });

}

function exactMatchToList(drivers, object){
    return exactMatch(drivers, object)
    .map(function(driver){
        return driver.name;
    });
}