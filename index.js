// Code your solution here:

function driversWithRevenueOver(array, val) {
  return array.filter(function(num) {
    return num["revenue"] > val;
  });
}

function driverNamesWithRevenueOver(array, val) {
  hold = driversWithRevenueOver(array, val);
  return hold.map(function(thing) {
    return thing.name;
  });
}

function exactMatch(array, thing) {
  return array.filter(function(element) {
    return element[Object.keys(thing)[0]] === thing[Object.keys(thing)[0]];
  });
}

function exactMatchToList(array, thing) {
  hold = exactMatch(array, thing);
  return hold.map(function(element) {
    return element.name;
  });
}
