// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const result = drivers.filter(function(driver) { return driver.revenue > revenue })
  return result
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const filtered = driversWithRevenueOver(drivers, revenue)
  const result = []
  filtered.map(function(driver) {
    const nameString = driver.name
    // debugger
    result.push(nameString)
  })
  return result
}

function exactMatch(drivers, query) {
  const result = []
  drivers.filter(function (driver) {
    for (let i in query) {
      if (driver[i] === query[i]) {
        result.push(driver)
      }
    }
  })
  return result
}

function exactMatchToList(drivers, query) {
  const filtered = exactMatch(drivers, query)
  const result = []
  filtered.map(function(driver) {
    const nameString = driver.name
    // debugger
    result.push(nameString)
  })
  return result
}
