---
layout: default
title: MMP 210 - Schedule
dek: Schedule with class notes & assignments
---
# Schedule

[Home](index.html) [Schedule](schedule.html)

{% for i in (1..11) %}<a href="#week-{{i}}">Week {{i}}</a> {% endfor %}

## Week 1
**Intro to JavaScript, p5.js**

- [HTML / CSS Review notes](week1/)
- [Intro to p5](week1/p5.html)
- [GitHub Publishing](week1/github.html)
- <a href="https://owenbmcc.github.io/classwork210/week1/" target="blank">Class example</a>
- In class assignment
	- Create a simple web site to use as the portfolio page for your work this semester.
	- Your site should have at least one of each:
		- Image
		- Stylesheet
		- Menu, with links
- **Assignment 1**
	- Draw a self-portrait using p5
	- Use the shape and color functions
	- Be creative, try to show us something about yourself through drawing and design

## Week 2
**Statements, operators & variables**

- [JavaScript statements, operators & variables](week2/)
- [p5: color, stroke, fill](week2/p5.html)
	- [Adobe Color Wheel](https://color.adobe.com/create/color-wheel/)
- [Code academy review](http://www.codecademy.com/courses/getting-started-v2)
- <a href="https://owenbmcc.github.io/classwork210/week2/" target="blank">Class example</a>
- **Assignment 2**
	- Using p5, create a design that uses variables as the arguments for the drawing functions.
	- Drawing functions include fill(), stroke(), rect(), line(), ellipse(), triangle() etc...
	- There should be at least 5 colors and 5 shapes.
	- You can draw whatever you like, but if you are having trouble deciding what to draw, try choosing something from an activity you like, maybe an instrument like drums, a soccer or basket ball, a skateboard or anything else that represents something you like to do.
	- Variables are useful for reusing information.  Think of ways to manipulate variables to use the same data repetitively.
	- [p5 example](http://alpha.editor.p5js.org/owenroberts/sketches/r1Z8cxbFx)

```
// don't use hardcoded values
fill(0);

// make a variable first
var c = color(255,0,255);
fill(c); // this uses the variable 'c'
```

## Week 3
**Debugging**
- [JavaScript debugging](week3/)
- [p5: text](week3/p5.html)
- [Debugging challenge](week3/debug.zip)
- <a href="https://owenbmcc.github.io/classwork210/week3/" target="blank">Class example</a>
- **Assignment 3**
	- Make a logo design with your name
	- Use text and other shapes
	- Drawing and text functions must use variables


## Week 4
**Logic**
- [JavaScript comparison operators and conditionals](week4/)
- [GitHub client](week4/github.html)
- [p5 system variables](week4/p5.html)
- [Class example](https://owenbmcc.github.io/classwork210/week4/)
- **Assignment 4**
	- Create a design that uses system variables to change the color of the shapes being drawn
	- The color should change over time or space
	- Time can be measured with `frameCount`
	- Space is measured with `mouseX`, `mouseY`, `width` and `height`
	- Examples
		- [Tickle](https://p5js.org/examples/interaction-tickle.html)
		- [Follow](https://p5js.org/examples/interaction-follow-1.html)

## Week 5
**Loops**
- [JavaScript for loops](week5/index.html)
- [p5: drawing with loops](week5/p5.html)
- In class: [Code academy: for loops](https://www.codecademy.com/courses/javascript-beginner-en-NhsaT/0/1)
- Class examples
	- [Basic loop](http://alpha.editor.p5js.org/owenroberts/sketches/rydx-sncx)
	- [Grid](https://owenbmcc.github.io/classwork210/week5/)
	- [Windows Template](https://owenbmcc.github.io/classwork210/week5/windows.html)
- **Assignment 5**
	- Draw the a grid of windows like the front of a city building.  
	- Each window should be at least 5 shapes.  
	- Use your apartment building or [Windows of New York](http://windowsofnewyork.com/) for inspiration.

## Week 6
**Animation**
- [p5: animation, random, modulo](week6/)
- [p5: push, pop, transform](week6/transform.html)
- [Class animation example](https://owenbmcc.github.io/classwork210/week6/)
- [Class transform animation example](https://owenbmcc.github.io/classwork210/week6/transform.html)
- [Screensaver example](http://alpha.editor.p5js.org/owenroberts/sketches/BknrFeynx)
- **Assignment 6**
	- Add animation to a previous drawing (or a new drawing if you prefer)
	- Use two different types of animation
- Inspiration
	- [Animated name logos](http://www.flamingtext.com/Animated-Logos)
	- [Animated logos](http://www.howdesign.com/featured/animated-logos/)

## Week 7
**Functions**
- [JavaScript functions](week7/)
- [p5: defining functions](week7/p5.html)
- In class: [Code academy: functions](https://www.codecademy.com/courses/functions-in-javascript-2-0/)
- [Class example: two ellipses](https://owenbmcc.github.io/classwork210/week7/)
- [Class example: window function](https://owenbmcc.github.io/classwork210/week7/windows.html)
- **Assignment 7**
	- Rewrite your window drawing as a defined function.
	- Use it to draw at least two windows with different origin and size.

## Week 8
**Generating designs**
- [Generating patterns](week8/index.html)
- [Generative design example](https://owenbmcc.github.io/classwork210/midterm/)
- Midterm review
	- [Review example](https://owenbmcc.github.io/classwork210/review/)
- **Midterm: Generative design**
	- Choose a theme that will inform your design
	- Create a sketch that generates new patterns based on a theme
	- Each time the sketch is loaded, or website refreshed, a variation of your basic pattern should appear
	- The sketch must use variables, a for loop, colors, and shapes
	- Use a series of decisions (if, else) or randomly generated values to change the pattern
	- Write a short description explaining your choices, 3 - 4 sentences. For example:
  	- My theme is Spring and I'm using a polka dot pattern.  I chose different shades of green for the background to represent  the new leaves on the trees.  I also chose pinks and purples for foreground shapes to represent flowers.
	- Inspiration
		- [Generative landscapes](https://generativelandscapes.wordpress.com/2014/08/15/complex-pattern-from-simple-arcs-example-3-6/)
		- [Grids: Generative pattern design](http://nicholas-taylor.com/Grids)
		- [Libs Elliott: Generated quilt design](http://themakersnation.com/maker-spotlight-libs-elliott/)

## Week 9
- Midterm Presentation
- [Interaction](week9/)
	- [Mapping mouseX and mouseY](https://owenbmcc.github.io/classwork210/week8/mapping.html)
	- [mousePressed circle](https://owenbmcc.github.io/classwork210/week8/mouse-press.html)
	- [Rectangle button rotate](https://owenbmcc.github.io/classwork210/week8/) 
- [DOM Library](week9/dom.html)  
 	- [Button](https://owenbmcc.github.io/classwork210/week8-dom/button.html)
 	- [Input](https://owenbmcc.github.io/classwork210/week8-dom/input.html)
 	- [Arrow keys](https://owenbmcc.github.io/classwork210/week8-dom/)
- [Beyond the canvas (DOM Tutorial)](https://github.com/processing/p5.js/wiki/Beyond-the-canvas)
- Final requirements
	- The final project is making an interactive design
	- Choose a new theme to inform design choices, like shape, color and pattern
	- Designs can be abstract, represtational or combination
	- Each program must use:
		- variables
		- if ... else logic statement
		- at least one for loop
		- at least one defined function
		- shape and color functions
		- user input
		- animation
		- image
	- User input can be mouse, keyboard, HTML elements, or a combination
	- Inspiration
		- <https://nvioli.github.io/>
		- <https://fcjou.github.io/fish-piano/>
		- <http://share.framerjs.com/4ie4c9u5jodh/>
		- <https://www.jdjohnsonmedia.com/session5/index.html>
		- <https://www.jdjohnsonmedia.com/session9/index.html>
		- <http://uxdesignercoding.tumblr.com/post/143328882704/for-this-week-i-have-worked-on-data-visualization>
		- <http://www.typotopo.com/typemenot/index.html>

## Week 10
**Arrays**
- [Arrays](week10/)
	- [Spaceships example](https://owenbmcc.github.io/classwork210/week10/)
- [Review Arrays](https://www.khanacademy.org/computing/computer-programming/programming/arrays/p/intro-to-arrays)
- In class
	- Write a spaceship function (if you don't like spaceships, make a car, or a animal, or anything else that moves)
	- Animate the spaceship in space and color
- **Assignment: Final project description**
	- 3-5 sentence "pitch" for final project
	- 1 sketch or "mood board" with visual references
	- Keep the programming requirements in mind, but think of something you would like to do
	- Has to be interactive!
	- Could be a game, interactive visualization, animation or combination
	- Make a web page or PDF and post on Slack

## Week 11
**Image and Media**
- Present Final project concepts
- [Image & video](week11/)
	- [WEBGL 3d tutorial](https://github.com/processing/p5.js/wiki/Getting-started-with-WebGL-in-p5)
- [Sound library](week11/sound.html)


<!--

https://itpnyu.github.io/ICM-Quizzes/


**Week 10: Midterm presentations**
- [Objects](https://owenroberts.github.io/mmp210/week10/)



**Week 12: Image**
- [Image](https://owenroberts.github.io/mmp210/week12/)

**Week 13: Libraries**
- [p5.play](https://owenroberts.github.io/mmp210/week13/)

**Week 14: Review**

**Week 15: Final presentations**

-->
