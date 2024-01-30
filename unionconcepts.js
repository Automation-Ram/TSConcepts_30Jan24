function getUserInfo(custID) {
    if (typeof (custID) === 'string') {
        return custID + "_ram";
    }
    else if (typeof (custID) === 'number') {
        return custID + "_ram";
    }
}
console.log(getUserInfo(9000));
console.log(getUserInfo("Automation Engineer"));
