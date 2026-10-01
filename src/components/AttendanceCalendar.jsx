import React, { useState, useMemo } from 'react';
import { getMonthAttendanceMap, getLocalDateString } from '../utils/storage.js';

const WEEKDAY_LABELS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTH_NAMES = [
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
  'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
];

const AttendanceCalendar = ({ refreshKey }) => {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const todayStr = getLocalDateString(today);

  const attendanceMap = useMemo(() => {
    return getMonthAttendanceMap(viewYear, viewMonth);
  }, [viewYear, viewMonth, refreshKey]);

  const calendarDays = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1);
    const lastDay = new Date(viewYear, viewMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay();

    const days = [];

    // Empty cells before the first day
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push({ type: 'empty', key: `empty-${i}` });
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = getLocalDateString(new Date(viewYear, viewMonth, day));
      const isToday = dateStr === todayStr;
      const isFuture = new Date(viewYear, viewMonth, day) > today;
      const isCompleted = attendanceMap[dateStr] || false;

      days.push({
        type: 'day',
        key: dateStr,
        day,
        dateStr,
        isToday,
        isFuture,
        isCompleted
      });
    }

    return days;
  }, [viewYear, viewMonth, attendanceMap, todayStr]);

  const goToPrevMonth = () => {
    if (viewMonth === 0) {
      setViewYear(viewYear - 1);
      setViewMonth(11);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (viewMonth === 11) {
      setViewYear(viewYear + 1);
      setViewMonth(0);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const goToToday = () => {
    setViewYear(today.getFullYear());
    setViewMonth(today.getMonth());
  };

  const completedCount = Object.values(attendanceMap).filter(Boolean).length;
  const totalDays = new Date(viewYear, viewMonth + 1, 0).getDate();
  const isCurrentMonth = viewYear === today.getFullYear() && viewMonth === today.getMonth();

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Attendance Calendar</h2>

      {/* Month Navigation */}
      <div className="calendar-nav">
        <button
          className="calendar-nav-btn"
          onClick={goToPrevMonth}
          aria-label="Previous month"
        >
          ◄
        </button>
        <button
          className="calendar-month-label"
          onClick={goToToday}
          aria-label="Go to current month"
        >
          {MONTH_NAMES[viewMonth]} {viewYear}
        </button>
        <button
          className="calendar-nav-btn"
          onClick={goToNextMonth}
          aria-label="Next month"
        >
          ►
        </button>
      </div>

      {/* Month Summary */}
      <div className="calendar-summary">
        <span className="calendar-summary-count">{completedCount}</span>
        <span className="calendar-summary-label">
          / {totalDays} days completed
        </span>
      </div>

      {/* Weekday Headers */}
      <div className="calendar-grid">
        {WEEKDAY_LABELS.map((label) => (
          <div key={label} className="calendar-weekday-header">
            {label}
          </div>
        ))}

        {/* Day Cells */}
        {calendarDays.map((cell) => {
          if (cell.type === 'empty') {
            return <div key={cell.key} className="calendar-cell calendar-cell-empty" />;
          }

          let cellClass = 'calendar-cell';
          if (cell.isToday) cellClass += ' calendar-cell-today';
          if (cell.isCompleted) cellClass += ' calendar-cell-completed';
          if (cell.isFuture) cellClass += ' calendar-cell-future';

          return (
            <div
              key={cell.key}
              className={cellClass}
              title={cell.isCompleted ? `${cell.dateStr} — Completed ✓` : cell.dateStr}
            >
              <span className="calendar-day-number">{cell.day}</span>
              {cell.isCompleted && (
                <span className="calendar-check" aria-label="Completed">✓</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="calendar-legend">
        <div className="calendar-legend-item">
          <span className="calendar-legend-dot calendar-legend-completed" />
          <span>Completed</span>
        </div>
        <div className="calendar-legend-item">
          <span className="calendar-legend-dot calendar-legend-missed" />
          <span>Missed</span>
        </div>
        <div className="calendar-legend-item">
          <span className="calendar-legend-dot calendar-legend-today" />
          <span>Today</span>
        </div>
      </div>

      {!isCurrentMonth && (
        <button className="calendar-today-btn" onClick={goToToday}>
          ← BACK TO TODAY
        </button>
      )}
    </div>
  );
};

export default AttendanceCalendar;
