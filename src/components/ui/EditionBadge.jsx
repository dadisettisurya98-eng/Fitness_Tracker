import React from 'react';

const EditionBadge = ({ volume = 1, date }) => {
  const displayDate = date || new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="edition-badge">
      Vol. {volume} | {displayDate} | Digital Edition
    </div>
  );
};

export default EditionBadge;
