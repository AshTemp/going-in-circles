(function (draw, physikz, app) {
    'use strict';
    
    var 
        canvas = app.canvas,
        view = app.view;

    ////////////////////////////////////////////////////////////////
    // ALL CODE GOES BELOW HERE                                   //
    ////////////////////////////////////////////////////////////////

    // TODO 1: Declare our variables //
    

    // TODO 2: Initialize our variables //
    

    // TODO 3 : Draw 100 circles, add each to a collection, and add each as a child of the view object.
    

    // TODO 4 : Create an update() method, then add it to the app //
    
    
    
    

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
})(
    window.opspark.draw, 
    window.opspark.racket.physikz, 
    window.opspark.makeApp());