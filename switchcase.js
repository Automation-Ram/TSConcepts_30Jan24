var day = "Saturday";
var dayOfweek;
if (day === "Sunday") {
    dayOfweek = "Sunday";
}
else if (day === "M") {
    dayOfweek = "M";
}
else if (day === "T") {
    dayOfweek = "T";
}
else if (day === "W") {
    dayOfweek = "W";
}
else if (day === "Th") {
    dayOfweek = "Th";
}
else if (day === "Fri") {
    dayOfweek = "Fri";
}
else if (day === "Saturday") {
    dayOfweek = "Saturday";
}
else {
    dayOfweek = "invalid days";
}
console.log("Day of the week:" + dayOfweek);
