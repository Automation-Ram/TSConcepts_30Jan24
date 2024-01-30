var browser;
(function (browser) {
    browser[browser["chrome"] = 0] = "chrome";
    browser[browser["firefox"] = 1] = "firefox";
    browser[browser["safari"] = 2] = "safari";
    browser[browser["edge"] = getVersion('edge')] = "edge";
})(browser || (browser = {}));
function getVersion(browserName) {
    if (browserName === "edge") {
        return 12;
    }
    return -1;
}
console.log(browser.edge);
var status1;
(function (status1) {
    status1["ACTIVE"] = "active";
    status1[status1["DEACTIVE"] = 2] = "DEACTIVE";
    status1[status1["PENDING"] = 3] = "PENDING";
})(status1 || (status1 = {}));
console.log(status1);
