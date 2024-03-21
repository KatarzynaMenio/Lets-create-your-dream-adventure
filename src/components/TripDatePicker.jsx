import {useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function TripDatePicker() {

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    return (
        <div className="data-picker-element">
            <div className="data-picker-style">
                <DatePicker
                    selectsStart
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    startDate={startDate}
                    monthsShown={1}
                    dateFormat="dd/MM/yyyy"
                />
                <span className="ms-3"></span>
                <DatePicker
                    selectsEnd
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    endDate={endDate}
                    startDate={startDate}
                    minDate={startDate}
                    monthsShown={1}
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div className="trip-duration">Ilość dni w podróży: <span className="trip-duration-style">10</span></div>
        </div>
   )
}