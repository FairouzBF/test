import React, { useState } from 'react';
import { dateRanges } from "../utils/dateRanges";
import { Dayjs } from 'dayjs';
import { DateRange } from '@mui/x-date-pickers-pro';
import Calendar from '@mui/icons-material/Event';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

const Test: React.FC = () => {
    const shortcutsItems = dateRanges;
    const [selectedCreationDate, setSelectedCreationDate] = useState<DateRange<Dayjs>>([null, null]);
    const handleSetCreationDate = (date: DateRange<Dayjs>) => {
        setSelectedCreationDate(date);
        //more code
    };

    return (
        <>
        test
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateRangePicker']}>
                    <DateRangePicker
                        value={selectedCreationDate}
                        format="DD/MM/YYYY"
                        onChange={(date: DateRange<Dayjs>) => setSelectedCreationDate(date)}
                        onAccept={(date: DateRange<Dayjs>) => handleSetCreationDate(date)}
                        calendars={1}
                        slotProps={{
                            shortcuts: {
                                items: shortcutsItems,
                            },
                            actionBar: { actions: [] },
                            textField: { InputProps: { endAdornment: <Calendar />, style: { minHeight: '50px' }, } },
                        }}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </>
    )
}

export default Test;