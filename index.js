// Code your solution here:

function driversWithRevenueOver(array, revenue){
  return array.filter(function (name_hash){
    return name_hash.revenue > revenue
  });
}

function driverNamesWithRevenueOver(array, revenue){
  return array.filter(function (name_hash){
     return name_hash.revenue > revenue
  }).map(function(filtered_hash){
    return filtered_hash.name
  })
}

function exactMatch(array, obj){
  return array.filter(function (element){
    return element[(Object.keys(obj)[0])] === (Object.values(obj)[0])
  });
}

function exactMatchToList(array, obj){
  return exactMatch(array, obj).map(function(element){
    return element.name
  });
}
