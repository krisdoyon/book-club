import React from "react";
import Slider from "./Slider";
import StatsGrid from "./StatsGrid";

const Stats = (props) => {
  const { members } = props;
  return (
    <section className="container">
      <header>
        <h1>Stats</h1>
      </header>
      <div className="container__body">
        <StatsGrid />
        <Slider members={members} />
      </div>
    </section>
  );
};

export default Stats;
