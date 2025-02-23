import React from "react";
import styles from "./BudgetChart.module.css";

const BudgetChart = () => {
    const data = {
      underBudget: 44,
      onBudget: 31,
      overBudget: 25
    };
  
    // Calculate the circumference
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    
    // Calculate the stroke-dasharray values
    const getStrokeDashArray = (percentage) => {
      const value = (percentage / 100) * circumference;
      return `${value} ${circumference}`;
    };
  
    return (
      <div className={styles.budgetContainer}>
        <div className={styles.donutWrapper}>
          <svg viewBox="0 0 120 120" className={styles.donutChart}>
            {/* Background circle */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#f1f1f1"
              strokeWidth="12"
            />
            
            {/* Under Budget - Turquoise */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#2DD4BF"
              strokeWidth="12"
              strokeDasharray={getStrokeDashArray(data.underBudget)}
              strokeDashoffset="0"
              className={styles.progressCircle}
            />
            
            {/* On Budget - Purple */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#818CF8"
              strokeWidth="12"
              strokeDasharray={getStrokeDashArray(data.onBudget)}
              strokeDashoffset={`${-1 * (data.underBudget / 100) * circumference}`}
              className={styles.progressCircle}
            />
            
            {/* Over Budget - Red */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#EF4444"
              strokeWidth="12"
              strokeDasharray={getStrokeDashArray(data.overBudget)}
              strokeDashoffset={`${-1 * ((data.underBudget + data.onBudget) / 100) * circumference}`}
              className={styles.progressCircle}
            />
            
            {/* Center text */}
            <text x="60" y="55" textAnchor="middle" className={styles.donutText}>5</text>
            <text x="60" y="70" textAnchor="middle" className={styles.donutSubtext}>Total projects</text>
          </svg>
        </div>
        
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.legendDot} style={{ backgroundColor: '#EF4444' }}></span>
            <span>Over Budget</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendDot} style={{ backgroundColor: '#818CF8' }}></span>
            <span>On Budget</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendDot} style={{ backgroundColor: '#2DD4BF' }}></span>
            <span>Under Budget</span>
          </div>
        </div>
      </div>
    );
  };
  

export default BudgetChart;
