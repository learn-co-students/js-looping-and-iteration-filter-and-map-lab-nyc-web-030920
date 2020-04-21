// Code your solution here:
function driversWithRevenueOver(driver, revenue) //returns an array of driver objects that have a revenue attribute that's greater than the passed-in revenue argument.
{
    //driver is an array of objects
    //revenue is a number
    return driver.filter(function(driverName){ //return an array
        return driverName.revenue > revenue; //where the revenue for a driver is higher than the number passed in 
    });
}

function driverNamesWithRevenueOver(driver, revenue) //returns an array of strings representing the name of each driver who has a revenue greater than the specified amount
{
    return driversWithRevenueOver(driver, revenue).map(function(driverName){
        return driverName.name;
    });
}

function exactMatch(driver, obj) //takes an array of driver objects as the first argument and a JavaScript object that specifies an attribute and corresponding value.
{
    return driver.filter(function (driverName){
        let match = false;

        for(const key in obj) //user for...in for an object
        {
            match = driverName[key] === obj[key];
        }
        return match;
    });
}

function exactMatchToList(driver, obj) //returns an array of strings with each element in the array corresponding to the matching driver's name.
{
    return exactMatch(driver, obj).map(function (driverName){
        return driverName.name
    });
}