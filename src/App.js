//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";







function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

    const [homePoints, setHomePoints] = useState(0);
    const [awayPoints, setAwayPoints] = useState(0);
    const [minutes, setMinutes] = useState(15);
    const [seconds, setSeconds] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    function startTimer() {
      if (timerOn) {
        if (seconds !== 0) {
          setTimeout(() => setSeconds(seconds - 1), 1000)
          // if (seconds < 10) {
          //   // setTimeout(() => setSeconds("0" + seconds - 1), 1000)
          // }
          // if (minnutes < 0) {
          //   setMinutes(minutes = 15)
          // }
        }
        if (seconds == 0) {
          setMinutes(minutes - 1);
          setSeconds(seconds = 59);
        }
      }
    }



  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Giants</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homePoints}</div>
          </div>
          <div className="timer">{minutes}:{seconds<10?(`0${seconds}`): seconds }</div>
          <div className="away">
            <h2 className="away__name">Away</h2>
            <div className="away__score">{awayPoints}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <h1>Giants:</h1>
          <button className="homeButtons__touchdown" onClick={() => setHomePoints(homePoints + 7)}>Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomePoints(homePoints + 3)}>Field Goal</button>
          <button className="homeButtons__touchdown" onClick={() => setHomePoints(0)}>Reset</button>
        </div>
        <br></br>
        <div className="awayButtons">
          <h1>Away:</h1>
          <button className="awayButtons__touchdown" onClick={() => setAwayPoints(awayPoints + 7)}>Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayPoints(awayPoints + 3)}>Field Goal</button>
          <button className="awayButtons__touchdown" onClick={() => setAwayPoints(0)}>Reset</button>
          <button className="awatButtons__touchdown" onClick={() => startTimer()}>Timer</button>
        </div>
      </section>
    </div>
  );
}

export default App;
