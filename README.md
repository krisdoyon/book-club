<p align="center">
  <img src="./public/img/logo-background.png" alt="Havest Seed logo" style="height:150px">
</p>

**A website for my book club to track books read, statistics and ratings over time built using React.**

- The live site is available to view and use at: https://bookclub.krisdoyon.com

- You can view my personal website to learn more about me and see my other projects at: https://krisdoyon.com

# Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies used](#technologies-used)
4. [Project architecture](#project-architecture)
5. [Challenges](#challenges)
6. [Data](#data)
7. [Screenshots](#screenshots)

# Overview

I created this website for my book club which I participate in with three of my friends. We have been reading approximately one book a month and then meeting to discuss over the past 4+ years. Since we started in 2017, we have been recording our book ratings in a spreadsheet, and my intention with this project was to create a place where we could keep an archive of all of the books we have read, as well as view statistics related to our book ratings over time. This was my first independent project using React.

# Features

- View books in project card or table form.
- Filter books by who chose them.
- Sort books by meeting date or by rating.
- View details of each book including publish date, page count and audio book length.
- View overall statistics and filter statistics by year, fiction/non-fiction and individual choice.
- View ratings over time in graphical representation with a linear trendline.

# Things I Learned/Practiced

- How to use Chart.js to create custom chart and graph components.
- Practiced filtering, sorting and contionally rendering data to the UI using multiple user inputs.
- More practice using context API for state management.
- How to use RTK Query for server side state, data fetching and data caching.

# Technologies used

- React
- React Router
- Context API
- Chart.js
- Sass

# Challenges

One challenge that I faced while working on this project was implementing a trendline on the scatter plot for visualizing rating trends over time. After trying unsuccessfully to implement this feature using functionality built into Chart.js, I found a separate library on npm called "regression" which takes an input of (x, y) points and returns the points of a linear trendline. I was then able to merge this data with the line graph provided by Chart.js to plot a trendline on top of the scatterplot data.

# Screenshots