function driversWithRevenueOver(drivers, rev){
  return drivers.filter(function(driver){
    return driver.revenue > rev;
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  let dObjects = driversWithRevenueOver(drivers, revenue);
  return dObjects.map(function(driver){
    return driver.name;
  })
}

function exactMatch(drivers, option){
  return matches = drivers.filter(function(driver){
    return driver[(Object.keys(option)[0])] === (Object.values(option)[0])
  });
}

function exactMatchToList(drivers, option){
  let dArray = exactMatch(drivers, option);
  return dArray.map(function(driver){
    return driver.name;
  })
}
