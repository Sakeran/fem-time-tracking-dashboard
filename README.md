# fem-time-tracking-dashboard

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Notes

(October 23rd, 2021)

I decided to try out SolidJS for the first time with this exercise. While I still don't know enough about it to tell if I like it, my previous experience with other JSX-based tools made it quite easy to pick up. As for the challenge itself, I didn't run into any major issues in its implementation, though I did need to pause to think through the "overlap" layout effect on each of the card components. 

Previously my instinct would have been to achieve something like this with psuedo elements, but that approach falls short when you require a box with actual content in it. It took some amount of reevaluation to hit on the idea of treating the "background" section as a containing parent. If I'm taking anything away from this exercise, it's going to be that.

[A live version of this project can be found here.](https://obsequious-camp.surge.sh/)

