---
title: "NPC Spawning Manager"
date: 2025-03-10
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

{% include figure popup=true image_path="/assets/blog-imgs/djsim-blog6.jpeg" alt="Extract of the new NPC Manager responsible for randomly creating NPCs." caption="_Extract of the new NPC Manager responsible for randomly creating NPCs._" %}

Following the interim demo, it has been agreed that a system for NPC spawning and de-spawning needs to be in place. Currently, the game generates and auto-balances the NPC count at the start of the game, and never again. This leads to very boring gameplay. I need to figure out a way for the NPCs to spawn in and de-spawn during the playthrough, as to keep the game alive and interesting. I can then use the NPC animations implemented earlier in order to make the movements seem natural. For this to happen, a major NPC Manager and NPC Animation Manager overhaul is in place.

{% include figure popup=true image_path="/assets/blog-imgs/djsim-blog7.jpeg" alt="Function within the NPC Animation Manager responsible for animating the walk-in of NPCs." caption="_Function within the NPC Animation Manager responsible for animating the walk-in of NPCs._" %}

The NPCs now spawn in at a set location. They will then start walking after a random amount of time, for a random period of time. This is to better space out the NPCs so that they do not clip and crowd. They will then randomly select a direction angle, and walk a random distance. All of the randomisation is in place in order to better and more naturally simulate a crowd and to create spacing. Walking, idling and dancing animations are now properly controlled and triggered by the NPC Animation Manager.
