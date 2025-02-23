import React, { useState } from "react";
import styles from "./TeamMood.module.css";

const TeamMood = () => {
    // const team = [
    //   { 
    //     name: 'Andrea', 
    //     role: 'Product', 
    //     moodScore: 80 // Scale: 0-100, where 100 is happiest
    //   },
    //   { 
    //     name: 'Alvaro', 
    //     role: 'Tech Lead Manager', 
    //     moodScore: 90
    //   },
    //   { 
    //     name: 'Juan', 
    //     role: 'UX Senior', 
    //     moodScore: 75
    //   },
    //   { 
    //     name: 'Jose', 
    //     role: 'Marketing', 
    //     moodScore: 95
    //   },
    //   { 
    //     name: 'Maria', 
    //     role: 'UX Junior', 
    //     moodScore: 85
    //   }
    // ];
    const [value, setValue] = useState(3); // Initial value (1-5)
     const[team, setTeam] = useState([
    { name: 'Andrea', role: 'Product', value: 1 },
    { name: 'Alvaro', role: 'Tech Lead Manager', value: 2 },
    { name: 'Juan', role: 'UX Senior', value: 3 },
    { name: 'Jose', role: 'Marketing', value: 4 },
    { name: 'Maria', role: 'UX Junior', value: 5 }
    ]);

  const emojis = ['😠', '🙁', '😐', '🙂', '😄'];

  const handleInputChange = (event) => {
    // setValue(parseInt(event.target.value));
    setTeam(
        team.map((member) => {
            if (member.name === event.target.name) {
            return {
                ...member,
                value: parseInt(event.target.value)
            };
            }
            return member;
        }
        ))
  };
  
    return (
      <div className={styles.teamContainer}>
        <h3>Team mood</h3>
        <div className={styles.teamList}>
          {team.map((member) => (
            <div key={member.name} className={styles.teamMember}>
              <div className={styles.memberInfo}>
                <div className={styles.avatar}>
                  {/* Placeholder for avatar image */}
                </div>
                <div className={styles.memberDetails}>
                  <span className={styles.memberName}>{member.name}</span>
                  <span className={styles.memberRole}>{member.role}</span>
                </div>
              </div>
              <div className="emoji-slider">
      <input
        type="range"
        min="1"
        max="5"
        step="1"
        name={member.name}
        value={member?.value}
        onChange={handleInputChange}
      />
      <div className="emoji-container">
            {emojis[member?.value - 1]}
      </div>
    </div>
              {/* <div className={styles.moodContainer}>
                <div className={styles.moodBar}>
                  <div 
                    className={styles.moodProgress} 
                    style={{ 
                      width: `${member.moodScore}%`,
                      background: `linear-gradient(to right, #EF4444, #FCD34D, #2DD4BF ${member.moodScore}%)`
                    }}
                  />
                </div>
                <span className={styles.moodEmoji}>{getMoodEmoji(member.moodScore)}</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default TeamMood;
