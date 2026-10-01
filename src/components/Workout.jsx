import React, { useState, useEffect } from 'react';
import Checklist from './Checklist.jsx';
import Timer from './Timer.jsx';
import OrnamentDivider from './ui/OrnamentDivider.jsx';
import EditionBadge from './ui/EditionBadge.jsx';
import { loadWorkoutProgress, saveWorkoutProgress, initializeWorkoutDay, toggleStepsCompleted } from '../utils/storage.js';

const Workout = ({ todayData, dateString }) => {
  const [showTimer, setShowTimer] = useState(false);
  const [timerRest, setTimerRest] = useState(120);
  const [stepsCompleted, setStepsCompleted] = useState(false);
  const [workoutProgress, setWorkoutProgress] = useState(null);

  useEffect(() => {
    const progress = loadWorkoutProgress(dateString);
    if (progress) {
      setWorkoutProgress(progress);
      setStepsCompleted(!!progress.stepsCompleted);
    } else {
      initializeWorkoutDay(dateString, todayData.day, todayData.exercises);
      const initialExercises = todayData.exercises.map((ex) => ({
        id: ex.id,
        name: ex.name,
        sets: ex.sets,
        reps: ex.reps,
        completedSets: 0
      }));
      const data = {
        date: dateString,
        day: todayData.day,
        exercises: initialExercises,
        completed: false,
        stepsCompleted: false,
        timestamp: new Date().toISOString()
      };
      setWorkoutProgress(data);
    }
  }, [dateString, todayData]);

  const handleTimerStart = (restSeconds) => {
    setTimerRest(restSeconds);
    setShowTimer(true);
  };

  const handleTimerClose = () => {
    setShowTimer(false);
  };

  const handleSetComplete = (exerciseId, setNumber) => {
    if (!workoutProgress) return;

    const updated = { ...workoutProgress };
    const exercise = updated.exercises.find((ex) => ex.id === exerciseId);
    if (exercise) {
      exercise.completedSets = setNumber;
    }

    saveWorkoutProgress(dateString, todayData.day, updated.exercises);
    setWorkoutProgress(updated);
  };

  const handleStepsCompleted = () => {
    const newValue = toggleStepsCompleted(dateString);
    setStepsCompleted(newValue);
    if (workoutProgress) {
      setWorkoutProgress({ ...workoutProgress, stepsCompleted: newValue });
    }
  };

  const allExercisesComplete = (exercises) => {
    return exercises.every((ex) => ex.completedSets >= ex.sets);
  };

  if (!workoutProgress) {
    return <div className="workout-container">LOADING...</div>;
  }

  const allComplete = allExercisesComplete(workoutProgress.exercises);
  const isRestDay = todayData.day === 'SUNDAY';
  const displayDay = isRestDay ? 'ACTIVE RECOVERY' : todayData.focus.toUpperCase();
  const dayLabel = isRestDay ? 'REST DAY' : todayData.day.toUpperCase();

  const getDayColor = () => {
    switch (todayData.day) {
      case 'MONDAY': return 'var(--monday)';
      case 'TUESDAY': return 'var(--tuesday)';
      case 'THURSDAY': return 'var(--thursday)';
      case 'FRIDAY': return 'var(--friday)';
      case 'SATURDAY': return 'var(--saturday)';
      default: return 'var(--wednesday)';
    }
  };

  return (
    <div className="workout-container">
      <EditionBadge date={new Date(dateString + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} />

      {/* Editorial Header */}
      <div className="workout-header" style={{ borderLeftColor: getDayColor() }}>
        <div className="workout-day-label">■ {dayLabel}</div>
        <h2 className="workout-focus-title">{displayDay}</h2>
        <p className="workout-date">
          {new Date(dateString + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {isRestDay ? (
        <div className="rest-day-message">
          <h2>ACTIVE RECOVERY DAY</h2>
          <p>Focus on:</p>
          <ul>
            <li>10,000 steps (break into multiple walks)</li>
            <li>Light stretching (10-15 min)</li>
            <li>Mobility work (hips, shoulders, thoracic spine)</li>
            <li>Foam rolling if available</li>
            <li>8-9 hours of sleep</li>
            <li>Eat normally (maintenance calories)</li>
          </ul>
        </div>
      ) : (
        <>
          <div className="warmup-section">
            <h3>WARMUP</h3>
            <ul>
              {todayData.warmup.map((warmupItem, idx) => (
                <li key={idx}>{warmupItem}</li>
              ))}
            </ul>
          </div>

          <OrnamentDivider />

          <div className="exercises-section">
            <h3>EXERCISES</h3>
            {todayData.exercises.map((exercise) => (
              <Checklist
                key={exercise.id}
                exercise={exercise}
                dateString={dateString}
                onTimerStart={handleTimerStart}
                onSetComplete={handleSetComplete}
              />
            ))}
          </div>

          {allComplete && (
            <div className="completion-message">
              <h2>ALL EXERCISES COMPLETE</h2>
              <p className="completion-subtitle">Time for 10,000 steps.</p>
            </div>
          )}
        </>
      )}

      <OrnamentDivider />

      {/* 10k Steps Section */}
      <div className="steps-section">
        <label className="steps-checkbox-wrapper">
          <input
            type="checkbox"
            checked={stepsCompleted}
            onChange={handleStepsCompleted}
            className="steps-checkbox"
            aria-label="Mark 10,000 steps as completed"
          />
          <span className={stepsCompleted ? 'completed' : ''}>
            10,000 STEPS COMPLETED
          </span>
        </label>
      </div>

      {showTimer && (
        <Timer restSeconds={timerRest} onClose={handleTimerClose} />
      )}
    </div>
  );
};

export default Workout;