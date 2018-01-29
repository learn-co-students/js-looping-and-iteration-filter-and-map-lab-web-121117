// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  new_array = drivers.filter(function(driver){
    return driver.revenue > revenue
  })
  return new_array
}

function driverNamesWithRevenueOver(drivers, revenue){
  new_array = driversWithRevenueOver(drivers, revenue);
  names = new_array.map(function(driver){
    return driver.name
  })
  return names
}

function exactMatch(drivers, obj){
  new_array = drivers.filter(function(driver){
    return driver[Object.keys(obj)[0]] === Object.values(obj)[0]
  })
  return new_array
}

function exactMatchToList(drivers, obj){
  new_array = exactMatch(drivers, obj)
  names = new_array.map(function(driver){
    return driver.name
  })
  return names
}
