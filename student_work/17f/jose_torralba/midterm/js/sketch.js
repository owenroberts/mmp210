function setup() {
    var canvas = createCanvas(900, 500);
    canvas.parent('sketch-holder');
    design();
}
function design() {
    background('#00CC00');

    var white = color('white');
    var black = color('black');
    var gray = color('gray');
    var red = color('red');
    var orange = color('orange');
    var yellow = color('#fdd340');
    var pink = color('pink');
    var breadBrown = color('#A38427');
    var shadow = color(0, 40);
    var shine = color(255, 140);

    var ornamentCap = {
        diameter: 20,
        xOffset: 6,
        yOffset: 6
    };

    var ornamentHanger = {
        width: 1,
        height: 10,
        offSet: 14
    };

    var ornament = {
        diameter: 30
    };

    var ornamentShine = {
        xOffset: 1,
        yOffset: 9,
        width: 17,
        height: 9
    };

    var snowmanHead = {
        yOffset: 20,
        diameter: 25
    };

    var snowmanBody = {
        diameter: 30
    };

    var snowmanEyes = {
        diameter: 4,
        xOffset: 5,
        yOffset: 20
    };

    var snowmanHat1 = {
        xOffset: 15,
        yOffset: 27,
        width: 30,
        height: 5,
        radius: 5
    };

    var snowmanHat2 = {
        xOffset: 10,
        yOffset: 40,
        width: 20,
        height: 15
    };

    var hatColor = {
        xOffset: 10,
        yOffset: 32,
        width: 20,
        height: 5
    };

    var snowmanButtons = {
        yOffset: 3,
        diameter: 3
    };

    var snowmanNose = {
        yOffset: 15,
        diameter: 4
    };

    var gingerbreadHead = {
        diameter: 30
    };

    var gingerbreadEyes = {
        diameter: 5,
        xOffset: 6,
        yOffset: 3
    };

    var gingerbreadPupils = {
        diameter: 2,
        xOffset: 6,
        yOffset: 3
    };

    var gingerbreadBlush = {
        diameter: 3,
        xOffset: 10,
        yOffset: 3
    };

    var gingerbreadMouth = {
        yOffset: 4,
        width: 15,
        height: 15,
        thing: 14
    };

    var christmasPresent = {
        width: 30,
        height: 30,
        radius: 2
    };

    var presentTop = {
        xOffset: 4,
        width: 38,
        height: 10,
        radius: 2
    };

    var presentRibbon = {
        xOffset: 7.5,
        width: 15,
        height: 30
    };

    var ribbonKnot1 = {
        xOffset: 8,
        yOffset: 3,
        width: 15,
        height: 10
    };

    var ribbonKnot2 = {
        xOffset: 21, 
        yOffset: 3,
        width: 15,
        height: 10
    };

     var presentShadow = {
        xOffset: 4,
        yOffset: 5,
        width: 38,
        height: 5,
        radius: 2
     };


    var columnSize = 60;

    var rowSize = 60;
            
    var outcome = random(4);

    for (var x = 25; x <= width; x += columnSize) {
        for (var y = 0; y <= height; y += rowSize) {

            if (outcome < 1) {

                var r = random(255, 230);
                var g = random(255, 10);
                var b = random(255, 10);

                /* Ornament Cap */
                noStroke();
                fill(gray);
                ellipse(x - ornamentCap.xOffset, y - ornamentCap.yOffset, ornamentCap.diameter);

                /* Ornament Hanger */
                noFill();
                stroke(gray);
                ellipse(x - ornamentHanger.offSet, y - ornamentHanger.offSet, ornamentHanger.width, ornamentHanger.height);

                /* Ornament */
                fill(r, g ,b);
                noStroke();
                ellipse(x, y, ornament.diameter);

                /* Ornament Shine */
                fill(shine);
                ellipse(x + ornamentShine.xOffset, y + ornamentShine.yOffset, ornamentShine.width, ornamentShine.height);

            } else if (outcome < 2) {

                var r = random(255, 150);
                var g = random(255, 80);
                var b = random(255, 60);

                /* Snowman Body */
                fill(white);
                noStroke();
                ellipse(x, y - snowmanHead.yOffset, snowmanHead.diameter);
                ellipse(x, y, snowmanBody.diameter);

                /* Snowman Eyes*/
                fill(black);
                ellipse(x - snowmanEyes.xOffset, y - snowmanEyes.yOffset, snowmanEyes.diameter);    // Left Eye
                ellipse(x + snowmanEyes.xOffset, y - snowmanEyes.yOffset, snowmanEyes.diameter);    // Right Eye

                /* Snowman Hat */
                rect(x - snowmanHat1.xOffset, y - snowmanHat1.yOffset, snowmanHat1.width, snowmanHat1.height, snowmanHat1.radius);
                rect(x - snowmanHat2.xOffset, y - snowmanHat2.yOffset, snowmanHat2.width, snowmanHat2.height);

                /* Snowman Buttons */
                ellipse(x, y - snowmanButtons.yOffset, snowmanButtons.diameter);
                ellipse(x, y + snowmanButtons.yOffset, snowmanButtons.diameter);

                /* Snowman Nose */
                fill(orange);
                ellipse(x, y - snowmanNose.yOffset, snowmanNose.diameter);

                /* Snowman Hat Color */
                fill(r, g, b);
                rect(x - hatColor.xOffset, y - hatColor.yOffset, hatColor.width, hatColor.height);

            } else if (outcome < 3) {

                var r = random(255, 250);
                var g = random(255, 80);
                var b = random(255, 160);

                /* Ginger Bread Head */
                fill(breadBrown);
                noStroke();
                ellipse(x, y, gingerbreadHead.diameter);

                /* Ginger Bread Eyes */
                fill(white)
                ellipse(x - gingerbreadEyes.xOffset, y - gingerbreadEyes.yOffset, gingerbreadEyes.diameter);    // Left
                ellipse(x + gingerbreadEyes.xOffset, y - gingerbreadEyes.yOffset , gingerbreadEyes.diameter);   // Right

                /* Ginger Bread Pupils */

                fill(black)
                ellipse(x - gingerbreadPupils.xOffset, y - gingerbreadPupils.yOffset, gingerbreadPupils.diameter);  // Left
                ellipse(x + gingerbreadPupils.xOffset, y - gingerbreadPupils.yOffset, gingerbreadPupils.diameter);  // Right

                /* Ginger Bread Blush */
                fill(pink);
                ellipse(x - gingerbreadBlush.xOffset, y + gingerbreadBlush.yOffset, gingerbreadBlush.diameter);     // Left
                ellipse(x + gingerbreadBlush.xOffset, y + gingerbreadBlush.yOffset, gingerbreadBlush.diameter);     // Right

                /* Ginger Bread Mouth */
                fill(r, g, b);
                stroke(red);
                arc(x, y + gingerbreadMouth.yOffset, gingerbreadMouth.width, gingerbreadMouth.height, 0, PI, CHORD);

            } else {

                var r = random(255, 150);
                var g = random(55, 50);
                var b = random(255, 10);

                /* Christmas Present */
                fill(r, g, b);
                noStroke();
                rect(x, y, christmasPresent.width, christmasPresent.height, christmasPresent.radius);

                /* Present Top */
                fill(white)
                rect(x - presentTop.xOffset, y, presentTop.width, presentTop.height, presentTop.radius);

                /* Ribbon */
                fill(yellow);
                rect(x + presentRibbon.xOffset, y, presentRibbon.width, presentRibbon.height);

                /* Ribbon Knot*/
                ellipse(x + ribbonKnot1.xOffset, y - ribbonKnot1.yOffset, ribbonKnot1.width, ribbonKnot1.height);   // Left
                ellipse(x + ribbonKnot2.xOffset, y - ribbonKnot2.yOffset, ribbonKnot2.width, ribbonKnot2.height)    // Right

                /* Shadow */
                fill(shadow);
                rect(x - presentShadow.xOffset, y + presentShadow.yOffset, presentShadow.width, presentShadow.height, presentShadow.radius);
            } // Else & If Statements
        } // for var (y)
    } // for var (x)
}
function mouseClicked() {
	design();
}