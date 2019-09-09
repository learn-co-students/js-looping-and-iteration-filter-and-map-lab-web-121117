// Code your solution here:
 function driversWithRevenueOver(drivers, rev) {
   return drivers.filter(function(person) {return person.revenue >= rev})
 }

function driverNamesWithRevenueOver(drivers, rev) {
  let newDrivers = driversWithRevenueOver(drivers, rev)
  return newDrivers.map(function(person) {return person.name})
}

function exactMatch(drivers, value) {
  key = Object.keys(value)[0]
  return drivers.filter(function(noob) {return noob[key] === value[key]})
}

function exactMatchToList(drivers, value) {
  exactPeople = exactMatch(drivers, value)
  return exactPeople.map(function(person) {return person.name})
}
