function isUserActive(userName) {
    if (userName === "Ram") {
        return true;
    }
    else if (userName === "tom") {
        return false;
    }
    else {
        console.log("Username is not found:" + userName);
        return false;
    }
}
