import React from "react";
import styles from "./Dashboard.module.css";
import StatsCard from "../components/StatsCard/StatsCard";
import BudgetChart from "../components/BudgetChart/BudgetChart";
import BudgetStatus from "../components/BudgetStatus/BudgetStatus";
import TeamMood from "../components/TeamMood/TeamMood";
import RevenueChart from "../components/RevenueChart/RevenueChart";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1><span style={{color:"#50b5ff"}}>H</span>OURS</h1>
        <nav>
          <a href="#" style={{borderBottom:"2px solid aqua",textDecoration:"none"}}>Dashboard</a>
          <a href="#">Projects</a>
          <a href="#">Team</a>
          <a href="#">Clients</a>
          <a href="#">Reports</a>
        </nav>
        <div className={styles.profile}>
          <img src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid" alt="Mario" />
          <span>Mario</span>
        </div>
      </header>

    
    <div style={{display: "flex",justifyContent: "space-between"}}>
    <div style={{width: "80%",display:"flex",flexDirection:"column",gap:"15px"}}>
      <div className={styles.statsContainer}>
        <StatsCard number="5" label="Total Projects" />
        <StatsCard number="1" label="Completed" />
        <StatsCard number="3" label="Ongoing" />
        <StatsCard number="1" label="Delayed" danger />
        <StatsCard number="5" label="Employees" />
      </div>

      <div className={styles.charts}>
        <RevenueChart />
        <BudgetChart />
      </div>
    </div>
    <TeamMood />
    </div>

      <BudgetStatus />

    </div>
  );
};

export default Dashboard;