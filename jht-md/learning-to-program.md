  /\* Copyright 2008 Google. \*/ (function() { (function(){function e(g){this.t={};this.tick=function(h,k,f){this.t\[h\]=\[void 0!=f?f:(new Date).getTime(),k\];if(void 0==f)try{window.console.timeStamp("CSI/"+h)}catch(m){}};this.tick("start",null,g)}var a;if(window.performance)var d=(a=window.performance.timing)&&a.responseStart;var l=0<d?new e(d):new e;window.jstiming={Timer:e,load:l};if(a){var b=a.navigationStart;0<b&&d>=b&&(window.jstiming.srt=d-b)}if(a){var c=window.jstiming.load;0<b&&d>=b&&(c.tick("\_wtsrt",void 0,b),c.tick("wtsrt\_","\_wtsrt", d),c.tick("tbsd\_","wtsrt\_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),c&&0<b&&(c.tick("\_tbnd",void 0,window.chrome.csi().startE),c.tick("tbnd\_","\_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,c&&0<b&&(c.tick("\_tbnd",void 0,window.external.startE),c.tick("tbnd\_","\_tbnd",b))),a&&(window.jstiming.pt=a)}catch(g){}})(); })()    /\* Copyright 2008 Google. \*/ (function() { function d(a){return document.getElementById(a)}window.byId=d;function g(a){return a.replace(/^\\s+|\\s+$/g,"")}window.trim=g;var h=\[\],k=0;window.JOT\_addListener=function(a,b,c){var f=new String(k++);a={eventName:a,handler:b,compId:c,key:f};h.push(a);return f};window.JOT\_removeListenerByKey=function(a){for(var b=0;b<h.length;b++)if(h\[b\].key==a){h.splice(b,1);break}};window.JOT\_removeAllListenersForName=function(a){for(var b=0;b<h.length;b++)h\[b\].eventName==a&&h.splice(b,1)}; window.JOT\_postEvent=function(a,b,c){var f={eventName:a,eventSrc:b||{},payload:c||{}};if(window.JOT\_fullyLoaded)for(b=h.length,c=0;c<b&&c<h.length;c++){var e=h\[c\];e&&e.eventName==a&&(f.listenerCompId=e.compId||"",(e="function"==typeof e.handler?e.handler:window\[e.handler\])&&e(f))}else window.JOT\_delayedEvents.push({eventName:a,eventSrc:b,payload:c})};window.JOT\_delayedEvents=\[\];window.JOT\_fullyLoaded=!1; window.JOT\_formatRelativeToNow=function(a,b){a=((new Date).getTime()-a)/6E4;if(1440<=a||0>a)return null;var c=0;60<=a&&(a/=60,c=2);2<=a&&c++;return b?window.JOT\_siteRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a)):window.JOT\_userRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a))}; })()   var breadcrumbs = \[{"path":"/learning-to-program","deleted":false,"title":"1. Learn to Code","dir":"ltr"}\]; var JOT\_clearDotPath = 'http://www.gstatic.com/sites/p/fb83f7/system/app/images/cleardot.gif'; var JOT\_userRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\]; var webspace = {"gvizGstaticVersion":"current","enableAnalytics":false,"pageSharingId":"jotspot\_page","codeembeds":{"outerIframeSrc":"https://www.gstatic.com/jotspot/embeds/code/0f08d42392f2000e7e3f3daf5b427a43/outer\_iframe.html","innerIframeSrc":"https://713559101-jotspot-embeds.googleusercontent.com/code/8d87fa64604b2a11fae2ed06104c58d3/inner\_iframe.html"},"enableUniversalAnalytics":false,"sharingPolicy":"OPENED\_WITH\_INDICATOR","siteTitle":"John Henry Thompson - Invent Your Future","jot2atari":{"eligibility":"ineligible"},"onepickUrl":"https://docs.google.com/picker","adsensePublisherId":null,"features":{"moreMobileStyleImprovements":null,"subscriptionDataMigrationInProgress":false,"plusBadge":false},"isPublic":true,"newSitesBaseUrl":"https://sites.google.com","isConsumer":false,"serverFlags":{"jot2AtariLearnMoreUrl":"https://support.google.com/sites/answer/7035197"},"domainAnalyticsAccountId":"","plusPageId":"","signInUrl":"https://accounts.google.com/AccountChooser?continue\\u003dhttp://sites.google.com/a/johnhenrythompson.com/jht/learning-to-program\\u0026service\\u003djotspot","analyticsAccountId":"","scottyUrl":"/\_/upload","homePath":"/","siteNoticeUrlEnabled":null,"plusPageUrl":"","adsensePromoClickedOrSiteIneligible":true,"csiReportUri":"http://csi.gstatic.com/csi","sharingId":"jotspot","termsUrl":"//www.google.com/intl/en/policies/terms/","gvizVersion":1,"editorResources":{"sitelayout":\["http://www.gstatic.com/sites/p/fb83f7/system/app/css/sitelayouteditor.css"\],"text":\["http://www.gstatic.com/sites/p/fb83f7/system/js/codemirror.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codemirror\_css.css","http://www.gstatic.com/sites/p/fb83f7/system/js/trog\_edit\_\_en.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/trogedit.css","/\_/rsrc/1570087315000/system/app/css/editor.css","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codeeditor.css","/\_/rsrc/1570087315000/system/app/css/camelot/editor-jfk.css"\]},"sharingUrlPrefix":"/\_/sharing","isAdsenseEnabled":true,"domain":"johnhenrythompson.com","baseUri":"","name":"jht","siteTemplateId":false,"siteNoticeRevision":null,"siteNoticeUrlAddress":null,"siteNoticeMessage":null,"page":{"isRtlLocale":false,"canDeleteWebspace":null,"isPageDraft":null,"parentPath":null,"parentWuid":null,"siteLocale":"en","timeZone":"America/Los\_Angeles","type":"text","title":"1. Learn to Code","locale":"en","wuid":"wuid:gx:1fb25bd27ff8f03b","revision":61,"path":"/learning-to-program","isSiteRtlLocale":false,"pageInheritsPermissions":null,"name":"learning-to-program","canChangePath":true,"state":"","properties":{},"bidiEnabled":false,"currentTemplate":{"path":"/system/app/pagetemplates/text","title":"Web Page"}},"canPublishScriptToAnyone":true,"user":{"keyboardShortcuts":true,"sessionIndex":"","onePickToken":"","guest\_":true,"displayNameOrEmail":"guest","userName":"guest","uid":"","renderMobile":false,"domain":"","namespace":"","hasWriteAccess":false,"namespaceUser":false,"primaryEmail":"guest","hasAdminAccess":false},"gadgets":{"baseUri":"/system/app/pages/gadgets"}}; webspace.page.breadcrumbs = breadcrumbs; var JOT\_siteRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\];   window.jstiming.load.tick('scl');            1\. Learn to Code - John Henry Thompson - Invent Your Future   window.jstiming.load.tick('cl'); 

[![John Henry Thompson - Invent Your Future](_/rsrc/1329567069254/config/customLogo.gif-revision=6.png)](index.html)

[John Henry Thompson - Invent Your Future](index.html)
------------------------------------------------------

Search this site

*   [About me](home.html)
    
*   [0\. Reflections](0-refections-on-learning.html)
    
*   1\. Learn to Code
    
*   [2\. The Art of Learning](the-art-of-learning.html)
    
*   [3\. DICE](3-dice.html)
    
*   [4\. History](4-history.html)
    
*   [5\. Respect](heros.html)
    
*   [Artifacts](artifacts.html)
    
*   [Blog](z-blog-1.html)
    
*   [Garden](4-garden.html)
    
*   [iPhone Apps](iphone-apps.html)
    
*   [Notes](notes.html)
    
*   [Photos](family.html)
    
*   [Yoga](yoga.html)
    
*   [Sitemap](system/app/pages/sitemap/hierarchy.html)
    

### 1\. Learn to Code

Learning to code is challenging but it can be fun. Here are some resources if you choose to get on the path to coding.

  

[Click here to join my computer science class at codehs.com (class code 7444).](http://codehs.com/go/7444)

  

* * *

  

Attend my photohacker workshop sponsored by [scribe.org](http://scribe.org/) in philly area 4 Sessions starts April 6, 2017.[ Click here for info.](http://scribe.org/events/youth-learn-hackers-take-control-your-photos)

  

You can also go directly to my[photohacker git repo](https://github.com/jht1900/photohacker) to get workshop material.

  

* * *

A good way to start coding is to join a visual playground. [Scratch is my favorite.](http://scratch.mit.edu/)

  

"Scratch is designed especially for ages 8 to 16, but is used by people of all ages. Millions of people are creating Scratch projects in a wide variety of settings, including homes, schools, museums, libraries, and community centers."

  

![](_/rsrc/1295018001782/learning-to-program/scratch-logo.png)  

[http://scratch.mit.edu/](http://scratch.mit.edu/)  

  

* * *

Recommendations for learning to code pre-2016:

  

Here are some resources for learning computer computer science, most recently found listed first. 

  

Keep a look out for event Computer Science Education Week first Monday in December at [csedweek.org](http://csedweek.org/)  
  
Lots of resources at [csedweek.org/educate/3rdparty](http://csedweek.org/educate/3rdparty)  
  
Cool processing resource created for Computer Science Education Week: [hello.processing.org/](http://hello.processing.org/)  
  
The [computer science section of khan academy](http://www.khanacademy.org/cs) is a great place to explore  programming in your browser.  
  
Play and Experiment with Code at [codecademy.com](http://www.codecademy.com/)  
  
[Here are a list of resources for mobile application development](../www.j4u2.com/breadfruit/index.html) I gave in Jamaica April and May of 2012.  
  

If you are just starting out, Scratch is a good first step. With it you can learn the core principle common to all programming languages: variables, conditional statements, flow control, and functions. Then if you wish you can build stand alone applications with BlitzMax, or get wildly creative with Processing. All cost zero dollars, except BlitzMax. But the true cost is the time you are willing to dedicated to learning. It may not be easy, but it can be fun.  
  
[Here is an article I wrote about my experience learning computer programming: Reflections on Learning.](the-art-of-learning/reflections.html)  

  

* * *

  

[![](_/rsrc/1295018101864/learning-to-program/blitzmax-logo.png)](http://www.blitzbasic.com/Products/blitzmax.php)

  

[http://www.blitzbasic.com/Products/blitzmax.php](http://www.blitzbasic.com/Products/blitzmax.php)

"[BlitzMax](http://www.blitzbasic.com/Products/blitzmax.php) is the new, next generation game programming language from Blitz Research. BlitzMax retains the BASIC roots of Blitz3D and BlitzPlus, but adds a ton of cool new features and abilities."

  
[Example files for getting started with BlitzMax](https://github.com/jht1900/BlitzMax-Kickstart)  
  

* * *

  

[![](_/rsrc/1295018136175/learning-to-program/processing-logo.png)](http://www.blitzbasic.com/Products/blitzmax.php)

  

[http://www.processing.org/](http://www.processing.org/)

"[Processing](http://processing.org/) is an open source programming language and environment for people who want to program images, animation, and interactions. It is used by students, artists, designers, researchers, and hobbyists for learning, prototyping, and production."

  

* * *

  

[![](_/rsrc/1295018169988/learning-to-program/processing-js.png)](http://www.blitzbasic.com/Products/blitzmax.php)

  

[http://processingjs.org/](http://processingjs.org/)

"[Processingjs](http://processingjs.org/) is an open programming language for people who want to program images, animation, and interactions for the web without using Flash or Java applets."

  
[http://sketchpad.cc/](http://sketchpad.cc/)

"The [http://sketchpad.cc/](http://sketchpad.cc/) is a great way to teach yourself how to write Processing code without all the fuss of downloading the source and setting up your HTML document."  

* * *

[![](_/rsrc/1325242193071/learning-to-program/codeacademy.png)](http://www.codecademy.com)

  
[http://www.codecademy.com](http://www.codecademy.com/)  

  
"Codecademy is the easiest way to learn how to code. It's interactive, fun, and you can do it with your friends."  
[  
http://labs.codecademy.com](http://labs.codecademy.com/)  
  

* * *

  

  

  

Comments

[Sign in](https://accounts.google.com/ServiceLogin?continue=http://sites.google.com/a/johnhenrythompson.com/jht/learning-to-program&service=jotspot)|[Recent Site Activity](system/app/pages/recentChanges.html)|[Report Abuse](http://sites.google.com/a/johnhenrythompson.com/jht/system/app/pages/reportAbuse)|[Print Page](javascript:;)|Powered By **[Google Sites](http://sites.google.com/site)**

window.jstiming.load.tick('sjl'); window.jstiming.load.tick('jl'); sites.Searchbox.initialize( 'sites-searchbox-search-button', {"object":\[\]}\['object'\], 'search-site', {"label":"Configure search options...","url":"/system/app/pages/admin/settings"}); gsites.HoverPopupMenu.createSiteDropdownMenus('sites-header-nav-dropdown', false); JOT\_setupNav("2bd", "Navigation", true); JOT\_addListener('titleChange', 'JOT\_NAVIGATION\_titleChange', 'COMP\_2bd'); new sites.CommentPane('//docs.google.com/comments/d/AAHRpnXtRMj1XgBLQa4Y22KDIypZzMBseQwT3ox3jtLpaJLSiQIMYEKj5FaBTWmVehIPHf0lIScBCktIuxFYwr8jTSVqz2cdImWAAl9pfMdbrwG4cxmdIBrGloiNIjUAgwyWyGpquf9dI/api/js?anon=true', false, false); setTimeout(function() { var fingerprint = gsites.date.TimeZone.getFingerprint(\[1109635200000, 1128902400000, 1130657000000, 1143333000000, 1143806400000, 1145000000000, 1146380000000, 1152489600000, 1159800000000, 1159500000000, 1162095000000, 1162075000000, 1162105500000\]); gsites.Xhr.send('http://www.johnhenrythompson.com/\_/tz', null, null, 'GET', null, null, { afjstz: fingerprint }); }, 500); window.onload = function() { if (false) { JOT\_setMobilePreview(); } var loadTimer = window.jstiming.load; loadTimer.tick("ol"); loadTimer\["name"\] = "load," + webspace.page.type + ",user\_page"; window.jstiming.report(loadTimer, {}, 'http://csi.gstatic.com/csi'); } JOT\_insertAnalyticsCode(false, false); var maestroRunner = new gsites.pages.view.SitesMaestroRunner( webspace, "en"); maestroRunner.initListeners(); maestroRunner.installEditRender(); //<!\[CDATA\[ // Decorate any fastUI buttons on the page with a class of 'goog-button'. if (webspace.user.hasWriteAccess) { JOT\_decorateButtons(); } // Fires delayed events. (function() { JOT\_fullyLoaded = true; var delayedEvents = JOT\_delayedEvents; for (var x = 0; x < delayedEvents.length; x++) { var event = delayedEvents\[x\]; JOT\_postEvent(event.eventName, event.eventSrc, event.payload); } JOT\_delayedEvents = null; JOT\_postEvent('pageLoaded'); })(); //\]\]> JOT\_postEvent('decorateGvizCharts'); JOT\_setupPostRenderingManager(); JOT\_postEvent('renderPlus', null, 'sites-chrome-main'); sites.codeembed.init();

window.jstiming.load.tick('render'); JOT\_postEvent('usercontentrendered', this);