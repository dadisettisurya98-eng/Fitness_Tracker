import React, { useState } from 'react';
import EditionBadge from './ui/EditionBadge.jsx';

const NutritionPage = ({ nutritionData }) => {
  const [expandedMeal, setExpandedMeal] = useState(null);

  const toggleMeal = (mealIndex) => {
    setExpandedMeal(expandedMeal === mealIndex ? null : mealIndex);
  };

  const dailyTotals = nutritionData.meals.reduce(
    (acc, meal) => ({
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbs,
      fat: acc.fat + meal.fat,
      calories: acc.calories + meal.calories
    }),
    { protein: 0, carbs: 0, fat: 0, calories: 0 }
  );

  // Calculate dynamic macro percentages
  const getMacroWidths = (meal) => {
    const total = meal.protein + meal.carbs + meal.fat;
    if (total === 0) return { protein: 33, carbs: 34, fat: 33 };
    return {
      protein: Math.round((meal.protein / total) * 100),
      carbs: Math.round((meal.carbs / total) * 100),
      fat: Math.round((meal.fat / total) * 100)
    };
  };

  return (
    <div className="nutrition-container">
      <EditionBadge />

      {/* Header */}
      <div className="nutrition-header">
        <h2 className="section-headline">NUTRITION PLAN</h2>
        <p className="section-subtitle">Your personalized macro targets and meal strategy</p>
      </div>

      {/* Daily Targets */}
      <div className="daily-targets">
        <h3 className="subsection-title">Daily Targets</h3>
        <div className="targets-grid">
          <div className="target-card">
            <div className="target-label">Protein</div>
            <div className="target-value">{nutritionData.daily.protein.target}g</div>
            <div className="target-reason">{nutritionData.daily.protein.reason}</div>
          </div>
          <div className="target-card">
            <div className="target-label">Carbs</div>
            <div className="target-value">{nutritionData.daily.carbs.target}g</div>
            <div className="target-reason">{nutritionData.daily.carbs.range}</div>
          </div>
          <div className="target-card">
            <div className="target-label">Fat</div>
            <div className="target-value">{nutritionData.daily.fat.target}g</div>
            <div className="target-reason">{nutritionData.daily.fat.range}</div>
          </div>
          <div className="target-card">
            <div className="target-label">Calories</div>
            <div className="target-value">{nutritionData.daily.calories.target}</div>
            <div className="target-reason">{nutritionData.daily.calories.range}</div>
          </div>
        </div>
      </div>

      {/* Sample Daily Breakdown */}
      <div className="sample-meals">
        <h3 className="subsection-title">Sample Daily Breakdown</h3>
        <div className="meals-list">
          {nutritionData.meals.map((meal, idx) => {
            const widths = getMacroWidths(meal);
            return (
              <div key={idx} className="meal-card">
                <button
                  className="meal-header"
                  onClick={() => toggleMeal(idx)}
                  aria-expanded={expandedMeal === idx}
                >
                  <span className="meal-name">{meal.name}</span>
                  <span className="meal-macros">
                    P: {meal.protein}g | C: {meal.carbs}g | F: {meal.fat}g
                  </span>
                  <span
                    className={`meal-toggle ${expandedMeal === idx ? 'open' : ''}`}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </button>
                {expandedMeal === idx && (
                  <div className="meal-details">
                    <div className="meal-timing-info">
                      <strong>Timing:</strong> {meal.timing}
                    </div>
                    <div className="meal-items-info">
                      <strong>Items:</strong> {meal.items}
                    </div>
                    <div className="meal-macros-detail">
                      <div className="macro-bar">
                        <span style={{ width: `${widths.protein}%` }} className="macro-protein">
                          Protein: {meal.protein}g
                        </span>
                        <span style={{ width: `${widths.carbs}%` }} className="macro-carbs">
                          Carbs: {meal.carbs}g
                        </span>
                        <span style={{ width: `${widths.fat}%` }} className="macro-fat">
                          Fat: {meal.fat}g
                        </span>
                      </div>
                    </div>
                    <div className="meal-calories">
                      <strong>{meal.calories} KCAL</strong>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Daily Summary */}
        <div className="daily-summary">
          <h3 className="daily-summary-title">Daily Total</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <span>PROTEIN</span>
              <strong>{dailyTotals.protein}g</strong>
            </div>
            <div className="summary-item">
              <span>CARBS</span>
              <strong>{dailyTotals.carbs}g</strong>
            </div>
            <div className="summary-item">
              <span>FAT</span>
              <strong>{dailyTotals.fat}g</strong>
            </div>
            <div className="summary-item">
              <span>CALORIES</span>
              <strong>{dailyTotals.calories} kcal</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Food Sources */}
      <div className="food-sources">
        <h3 className="subsection-title">Food Sources</h3>
        <div className="sources-grid">
          <div className="source-card">
            <h4 className="source-card-title">Protein Sources</h4>
            <ul>
              {nutritionData.proteinSources.map((source, idx) => (
                <li key={idx}>{source}</li>
              ))}
            </ul>
          </div>
          <div className="source-card">
            <h4 className="source-card-title">Carb Sources</h4>
            <ul>
              {nutritionData.carbSources.map((source, idx) => (
                <li key={idx}>{source.source} <br/><small>({source.when})</small></li>
              ))}
            </ul>
          </div>
          <div className="source-card">
            <h4 className="source-card-title">Fat Sources</h4>
            <ul>
              {nutritionData.fatSources.map((source, idx) => (
                <li key={idx}>{source}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Meal Timing Guide */}
      <div className="meal-timing-guide">
        <h3 className="subsection-title">Meal Timing Guide</h3>
        <div className="timing-items">
          <div className="timing-item">
            <h4 className="timing-item-title">Pre-Training (2-3 hours before)</h4>
            <p className="timing-item-text">{nutritionData.mealTiming.preTraining}</p>
          </div>
          <div className="timing-item">
            <h4 className="timing-item-title">Post-Training (within 2 hours)</h4>
            <p className="timing-item-text">{nutritionData.mealTiming.postTraining}</p>
          </div>
          <div className="timing-item">
            <h4 className="timing-item-title">Before Bed</h4>
            <p className="timing-item-text">{nutritionData.mealTiming.night}</p>
          </div>
        </div>
      </div>

      {/* Supplements */}
      <div className="supplements-section">
        <h3 className="subsection-title">Supplements (Optional)</h3>
        <div className="supplements-list">
          {nutritionData.supplements.map((supp, idx) => (
            <div key={idx} className="supplement-item">
              <div className="supplement-name">
                <span>{supp.name}</span>
                {supp.optional && <span className="optional-badge">OPTIONAL</span>}
              </div>
              <div className="supplement-dose">{supp.dose}</div>
              <div className="supplement-reason">{supp.reason}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recovery Essentials */}
      <div className="recovery-guide">
        <h3 className="subsection-title">Recovery Essentials</h3>
        <div className="recovery-items">
          <div className="recovery-item">
            <h4 className="timing-item-title">Sleep</h4>
            <p className="timing-item-text">{nutritionData.recovery.sleep.duration}</p>
          </div>
          <div className="recovery-item">
            <h4 className="timing-item-title">Active Recovery</h4>
            <p className="timing-item-text">{nutritionData.recovery.activeRecovery}</p>
          </div>
          <div className="recovery-item">
            <h4 className="timing-item-title">Vacuum Training</h4>
            <p className="timing-item-text">{nutritionData.recovery.vacuumTraining.description}</p>
          </div>
          <div className="recovery-item">
            <h4 className="timing-item-title">Deload Schedule</h4>
            <p className="timing-item-text">{nutritionData.recovery.deload}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;