// Code your solution here:
function driversWithRevenueOver(driver,revenue){
   return driver.filter(x => {
       return x.revenue > revenue})
}
function driverNamesWithRevenueOver (drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue)
      .map(x => {
        return x.name;
      });
}

// function exactMatch(driver,obj){
//     return driver.filter(x=>{
//         // return x.name == key || x.revenue == value
//         for(const key in obj){
//             if (driver[key]=== obj[key]){
//                 return obj
//             }
//         }
//     })
// }

function exactMatch (drivers, matcher) {
    return drivers.filter(function (driver) {
      let matches = false;
  
      for (const key in matcher) {
        matches = driver[key] === matcher[key];
      }
  
      return matches;
    });
  }
  
  function exactMatchToList (drivers, matcher) {
    return exactMatch(drivers, matcher)
      .map(function (driver) {
        return driver.name;
      });
  }
  