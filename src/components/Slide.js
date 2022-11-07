import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Slide = (props) => {
  const { name, bookRatings, choiceRatings, percentages, slideClass } = props;
  const displayName = name.slice(0, 1).toUpperCase() + name.slice(1);

  const colorPrimary = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--color-primary");

  const colorSecondary = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--color-secondary");

  return (
    <article className={`slide ${slideClass}`}>
      <header>
        <h2 className="slide__name">{name}</h2>
      </header>
      <div className="slide__info">
        <div className="slide__ratings">
          <h3>How {displayName} has rated other books:</h3>
          <p>
            <strong>Lowest:</strong> {bookRatings.low}
          </p>
          <p>
            <strong>Average: </strong>
            {bookRatings.avg}
          </p>
          <p>
            <strong>Highest:</strong> {bookRatings.high}
          </p>
        </div>

        <div className="slide__ratings">
          <h3>
            How {displayName}
            {displayName.at(-1) === "s" ? "'" : "'s"} choices have been rated:
          </h3>

          <p>
            <strong>Lowest:</strong> {choiceRatings.low}
          </p>
          <p>
            <strong>Average: </strong>
            {choiceRatings.avg}
          </p>
          <p>
            <strong>Highest:</strong> {choiceRatings.high}
          </p>
        </div>
      </div>
      <div className="slide__chart-wrapper">
        <Doughnut
          options={{ maintainAspectRatio: false }}
          data={{
            labels: ["Fiction", "Non-Fiction"],
            datasets: [
              {
                data: [percentages.fiction, percentages.nonFiction],
                backgroundColor: [colorSecondary, colorPrimary],
              },
            ],
          }}
        />
      </div>
    </article>
  );
};

export default Slide;
