import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface MyComponentProps {
  onDateClick: (dateString: Date) => void;
}

const MyCalendar: React.FC<MyComponentProps> = ({ onDateClick }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    onDateClick(date);
  };

  return (
    <div>
      <Calendar onClickDay={handleDayClick} />
      {selectedDate && (
        <p>Selected date: {selectedDate.toLocaleDateString()}</p>
      )}
    </div>
  );
};

export default MyCalendar;