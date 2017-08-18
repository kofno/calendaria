import { Day } from './Day';
import { Month } from './Month';
declare class Calendar {
    month: Month;
    year: number;
    constructor(date: Date);
    readonly days: Day[];
    moveToNextMonth(): void;
    moveToPreviousMonth(): void;
    moveToToday(): void;
    private firstDisplayedDay();
    private lastDisplayedDay();
}
export default Calendar;
