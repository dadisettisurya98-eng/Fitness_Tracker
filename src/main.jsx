import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { workoutData, nutritionPlan } from './data/workoutData.js';
import Workout from './components/Workout.jsx';
import NutritionPage from './components/NutritionPage.jsx';
import Progress from './components/Progress.jsx';
import './style.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('workout');
  const [todayData, setTodayData] = useState(null);
  const [dateString, setDateString] = useState('');

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    setDateString(dateStr);

    const dayIndex = today.getDay();
    const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const todayDay = daysOfWeek[dayIndex];

    const today_data = workoutData[todayDay];
    if (today_data) {
      setTodayData(today_data);
    } else {
      console.warn(`No workout data for: ${todayDay}. Falling back to recovery.`);
      setTodayData({
        day: todayDay,
        color: '#888888',
        focus: 'REST DAY — Active Recovery',
        warmup: [],
        exercises: [{
          id: 'recovery_fallback',
          name: 'Active Recovery',
          sets: 1,
          reps: 'N/A',
          rest: 0,
          rpe: 'N/A',
          tempo: 'N/A',
          notes: 'No resistance training — complete rest from weights.',
          warmupSets: 'N/A',
          progression: 'N/A',
          primaryMuscles: [],
          secondaryMuscles: [],
          replacements: []
        }],
        steps: 'Walk 10k steps today.'
      });
    }
  };

  if (!todayData) {
    return (
      <div className="app-loading">
        <h1>LOADING...</h1>
      </div>
    );
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr + 'T00:00:00');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options).toUpperCase();
  };

  const tabs = [
    { id: 'workout', label: "TODAY'S WORKOUT" },
    { id: 'nutrition', label: 'NUTRITION' },
    { id: 'progress', label: 'PROGRESS' }
  ];

  return (
    <div className="app">
      {/* Newspaper Masthead */}
      <header className="app-masthead">
        <h1 className="masthead-title">WORKOUT TRACKER</h1>
        <div className="masthead-date">{formatDate(dateString)}</div>
      </header>

      {/* Navigation Tabs */}
      <nav className="app-nav" role="tablist" aria-label="Main navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Content Area */}
      <main className="app-content">
        <div
          id="panel-workout"
          role="tabpanel"
          aria-labelledby="tab-workout"
          hidden={activeTab !== 'workout'}
        >
          {activeTab === 'workout' && (
            <Workout todayData={todayData} dateString={dateString} />
          )}
        </div>
        <div
          id="panel-nutrition"
          role="tabpanel"
          aria-labelledby="tab-nutrition"
          hidden={activeTab !== 'nutrition'}
        >
          {activeTab === 'nutrition' && (
            <NutritionPage nutritionData={nutritionPlan} />
          )}
        </div>
        <div
          id="panel-progress"
          role="tabpanel"
          aria-labelledby="tab-progress"
          hidden={activeTab !== 'progress'}
        >
          {activeTab === 'progress' && (
            <Progress />
          )}
        </div>
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
