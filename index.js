// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(driver => {
        return driver.revenue > revenue;
    });
}

function driverNamesWithRevenueOver(drivers,revenue){
    return driversWithRevenueOver(drivers, revenue).map(driver => {
        return driver.name;
    });
}

function exactMatch(drivers, matchProperty){
    return drivers.filter(driver => {
        const key = Object.keys(matchProperty)[0];
        return driver[key] === matchProperty[key];
    });
}

function exactMatchToList(drivers, matchProperty){
    return exactMatch(drivers, matchProperty).map(driver => {
        return driver.name;
    });
}