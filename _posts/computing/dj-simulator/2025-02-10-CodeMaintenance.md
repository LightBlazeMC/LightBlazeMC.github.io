---
title: "Code Maintenance & Testing Phase"
date: 2025-02-10
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

I took the opportunity to increase my testing and feedback sample size. I have asked as many people as possible to play and provide feedback on the game. To make this easy, I have created a Microsoft Forms link for the testers to complete after their playthrough.

I have begun collating the tester’s feedback into bullet points that are consistently coming up. This allows me to identify key weaknesses and work on them and test improvements. The majority of feedback consisted of small changes in game mechanics, and also a few bugs have been found which I then recreated based on the scenarios given.

Based on tester feedback, and results from the testing phase, several bugs have been identified. These are now being looked into, and solutions are being considered. As often is the case, there is a multitude of approaches and solutions to fixing these issues, but it is important that the optimal one is chosen, as to not cause problems in later development.

Due to testing and experimentation, a lot of redundant data and files were present within the project. I have gone through and traced the purpose of almost every file to ensure that it is necessary.

I have made more of the code cross-referenceable. Before, the code relied on GameObject references, which are an inefficient, tedious and unreliable way of referencing data from scripts. Instead, the code now will use public static variables. I have re-tested the code to ensure it runs as expected on this new logic.

{% include figure popup=true image_path="/assets/blog-imgs/djsim-blog17.jpeg" alt="Table showing results of black box testing." caption="_Table showing results of black box testing._" %}

At this point, the project is past its half-way mark. The majority of features are present. It is important to now verify if these features work as expected. Testing is being conducted, with methods such as black box testing. It is important that this is done in detail because any issues must be found and fixed to provide a good player experience.
