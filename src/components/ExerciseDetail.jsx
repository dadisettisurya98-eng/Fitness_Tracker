import React, { useState } from 'react';

const ExerciseDetail = ({ exercise }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const formatList = (arr) => {
    if (!arr || !Array.isArray(arr) || arr.length === 0) return null;
    return (
      <ul style={{ margin: '0', paddingLeft: '20px' }}>
        {arr.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    );
  };

  const sections = [
    { key: 'notes', label: 'Notes', content: exercise.notes },
    { key: 'tempo', label: 'Tempo', content: exercise.tempo },
    { key: 'rpe', label: 'RPE', content: exercise.rpe },
    { key: 'warmupSets', label: 'Warmup Sets', content: exercise.warmupSets },
    { key: 'progression', label: 'Progression', content: exercise.progression },
    { key: 'primaryMuscles', label: 'Primary Muscles', content: formatList(exercise.primaryMuscles) },
    { key: 'secondaryMuscles', label: 'Secondary Muscles', content: formatList(exercise.secondaryMuscles) },
    { key: 'replacements', label: 'Replacements', content: formatList(exercise.replacements) }
  ].filter(s => s.content);

  return (
    <div className="exercise-detail">
      {sections.map((section) => (
        <div key={section.key} className="detail-section">
          <button
            className="detail-header"
            onClick={() => toggleSection(section.key)}
            aria-expanded={!!expandedSections[section.key]}
            aria-label={`${expandedSections[section.key] ? 'Collapse' : 'Expand'} ${section.label}`}
          >
            <span className="detail-label">{section.label}</span>
            <span
              className={`detail-toggle ${expandedSections[section.key] ? 'open' : ''}`}
              aria-hidden="true"
            >
              ▼
            </span>
          </button>
          {expandedSections[section.key] && (
            <div className="detail-content">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExerciseDetail;