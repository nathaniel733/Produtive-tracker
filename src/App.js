import React, { useEffect, useState } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell 
} from "recharts";
import { AiOutlineReload } from "react-icons/ai";
import "./App.css";

const App = () => {
  const [siteData, setSiteData] = useState([]);
  const [dailyLimit, setDailyLimit] = useState(3600); // 3600 seconds (1 hour)
  const [totalTime, setTotalTime] = useState(0);

  // Fetch site data from Chrome storage
  useEffect(() => {
    chrome.storage.local.get(["siteData"], (result) => {
      if (result.siteData) {
        const formattedData = Object.entries(result.siteData).map(([site, time]) => ({
          name: site,
          time: Math.round(time), // Keep time in seconds
        }));
        setSiteData(formattedData);

        const total = formattedData.reduce((acc, curr) => acc + curr.time, 0);
        setTotalTime(total);
      }
    });
  }, []);

  // Handle Reset Data
  const handleReset = () => {
    chrome.storage.local.set({ siteData: {} }, () => {
      setSiteData([]);
      setTotalTime(0);
    });
  };

  // Color palette for bars
  const colors = ["#FF5733", "#33FF57", "#337BFF", "#F3FF33", "#FF33A1"];

  return (
    <div className="container">
      <h1 className="title">Productivity Tracker</h1>
     

      {/* Daily Progress */}
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${(totalTime / dailyLimit) * 100}%` }}
        ></div>
      </div>
      <p className="progress-info">
        Total Time: {totalTime} sec / Daily Limit: {dailyLimit} sec
      </p>

      {/* Chart Section */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={siteData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
          <XAxis dataKey="name" tick={{ fill: "#666" }} />
          <YAxis label={{ value: 'Time (sec)', angle: -90, position: 'insideLeft', fill: "#999" }}/>
          <Tooltip 
            formatter={(value) => [`${value} sec`, 'Time']} 
            contentStyle={{ backgroundColor: "#333", color: "#fff", borderRadius: "5px" }}
          />
          <Legend />
          <Bar dataKey="time" radius={[5, 5, 0, 0]} barSize={40}>
            {siteData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Controls */}
      <div className="controls">
        <button className="reset-btn" onClick={handleReset}>
          <AiOutlineReload size={18} /> Reset
        </button>
      </div>
    </div>
  );
};

export default App;