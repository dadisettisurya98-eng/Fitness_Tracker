// src/utils/storage.js

const STORAGE_PREFIX = 'workout_';

/**
 * Safe JSON parser with fallback
 */
const safeParseJSON = (str, fallback = null) => {
  if (!str) return fallback;
  try {
    return JSON.parse(str);
  } catch (e) {
    console.error('Error parsing JSON from localStorage', e);
    return fallback;
  }
};

/**
 * Get local date string in YYYY-MM-DD format (timezone-safe)
 */
export const getLocalDateString = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Save workout progress for a specific day.
 * IMPORTANT: Merges with existing data to preserve completed/stepsCompleted flags.
 */
export function saveWorkoutProgress(dateString, dayName, exerciseProgress) {
  const key = `${STORAGE_PREFIX}${dateString}`;
  try {
    const existing = safeParseJSON(localStorage.getItem(key), {});
    const data = {
      ...existing,
      date: dateString,
      day: dayName,
      exercises: exerciseProgress,
      timestamp: new Date().toISOString()
    };
    // Preserve existing flags if not in the new data
    if (data.completed === undefined) data.completed = false;
    if (data.stepsCompleted === undefined) data.stepsCompleted = false;
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save workout progress to localStorage', e);
  }
}

/**
 * Load workout progress for a specific day
 */
export function loadWorkoutProgress(dateString) {
  const key = `${STORAGE_PREFIX}${dateString}`;
  try {
    const data = localStorage.getItem(key);
    return safeParseJSON(data, null);
  } catch (e) {
    console.error('Failed to load workout progress from localStorage', e);
    return null;
  }
}

/**
 * Get all completed sets for a specific date
 */
export function getCompletedSets(dateString) {
  const progress = loadWorkoutProgress(dateString);
  if (!progress) return {};

  const completed = {};
  if (Array.isArray(progress.exercises)) {
    progress.exercises.forEach((exercise) => {
      completed[exercise.id] = exercise.completedSets || 0;
    });
  }
  return completed;
}

/**
 * Mark a set as complete for a specific exercise
 */
export function markSetComplete(dateString, exerciseId, setNumber) {
  const progress = loadWorkoutProgress(dateString);
  if (!progress) return;

  if (Array.isArray(progress.exercises)) {
    const exercise = progress.exercises.find((ex) => ex.id === exerciseId);
    if (exercise) {
      exercise.completedSets = Math.max(exercise.completedSets || 0, setNumber);
    }
  }

  const key = `${STORAGE_PREFIX}${dateString}`;
  try {
    localStorage.setItem(key, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save set completion', e);
  }
}

/**
 * Toggle steps completion for a date
 */
export function toggleStepsCompleted(dateString) {
  const progress = loadWorkoutProgress(dateString);
  if (!progress) return false;

  progress.stepsCompleted = !progress.stepsCompleted;
  const key = `${STORAGE_PREFIX}${dateString}`;
  try {
    localStorage.setItem(key, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save steps completion', e);
  }
  return progress.stepsCompleted;
}

/**
 * Check if steps are completed
 */
export function isStepsCompleted(dateString) {
  const progress = loadWorkoutProgress(dateString);
  return progress ? !!progress.stepsCompleted : false;
}

/**
 * Mark/unmark today's attendance (toggle)
 */
export function toggleAttendance(dateString) {
  const key = `${STORAGE_PREFIX}${dateString}`;
  try {
    const existing = safeParseJSON(localStorage.getItem(key), null);
    if (existing) {
      existing.completed = !existing.completed;
      localStorage.setItem(key, JSON.stringify(existing));
      return existing.completed;
    } else {
      // Create a minimal attendance record
      const data = {
        date: dateString,
        day: new Date(dateString + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase(),
        exercises: [],
        completed: true,
        stepsCompleted: false,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    }
  } catch (e) {
    console.error('Failed to toggle attendance', e);
    return false;
  }
}

/**
 * Check if a specific date is marked as complete
 */
export function isWorkoutComplete(dateString) {
  const progress = loadWorkoutProgress(dateString);
  return progress ? !!progress.completed : false;
}

/**
 * Mark entire workout as complete
 */
export function markWorkoutComplete(dateString) {
  const progress = loadWorkoutProgress(dateString);
  if (!progress) return;

  progress.completed = true;
  const key = `${STORAGE_PREFIX}${dateString}`;
  try {
    localStorage.setItem(key, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save workout completion', e);
  }
}

/**
 * Get attendance map for an entire month { 'YYYY-MM-DD': true/false }
 */
export function getMonthAttendanceMap(year, month) {
  const map = {};
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dateStr = getLocalDateString(date);
    const progress = loadWorkoutProgress(dateStr);
    map[dateStr] = progress ? !!progress.completed : false;
  }

  return map;
}

/**
 * Get attendance for a date range
 */
export function getAttendanceByDateRange(startDate, endDate) {
  const attendance = {};
  const current = new Date(startDate);

  while (current <= endDate) {
    const dateStr = getLocalDateString(current);
    const progress = loadWorkoutProgress(dateStr);
    attendance[dateStr] = progress ? !!progress.completed : false;
    current.setDate(current.getDate() + 1);
  }

  return attendance;
}

/**
 * Calculate weekly attendance percentage
 */
export function getWeeklyAttendance(startDate) {
  const current = new Date(startDate);
  const weekStart = new Date(current);
  const day = weekStart.getDay();
  const diff = weekStart.getDate() - day + (day === 0 ? -6 : 1);
  weekStart.setDate(diff);

  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);

  const attendance = getAttendanceByDateRange(weekStart, weekEnd);
  const days = Object.values(attendance);
  const completed = days.filter((d) => d === true).length;
  const percentage = days.length > 0 ? Math.round((completed / days.length) * 100) : 0;

  return {
    completed,
    total: days.length,
    percentage,
    startDate: getLocalDateString(weekStart),
    endDate: getLocalDateString(weekEnd)
  };
}

/**
 * Calculate monthly attendance percentage
 */
export function getMonthlyAttendance(date = new Date()) {
  const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
  const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const attendance = getAttendanceByDateRange(monthStart, monthEnd);
  const days = Object.values(attendance);
  const completed = days.filter((d) => d === true).length;
  const percentage = days.length > 0 ? Math.round((completed / days.length) * 100) : 0;

  return {
    completed,
    total: days.length,
    percentage,
    startDate: getLocalDateString(monthStart),
    endDate: getLocalDateString(monthEnd)
  };
}

/**
 * Calculate yearly attendance percentage
 */
export function getYearlyAttendance(date = new Date()) {
  const yearStart = new Date(date.getFullYear(), 0, 1);
  const yearEnd = new Date(date.getFullYear(), 11, 31);

  const attendance = getAttendanceByDateRange(yearStart, yearEnd);
  const days = Object.values(attendance);
  const completed = days.filter((d) => d === true).length;
  const percentage = days.length > 0 ? Math.round((completed / days.length) * 100) : 0;

  return {
    completed,
    total: days.length,
    percentage,
    startDate: getLocalDateString(yearStart),
    endDate: getLocalDateString(yearEnd)
  };
}

/**
 * Calculate current training streak (consecutive completed days counting backward)
 */
export function getCurrentStreak(date = new Date()) {
  let streak = 0;
  const currentDate = new Date(date);
  currentDate.setHours(0, 0, 0, 0);

  const todayStr = getLocalDateString(currentDate);
  const todayProgress = loadWorkoutProgress(todayStr);

  const yesterdayDate = new Date(currentDate);
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterdayStr = getLocalDateString(yesterdayDate);
  const yesterdayProgress = loadWorkoutProgress(yesterdayStr);

  const hasTrainedRecently =
    (todayProgress && todayProgress.completed) ||
    (yesterdayProgress && yesterdayProgress.completed);

  if (!hasTrainedRecently) return 0;

  let checkDate = (todayProgress && todayProgress.completed) ? currentDate : yesterdayDate;
  while (true) {
    const checkStr = getLocalDateString(checkDate);
    const progress = loadWorkoutProgress(checkStr);

    if (progress && progress.completed) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

/**
 * Initialize workout data for a specific day
 */
export function initializeWorkoutDay(dateString, dayName, exercises) {
  const key = `${STORAGE_PREFIX}${dateString}`;
  try {
    const existing = localStorage.getItem(key);

    if (!existing) {
      const data = {
        date: dateString,
        day: dayName,
        exercises: exercises.map((ex) => ({
          id: ex.id,
          name: ex.name,
          sets: ex.sets,
          reps: ex.reps,
          completedSets: 0
        })),
        completed: false,
        stepsCompleted: false,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(key, JSON.stringify(data));
    }
  } catch (e) {
    console.error('Failed to initialize workout day', e);
  }
}

/**
 * Clear all workout data (for development/testing)
 */
export function clearAllData() {
  const keys = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(STORAGE_PREFIX)) {
        keys.push(key);
      }
    }
    keys.forEach((key) => localStorage.removeItem(key));
  } catch (e) {
    console.error('Failed to clear data', e);
  }
}
