"use client";
import React, { useState } from 'react';

const Timeframe = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const timeOptions = [
    ...Array.from({ length: 12 }, (_, i) => `${i + 1} AM`),
    ...Array.from({ length: 12 }, (_, i) => `${i + 1} PM`)
  ];

  const handleStartTimeChange = (e) => setStartTime(e.target.value);
  const handleEndTimeChange = (e) => setEndTime(e.target.value);

  return (
    <div>
      <div>
        <label>Start Time: </label>
        <select
          value={startTime}
          onChange={handleStartTimeChange}
          label="Select Start Time"
        >
          <option value="">Select Start Time</option>
          {timeOptions.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>End Time: </label>
        <select
          value={endTime}
          onChange={handleEndTimeChange}
          label="Select End Time"
        >
          <option value="">Select End Time</option>
          {timeOptions.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>
          Timeframe: {startTime} - {endTime}
        </p>
      </div>
    </div>
  );
};

export default Timeframe;
