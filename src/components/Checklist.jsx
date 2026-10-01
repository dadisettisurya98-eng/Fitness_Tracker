import React, { useState, useEffect } from 'react';
import ExerciseDetail from './ExerciseDetail.jsx';
import { loadWorkoutProgress } from '../utils/storage.js';

const Checklist = ({ exercise, dateString, onTimerStart, onSetComplete }) => {
  const [completedSets, setCompletedSets] = useState(0);
  const [expandedDetails, setExpandedDetails] = useState(false);

  useEffect(() => {
    // Use the storage utility instead of raw localStorage
    const progress = loadWorkoutProgress(dateString);
    if (progress && Array.isArray(progress.exercises)) {
      const exerciseData = progress.exercises.find((ex) => ex.id === exercise.id);
      if (exerciseData) {
        setCompletedSets(exerciseData.completedSets || 0);
      }
    }
  }, [exercise.id, dateString]);

  const handleSetComplete = (setNumber) => {
    const newSets = completedSets === setNumber ? setNumber - 1 : setNumber;
    setCompletedSets(newSets);
    onSetComplete(exercise.id, newSets);
  };

  const handleTimerClick = () => {
    onTimerStart(exercise.rest);
  };

  const toggleDetails = () => {
    setExpandedDetails(!expandedDetails);
  };

  return (
    <div className="checklist-item">
      {/* Exercise Header */}
      <div className="checklist-header">
        <div className="checklist-title">
          <h3 className="checklist-exercise-name">{exercise.name}</h3>
          <span className="checklist-sets-reps">
            {exercise.sets} × {exercise.reps}
          </span>
        </div>
        <button
          className="checklist-details-btn"
          onClick={toggleDetails}
          aria-expanded={expandedDetails}
          aria-label={`${expandedDetails ? 'Hide' : 'Show'} details for ${exercise.name}`}
        >
          {expandedDetails ? 'HIDE DETAILS' : 'SHOW DETAILS'}
        </button>
      </div>

      {/* Expandable Exercise Details */}
      {expandedDetails && (
        <div className="checklist-details">
          <ExerciseDetail exercise={exercise} />
        </div>
      )}

      {/* Set Checklist */}
      <div className="checklist-sets">
        {Array.from({ length: exercise.sets }, (_, i) => i + 1).map((setNum) => (
          <div key={setNum} className="set-row">
            <label className="set-checkbox-wrapper">
              <input
                type="checkbox"
                checked={completedSets >= setNum}
                onChange={() => handleSetComplete(setNum)}
                className="set-checkbox"
                aria-label={`${exercise.name} Set ${setNum}`}
              />
              <span className={`set-number ${completedSets >= setNum ? 'completed' : ''}`}>
                SET {setNum}
              </span>
            </label>
            <button
              className="set-timer-btn"
              onClick={handleTimerClick}
              aria-label={`Start rest timer for ${exercise.rest} seconds`}
            >
              TIMER
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checklist;