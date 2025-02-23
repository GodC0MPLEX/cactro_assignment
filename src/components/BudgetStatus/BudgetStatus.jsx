import React from "react";
import styles from "./BudgetStatus.module.css";

const projects = [
  {
    name: "Insurance App",
    subName: "Verti",
    budget: 70000,
    profit: -2500,
    hours: "100 hours over Budget",
    danger: true,
  },
  {
    name: "Neo",
    subName: "Verti",
    budget: 70000,
    profit: 4000,
    hours: "1000 sold hours",
  },
  {
    name: "VR Website",
    subName: "Verti",
    budget: 70000,
    profit: 4000,
    hours: "2000 sold hours",
  },
  {
    name: "VR Website",
    subName: "Verti",
    budget: 70000,
    profit: 4000,
    hours: "2000 sold hours",
  },
  {
    name: "VR Website",
    subName: "Verti",
    budget: 70000,
    profit: 4000,
    hours: "2000 sold hours",
  },
];

const BudgetStatus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Budget Status</h2>
        <button className={styles.button}>Add New Project</button>
        <button className={styles.button}>Download report</button>
        <div>
          <input type="date" />
          -
          <input type="date" />
        </div>
        <button className={styles.button}>Filter</button>
      </div>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.project} ${
              project.danger ? styles.danger : ""
            }`}
          >
            <div className={styles.upper}>
              <div>
                <h4 style={{ margin: 0 }}>{project.name}</h4>
                <p style={{ margin: 0 }}>{project.subName}</p>
              </div>
              <img
                src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid"
                alt=""
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    objectFit: "cover",
                }}
                
              />
            </div>
            <p style={{ margin: 0 }}>Total Budget: {project.budget} €</p>
            <p style={{ margin: 0 }}>Profitability: €{project.profit} €</p>
            <p>{project.hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetStatus;
