const driversWithRevenueOver = (drivers, revenue) => {
    return drivers.filter(driver => driver.revenue > revenue)
};

const driverNamesWithRevenueOver = (drivers, revenue) => {
    return driversWithRevenueOver(drivers, revenue).map(driver => driver.name )
};

const exactMatch = (drivers, object) => {
    return drivers.filter(driver => {
        for(const key in object){
            return driver[key] === object[key]
        }
    })
};

const exactMatchToList = (drivers, revenue) => {
    return exactMatch(drivers, revenue).map(driver => driver.name)
};