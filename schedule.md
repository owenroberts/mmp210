---
layout: main
title: MMP 210 - Schedule
dek: Schedule with class notes & assignments
---

Go to [Home](index.html)

## Week 1
**Intro to JavaScript, p5.js**

- [HTML / CSS Review notes](week1/)
	- [Class example](https://owenbmcc.github.io/classwork210/review/)
- [Intro to p5](week1/p5.html)
	- [Self Portrait example](https://owenbmcc.github.io/classwork210/selfportrait/)
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

- [GitHub Publishing](week2/github.html)
	- [Old GitHub Desktop Notes](week2/github_old.html)
- [JavaScript statements, operators & variables](week2/)
	- [Self portrait with variables](https://owenbmcc.github.io/classwork210/selfportrait_var/)
- [p5: color, stroke, fill](week2/p5.html)
	- [Color example](https://owenbmcc.github.io/classwork210/color/)
	- [Adobe Color Wheel](https://color.adobe.com/create/color-wheel/)
- [Code academy review](http://www.codecademy.com/courses/getting-started-v2)
- **Assignment 2**
	- Using p5, create a design that uses variables as the arguments for the drawing functions.
	- Drawing functions include fill(), stroke(), rect(), line(), ellipse(), triangle() etc...
	- There should be at least 5 colors and 5 shapes.
	- You can draw whatever you like, but if you are having trouble deciding what to draw, try choosing something from an activity you like, maybe an instrument like drums, a soccer or basket ball, a skateboard or anything else that represents something you like to do.
	- Variables are useful for reusing information.  Think of ways to manipulate variables to use the same data repetitively.

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
	- [Text Example](https://owenbmcc.github.io/classwork210/text/)
- [Debugging challenge](week3/debug.zip)
- **Assignment 3**
	- Make a logo design with your name
	- Use text and other shapes
	- Drawing and text functions must use variables


## Week 4
**Interaction**
- [p5 system variables](week4/p5.html)
- [Interaction](week4/)
- **Assignment 4**
	- Create a simple interactive design
	- Give the user an instruction using `text`
		- For example: "Click to add shapes"
	- Change color, position or size of shapes


## Week 5
**Logic**
- [JavaScript comparison operators and conditionals](week4/)
- **Assignment 4**
	- Create a design that uses system variables to change the color of the shapes being drawn
	- The color should change over time or space
	- Time can be measured with `frameCount`
	- Space is measured with `mouseX`, `mouseY`, `width` and `height`
	- Examples
		- [Tickle](https://p5js.org/examples/interaction-tickle.html)
		- [Follow](https://p5js.org/examples/interaction-follow-1.html)

## Week 6
**Loops**
- [JavaScript for loops](week5/index.html)
- [p5: drawing with loops](week5/p5.html)
- In class: [Code academy: for loops](https://www.codecademy.com/courses/javascript-beginner-en-NhsaT/0/1)
- **Assignment 5**
	- Draw the a grid of windows like the front of a city building.  
	- Each window should be at least 5 shapes.  
	- Use your apartment building or [Windows of New York](http://windowsofnewyork.com/) for inspiration.

## Week 7
**Animation**
- [p5: animation, random, modulo](week6/)
- [p5: push, pop, transform](week6/transform.html)
- **Assignment 6**
	- Add animation to a previous drawing (or a new drawing if you prefer)
	- Use two different types of animation
- Inspiration
	- [Animated name logos](http://www.flamingtext.com/Animated-Logos)
	- [Animated logos](http://www.howdesign.com/featured/animated-logos/)

## Week 8
**Functions**
- [JavaScript functions](week7/)
- [p5: defining functions](week7/p5.html)
- In class: [Code academy: functions](https://www.codecademy.com/courses/functions-in-javascript-2-0/)
- **Assignment 7**
	- Rewrite your window drawing as a defined function.
	- Use it to draw at least two windows with different origin and size.

## Week 9
**Generating designs**
- [Generating patterns](week8/index.html)
- Midterm review
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

## Week 10
- Midterm Presentation
- [Interaction](week9/)
- [DOM Library](week9/dom.html)  
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

## Week 11
**Arrays**
- [Arrays](week10/)
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

## Week 12
**Image and Media**
- Present Final project concepts
- [Image & video](week11/)
- [Sound library](week11/sound.html)

## Week 13
**Objects**
- [JavaScript Objects](week12/)
- Final Project workshop
- More inspiration
	- <http://www.newrafael.com/websites>
	- <https://the-internet.click/>
	- <http://superpixelquest.com/>
	- <http://www.bdnext.net/roaxaca-zone/>
	- <http://www.molleindustria.org/to-build-a-better-mousetrap/>
	- <http://weavesilk.com/>
	- <http://agar.io/>
	- <http://paper-io.com/>
	- <https://quickdraw.withgoogle.com/#>



<!--

https://itpnyu.github.io/ICM-Quizzes/

more inspiration for week 12

**Week 13: Libraries**
- [p5.play](https://owenroberts.github.io/mmp210/week13/)

**Week 14: Review**

**Week 15: Final presentations**

-->
