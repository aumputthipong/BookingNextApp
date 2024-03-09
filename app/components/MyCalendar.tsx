'use client';
import React from 'react'
import { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const MyCalendar = ({ date }:any) => {
  const formattedDate = moment(date).format("MMMM YYYY"); // Customize format
  const [value, onChange] = useState<Value>(new Date());
  return (
  <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default MyCalendar