// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const newDrivers = drivers.filter(driver => driver['revenue'] > revenue)
  return newDrivers;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const newDrivers = drivers.filter(driver => driver['revenue'] > revenue)
  let driverNames = newDrivers.map(driver => driver['name'])
  return driverNames;
}

function exactMatch(drivers, obj) {
  let key = obj.keys
  const newDrivers = drivers.filter(driver => driver[Object.keys(obj)[0]] === Object.values(obj)[0])
  return newDrivers;
}

function exactMatchToList(drivers,obj) {
  let mappedDrivers = []
  let filteredDrivers = exactMatch(drivers, obj);
  let dingus = filteredDrivers.map(driver => driver['name']);
  return dingus
}
