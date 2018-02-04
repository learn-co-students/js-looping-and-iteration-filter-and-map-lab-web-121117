// Code your solution here:

function driversWithRevenueOver(arr, revenue) {
  return arr.filter (function(driver) {
    return driver.revenue > revenue
  })
}

/// v2
function driverNamesWithRevenueOver(arr, revenue) {
  return arr.filter (function(driver) {
    return driver.revenue > revenue
  }).map(function(driver) {
   return driver.name
 })
}

/// v1
// function driverNamesWithRevenueOver(arr, revenue) {
//   const newArr = arr.filter (function(driver) {
//     return driver.revenue > revenue
//   })
//   return newArr.map(function(driver) {
//     return driver.name
//   })
// }

function exactMatch(drivers, attr) {
  return drivers.filter(function (driver) {
    return driver[(Object.keys(attr)[0])] === (Object.values(attr)[0])
  })
}

function exactMatchToList(drivers, attr) {
  return drivers.filter(function (driver) {
    return driver[(Object.keys(attr)[0])] === (Object.values(attr)[0])
  }).map(function(driver) {
    return driver.name
  })
}


// driversWithRevenueOver- This function takes an array of driver JavaScript objects as the first argument and a string called revenue as the second argument. It returns an array of driver objects that have a revenue attribute that's greater than the passed-in revenue argument.
//
// driverNamesWithRevenueOver() - This function works the same way as driversWithRevenueOver(). The difference is that it returns an array of strings representing the name of each driver who has a revenue greater than the specified amount. For example, driverNamesWithRevenueOver(drivers, 2000) will return ['Sammy'], as Sammy is the name of the matching driver object with a revenue greater than 2000.
//
// exactMatch() - This function takes an array of driver objects as the first argument and a JavaScript object that specifies an attribute and corresponding value. For example, exactMatch(drivers, { revenue: 3000 }) will return all drivers whose revenue attribute equals 3000, and exactMatch(drivers, { name: 'Bob' }) will return all drivers whose name attribute equals Bob.
//
// exactMatchToList() - This function works the same way as the exactMatch() function, except that instead of returning an array of driver objects, it returns an array of strings with each element in the array corresponding to the matching driver's name. For example, exactMatchToList(drivers, { revenue: 2000 }) will return ['Sammy'], as Sammy is the name of the matching driver object.
