  Dropping color wheel code | breadfruit    .recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}

[breadfruit](http://j4u2.com/breadfruit-static/ "breadfruit")
=============================================================

Can Jamaican youth benefit from …?
----------------------------------

 [![](http://j4u2.com/breadfruit-static/wp-content/uploads/2012/04/vecr-1000x288.jpeg)](http://j4u2.com/breadfruit-static/) 

Search  

### Main menu

[Skip to primary content](#content "Skip to primary content")

[Skip to secondary content](#secondary "Skip to secondary content")

*   [Home](http://j4u2.com/breadfruit-static/)
*   [1.mobileworks](http://j4u2.com/breadfruit-static/mobileworks/)
*   [2.Thoth](http://j4u2.com/breadfruit-static/thoth/)
*   [Digital Jam 2.0](http://j4u2.com/breadfruit-static/digi-jam/)
*   [Notes](http://j4u2.com/breadfruit-static/notes/)
    *   [EPVisual](http://j4u2.com/breadfruit-static/notes/ep-visual/)
*   [Workshop](http://j4u2.com/breadfruit-static/workshop/)
    *   [Schedule](http://j4u2.com/breadfruit-static/workshop/schedule/)
    *   [Vision](http://j4u2.com/breadfruit-static/workshop/vision-page/)
*   [Workshop #1](http://j4u2.com/breadfruit-static/workshop-1/)
    *   [Day 1](http://j4u2.com/breadfruit-static/workshop-1/day-1/)
    *   [Day 2](http://j4u2.com/breadfruit-static/workshop-1/day-2/)
    *   [Day 3](http://j4u2.com/breadfruit-static/workshop-1/day-3/)
    *   [Day 4](http://j4u2.com/breadfruit-static/workshop-1/day-4/)
    *   [Day 5](http://j4u2.com/breadfruit-static/workshop-1/day-5/)
*   [Workshop #2](http://j4u2.com/breadfruit-static/workshop-2/)

### Post navigation

[← Previous](http://j4u2.com/breadfruit-static/2012/04/30/cacoo-scoredem-mockup/) [Next →](http://j4u2.com/breadfruit-static/2012/04/30/hurricane-electric-interactive-programming/)

Dropping color wheel code
=========================

Posted on [2012/04/30](http://j4u2.com/breadfruit-static/2012/04/30/dropping-color-wheel-code/ "5:20 pm") by [jht](http://j4u2.com/breadfruit-static/author/jht/ "View all posts by jht")

/\*\*  
\* Sequential  
\* by James Patterson.  
\*  
\* Displaying a sequence of images creates the illusion of motion.  
\* Twelve images are loaded and each is displayed individually in a loop.  
\*/

int numFrames = 12; // The number of frames in the animation  
int frame = 0;  
PImage\[\] images = new PImage\[numFrames\];

int segs = 12;  
int steps = 6;  
float rotAdjust = TWO\_PI / segs / 2;  
float radius;  
float segWidth;  
float interval = TWO\_PI / segs;

void setup()  
{  
frameRate(30);  
size(500 , 500);  
background(127);  
smooth();  
ellipseMode(RADIUS);  
noStroke();  
// make the diameter 90% of the sketch area  
//radius = min(width, height) \* 0.45;  
radius = min(50, 50) \* 0.45;  
segWidth = radius / steps;

// swap which line is commented out to draw the other version  
//drawTintWheel();  
drawShadeWheel(width/2,0);

hor = 0;  
}

float hor;

void draw()  
{  
radius = min(50, 50) \* 0.45;  
drawShadeWheel(width/2,hor);  
hor += 10;  
}

void drawShadeWheel(float argx, float argy) {  
for (int j = 0; j < steps; j++) {  
color\[\] cols = {  
color(255-(255/steps)\*j, 255-(255/steps)\*j, 0),  
color(255-(255/steps)\*j, (255/1.5)-((255/1.5)/steps)\*j, 0),  
color(255-(255/steps)\*j, (255/2)-((255/2)/steps)\*j, 0),  
color(255-(255/steps)\*j, (255/2.5)-((255/2.5)/steps)\*j, 0),  
color(255-(255/steps)\*j, 0, 0),  
color(255-(255/steps)\*j, 0, (255/2)-((255/2)/steps)\*j),  
color(255-(255/steps)\*j, 0, 255-(255/steps)\*j),  
color((255/2)-((255/2)/steps)\*j, 0, 255-(255/steps)\*j),  
color(0, 0, 255-(255/steps)\*j),  
color(0, 255-(255/steps)\*j, (255/2.5)-((255/2.5)/steps)\*j),  
color(0, 255-(255/steps)\*j, 0),  
color((255/2)-((255/2)/steps)\*j, 255-(255/steps)\*j, 0)  
};  
for (int i = 0; i < segs; i++) {  
fill(cols\[i\]);  
arc(argx, argy, radius, radius,  
interval\*i+rotAdjust, interval\*(i+1)+rotAdjust);  
}  
radius -= segWidth;  
}  
}  
void drawTintWheel() {  
for (int j = 0; j < steps; j++) {  
color\[\] cols = {  
color((255/steps)\*j, (255/steps)\*j, 0),  
color((255/steps)\*j, ((255/1.5)/steps)\*j, 0),  
color((255/steps)\*j, ((255/2)/steps)\*j, 0),  
color((255/steps)\*j, ((255/2.5)/steps)\*j, 0),  
color((255/steps)\*j, 0, 0),  
color((255/steps)\*j, 0, ((255/2)/steps)\*j),  
color((255/steps)\*j, 0, (255/steps)\*j),  
color(((255/2)/steps)\*j, 0, (255/steps)\*j),  
color(0, 0, (255/steps)\*j),  
color(0, (255/steps)\*j, ((255/2.5)/steps)\*j),  
color(0, (255/steps)\*j, 0),  
color(((255/2)/steps)\*j, (255/steps)\*j, 0)  
};  
for (int i = 0; i < segs; i++) {  
fill(cols\[i\]);  
arc(width/2, height/2, radius, radius,  
interval\*i+rotAdjust, interval\*(i+1)+rotAdjust);  
}  
radius -= segWidth;  
}  
}

This entry was posted in [Uncategorized](http://j4u2.com/breadfruit-static/category/uncategorized/) by [jht](http://j4u2.com/breadfruit-static/author/jht/). Bookmark the [permalink](http://j4u2.com/breadfruit-static/2012/04/30/dropping-color-wheel-code/ "Permalink to Dropping color wheel code").

### Leave a Reply [Cancel reply](/breadfruit/2012/04/30/dropping-color-wheel-code/#respond)

You must be [logged in](http://j4u2.com/breadfruit-static/wp-login.php) to post a comment.

[Proudly powered by WordPress](http://wordpress.org/ "Semantic Personal Publishing Platform")