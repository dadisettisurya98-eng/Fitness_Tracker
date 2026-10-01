import React, { useState, useEffect, useCallback } from 'react';
import { getCurrentStreak, getWeeklyAttendance, getMonthlyAttendance, getYearlyAttendance, toggleAttendance, isWorkoutComplete, getLocalDateString } from '../utils/storage.js';
import OrnamentDivider from './ui/OrnamentDivider.jsx';
import EditionBadge from './ui/EditionBadge.jsx';
import AttendanceCalendar from './AttendanceCalendar.jsx';

// Extracted outside the component to prevent re-creation on every render
const StatCard = ({ title, completed, total, percentage }) => (
  <div className="stat-card">
    <h3 className="stat-card-title">{title}</h3>
    <div className="stat-percentage">{percentage}%</div>
    <div className="stat-details">{completed} / {total} days</div>
    <div className="stat-bar">
      <div className="stat-bar-fill" style={{ width: `${percentage}%` }} />
    </div>
  </div>
);

const PrinciplesSection = () => (
  <div className="principles-section">
    <h2 className="principles-title">Core Training Principles</h2>
    <div className="principles-grid">
      <div className="principle-card">
        <div className="principle-number">1</div>
        <div className="principle-title">Progressive Overload</div>
        <div className="principle-text">Gradually increase weight, reps, or sets each week to drive muscle growth and strength gains.</div>
      </div>
      <div className="principle-card">
        <div className="principle-number">2</div>
        <div className="principle-title">Form Over Ego</div>
        <div className="principle-text">Perfect technique is more valuable than heavy weight. Quality reps build better physiques.</div>
      </div>
      <div className="principle-card">
        <div className="principle-number">3</div>
        <div className="principle-title">Recovery First</div>
        <div className="principle-text">Sleep, nutrition, and hydration are where growth happens. Train hard, recover harder.</div>
      </div>
      <div className="principle-card">
        <div className="principle-number">4</div>
        <div className="principle-title">Consistency Wins</div>
        <div className="principle-text">Show up every day. Small actions compound into extraordinary results over time.</div>
      </div>
      <div className="principle-card">
        <div className="principle-number">5</div>
        <div className="principle-title">Mind-Muscle Connection</div>
        <div className="principle-text">Feel the muscle working. Awareness and control beat reckless movements.</div>
      </div>
      <div className="principle-card">
        <div className="principle-number">6</div>
        <div className="principle-title">Nutrition Precision</div>
        <div className="principle-text">Track macros consistently. You can't out-train a bad diet—fuel your progress.</div>
      </div>
    </div>
  </div>
);

const Ticker = ({ stats }) => {
  const items = [
    `Weekly: ${stats.weekly?.percentage || 0}%`,
    '•',
    `Monthly: ${stats.monthly?.percentage || 0}%`,
    '•',
    `Yearly: ${stats.yearly?.percentage || 0}%`,
    '•',
    'STAY CONSISTENT',
    '•',
    'PUSH HARDER',
    '•',
    'TRACK PROGRESS'
  ];

  return (
    <div className="ticker-container">
      <div className="ticker-content">
        {items.concat(items).map((item, idx) => (
          <span
            key={idx}
            className={`ticker-item ${item === '•' ? 'separator' : ''} ${['STAY CONSISTENT', 'PUSH HARDER', 'TRACK PROGRESS'].includes(item) ? 'highlight' : ''}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Progress = () => {
  const [weeklyStats, setWeeklyStats] = useState(null);
  const [monthlyStats, setMonthlyStats] = useState(null);
  const [yearlyStats, setYearlyStats] = useState(null);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [todayCompleted, setTodayCompleted] = useState(false);
  const [calendarRefreshKey, setCalendarRefreshKey] = useState(0);

  const todayStr = getLocalDateString(new Date());

  const updateStats = useCallback(() => {
    const today = new Date();

    const weekly = getWeeklyAttendance(today);
    const monthly = getMonthlyAttendance(today);
    const yearly = getYearlyAttendance(today);
    const streak = getCurrentStreak(today);
    const todayComplete = isWorkoutComplete(todayStr);

    setWeeklyStats(weekly);
    setMonthlyStats(monthly);
    setYearlyStats(yearly);
    setCurrentStreak(streak);
    setTodayCompleted(todayComplete);
  }, [todayStr]);

  useEffect(() => {
    updateStats();
  }, [updateStats]);

  const handleToggleAttendance = () => {
    const newValue = toggleAttendance(todayStr);
    setTodayCompleted(newValue);
    setCalendarRefreshKey((prev) => prev + 1);
    // Refresh all stats after toggling
    setTimeout(updateStats, 50);
  };

  return (
    <div className="progress-container">
      <EditionBadge volume={2} />

      {/* Header */}
      <div className="progress-header">
        <h2 className="section-headline">PROGRESS TRACKING</h2>
        <p className="section-subtitle">Monitor your training consistency and build momentum</p>
      </div>

      {/* ===== ATTENDANCE BUTTON ===== */}
      <div className="attendance-section">
        <button
          className={`attendance-btn ${todayCompleted ? 'attendance-btn-completed' : ''}`}
          onClick={handleToggleAttendance}
          aria-pressed={todayCompleted}
        >
          <span className="attendance-btn-icon">
            {todayCompleted ? '✓' : '○'}
          </span>
          <span className="attendance-btn-text">
            {todayCompleted ? 'TODAY MARKED AS COMPLETE' : 'MARK TODAY AS COMPLETE'}
          </span>
        </button>
        <p className="attendance-hint">
          {todayCompleted
            ? 'Great work! Your attendance has been recorded.'
            : 'Tap the button above to log today\'s attendance.'}
        </p>
      </div>

      <Ticker stats={{ weekly: weeklyStats, monthly: monthlyStats, yearly: yearlyStats }} />

      <OrnamentDivider />

      {/* Streak Section */}
      <div className="streak-section">
        <div className="streak-card">
          <div className="streak-emoji">🔥</div>
          <div className="streak-label">CURRENT STREAK</div>
          <div className="streak-value">{currentStreak} DAYS</div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {weeklyStats && (
          <StatCard
            title="Weekly"
            completed={weeklyStats.completed}
            total={weeklyStats.total}
            percentage={weeklyStats.percentage}
          />
        )}
        {monthlyStats && (
          <StatCard
            title="Monthly"
            completed={monthlyStats.completed}
            total={monthlyStats.total}
            percentage={monthlyStats.percentage}
          />
        )}
        {yearlyStats && (
          <StatCard
            title="Yearly"
            completed={yearlyStats.completed}
            total={yearlyStats.total}
            percentage={yearlyStats.percentage}
          />
        )}
      </div>

      <OrnamentDivider />

      {/* ===== ATTENDANCE CALENDAR ===== */}
      <AttendanceCalendar refreshKey={calendarRefreshKey} />

      <OrnamentDivider />

      <PrinciplesSection />

      <OrnamentDivider />

      {/* Goals Section */}
      <div className="goals-section">
        <h2 className="subsection-title">Your Goals</h2>
        <div className="goals-list">
          <div className="goal-item">
            <span className="goal-emoji">💪</span>
            <span className="goal-text">Build bigger arms (4 bicep + 4 tricep exercises/week)</span>
          </div>
          <div className="goal-item">
            <span className="goal-emoji">📐</span>
            <span className="goal-text">Develop V-shaped physique with wide shoulders</span>
          </div>
          <div className="goal-item">
            <span className="goal-emoji">🦅</span>
            <span className="goal-text">Build wing lats (3 back exercises/week)</span>
          </div>
          <div className="goal-item">
            <span className="goal-emoji">😊</span>
            <span className="goal-text">Eliminate double chin and face bloating</span>
          </div>
          <div className="goal-item">
            <span className="goal-emoji">✨</span>
            <span className="goal-text">Build strong core without excessive fat</span>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline-section">
        <h2 className="subsection-title">Expected Timeline</h2>
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-marker">WEEKS 1-4</div>
            <div className="timeline-content">
              Form improves dramatically. Strength baseline established. Face starts to look less bloated.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">WEEKS 5-8</div>
            <div className="timeline-content">
              Noticeable arm growth. Chest and shoulders looking fuller. Back showing definition. Face significantly sharper.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">WEEKS 9-12</div>
            <div className="timeline-content">
              Significant aesthetic changes. Arms noticeably bigger. Back showing wing lats. Double chin gone. Abdominal detail visible.
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="tips-section">
        <h2 className="subsection-title">Pro Tips</h2>
        <div className="tips-list">
          <div className="tip">
            <h4 className="tip-title">Track Everything</h4>
            <p className="tip-text">Mark exercises complete as you go. This builds accountability.</p>
          </div>
          <div className="tip">
            <h4 className="tip-title">Consistency Over Perfection</h4>
            <p className="tip-text">6/7 days is better than 7/7 but burning out. Play the long game.</p>
          </div>
          <div className="tip">
            <h4 className="tip-title">Sleep is King</h4>
            <p className="tip-text">8-9 hours per night. This is where the magic happens.</p>
          </div>
          <div className="tip">
            <h4 className="tip-title">Eat Enough Protein</h4>
            <p className="tip-text">130g daily minimum. Don't skip meals trying to save calories.</p>
          </div>
          <div className="tip">
            <h4 className="tip-title">Progressive Overload</h4>
            <p className="tip-text">+1 rep or +2.5kg each week. Slow progress is still progress.</p>
          </div>
          <div className="tip">
            <h4 className="tip-title">Don't Skip Steps</h4>
            <p className="tip-text">10k steps daily aids recovery and general health.</p>
          </div>
        </div>
      </div>

      {/* Refresh Button */}
      <button className="refresh-stats-btn" onClick={updateStats}>
        REFRESH STATS
      </button>
    </div>
  );
};

export default Progress;