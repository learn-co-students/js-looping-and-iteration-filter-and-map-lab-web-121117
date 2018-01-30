// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (d) {
    return d.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let relevantDrivers = driversWithRevenueOver(drivers, revenue);
  return relevantDrivers.map(function (d){
    return d.name;
  });
}

function exactMatch(drivers, att) {
  return drivers.filter(function (d) {
    return d[Object.keys(att)[0]] === Object.values(att)[0];
  });
}

function exactMatchToList(drivers, att) {
  let relevantDrivers = exactMatch(drivers, att);
  return relevantDrivers.map(function (d) {
    return d.name;
  });
}
