// Code your solution here:
function driversWithRevenueOver(array, revenue) {
  return array.filter(function(element) {
    return element.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(array, revenue) {
  let relevantDrivers = driversWithRevenueOver(array, revenue);
  return relevantDrivers.map(function(element) {
    return element.name;
  });
}

function exactMatch(array, attribute) {
  return array.filter(function(element) {
    let attributeKey = Object.keys(attribute)[0];
    return attribute[attributeKey] === element[attributeKey];
  });
}

function exactMatchToList(array, attribute) {
  let relevantDrivers = exactMatch(array, attribute);
  return relevantDrivers.map(function(element) {
    return element.name;
  });
}
