// Code your solution here
function findMatching(driversName, string) {
    return driversName.filter(function (name) {
        if (string.slice(1) == name.slice(1)) {
            return name
        }
    })
}

function fuzzyMatch(driversName, string) {
    return driversName.filter(function (name) {
        if (string.slice(0, 1) == name.slice(0, 1)) {
            return name
        }
    })
}

function matchName(driverObj, string) {
    return driverObj.filter(function (Obj) {
        if (Obj.name === string) {
            return Obj
        }

    })
}