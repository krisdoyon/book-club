import React from "react";
// CHART
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import "chartjs-adapter-moment";
import regression from "regression";

ChartJS.register(
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Tooltip,
  Title
);

ChartJS.defaults.font.family = "Roboto Slab";

const RatingsGraph = ({ books, yearFilter }) => {
  const graphBooks = books.filter((book) => book.ratings.avg !== 0);
  const minYear = Math.min(
    ...graphBooks.map((book) => book.meetDate.slice(-4))
  ).toString();
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Ratings vs. Time",
        font: {
          size: 18,
          weight: 400,
        },
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const { title, y, meetDate } = context.raw;
            return `${title} (${y}) - ${meetDate}`;
          },
        },
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        min: minYear,
        type: "time",
        time: {
          unit: yearFilter === "all" ? "year" : "month",
        },
        title: {
          display: true,
          text: "Time",
          font: {
            size: 16,
          },
        },
      },
      y: {
        min: 0,
        max: 100,
        title: {
          display: true,
          text: "Rating",
          font: {
            size: 16,
          },
        },
      },
    },
  };

  const regressionData = books
    .filter((book) => book.ratings.avg !== 0)
    .map((book) => [new Date(book.meetDate).getTime(), book.ratings.avg]);

  const reg = regression.linear(regressionData, {
    precision: 13,
  });

  const data = {
    datasets: [
      {
        data: books
          .filter((book) => book.ratings.avg !== 0)
          .map((book) => {
            return {
              x: new Date(book.meetDate).getTime(),
              y: book.ratings.avg,
              title: book.title,
              meetDate: book.meetDate,
            };
          }),
        backgroundColor: `${window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--color-primary")}`,
        pointRadius: 4,
        pointBorderWidth: 1,
        borderColor: `${window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--color-secondary")}`,
      },
      {
        data: reg.points.map((point) => {
          return {
            x: point[0],
            y: point[1],
          };
        }),
        showLine: true,
        pointRadius: 0,
        borderColor: `${window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--color-primary")}`,
      },
    ],
  };
  return (
    <div className="ratings-graph__wrapper">
      <Scatter options={options} data={data} />
    </div>
  );
};

export default RatingsGraph;
