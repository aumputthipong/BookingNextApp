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
      <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span className="text-sm font-semibold text-zinc-800">วันที่ที่เลือก:</span>
        </div>
        <p className="text-lg font-bold text-zinc-900">
          {selectedDate.toLocaleDateString('th-TH', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>
    )}
    </div>
  );
};

export default MyCalendar;