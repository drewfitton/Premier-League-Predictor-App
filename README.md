# Worldie Soccer Stats

## Table of Contents
1. [Overview](#overview)
2. [Requirements](#requirements)

## Overview
The Premier League Predictor is a React app that leverages the machine learning model found in my "Premier League Predictor Model" repository in order to allow users to input upcoming premier league matches, and return a predicted outcome. This model connects to the ML model using Flask and outputs predictions based on standings, team form, and teams performance against teams similar to their opponent.

<a href="https://ibb.co/3fQt1WV"><img src="https://i.ibb.co/B4F8Ljv/Screenshot-2024-10-28-at-1-20-43-AM.png" alt="Screenshot-2024-10-28-at-1-20-43-AM" border="0"></a>

## Requirements

The first requirement to run this application is to have react installed via Pip on your system. The app also requires that you have a flask connection to an ML model for match prediction. See my github repository "Premier League Predictor Model" to find the backend pipeline that this app runs with.

To run the project with react:

npm start

This will start the application on the local server http://localhost:3000.

Enjoy the app and hopefully it provides some good predictions for you!
