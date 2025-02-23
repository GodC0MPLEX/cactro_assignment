import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import styles from "./RevenueChart.module.css";

const RevenueChart = () => {
    const revenueData = [
      { date: '19 June', revenue: 1000 },
      { date: '20 June', revenue: 3500 },
      { date: '21 June', revenue: 3700 },
      { date: '22 June', revenue: 4500 },
      { date: '23 June', revenue: 5500 },
      { date: '24 June', revenue: 6500 },
      { date: '25 June', revenue: 6500 },
    ];
  
    return (
      <div className={styles.chartContainer}>
        <div className={styles.chartHeader}>
          <h3>Total revenue</h3>
          <div className={styles.timeSelector}>
            <span className={styles.active}>Month</span>
            <span>Week</span>
          </div>
        </div>
        <LineChart width={600} height={300} data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#2DD4BF" 
            strokeWidth={2} 
          />
        </LineChart>
      </div>
    );
  };
export default RevenueChart;