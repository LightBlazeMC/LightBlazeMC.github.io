---
title: "NPC Balancing and Scoring"
date: 2024-10-28
categories:
  - dj simulator
tags:
  - general
  - programming
  - projects
  - computing
  - game development
  - unity
---

{% include figure popup=true image_path="/assets/blog-imgs/djsim-blog3.jpeg" alt="Logic responsible for NPC balancing." caption="_Logic responsible for NPC balancing._" %}

This week, I implemented major features into the game. Ensuring that a duplicate number of NPCs does not spawn is crucial. There cannot be an equal number of NPCs spawning in, since that would cause a dilemma where the player will not be able to select the correct genre to get awarded points. Now, the game runs a check to see if there are no equal numbers of NPCs, and if so, adjusts the number of NPCs to be all different.

{% include figure popup=true image_path="/assets/blog-imgs/djsim-blog4.jpeg" alt="Code responsible for NPC animation logic." caption="_Code responsible for NPC animation logic._" %}

A scoring system has also been implemented. All major sensing mechanics have been implemented, however, currently the game only awards points for playing any track, and also awards points for playing the most popular genres. Coroutines had to be used, and a lot of conditional statements. Since I have already anticipated appropriate music genre sensing, implementing scoring conditions was relatively simple. However, major parts of code had to be re-written for the spawning of NPCs and also allowing the scripts to globally manipulate clones of NPCs.
