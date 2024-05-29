function findMatching(drivers, name){
let matchingDrivers = drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
       return matchingDrivers 
}

function fuzzyMatch(drivers, letters){
    let firstLetter = drivers.filter(driver => driver.slice(0,2) === letters)
    return firstLetter

}
function matchName(drivers, name){
    let matchingNames = drivers.filter(driverObj => driverObj.name === name)
    return matchingNames
}