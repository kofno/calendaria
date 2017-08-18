"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Month = require("./../Month");
exports.day = function (year, month, d) { return ({
    key: String(year) + String(month) + String(d),
    year: year,
    month: month,
    day: d,
}); };
exports.title = function (d) { return String(d.day) + " " + Month.shortName(d.month); };
//# sourceMappingURL=index.js.map