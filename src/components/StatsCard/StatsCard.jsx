import React from "react";
import styles from "./StatsCard.module.css";

const StatsCard = ({ number, label, danger }) => {
  return (
    <div className={`${styles.card} ${danger ? styles.danger : ""}`}>
      <h2>{number}</h2>
      <p>{label}</p>
    </div>
  );
};

export default StatsCard;
