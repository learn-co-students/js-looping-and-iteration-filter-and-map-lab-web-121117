// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return parseInt(driver.revenue, 10) > parseInt(revenue, 10);
  });
}


function driverNamesWithRevenueOver(drivers, revenue) {
  const relevantDrivers = driversWithRevenueOver(drivers, revenue);
  return relevantDrivers.map(function(driver) {return driver.name});
}

function exactMatch(drivers, obj) {
  const keys = Object.keys(obj);
  const value =obj[keys[0]];
  return drivers.filter(function(driver) {
    return driver[keys[0]] == value;
  });
}

function exactMatchToList(drivers, obj) {
  const keys = Object.keys(obj);
  const value =obj[keys[0]];
  const relevantDrivers = drivers.filter(function(driver) {
    return driver[keys[0]] == value;
  });
  return relevantDrivers.map(function(driver) {return driver.name});
}
