// Code your solution here

function findMatching(drivers, str) {
  const result = drivers.filter((el) => el.toLowerCase() === str.toLowerCase());
  return result;
}
function fuzzyMatch(drivers, str) {
  const result = drivers.filter(el => el.startsWith(str));
  return result;
}

function matchName(drivers, str){
  // takes an array of driver objects and a string as arguments
  const result = drivers.filter(driverName => driverName["name"] === str)
  return result;

  // Each driver object has two properties: name and hometown. 

  // The function should return each element whose name property 
  // matches the provided string argument.
}

