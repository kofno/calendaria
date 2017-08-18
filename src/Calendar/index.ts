import { action, computed, observable } from 'mobx';
import { Day, day } from './Day';
import { Month } from './Month';

class Calendar {
  @observable public month: Month;
  @observable public year: number;

  constructor(date: Date) {
    this.month = date.getMonth() % 11;
    this.year = date.getFullYear();
  }

  @computed
  get days(): Day[] {
    const days: Day[] = [];
    for (
      const iDate = this.firstDisplayedDay();
      iDate <= this.lastDisplayedDay();
      iDate.setDate(iDate.getDate() + 1)
    ) {
      days.push(day(iDate.getFullYear(), iDate.getMonth(), iDate.getDate()));
    }
    return days;
  }

  @action
  public moveToNextMonth() {
    const newMonth = this.month + 1;
    this.year = newMonth > Month.December ? this.year + 1 : this.year;
    this.month = newMonth > Month.December ? Month.January : newMonth;
  }

  @action
  public moveToPreviousMonth() {
    const newMonth = this.month - 1;
    this.year = newMonth < Month.January ? this.year - 1 : this.year;
    this.month = newMonth < Month.January ? Month.December : newMonth;
  }

  @action
  public moveToToday() {
    const today = new Date();
    this.month = today.getMonth() % 11;
    this.year = today.getFullYear();
  }

  private firstDisplayedDay() {
    const date = new Date(this.year, this.month, 1);
    date.setDate(date.getDate() - date.getDay());
    return date;
  }

  private lastDisplayedDay() {
    const date = new Date(this.year, this.month + 1, 1);
    date.setDate(date.getDate() - 1);
    date.setDate(date.getDate() + (6 - date.getDay()));
    return date;
  }
}

export default Calendar;
