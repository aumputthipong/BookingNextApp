import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface MyComponentProps {
  onDateClick: (dateString: string) => void;
}

const MyCalendar: React.FC<MyComponentProps> = ({ onDateClick }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);

    // Format day and month with leading zeros
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    
    // Format the date string in the desired format (yyyy-mm-dd)
    const dateString = `${month}/${day}/${date.getFullYear()}`;
    
    onDateClick(dateString);
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
