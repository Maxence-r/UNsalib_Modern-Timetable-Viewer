import { useState, type ReactElement } from "react";
import {
    DatePicker as ReactDatePicker,
    type ReactDatePickerCustomHeaderProps,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./DateTimePicker.css";
import { IconButton } from "../button/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const months = [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juill.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
];

function CustomHeader({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
}: ReactDatePickerCustomHeaderProps): ReactElement {
    return (
        <>
            <IconButton
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                icon={<ChevronLeft />}
                secondary
            />

            <span>
                {months[date.getMonth()]} {date.getFullYear()}
            </span>

            <IconButton
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                icon={<ChevronRight />}
                secondary
            />
        </>
    );
}

function DatePicker(): ReactElement {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <ReactDatePicker
            selected={startDate}
            renderCustomHeader={CustomHeader}
            onChange={(date) => setStartDate(date)}
            inline
        />
    );
}

function TimePicker(): ReactElement {
    return (
        <div className="time-picker">
            <div className="values">
                {[...Array(24)].map((_val, i) => (
                    <span key={`hour-${i}`}>
                        {i.toString().padStart(2, "0")}
                    </span>
                ))}
            </div>
            <div className="values">
                {[...Array(60)].map((_val, i) => (
                    <span key={`minute-${i}`}>
                        {i.toString().padStart(2, "0")}
                    </span>
                ))}
            </div>
        </div>
    );
}

export { DatePicker, TimePicker };
