"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var Day_1 = require("./Day");
var Month_1 = require("./Month");
var Calendar = (function () {
    function Calendar(date) {
        this.month = date.getMonth() % 11;
        this.year = date.getFullYear();
    }
    Object.defineProperty(Calendar.prototype, "days", {
        get: function () {
            var days = [];
            for (var iDate = this.firstDisplayedDay(); iDate <= this.lastDisplayedDay(); iDate.setDate(iDate.getDate() + 1)) {
                days.push(Day_1.day(iDate.getFullYear(), iDate.getMonth(), iDate.getDate()));
            }
            return days;
        },
        enumerable: true,
        configurable: true
    });
    Calendar.prototype.moveToNextMonth = function () {
        var newMonth = this.month + 1;
        this.year = newMonth > Month_1.Month.December ? this.year + 1 : this.year;
        this.month = newMonth > Month_1.Month.December ? Month_1.Month.January : newMonth;
    };
    Calendar.prototype.moveToPreviousMonth = function () {
        var newMonth = this.month - 1;
        this.year = newMonth < Month_1.Month.January ? this.year - 1 : this.year;
        this.month = newMonth < Month_1.Month.January ? Month_1.Month.December : newMonth;
    };
    Calendar.prototype.moveToToday = function () {
        var today = new Date();
        this.month = today.getMonth() % 11;
        this.year = today.getFullYear();
    };
    Calendar.prototype.firstDisplayedDay = function () {
        var date = new Date(this.year, this.month, 1);
        date.setDate(date.getDate() - date.getDay());
        return date;
    };
    Calendar.prototype.lastDisplayedDay = function () {
        var date = new Date(this.year, this.month + 1, 1);
        date.setDate(date.getDate() - 1);
        date.setDate(date.getDate() + (6 - date.getDay()));
        return date;
    };
    __decorate([
        mobx_1.observable
    ], Calendar.prototype, "month", void 0);
    __decorate([
        mobx_1.observable
    ], Calendar.prototype, "year", void 0);
    __decorate([
        mobx_1.computed
    ], Calendar.prototype, "days", null);
    __decorate([
        mobx_1.action
    ], Calendar.prototype, "moveToNextMonth", null);
    __decorate([
        mobx_1.action
    ], Calendar.prototype, "moveToPreviousMonth", null);
    __decorate([
        mobx_1.action
    ], Calendar.prototype, "moveToToday", null);
    return Calendar;
}());
exports.default = Calendar;
//# sourceMappingURL=index.js.map