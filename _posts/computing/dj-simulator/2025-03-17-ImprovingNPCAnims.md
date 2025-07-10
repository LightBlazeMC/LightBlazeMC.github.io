---
title: "Improving NPC animations"
date: 2025-03-17
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

After the migration to the new NPC management systems, a lot of the game logic became incompatible and was either buggy or broken. This week, I have tested for bugs and fixed them, ensuring that the game is fully functional with the new NPC management logic. The game failed to properly sense and count NPCs, so that has now been fixed, and variable conflicts causing erroneous data have been solved.

{% include figure popup=true image_path="/assets/blog-imgs/djsim-blog5.jpeg" alt="Shortening and tightening the NPC animation." caption="_Shortening and tightening the NPC animation._" %}

I also took this opportunity to further improve the animation logic for the NPCs. I have shortened animation times, in order for the animation logic to respond and flow much faster. I have used Unity’s synchronisation tool that shows if the animation will loop well. This has allowed me to reduce the animation times, while maintaining a smooth and natural animation.

{% include figure popup=true image_path="/assets/blog-imgs/djsim-blog8.jpeg" alt="Entrance for the NPCs to spawn in, with point lights to simulate ambiance." caption="_Entrance for the NPCs to spawn in, with point lights to simulate ambiance._" %}

I have also built an entrance within the map for the NPCs to spawn inside of, ensuring that they do not randomly show up in the corner. To make it look more interesting, I have added point lights to simulate an appropriate ambiance. Doing this enhances the level design and also ensures a natural way for the NPCs to spawn in.
