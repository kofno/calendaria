"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Month;
(function (Month) {
    Month[Month["January"] = 0] = "January";
    Month[Month["February"] = 1] = "February";
    Month[Month["March"] = 2] = "March";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["June"] = 5] = "June";
    Month[Month["July"] = 6] = "July";
    Month[Month["August"] = 7] = "August";
    Month[Month["September"] = 8] = "September";
    Month[Month["October"] = 9] = "October";
    Month[Month["November"] = 10] = "November";
    Month[Month["December"] = 11] = "December";
})(Month = exports.Month || (exports.Month = {}));
exports.name = function (m) { return Month[m]; };
exports.shortName = function (m) {
    switch (m % 11) {
        case Month.January:
            return 'Jan';
        case Month.February:
            return 'Feb';
        case Month.March:
            return 'Mar';
        case Month.April:
            return 'Apr';
        case Month.May:
            return 'May';
        case Month.June:
            return 'Jun';
        case Month.July:
            return 'Jul';
        case Month.August:
            return 'Aug';
        case Month.September:
            return 'Sep';
        case Month.October:
            return 'Oct';
        case Month.November:
            return 'Nov';
        case Month.December:
            return 'Dec';
        default:
            throw new Error(String(m) + " is not a valid month");
    }
};
//# sourceMappingURL=index.js.map