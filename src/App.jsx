import React, { useState } from "react";
import "./Styles.scss";

const App = () => {
  const [hoveredDay, setHoveredDay] = useState("");

  const handleHover = (day) => {
    setHoveredDay(day);
  };

  const data = [
    { day: "mon", value: "$20.14" },
    { day: "tue", value: "$36.25" },
    { day: "wed", value: "$52.36" },
    { day: "thu", value: "$31.07" },
    { day: "fri", value: "$24.17" },
    { day: "sat", value: "$40.30" },
    { day: "sun", value: "$28.19" },
  ];

  return (
    <main>
      <div className="app">
        <div className="top">
          <div className="top-info">
            <p>My Balance</p>
            <h3>$921.48</h3>
          </div>
          <div className="top-logo"></div>
        </div>

        <div className="bottom">
          <h2>Spending - Last 7 days</h2>

          <div className="charts">
            {data.map(({ day, value }) => (
              <div key={day} className={`chart ${day}`}>
                <div className="bar-cont">
                  <div
                    className={`bar ${day}`}
                    onMouseEnter={() => handleHover(day)}
                    onMouseLeave={() => handleHover("")}
                  ></div>
                  <div className={`hidden ${hoveredDay === day ? "show" : ""}`}>
                    {value}
                  </div>
                </div>
                <p className="day">{day}</p>
              </div>
            ))}
          </div>

          <div className="bottom-info">
            <div className="bottom-info-left">
              <p>Total this month</p>
              <h1>$478.33</h1>
            </div>

            <div className="bottom-info-right">
              <h5>+2.4%</h5>
              <p>from last month</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
