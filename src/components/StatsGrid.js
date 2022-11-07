import React from "react";
import { stats } from "../assets/stats";

const StatsGrid = () => {
  const { totalBooks, totalPages, totalWords, totalAudioHours, avgRating } =
    stats;
  return (
    <div className="stats-grid">
      <span className="stats-grid__label">Total books:</span>
      <span className="stats-grid__value">{totalBooks}</span>
      <span className="stats-grid__label">Total pages read:</span>
      <span className="stats-grid__value">{totalPages.toLocaleString()}</span>
      <span className="stats-grid__label">Total words:</span>
      <span className="stats-grid__value">{totalWords.toLocaleString()}</span>
      <span className="stats-grid__label">Total hours listened:</span>
      <span className="stats-grid__value">
        {totalAudioHours.toLocaleString()}
      </span>
      <span className="stats-grid__label">Overall average rating:</span>
      <span className="stats-grid__value">{avgRating}</span>
    </div>
  );
};

export default StatsGrid;
