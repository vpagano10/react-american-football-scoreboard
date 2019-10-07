import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {

  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(25);
  const [quarter, setQuarter] = useState(1);

  return (
    <>
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
    </div>
    <div className="bottomRowOptions">
      <div>
        <button className="options" onClick={() => setDown(down + 1)}>Down +</button>
        <button className="options" onClick={() => setDown(down - 1)}>Down -</button>
      </div>
      <div>
        <button className="options" onClick={() => setToGo(toGo + 1)}>ToGo +</button>
        <button className="options" onClick={() => setToGo(toGo - 1)}>ToGo -</button>
      </div>
      <div>
        <button className="options" onClick={() => setBallOn(ballOn + 1)}>Ball On +</button>
        <button className="options" onClick={() => setBallOn(ballOn - 1)}>Ball On -</button>
      </div>
      <div>
        <button className="options" onClick={() => setQuarter(quarter + 1)}>Quarter +</button>
        <button className="options" onClick={() => setQuarter(quarter - 1)}>Quarter -</button>
      </div>
    </div>
    </>
  );
};

export default BottomRow;
