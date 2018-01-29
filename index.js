// Code your solution here:

function driversWithRevenueOver(collection, revenue) {
  return collection.filter(function(driver) {
    if (driver.revenue > revenue) {
      return Object.assign({}, driver);
    };
  });
};

function driverNamesWithRevenueOver(collection, revenue) {
  newCollection = [];
  collection.filter(function(driver) {
    if (driver.revenue > revenue) {
      newCollection.push(driver.name);
    };
  });
  return newCollection;
};

function exactMatch (collection, obj) {
  return collection.filter(function(driver) {
    return Object.keys(obj).every(function (key) {
      return driver[key] === obj[key];
    });
  });
};

function exactMatchToList (collection, obj) {
  return exactMatch(collection, obj).map(function(driver) {
      return driver.name;
    });
};
