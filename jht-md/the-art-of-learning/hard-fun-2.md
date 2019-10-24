  /\* Copyright 2008 Google. \*/ (function() { (function(){function e(g){this.t={};this.tick=function(h,k,f){this.t\[h\]=\[void 0!=f?f:(new Date).getTime(),k\];if(void 0==f)try{window.console.timeStamp("CSI/"+h)}catch(m){}};this.tick("start",null,g)}var a;if(window.performance)var d=(a=window.performance.timing)&&a.responseStart;var l=0<d?new e(d):new e;window.jstiming={Timer:e,load:l};if(a){var b=a.navigationStart;0<b&&d>=b&&(window.jstiming.srt=d-b)}if(a){var c=window.jstiming.load;0<b&&d>=b&&(c.tick("\_wtsrt",void 0,b),c.tick("wtsrt\_","\_wtsrt", d),c.tick("tbsd\_","wtsrt\_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),c&&0<b&&(c.tick("\_tbnd",void 0,window.chrome.csi().startE),c.tick("tbnd\_","\_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,c&&0<b&&(c.tick("\_tbnd",void 0,window.external.startE),c.tick("tbnd\_","\_tbnd",b))),a&&(window.jstiming.pt=a)}catch(g){}})(); })()    /\* Copyright 2008 Google. \*/ (function() { function d(a){return document.getElementById(a)}window.byId=d;function g(a){return a.replace(/^\\s+|\\s+$/g,"")}window.trim=g;var h=\[\],k=0;window.JOT\_addListener=function(a,b,c){var f=new String(k++);a={eventName:a,handler:b,compId:c,key:f};h.push(a);return f};window.JOT\_removeListenerByKey=function(a){for(var b=0;b<h.length;b++)if(h\[b\].key==a){h.splice(b,1);break}};window.JOT\_removeAllListenersForName=function(a){for(var b=0;b<h.length;b++)h\[b\].eventName==a&&h.splice(b,1)}; window.JOT\_postEvent=function(a,b,c){var f={eventName:a,eventSrc:b||{},payload:c||{}};if(window.JOT\_fullyLoaded)for(b=h.length,c=0;c<b&&c<h.length;c++){var e=h\[c\];e&&e.eventName==a&&(f.listenerCompId=e.compId||"",(e="function"==typeof e.handler?e.handler:window\[e.handler\])&&e(f))}else window.JOT\_delayedEvents.push({eventName:a,eventSrc:b,payload:c})};window.JOT\_delayedEvents=\[\];window.JOT\_fullyLoaded=!1; window.JOT\_formatRelativeToNow=function(a,b){a=((new Date).getTime()-a)/6E4;if(1440<=a||0>a)return null;var c=0;60<=a&&(a/=60,c=2);2<=a&&c++;return b?window.JOT\_siteRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a)):window.JOT\_userRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a))}; })()   var breadcrumbs = \[{"path":"/the-art-of-learning","deleted":false,"title":"2. The Art of Learning","dir":"ltr"},{"path":"/the-art-of-learning/hard-fun-2","deleted":false,"title":"Hard Fun 2","dir":"ltr"}\]; var JOT\_clearDotPath = 'http://www.gstatic.com/sites/p/fb83f7/system/app/images/cleardot.gif'; var JOT\_userRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\]; var webspace = {"gvizGstaticVersion":"current","enableAnalytics":false,"pageSharingId":"jotspot\_page","codeembeds":{"outerIframeSrc":"https://www.gstatic.com/jotspot/embeds/code/0f08d42392f2000e7e3f3daf5b427a43/outer\_iframe.html","innerIframeSrc":"https://609744826-jotspot-embeds.googleusercontent.com/code/8d87fa64604b2a11fae2ed06104c58d3/inner\_iframe.html"},"enableUniversalAnalytics":false,"sharingPolicy":"OPENED\_WITH\_INDICATOR","siteTitle":"John Henry Thompson - Invent Your Future","jot2atari":{"eligibility":"ineligible"},"onepickUrl":"https://docs.google.com/picker","adsensePublisherId":null,"features":{"moreMobileStyleImprovements":null,"subscriptionDataMigrationInProgress":false,"plusBadge":false},"isPublic":true,"newSitesBaseUrl":"https://sites.google.com","isConsumer":false,"serverFlags":{"jot2AtariLearnMoreUrl":"https://support.google.com/sites/answer/7035197"},"domainAnalyticsAccountId":"","plusPageId":"","signInUrl":"https://accounts.google.com/AccountChooser?continue\\u003dhttp://sites.google.com/a/johnhenrythompson.com/jht/the-art-of-learning/hard-fun-2\\u0026service\\u003djotspot","analyticsAccountId":"","scottyUrl":"/\_/upload","homePath":"/","siteNoticeUrlEnabled":null,"plusPageUrl":"","adsensePromoClickedOrSiteIneligible":true,"csiReportUri":"http://csi.gstatic.com/csi","sharingId":"jotspot","termsUrl":"//www.google.com/intl/en/policies/terms/","gvizVersion":1,"editorResources":{"sitelayout":\["http://www.gstatic.com/sites/p/fb83f7/system/app/css/sitelayouteditor.css"\],"text":\["http://www.gstatic.com/sites/p/fb83f7/system/js/codemirror.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codemirror\_css.css","http://www.gstatic.com/sites/p/fb83f7/system/js/trog\_edit\_\_en.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/trogedit.css","/\_/rsrc/1570087315000/system/app/css/editor.css","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codeeditor.css","/\_/rsrc/1570087315000/system/app/css/camelot/editor-jfk.css"\]},"sharingUrlPrefix":"/\_/sharing","isAdsenseEnabled":true,"domain":"johnhenrythompson.com","baseUri":"","name":"jht","siteTemplateId":false,"siteNoticeRevision":null,"siteNoticeUrlAddress":null,"siteNoticeMessage":null,"page":{"isRtlLocale":false,"canDeleteWebspace":null,"isPageDraft":null,"parentPath":"/the-art-of-learning","parentWuid":"wuid:gx:721a7060b23f3231","siteLocale":"en","timeZone":"America/Los\_Angeles","type":"text","title":"Hard Fun 2","locale":"en","wuid":"wuid:gx:5212193be73fcef8","revision":8,"path":"/the-art-of-learning/hard-fun-2","isSiteRtlLocale":false,"pageInheritsPermissions":null,"name":"hard-fun-2","canChangePath":true,"state":"","properties":{},"bidiEnabled":false,"currentTemplate":{"path":"/system/app/pagetemplates/text","title":"Web Page"}},"canPublishScriptToAnyone":true,"user":{"keyboardShortcuts":true,"sessionIndex":"","onePickToken":"","guest\_":true,"displayNameOrEmail":"guest","userName":"guest","uid":"","renderMobile":false,"domain":"","namespace":"","hasWriteAccess":false,"namespaceUser":false,"primaryEmail":"guest","hasAdminAccess":false},"gadgets":{"baseUri":"/system/app/pages/gadgets"}}; webspace.page.breadcrumbs = breadcrumbs; var JOT\_siteRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\];   window.jstiming.load.tick('scl');            Hard Fun 2 - John Henry Thompson - Invent Your Future   window.jstiming.load.tick('cl'); 

[![John Henry Thompson - Invent Your Future](../_/rsrc/1329567069254/config/customLogo.gif-revision=6.png)](../index.html)

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
    

[2\. The Art of Learning](../the-art-of-learning.html)‎ > ‎

### Hard Fun 2

**Working for Fun**

More and more people, particular the young, are entertaining themselves with computer games. Many are spending more hours at gaming than an other form of entertainment. After many hours of play, few consider making games, probable because making games is a mystery to most. In this article we'll look behind the scene at two game makers, [idSoftware.com](http://idSoftware.com) the makers of the 3-D action game "Quake", and [EZONE.COM](http://EZONE.COM), a popular game and animation web site. I'll explain how programmers, artists and writers work together to create games. I hope that with a deeper understanding of game construction young people can get an early focus on careers that are in tune with what they enjoy doing.

  

**The Makers of Quake**

Some people choose to play in a world filled with terror. At every turn, they fight monsters and demons, and team up with others over the Internet to fight for territory. This is the world of "Quake" created by the company id Software, founded in the early 1990's the youth full team of John Carmack (programmer), Adrain Carmack (artist, not related to John), and John Romero (game designer). Over the past 10 years id Software has produced increasingly realistic looking, three dimensional, action packed games. Their first game was Wolfenstien 3-D, followed by Doom, Doom II, Quake, Quake II, and recently Quake Arena. The games have won many wards for innovation and technical excellence.

  

Although id Software is unique in their level of excellence the core roles in the team are the same roles found in all game making companies. All games begin as an idea that has to be communicated and refined by a game designer. The images and sounds in the fantasy world has to be created by an artist. The programmer has to bring the story and artwork to life by constructing the game code. Let's take a closer look at these three roles.

  

**The Game Designer**

The realistic look of an id Software game helps make you believe you are in the scary world. Also, the game is tense because you must killed-or-be-killed, and at the same time quickly develop strategies to find the right weapons and health restoring kits. Game designer John Romero (now founder of Ion Storm) is responsible for planing out these game elements. He conceives of the challenges or levels in the game that keeps the players on their toes. In general a game designer writes the blueprint for the game.

  

A game designer plays tons of games, and usually focuses on one particular game type or genre. There are many different game genres - action, sport, strategy, puzzle, simulation and so on - it's hard to become an expert in the design of all of them. By playing a lot of one game genre and learning its history the game designer becomes familiar with techniques that can be reused and updated for a new game. For a brand new game he or she writes a game concept paper, a short description of game. In brain storming sessions the entire team expand on the game concept paper and the game designer writes it all down in a game design document. The game design document looks like a large comic book, filled with sketches and detailed description of how all the elements of the game work together.

  

Simple pen and paper and a vivid imagination are the main tools of game designer. If you can describe what you find exciting about games and visualize new twists on existing games you'll enjoy working as a game designer.

  

**The Artist**

Everything you see or hear in a game has to be touched by the hand of an artist. In the early part of building the game, artist Adrain Carmack would make the sketches for the game design document to help the team visualize the game. After all the details are nailed down he creates the wire frames outlines of the objects in the world. He also draws the skins or textures that cover the wire frame objects to make them look real.

  

The game artist uses several different computer tools for creating the artwork. A 3-D modeling program, like 3-D Studio Max, is used to create the models. A paint program, like Adobe PhotoShop, is used to create textures. A sound editing program, like Macromedia SoundEdit, is used to create music and sound effects. Depending on the size and budget a game team may have several artists working on the different artwork. A 3-D artist would specialize in construction the 3-D models. A 2-D animator would create cartoons characters. A musician would create music. A sound designer would create sound effects.

  

Even though all the artwork has end up on the computer and many computer tools are used, the game artist starts out creating work in the hard-copy world of pencil, paint and musical instruments. If you find yourself sketching your favorite game character in the margins of you note book, a career as a game artist may be in the stars for you.

  

**The Programmer**

John Carmack, learned programming on the job, by working on small consulting projects and other games before starting id Software with his two friends. John Carmack created a 3-D Engine, a program that calculates the realistic world and draws it on the computer screen. This is challenging because about 30 images have to be computed each second to give the illusion of motion. For the images to appear three dimensional the engine has to consider how the player is looking into the world, the lighting conditions, the effects of fog, water and other elements that add to the atmosphere. The engine has to be fast and deal with complicated visual factors.

  

Every game needs at least one programmer, a person that writes the computer instructions that drive the look and the logic for the challenges in the game. A programmer writes in a special computer programming language which looks like a mixture of English and math equations. If you like math and solving puzzles, you can be a game programmer. Most programmers start out with an easy to learn language like Basic, Pascal, or Lingo. Then they may learn a traditional language like "C/C++", the one used by John Carmack to write his games. It may take a year or two to master your first language, after that other languages can be mastered pretty quickly.

  

**Easy and Fun Gaming at EZONE.COM**

Over the past 10 years id Software has create six games intense games that appeal "hard-core" gamers - people that like to spend the many hours it takes to master the challenges of 3-D action games. The universe of games is pretty diverse and includes many other game forms that don't require the same level of dedication. Many players enjoy fun games that they can get into quickly.

  

Rather than work with the traditional tools many game makers are using the Macromedia's Shockwave Construction Kit, which allows them to create games quickly and deliver them on the web. One example are the Australian brothers Simon Edis (programmer and designer) Jamie Edis (artist) the creators of the web site [WWW.EZONE.COM](http://WWW.EZONE.COM/). Over the past 3 years they have created over 100 games that are available for all to enjoy, free of change on the web site. Like a TV channel they get paid from advertising placed on their web site. EZone.com is only one example of many game makers who "broadcasting" their creations on the web.

  

By putting their games on the web, the Edis brothers have also vastly simplified their business. The don't have to worry about putting their games onto a CD-ROM, getting that CD-ROM into a box, selling those boxes to the many layers of distributors to get it into stores, and then dealing with another layer of advertising to make people aware of their product. They can focus on what they love to do: make lots of fun games.

  

The Edis brothers are able to work so efficiently because the Shockwave Construction Kit combines an easy to learn computer programming language called Lingo with an animation program, a paint program and other editors into one package. Rather than have to learn and use a dozen or so separate tools to build a game, they use one tool and get the job done faster. They use the extra time to create humorous cartoon characters, like Lenny Loose Jocks, and create stories and games about Lenny's treks through the Australian outback or misadventures in Pluto.

  

Whether you like playing the intense action games of id Software, or the fun and easy games on WWW.EZONE.COM, I hope you are able to see how your interest in games can be transformed in to a career as a game designer, artist or programmer.

  

Copyright © 2001 John Henry Thompson.

[![](http://www.idsoftware.com/images/quake1box.jpg)](http://www.idsoftware.com)

  

  

  

  

  

  

  

  

  

  

  

  

  

  

[http://www.idsoftware.com](http://www.idsoftware.com/)

  

  

[http://ezone.com/](http://www.ezone.com/)

Comments

[Sign in](https://accounts.google.com/ServiceLogin?continue=http://sites.google.com/a/johnhenrythompson.com/jht/the-art-of-learning/hard-fun-2&service=jotspot)|[Recent Site Activity](../system/app/pages/recentChanges.html)|[Report Abuse](http://sites.google.com/a/johnhenrythompson.com/jht/system/app/pages/reportAbuse)|[Print Page](javascript:;)|Powered By **[Google Sites](http://sites.google.com/site)**

window.jstiming.load.tick('sjl'); window.jstiming.load.tick('jl'); sites.Searchbox.initialize( 'sites-searchbox-search-button', {"object":\[\]}\['object'\], 'search-site', {"label":"Configure search options...","url":"/system/app/pages/admin/settings"}); gsites.HoverPopupMenu.createSiteDropdownMenus('sites-header-nav-dropdown', false); JOT\_setupNav("2bd", "Navigation", true); JOT\_addListener('titleChange', 'JOT\_NAVIGATION\_titleChange', 'COMP\_2bd'); new sites.CommentPane('//docs.google.com/comments/d/AAHRpnXtRMj1XgBLQa4Y22KDIypZzMBseQwT3ox3jtLpaJLSiQAz7PQwiRwPWRmCOfEkTHwNo3jDcPaj0HoVRWmdcKL8MWslQCZhKOA\_8Ibz5yAGpHqWxRQrd5ZE6vicOS8qrq2sEfEHY/api/js?anon=true', false, false); setTimeout(function() { var fingerprint = gsites.date.TimeZone.getFingerprint(\[1109635200000, 1128902400000, 1130657000000, 1143333000000, 1143806400000, 1145000000000, 1146380000000, 1152489600000, 1159800000000, 1159500000000, 1162095000000, 1162075000000, 1162105500000\]); gsites.Xhr.send('http://www.johnhenrythompson.com/\_/tz', null, null, 'GET', null, null, { afjstz: fingerprint }); }, 500); window.onload = function() { if (false) { JOT\_setMobilePreview(); } var loadTimer = window.jstiming.load; loadTimer.tick("ol"); loadTimer\["name"\] = "load," + webspace.page.type + ",user\_page"; window.jstiming.report(loadTimer, {}, 'http://csi.gstatic.com/csi'); } JOT\_insertAnalyticsCode(false, false); var maestroRunner = new gsites.pages.view.SitesMaestroRunner( webspace, "en"); maestroRunner.initListeners(); maestroRunner.installEditRender(); //<!\[CDATA\[ // Decorate any fastUI buttons on the page with a class of 'goog-button'. if (webspace.user.hasWriteAccess) { JOT\_decorateButtons(); } // Fires delayed events. (function() { JOT\_fullyLoaded = true; var delayedEvents = JOT\_delayedEvents; for (var x = 0; x < delayedEvents.length; x++) { var event = delayedEvents\[x\]; JOT\_postEvent(event.eventName, event.eventSrc, event.payload); } JOT\_delayedEvents = null; JOT\_postEvent('pageLoaded'); })(); //\]\]> JOT\_postEvent('decorateGvizCharts'); JOT\_setupPostRenderingManager(); JOT\_postEvent('renderPlus', null, 'sites-chrome-main'); sites.codeembed.init();

window.jstiming.load.tick('render'); JOT\_postEvent('usercontentrendered', this);