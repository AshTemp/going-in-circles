(function (draw, physikz, app) {
    'use strict';
    
    var 
        canvas = app.canvas,
        view = app.view;

    ////////////////////////////////////////////////////////////////
    // ALL CODE GOES BELOW HERE                                   //
    ////////////////////////////////////////////////////////////////

    // TODO 1: Declare our variables //
    var i, circle, circles;

    // TODO 2: Initialize our variables //
    i = -1,
    circles = [];

    // TODO 3 : Draw 100 circles, add each to a collection, and add each as a child of the view object.
    while (i < 100) {
        circle = drawRandomCircleInArea(canvas);
        circles.push(circle);
        view.addChild(circle);
        i++;
    }

    app.addUpdateable(update);
    
    // TODO 4 : Create an update() method, then add it to the app //
    function update() {
        var circle;
        
        for (var i = 0; i < circles.length; i++) {
            // TODO 4 : Access one circle at time from the circles Array //
            circle = circles[i];

            // TODO 5 : Update the circles position //
            physikz.updatePosition(circle);

            // TODO 6 : YOUR CODE STARTS HERE //////////////////////

            if (/ * test for right-side * /) {
                // your code to place circle exactly off the stage at the left-side //
            }
            else if (/ * test for left-side * /) {
                // your code to place circle exactly off the stage at the right-side //
            }

            if (/ * test for top * /) {
                // code to place circle exactly off the stage at the bottom //
            }
            else if (/ * test for bottom * /) {
                // your code to place circle exactly off the stage at the top //
            }

            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
    }

    ////////////////////////////////////////////////////////////////////
    // NO CODE BELOW HERE                                             //
    ////////////////////////////////////////////////////////////////////

    function drawRandomCircleInArea(area) {
        var circle = draw.randomCircleInArea(area, true, true, '#999', 2);

        if (circle.alpha < .2) {
            draw.blurFilterOn(circle);
        }

        physikz.addRandomVelocity(circle, area);
        return circle;
    }
    
    showFPS();
    function showFPS() {
        var fps = draw.fps('#000');
        view.addChild(fps);
        app.addUpdateable(fps);
    }
})(window.opspark.draw, window.opspark.racket.physikz, window.opspark.makeApp());