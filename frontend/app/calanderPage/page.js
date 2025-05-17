"use client"
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import Style from './style.module.css';

const myEventsList = [
    {
      "title": "Event 1",
      "start": "2025-05-17T16:30:00.000Z",
      "end": "2025-05-17T22:30:00.000Z"
    },
    {
      "title": "Event 2",
      "start": "2025-05-17T18:00:00.000Z",
      "end": "2025-05-17T20:00:00.000Z"
    },
    {
      "title": "Event 3",
      "start": "2025-05-17T16:30:00.000Z",
      "end": "2025-05-17T18:30:00.000Z"
    }
  ];

const Main = () => {
    return(
        <main>
            <div className={Style.wrapper}>
                <FullCalendar
                    plugins={[timeGridPlugin]}
                    initialView="timeGridDay"
                    events={myEventsList}
                />
            </div>
        </main>
    )
}

export default Main;