import "./Styles.scss";

const App = () => {
  return (
    <>
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
              <div className="chart mon"></div>
              <div className="chart tue"></div>
              <div className="chart wed"></div>
              <div className="chart thu"></div>
              <div className="chart fri"></div>
              <div className="chart sat"></div>
              <div className="chart sun"></div>
            </div>
            <div className="chart-labels">
              <div className="label"></div>
              <div className="label"></div>
              <div className="label"></div>
              <div className="label"></div>
              <div className="label"></div>
              <div className="label"></div>
              <div className="label"></div>
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
    </>
  );
};

export default App;
