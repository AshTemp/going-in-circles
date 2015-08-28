# going-in-circles
Some more programmer art working with loops, functions and the drawing API.

We'll be drawing on the HTML canvas element, an HTML5 element that supports a drawing API. <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" target="_blank">See here for more information on the canvas element...</a>

## Setup
0. Open up the JavaScript file at:
        projects/going-in-circles/js/going-in-circles.js
    All of your code for this project will go in this `going-in-circles.js` file.  Please pay close attention to the numbered **TODO** comments in this file - you must insert your code for the TODO step immediately below the cooresponding numbered TODO comment.
1. Ensure your website project's Apache webserver is running and serving the ROOT `index.html` page of your website.
2. Next, in Chrome, navigate to your portfolio page, and click on the project **Going In Circles**.  After coding a step and saving your changes, you will refresh this page by typing (Mac) Command + r.

## Outcome

The objective of the exercise is to draw 100 circles,
and figure out a way of animating them such that they appear to be moving, _and_, they continually come _back_ onto the stage.

Once you have them moving, you will code a **boundary check** - a means by which we check if each circle has left the visible portion of the canvas.  If the circle has left the top, right, bottom or left side of the screen, fully, you want to re-position the circle off the _opposite_ side of the stage.

Things you'll need to accomplish your tasks:

0. Note: we've create some variables that you'll need to use; they are located at the top of the `going-in-circles.js` file:
    ````javascript
        // other code...

        var 
            canvas = app.canvas,
            view = app.view;

        // other code...
    ````

    The `canvas` object represents **our drawing area**.  It provides the width and height of our drawing area through its properties, `canvas.width`, and `canvas.height`
    
    The `view` object is a child of the `canvas` on what is called the _Display List_.  The Display List is a tree-like structure of **nested** _Display Objects_, (visual elements).  The Display List forms parent/child relationships between _Display Objects_.  One Display Object can contain as a child, another display object. 
    
    We use the `view` to add visual elements to the stage so that they become visible, or, rendered.  The visual elements we'll add to the `view` are the circles we will draw.

1. If you want to do something 100 times, you'd use what JavaScript language construct?

2. To create circles, we've already provided a method in your scope called:

        drawRandomCircleInArea(area);
    
    This method takes an area, an type of object that has width and height properties into which the `drawRandomCircleInArea()` can position the circle.  The area you need to pass in as an argument to `drawRandomCircleInArea()` is the `canvas` variable.
    

## Steps


### TODO 1 : Declare your variables

1. You're going to need a to declare a few variables:
    1. A counter: Name it so we know it's an a counter, maybe `count`, or `i`.
    2. A variable called `circle` to hold one circle at a time.
    3. A variable to collect _all_ the `circles`, so we can later loop through them and update their positions.
    
### TODO 2 : Initialize your variables

1. Great! Now initialize your counter such that we can use it in a loop to loop 100 times.
2. Finally, initialize your collection variable to be an empty WHAT?

### TODO 3 : Draw 100 circles

1. Use your favorite loop along with your counter variable to draw 100 circles using the `drawRandomCircleInArea()` function.  The call to the `drawRandomCircleInArea()` function will return a `Shape` - a type of `DisplayObject` - assign this `Shape` to the variable `
2. Within the loop, add each `Shape` returned from the call to `drawRandomCircleInArea()` to your collection.
3. Finally, also within the loop, add each `Shape` as a child of the `view` object, using the `addChild()` API of the `view`, like so:
        view.addChild(circle);

### REFRESH YOUR PROJECT

* You should now see 100 randomly drawn circles within the area of your canvas!

### Animate the Circles

1. Create a function called `update()`, it should take no parameters and return no value.
2. Add your `update` function to the `app` using its `addUpdateable()` API, like so:
        app.addUpdateable(update);
Explain what you did in this step!

3. Within your `update()` function, create a `for` loop that iterates over the collection of `circles`, and within that `for` loop, pull out and assign the current circle to the variable we created earlier, called `circle`.
4. Update the position of the `circle`, you have two options to do so:
    
    The `circle` has three properties you want to update:
    
    1. circle.x
    2. circle.y
    3. circle.rotation
    
    To update these three properties, you need to respectively add to their current values:

    1. circle.velocityX
    2. circle.velocityY
    3. circle.rotationalVelocity

    How do you do this?