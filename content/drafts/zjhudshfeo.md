---  
slug: zjhudshfeo
title: Side Projects
created: 2024-02-11 18:12:09.479849561+00:00
---  
## Warp - Many-body gravitational simulation

[Repo](https://github.com/eobrain/warp) - [Demo](https://eobrain.github.io/warp/)

I called this "warp", because I initially was trying to see if I could get some intuition for general relativity by simulating warping of spacetime by massive bodies and the effect of the warping on the movement of the bodies. However after some deep dives into general relativity math and simulation techniques, I concluded this was beyond the scope of a weekend project.

So in the end I just simulated classic Newtonian gravity, using a straightforward numerical integration, and I liked how I was able to get an intuition of how massive bodies move under gravitation. Some other simple gravitational simulators constrain the bodies to move in a two-dimensional plane, but I wanted to see the full complexities of how bodies move in three dimensions, so I attempted to show that, using various cues to help visualize the objects moving in a volume.

As a check on my calculations, I used real physical values in the simulations. So the objects' masses are of large planets or stars and the distances displayed are of the order of the distance between the Earth and the Sun. As another check of the physical accuracy I calculated the total kinetic and potential energies and displayed them as graphical bars under the display. As expected, the total of kinetic + potential energy stays the same with the ratios varying as bodies move together and apart.

One problem I had to deal with was the singularity when two bodies come together. I dealt with that by giving the bodies a finite size and implementing collisions where two bodies merged when they touched. The physical size is calculated from the body's mass, assuming a density that is the same as water. This does mean I can avoid the acceleration growing without bounds, but it still becomes so high for bodies that closely approach each other that the simulation seems to become inaccurate, judging by cases where they careen away from each other at speeds that seem to break the law of conservation of energy.

The other problem was how to deal with objects that go outside the volume I am displaying. There were so many trade-offs here that I ended up implementing five options that the user can pick from:

* **infinite**: This is the most realistic. It allows the bodies to move outside the displayed volume where they continue to be part of the simulation, but can no longer be seen. The disadvantage is that sometimes all the simulated bodies drift out of the display, leaving nothing to see

* **Wrap**: This is the next most realistic. It has bodies wrap around so that one disappearing on the left appears on the right, and similarly for the other two dimensions. The forces operate across the boundaries, but one inaccuracy is I don't calculate forces beyond the width of the displayed volume, because otherwise each object's influence would have to be accounted for multiple times (actually an infinite number of times, to be fully accurate).

* **Bounce**: In this case, the objects just bounce off the edges of the display volume. It's obviously not at all realistic, but it is amusing.

* **Stick**: In this case the objects just come to a dead stop when they hit the edge and then slowly start fall back towards the center 



This is a single-page web app, implemented in JavaScript. From an implementation point of view, I wanted to explore the limits of canvas-based animation and how much computation you could do in JavaScript. I was pleasantly surprised that browser JavaScript could handle $$O(n^2)$$ computation of up to 100 or so bodies, and do it more than 50 times a second to give a smooth animation.


## almondbread - Explore the Mandelbrot Set

[Repo](https://github.com/eobrain/almondbread)

Web app viewer and C++ backend to generate Mandelbrot set images and zooming videos

