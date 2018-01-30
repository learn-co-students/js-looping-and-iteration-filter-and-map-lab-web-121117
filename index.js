// Code your solution here:
function driversWithRevenueOver(drivers, rev){
  return drivers.filter(function(driver){
    return driver.revenue > rev
  })
}

function driverNamesWithRevenueOver(drivers, rev){
  myDrivers = drivers.filter(function(driver){
    return driver.revenue > rev
  })

  return myDrivers.map(function(driver){
    return driver.name
  })
}

function exactMatch(drivers, obj){
  return drivers.filter(function(driver){
    let deepEquals = false
    for(let key in obj){
      if(driver[key] !== obj[key]){
      deepEquals = false
      break}
     else{
      deepEquals = true
    }
    }

    return deepEquals
  })
}

function exactMatchToList(drivers, obj){
  myDrivers =  drivers.filter(function(driver){
    let deepEquals = false
    for(let key in obj){
      if(driver[key] !== obj[key]){
      deepEquals = false
      break}
     else{
      deepEquals = true
    }
    }

    return deepEquals
  })
  return myDrivers.map(function(driver){
    return driver.name
  })
}
