import React, { useState, useEffect, useRef, useCallback } from 'react';

const Timer = ({ onClose, restSeconds = 120 }) => {
  const [secondsLeft, setSecondsLeft] = useState(restSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const audioCtxRef = useRef(null);

  const playNotification = useCallback(() => {
    if (!audioCtxRef.current) {
      try {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        console.warn('AudioContext not supported', e);
        return;
      }
    }

    const audioCtx = audioCtxRef.current;
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    try {
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.frequency.value = 800;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);

      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + 0.5);
    } catch (e) {
      console.log('Timer finished!', e);
    }
  }, []);

  useEffect(() => {
    if (isRunning && secondsLeft > 0) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            playNotification();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, playNotification]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const initAudioOnAction = () => {
    if (!audioCtxRef.current) {
      try {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        console.warn('AudioContext not supported', e);
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const handleStart = () => {
    initAudioOnAction();
    if (secondsLeft === 0) {
      setSecondsLeft(restSeconds);
    }
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(restSeconds);
  };

  const adjustTimer = (amount) => {
    setSecondsLeft((prev) => Math.max(0, prev + amount));
  };

  const progress = restSeconds > 0 ? ((restSeconds - secondsLeft) / restSeconds) * 100 : 100;

  return (
    <div className="timer-overlay" role="dialog" aria-modal="true" aria-labelledby="timer-title">
      <div className="timer-container">
        {/* Timer Header */}
        <div className="timer-header">
          <h2 id="timer-title" className="timer-title-text">REST TIMER</h2>
          <button className="timer-close-btn" onClick={onClose} aria-label="Close timer">✕</button>
        </div>

        {/* Timer Display */}
        <div className="timer-display">
          <div className="timer-time" aria-live="polite" aria-atomic="true">
            {formatTime(secondsLeft)}
          </div>
          <div className="timer-progress-bar">
            <div className="timer-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Dynamic Adjustments */}
        <div className="timer-adjust-row">
          <button
            className="timer-btn timer-btn-adjust"
            onClick={() => adjustTimer(-15)}
            aria-label="Subtract 15 seconds"
          >
            -15S
          </button>
          <button
            className="timer-btn timer-btn-adjust"
            onClick={() => adjustTimer(15)}
            aria-label="Add 15 seconds"
          >
            +15S
          </button>
        </div>

        {/* Control Buttons */}
        <div className="timer-controls">
          {!isRunning ? (
            <button className="timer-btn timer-btn-start" onClick={handleStart}>
              START
            </button>
          ) : (
            <button className="timer-btn timer-btn-pause" onClick={handlePause}>
              PAUSE
            </button>
          )}
          <button className="timer-btn timer-btn-reset" onClick={handleReset}>
            RESET
          </button>
        </div>

        {/* Timer Status Info */}
        <div className="timer-info">
          {secondsLeft === 0 ? (
            <p className="timer-finished">TIME TO GET BACK TO WORK</p>
          ) : (
            <p>{isRunning ? 'Timer running...' : 'Timer paused'}</p>
          )}
        </div>

        {/* Close Full Button */}
        <button className="timer-close-full" onClick={onClose}>
          CLOSE TIMER
        </button>
      </div>
    </div>
  );
};

export default Timer;