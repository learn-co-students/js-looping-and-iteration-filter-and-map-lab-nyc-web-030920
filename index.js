// Code your solution here:
function driversWithRevenueOver(arr, revenue) {
  return arr.filter(function(driver) {
    if (driver.revenue > revenue)
      return driver

  })
}

function driverNamesWithRevenueOver(arr, rev) {
  return driversWithRevenueOver(arr, rev)
    .map(driver => {
      return driver.name
    })
}

function exactMatch(arr, object) {
  return arr.filter(driver => {

    for (const key in object) {
      return driver[key] === object[key];
    }
  })
}

function exactMatchToList(arr, object) {
  return exactMatch(arr, object)
    .map(driver =>  {
      return driver.name
    })
}