---
title: "End-game condition"
date: 2025-03-24
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

{% include figure popup=true image_path="/assets/blog-imgs/djsim-blog11.jpeg" alt="In-game timer." caption="_In-game timer._" %}

An end game condition is a must and even at this late point in development is still absent. In order to be able to test and debug the game properly from the beginning to the end, this must now be present. I have focussed on implementing this. A 5-minute timer has been added so that the player has a time limit to amass the most points. The duration of the timer may be adjustable in a feature in the settings/free play mode.

{% include figure popup=true image_path="/assets/blog-imgs/djsim-blog12.jpeg" alt="Early version of the game over screen." caption="_Early version of the game over screen._" %}

When the timer is over, the game will display the player’s score and return to the main menu. This has been implemented within the game manager, and a game over manager. Currently, the screen is very basic since it is in the testing stage, but a design in line with the aesthetics of the rest of the game will be implemented eventually.
