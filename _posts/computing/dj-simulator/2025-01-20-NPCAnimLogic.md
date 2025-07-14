---
title: "NPC Animation Logic"
date: 2025-01-20
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

{% include figure popup=true image_path="/assets/blog-imgs/djsim-blog1.jpeg" alt="Animation state machine for NPCs." caption="_Animation state machine for NPCs._" %}

It is a high priority that the NPCs within the game have a rich Animation Controller. Currently, the NPCs will dance no matter what is happening in the game. To fix this, I have implemented logic that checks what state the NPCs should be in, and sets it accordingly to that animation. Now the NPCs can either idle if they do not like the music or there is no music playing, or dance if music is playing and it is a genre that they like. Logic is present for the NPCs walking in and out of the scene, however it is not detectable or triggerable within the game yet.

{% include figure popup=true image_path="/assets/blog-imgs/djsim-blog2.jpeg" alt="Code responsible for NPC animation logic." caption="_Code responsible for NPC animation logic._" %}

I have also optimised the GitHub repository to properly ignore Unity’s large temporary files. This meant that I could also uninstall LFS. This allows for less commit errors and generally greater compatibility.
