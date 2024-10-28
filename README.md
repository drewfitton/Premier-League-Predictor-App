# Worldie Soccer Stats

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
   * [Matches](#matches)
   * [League Standings](#league-standings)
   * [Top Scorers](#top-scorers)
3. [Get Started](#get-started)
## Overview
Worldie Soccer Stats is an iOS App that allows you to view match info, league standings, and top scorers amongst European soccer leagues. You can view matches by date for the current season, including seeing past results and future match dates and times. You can aso view league standings and top scorers for any of the past 5 seasons.

All data is pulled from the [Football Data API](https://www.football-data.org).
<a href="https://ibb.co/3fQt1WV"><img src="https://i.ibb.co/B4F8Ljv/Screenshot-2024-10-28-at-1-20-43-AM.png" alt="Screenshot-2024-10-28-at-1-20-43-AM" border="0"></a>

## Features

### Matches
#### Toggle Matches
<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm8zb2hka3JybWxpdzYyMm02dGRyZzcyOTBhbTc2M3F3bHExbHI2NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9tUV9rhyJ5Roa4Kmig/giphy.gif">

#### Select Match Date
<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3kyanBmYjhsMXZ4ZjdrcTM0ejhodHdmZzIwYjhrMHk2cno2YTJoMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/enfi6Dww1UcBXMIXWv/giphy.gif">

### League Standings
#### View League Standings by year
<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3l3Y2NjMXg1OWJnN2M4ZXM2NzRkOWppZDhiMjZraHFiaHdsNDB1aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KRkG1Q6HvWIqBxOnZ7/giphy.gif">

### Top Scorers
#### View Top Scorers by year
<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjIweTY2Yzdlc3I0NmRjY3FrdW13dmY0dTJsaDB4eWFpczA3a243bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RM9aJBg76v3SCA6N2I/giphy.gif">

## Get Started
Worldie soccer stats is built in XCode with SwiftUI. It requires iOS version > 15.0 and having XCode + iOS simulator installed on your Mac. 

### Required Swift packages
In order to run Worldie Soccer Stats, first add the following package dependencies:
* CocoaLumberjack (3.8.5)
* SVGKit

### Football-Data API key
Next, you need to go to the website for [Football Data API](https://www.football-data.org) and retrieve your custom API key. You can do so by making an account, and you'll receive your key via email. Place this key as the apiKey variable in the WorldieSoccerStatsApp swift file. 

Just like that, you're ready to run the Worldie Soccer Stats app!
