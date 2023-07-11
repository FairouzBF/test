import { PickersShortcutsItem } from '@mui/x-date-pickers/PickersShortcuts';
import { DateRange } from '@mui/x-date-pickers-pro';
import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

export const dateRanges: PickersShortcutsItem<DateRange<Dayjs>>[] = [
    {
        label: 'This Week',
        getValue: () => {
            const today = dayjs();
            return [today.startOf('week'), today.endOf('week')];
        },
    },
    {
        label: 'Last Week',
        getValue: () => {
            const today = dayjs();
            const prevWeek = today.subtract(7, 'day');
            return [prevWeek.startOf('week'), prevWeek.endOf('week')];
        },
    },
    {
        label: 'Last 7 Days',
        getValue: () => {
            const today = dayjs();
            return [today.subtract(7, 'day'), today];
        },
    },
    {
        label: 'Last Month',
        getValue: () => {
            const today = dayjs();
            const startOfLastMonth = today.startOf('month').subtract(1, 'month');
            return [startOfLastMonth, startOfLastMonth.endOf('month')];
        },
    },
    { label: 'Reset', getValue: () => [null, null] },
];