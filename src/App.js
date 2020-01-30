//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [lionsScore, setlionsScore] = useState(30);
  const [tigersScore, settigersScore] = useState(36);

  const home_touchdown = e => {
    setlionsScore(lionsScore + 7)
  }
  const home_fg = e => {
    setlionsScore(lionsScore + 3)
  }

  const away_touchdown = e => {
    settigersScore(tigersScore + 7)
  }
  const away_fg = e => {
    settigersScore(tigersScore + 3)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={home_touchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={home_fg}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={away_touchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={away_fg}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
