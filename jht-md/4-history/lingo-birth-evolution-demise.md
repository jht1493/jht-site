Lingo: Birth, Evolution, Demise. - John Henry Thompson - Invent Your Future [![John Henry Thompson - Invent Your Future](../_/rsrc/1329567069254/config/customLogo.gif-revision=6.png)](../index.html)

[John Henry Thompson - Invent Your Future](../index.html)
---------------------------------------------------------

Search this site

*   [About me](../home.html)
    
*   [0\. Reflections](../0-refections-on-learning.html)
    
*   [1\. Learn to Code](../learning-to-program.html)
    
*   [2\. The Art of Learning](../the-art-of-learning.html)
    
*   [3\. DICE](../3-dice.html)
    
*   [4\. History](../4-history.html)
    
*   [5\. Respect](../heros.html)
    
*   [Artifacts](../artifacts.html)
    
*   [Blog](../z-blog-1.html)
    
*   [Garden](../4-garden.html)
    
*   [iPhone Apps](../iphone-apps.html)
    
*   [Notes](../notes.html)
    
*   [Photos](../family.html)
    
*   [Yoga](../yoga.html)
    
*   [Sitemap](../system/app/pages/sitemap/hierarchy.html)
    

[4\. History](../4-history.html)‎ > ‎

### Lingo: Birth, Evolution, Demise.

  
Lingo - scripting language for Macromedia Director
-----------------------------------------------------

\- predecessor to Flash/ActionScript & JavaScript  
\- For beginners  
\- Dynamic -- untyped
--------------------------------------------------------------------------------------------

\- Auto memory management  
\- Objects  
\- Cross Platform
----------------------------------------------------------

  

\-- Example of Lingo syntax of Fibonacci sequence

`on fib n`

`  if n <= 2 then return 1`

`  return fib(n-2) + fib(n-1)`

`end`

(Classic sequence attributed to Fibonacci should be called [pingala](../heros/pingala.html))

  

  

Lingo influenced by...
----------------------

  

  

  

  

  

  

  

  

  

  

  

  

  

SmallTalk  -- classes and objects
---------------------------------

    fib
      ^ self <= 2
        ifTrue: [ 1 ]
        ifFalse: [ (self - 2) fib + (self - 1) fib ]


--------------------------------------------------------------------------------------------------------

  

---

  

  

  

  

  

  

  

  

  

---

Lisp  -- symbolic -- atoms(symbols) and lists
---------------------------------------------

    (defun fibonacci (n &optional (a 0) (b 1) (acc ()))
      (if (zerop n)
          (nreverse acc)
          (fibonacci (1- n) b (+ a b) (cons a acc))))
    
    (fibonacci 5) ; ==> (0 1 1 2 3)


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  

---

  

---

  

  

  

  

  

  

  

  

  

  

BASIC - Beginner's All-purpose Symbolic Instruction Code
--------------------------------------------------------

2030 ARRAY F

2040 LET F\[0\] = 0

2050 LET F\[1\] = 1

2060 LET N = 1

2080 LET F\[N+1\] = F\[N\] + F\[N-1\]

2090 LET N = N + 1

2100 PRINT F\[N\];", ";

2120 IF N < 50 THEN GOTO 2080

  

  

---

  

---

  

  

  

other influences-peers:
-----------------------

\- ChatterBox Interpreter  
\- HyperTalk
----------------------------------------

\- ToolBook  
\- ScriptX
------------------------

\- mTropolis
------------

  

---

\- JavaScript
-------------

  
  
  
  
  
  
  
  
What's happening today?
-----------------------------------------------

  

---

  

---

ActionScript/Flash  
  -- Retired  
[  https://theblog.adobe.com/adobe-flash-update/](https://theblog.adobe.com/adobe-flash-update/)  
  "...stop updating and distributing the Flash Player at the end of 2020..."  
  
  
  
  

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  
  
  
  
Java  
\- strong typed  
\- classes  
  
  
  
  
  
  

--------------------------------------------------------------------

  

---

\- JavaScript
-------------

  



-------

function fib(n) {

if (n <= 2) return 1;

return fib(n\-2) + fib(n\-1);

}




--------------------------------------------------------------------------------

  

---

function fibonacci(num) {

var a \= 1, b \= 0, temp;

while (num \>= 0){

temp \= a;

a \= a + b;

b \= temp;

num\--;

}

return b;

}




---------------------------------------------------------------------------------------------------------------------------------------------

  

---

JavaScript  
  ECMA-262 -- June 1997  
  ECMAScript 3 -- December 1999  
  ECMAScript 5 -- December 2009  
  ECMAScript 2015 -- June 2015  
    http://es6-features.org  
  ECMAScript 2017 -- June 2017  
nodejs  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

Scratch  
\- For beginners  
\- Drag and drop blocks  
Scratch 1.0  
  Squeak -- dialect of Smalltalk  
Scratch 2.0  
  ActionScript  
Scratch 3.0  
  JavaScript  
  
  
  
codehs.com  
  
  
  
  
  
  
  
  
  

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  
Objective-C  
Swift
----------------------

Comments

[Sign in](https://accounts.google.com/ServiceLogin?continue=http://sites.google.com/a/johnhenrythompson.com/jht/4-history/lingo-birth-evolution-demise&service=jotspot)|[Recent Site Activity](../system/app/pages/recentChanges.html)|[Report Abuse](http://sites.google.com/a/johnhenrythompson.com/jht/system/app/pages/reportAbuse)|[Print Page](javascript:;)|Powered By **[Google Sites](http://sites.google.com/site)**

window.jstiming.load.tick('sjl'); window.jstiming.load.tick('jl'); sites.Searchbox.initialize( 'sites-searchbox-search-button', {"object":\[\]}\['object'\], 'search-site', {"label":"Configure search options...","url":"/system/app/pages/admin/settings"}); gsites.HoverPopupMenu.createSiteDropdownMenus('sites-header-nav-dropdown', false); JOT\_setupNav("2bd", "Navigation", true); JOT\_addListener('titleChange', 'JOT\_NAVIGATION\_titleChange', 'COMP\_2bd'); new sites.CommentPane('//docs.google.com/comments/d/AAHRpnXtRMj1XgBLQa4Y22KDIypZzMBseQwT3ox3jtLpaJLSiQDtOejCSrTNNZmVGcTJ66HGqsNLULPKDsUO97k0mmbqFb2sPadIvWDUhUI0dBOZRjn3asO9m4Y\_\_1f8on5\_SyLfGXYle/api/js?anon=true', false, false); setTimeout(function() { var fingerprint = gsites.date.TimeZone.getFingerprint(\[1109635200000, 1128902400000, 1130657000000, 1143333000000, 1143806400000, 1145000000000, 1146380000000, 1152489600000, 1159800000000, 1159500000000, 1162095000000, 1162075000000, 1162105500000\]); gsites.Xhr.send('http://www.johnhenrythompson.com/\_/tz', null, null, 'GET', null, null, { afjstz: fingerprint }); }, 500); window.onload = function() { if (false) { JOT\_setMobilePreview(); } var loadTimer = window.jstiming.load; loadTimer.tick("ol"); loadTimer\["name"\] = "load," + webspace.page.type + ",user\_page"; window.jstiming.report(loadTimer, {}, 'http://csi.gstatic.com/csi'); } JOT\_insertAnalyticsCode(false, false); var maestroRunner = new gsites.pages.view.SitesMaestroRunner( webspace, "en"); maestroRunner.initListeners(); maestroRunner.installEditRender(); //<!\[CDATA\[ // Decorate any fastUI buttons on the page with a class of 'goog-button'. if (webspace.user.hasWriteAccess) { JOT\_decorateButtons(); } // Fires delayed events. (function() { JOT\_fullyLoaded = true; var delayedEvents = JOT\_delayedEvents; for (var x = 0; x < delayedEvents.length; x++) { var event = delayedEvents\[x\]; JOT\_postEvent(event.eventName, event.eventSrc, event.payload); } JOT\_delayedEvents = null; JOT\_postEvent('pageLoaded'); })(); //\]\]> JOT\_postEvent('decorateGvizCharts'); JOT\_setupPostRenderingManager(); JOT\_postEvent('renderPlus', null, 'sites-chrome-main'); sites.codeembed.init();

window.jstiming.load.tick('render'); JOT\_postEvent('usercontentrendered', this);