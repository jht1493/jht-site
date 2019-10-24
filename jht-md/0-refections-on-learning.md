  /\* Copyright 2008 Google. \*/ (function() { (function(){function e(g){this.t={};this.tick=function(h,k,f){this.t\[h\]=\[void 0!=f?f:(new Date).getTime(),k\];if(void 0==f)try{window.console.timeStamp("CSI/"+h)}catch(m){}};this.tick("start",null,g)}var a;if(window.performance)var d=(a=window.performance.timing)&&a.responseStart;var l=0<d?new e(d):new e;window.jstiming={Timer:e,load:l};if(a){var b=a.navigationStart;0<b&&d>=b&&(window.jstiming.srt=d-b)}if(a){var c=window.jstiming.load;0<b&&d>=b&&(c.tick("\_wtsrt",void 0,b),c.tick("wtsrt\_","\_wtsrt", d),c.tick("tbsd\_","wtsrt\_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),c&&0<b&&(c.tick("\_tbnd",void 0,window.chrome.csi().startE),c.tick("tbnd\_","\_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,c&&0<b&&(c.tick("\_tbnd",void 0,window.external.startE),c.tick("tbnd\_","\_tbnd",b))),a&&(window.jstiming.pt=a)}catch(g){}})(); })()    /\* Copyright 2008 Google. \*/ (function() { function d(a){return document.getElementById(a)}window.byId=d;function g(a){return a.replace(/^\\s+|\\s+$/g,"")}window.trim=g;var h=\[\],k=0;window.JOT\_addListener=function(a,b,c){var f=new String(k++);a={eventName:a,handler:b,compId:c,key:f};h.push(a);return f};window.JOT\_removeListenerByKey=function(a){for(var b=0;b<h.length;b++)if(h\[b\].key==a){h.splice(b,1);break}};window.JOT\_removeAllListenersForName=function(a){for(var b=0;b<h.length;b++)h\[b\].eventName==a&&h.splice(b,1)}; window.JOT\_postEvent=function(a,b,c){var f={eventName:a,eventSrc:b||{},payload:c||{}};if(window.JOT\_fullyLoaded)for(b=h.length,c=0;c<b&&c<h.length;c++){var e=h\[c\];e&&e.eventName==a&&(f.listenerCompId=e.compId||"",(e="function"==typeof e.handler?e.handler:window\[e.handler\])&&e(f))}else window.JOT\_delayedEvents.push({eventName:a,eventSrc:b,payload:c})};window.JOT\_delayedEvents=\[\];window.JOT\_fullyLoaded=!1; window.JOT\_formatRelativeToNow=function(a,b){a=((new Date).getTime()-a)/6E4;if(1440<=a||0>a)return null;var c=0;60<=a&&(a/=60,c=2);2<=a&&c++;return b?window.JOT\_siteRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a)):window.JOT\_userRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a))}; })()   var breadcrumbs = \[{"path":"/0-refections-on-learning","deleted":false,"title":"0. Reflections","dir":"ltr"}\]; var JOT\_clearDotPath = 'http://www.gstatic.com/sites/p/fb83f7/system/app/images/cleardot.gif'; var JOT\_userRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\]; var webspace = {"gvizGstaticVersion":"current","enableAnalytics":false,"pageSharingId":"jotspot\_page","codeembeds":{"outerIframeSrc":"https://www.gstatic.com/jotspot/embeds/code/0f08d42392f2000e7e3f3daf5b427a43/outer\_iframe.html","innerIframeSrc":"https://808127556-jotspot-embeds.googleusercontent.com/code/8d87fa64604b2a11fae2ed06104c58d3/inner\_iframe.html"},"enableUniversalAnalytics":false,"sharingPolicy":"OPENED\_WITH\_INDICATOR","siteTitle":"John Henry Thompson - Invent Your Future","jot2atari":{"eligibility":"ineligible"},"onepickUrl":"https://docs.google.com/picker","adsensePublisherId":null,"features":{"moreMobileStyleImprovements":null,"subscriptionDataMigrationInProgress":false,"plusBadge":false},"isPublic":true,"newSitesBaseUrl":"https://sites.google.com","isConsumer":false,"serverFlags":{"jot2AtariLearnMoreUrl":"https://support.google.com/sites/answer/7035197"},"domainAnalyticsAccountId":"","plusPageId":"","signInUrl":"https://accounts.google.com/AccountChooser?continue\\u003dhttp://sites.google.com/a/johnhenrythompson.com/jht/0-refections-on-learning\\u0026service\\u003djotspot","analyticsAccountId":"","scottyUrl":"/\_/upload","homePath":"/","siteNoticeUrlEnabled":null,"plusPageUrl":"","adsensePromoClickedOrSiteIneligible":true,"csiReportUri":"http://csi.gstatic.com/csi","sharingId":"jotspot","termsUrl":"//www.google.com/intl/en/policies/terms/","gvizVersion":1,"editorResources":{"sitelayout":\["http://www.gstatic.com/sites/p/fb83f7/system/app/css/sitelayouteditor.css"\],"text":\["http://www.gstatic.com/sites/p/fb83f7/system/js/codemirror.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codemirror\_css.css","http://www.gstatic.com/sites/p/fb83f7/system/js/trog\_edit\_\_en.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/trogedit.css","/\_/rsrc/1570087315000/system/app/css/editor.css","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codeeditor.css","/\_/rsrc/1570087315000/system/app/css/camelot/editor-jfk.css"\]},"sharingUrlPrefix":"/\_/sharing","isAdsenseEnabled":true,"domain":"johnhenrythompson.com","baseUri":"","name":"jht","siteTemplateId":false,"siteNoticeRevision":null,"siteNoticeUrlAddress":null,"siteNoticeMessage":null,"page":{"isRtlLocale":false,"canDeleteWebspace":null,"isPageDraft":null,"parentPath":null,"parentWuid":null,"siteLocale":"en","timeZone":"America/Los\_Angeles","type":"text","title":"0. Reflections","locale":"en","wuid":"wuid:gx:4a6ae41d42f04483","revision":31,"path":"/0-refections-on-learning","isSiteRtlLocale":false,"pageInheritsPermissions":null,"name":"0-refections-on-learning","canChangePath":true,"state":"","properties":{},"bidiEnabled":false,"currentTemplate":{"path":"/the-art-of-learning/reflections","title":"Reflections on Learning"}},"canPublishScriptToAnyone":true,"user":{"keyboardShortcuts":true,"sessionIndex":"","onePickToken":"","guest\_":true,"displayNameOrEmail":"guest","userName":"guest","uid":"","renderMobile":false,"domain":"","namespace":"","hasWriteAccess":false,"namespaceUser":false,"primaryEmail":"guest","hasAdminAccess":false},"gadgets":{"baseUri":"/system/app/pages/gadgets"}}; webspace.page.breadcrumbs = breadcrumbs; var JOT\_siteRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\];   window.jstiming.load.tick('scl');            0\. Reflections - John Henry Thompson - Invent Your Future   window.jstiming.load.tick('cl'); 

[![John Henry Thompson - Invent Your Future](_/rsrc/1329567069254/config/customLogo.gif-revision=6.png)](index.html)

[John Henry Thompson - Invent Your Future](index.html)
------------------------------------------------------

Search this site

*   [About me](home.html)
    
*   0\. Reflections
    
*   [1\. Learn to Code](learning-to-program.html)
    
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
    

### 0\. Reflections

[\[ DICE is here \]](3-dice.html)
=================================

Reflections on Learning
-----------------------

In his book “_The Children's Machine_” Seymour Papert observed there is a wealth of information on the art of teaching, but not much on **“the art of learning.”** He suggests one reason for the lack of focus on learning is a fear to express how we think and especially how we learn. Our minds may be not as neat an orderly as a textbook. Also, there is an unspoken fear of discussing what we don’t know. Papert suggestions: “talk freely about learning experiences,” to help dissipate the fear. His suggestion prompted me to reflect on my experience learning computer programming in the 1970's, a time when computers were not easy to come by.
=================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

Feelings about learning
-----------------------

The starting point for me in my learning adventure was emotional. I truly believed that education would provide me with the hope for a better future. I think I got this emotional imprint from [my father](heros/walter-thompson-bio.html). He grew up on a farm in Jamaica with little access to formal education. Although he had to leave school at age 12, he constantly reminded his five children of his love for education and how he was glad we had greater access to school than he had. His appreciation of educational opportunity and his constant praise of our accomplishments in school gave me **belief** and **hope** to focus on education. My father would say “with education you could accomplish anything you set your mind to”.

The other emotional component out side of school was my **passion** for drawing, math, solving puzzles and building electronic gadgets. I had a burning desire to figure out how electronic devices work. I built electron motors and radios from circuits described in library books. It was not enough to read about them, I only felt I understood something when I was able to built it and actually see it work.

My first "computer"
-------------------

I had not seen a real computer yet, but I had seen images of them on TV and in the movies. Computers in the popular media had a great mystic of power and intelligence. In 9th grade I took it on as a personal challenge to figure out how they worked. I tried to build a simple computing device use my basic knowledge of electronics. Using batteries, wires, and lights and I created a question/answer box. The box had a couple of questions with multiple choice answers labeled a, b, and c. To answer a question you’d slide in a card with the same label in the slot next to the question. If the answer was correct the correct light would light up.

Driven by my **passion** to understand computation, I set a **goal** to build a computer. My **plan** was to use all the knowledge I had readily available to me at that point: library books. My question/answer box would hardly qualify as a real computer. I set my next goal to learn how a real computer works. In the 1970’s computers were as large as several refrigerators and where only found in specialized computer centers. I only saw them on TV and none in real life yet. I believed my fathers words: “with education you could accomplish anything you set your mind to.” I simply needed to find a computer.

My support network
------------------

In 1974, for 10th grade I enter Bronx High School of Science. I shared by desire to learn more about computers with my geometry teacher, Ms. Strauss, and she directed me to the math department’s computer lab. Normally only 11th grade students could enter have computer lab. Fortunately, in the 9th grade I already completed both 9th grade math and 11th grade math, thanks to an innovative program designed by Mr. Cutler, a math teacher at Junior High School 80 in the Bronx NY. I spoke with the department head and convinced her to let me in early. I gave up lunch period to squeeze in the extra period of computer lab. I was so excited to finally learn computer programming I even came to school early to get extra time in the lab.

Ms. Strauss did another big favor for me. In the computer lab I found two students who where actually already working after school in computer centers. I was amazed. You could get a paying job as a high school student working with computers! With all the extra time I was putting into the computer lab I was confident that I too could work in a computer center. I asked Ms. Strauss for help, and she referred me to a special program called The Youth Opportunity Program which was run by New York State. The program was designed to provide low-income high school students employment in a professional environment, with the vision it would help them develop a career. In this program, I got a position as computer operator in the New York State Psychiatric Institute, only two train stops from my home in Harlem. On the computer center floor was a lab for sleep research and another lab with live-in patients, subjects of a long-term drug studies. Here they did mental health research on both lab animals and human patients. A very interesting place.

I worked in the computer center every day after school from four until eight o'clock. Between feeding punch cards into the large mainframe computer and folding printouts I'd do my homework and taught myself other computer languages. My personal goal was to learn every language available in the center and sell my computer skills to the clients of the computer center. I learned the other languages by reading the manuals and challenging my self to write a complete program in each.

I was fortunate to have a strong **support network** that helped me fulfill my desire to learn the mysteries the computer. By working in a real research facility I experienced direct, tangible applications of the knowledge I acquired in the classroom. My parents gave me the **belief** in fulfilling my dreams and the **hope** of education. Once I expressed by **goal**, by school, my teachers, and special social programs help me implement my **plan.** I took personal charge of my learning by working directly on projects that built on my personal **passion**. 

Learning computers today

Today if you have a passion to learn about computer, you will not have to face some of the challenges I faced. Affordable computers are in schools, libraries and most homes. As computers have grown more powerful and more popular, computer programming has also evolved. There are a many options for learning computer programming and there are project specially designed to make it easy to learn programming. One example is [Scratch developed by the Life Long Kindergarten group at the MIT Media Lab, (http://scratch.mit.edu/).](http://scratch.mit.edu/) Using Scratch even very young children can to learn programming in a playful, visual environment. 

One of my passions now is to help contribute to the **support network** for learners by sharing my stories, and helping others learn programming in new and exciting ways. I wish you good fortune in your learning adventure.

[Visit my Learn to code page to see my latest learn to code workshops and online classes.](learning-to-program.html)

(c) 2005-2017 John Henry Thompson. All rights reserved.

[![](_/rsrc/1488976239862/0-refections-on-learning/facebook-height=181&width=400.png)](http://www.johnhenrythompson.com/0-refections-on-learning/facebook.png?attredirects=0)

[Click here for photohacker workshop.](https://github.com/jht1900/photohacker)

  

[![http://codehs.com/go/7444](_/rsrc/1488992169186/0-refections-on-learning/codehs.png)](http://codehs.com/go/7444)

[Click here to join my computer science class at codehs.com](http://codehs.com/go/7444)

  

[![](_/rsrc/1295207567308/the-art-of-learning/reflections/colorized-jht-height=320&width=240.jpg)](http://www.johnhenrythompson.com/the-art-of-learning/reflections/colorized-jht.jpg?attredirects=0)

[Colorized photo portrait created in the 1980's at MIT Media Lab.](http://www.j4u2.com/jht/art1982.html)

  

[![](_/rsrc/1488992517046/0-refections-on-learning/Computer%20Club%20766x597-height=249&width=320.jpg)](http://www.johnhenrythompson.com/0-refections-on-learning/Computer%20Club%20766x597.jpg?attredirects=0)

[Proud member of my 1977 high school computer club.](http://bxscience.edu/index.jsp)

  

[![](_/rsrc/1488992789277/0-refections-on-learning/Ms.%20Straus-height=320&width=267.jpg)](http://www.johnhenrythompson.com/0-refections-on-learning/Ms.%20Straus.jpg?attredirects=0)

Ms. J. Strauss, my 10th grade math teacher. Got me my first computer job.

  

[![](_/rsrc/1488992852421/0-refections-on-learning/JHS80%20Mr.%20Cutler-height=320&width=253.jpg)](http://www.johnhenrythompson.com/0-refections-on-learning/JHS80%20Mr.%20Cutler.jpg?attredirects=0)

Mr. Cutler, my 9th grade math teacher. Gave me a boost in math by teaching two years of math in one.

  

[![](_/rsrc/1488993242362/0-refections-on-learning/Dad03-height=320&width=250.jpg)](http://www.johnhenrythompson.com/0-refections-on-learning/Dad03.jpg?attredirects=0)

[Walter Thompson. Give me love for education.](heros/walter-thompson-bio.html)

  

Comments

[Sign in](https://accounts.google.com/ServiceLogin?continue=http://sites.google.com/a/johnhenrythompson.com/jht/0-refections-on-learning&service=jotspot)|[Recent Site Activity](system/app/pages/recentChanges.html)|[Report Abuse](http://sites.google.com/a/johnhenrythompson.com/jht/system/app/pages/reportAbuse)|[Print Page](javascript:;)|Powered By **[Google Sites](http://sites.google.com/site)**

window.jstiming.load.tick('sjl'); window.jstiming.load.tick('jl'); sites.Searchbox.initialize( 'sites-searchbox-search-button', {"object":\[\]}\['object'\], 'search-site', {"label":"Configure search options...","url":"/system/app/pages/admin/settings"}); gsites.HoverPopupMenu.createSiteDropdownMenus('sites-header-nav-dropdown', false); JOT\_setupNav("2bd", "Navigation", true); JOT\_addListener('titleChange', 'JOT\_NAVIGATION\_titleChange', 'COMP\_2bd'); new sites.CommentPane('//docs.google.com/comments/d/AAHRpnXtRMj1XgBLQa4Y22KDIypZzMBseQwT3ox3jtLpaJLSiQGGfT0AX30\_OqdPs95IwAEBj1eHT4-kKhllocWnUsyoOW77j\_nzT8UcM7TDQ-DbhshMNzG2mrLqBCrQJJ4B7DZdOcYoc/api/js?anon=true', false, false); setTimeout(function() { var fingerprint = gsites.date.TimeZone.getFingerprint(\[1109635200000, 1128902400000, 1130657000000, 1143333000000, 1143806400000, 1145000000000, 1146380000000, 1152489600000, 1159800000000, 1159500000000, 1162095000000, 1162075000000, 1162105500000\]); gsites.Xhr.send('http://www.johnhenrythompson.com/\_/tz', null, null, 'GET', null, null, { afjstz: fingerprint }); }, 500); window.onload = function() { if (false) { JOT\_setMobilePreview(); } var loadTimer = window.jstiming.load; loadTimer.tick("ol"); loadTimer\["name"\] = "load," + webspace.page.type + ",user\_page"; window.jstiming.report(loadTimer, {}, 'http://csi.gstatic.com/csi'); } JOT\_insertAnalyticsCode(false, false); var maestroRunner = new gsites.pages.view.SitesMaestroRunner( webspace, "en"); maestroRunner.initListeners(); maestroRunner.installEditRender(); //<!\[CDATA\[ // Decorate any fastUI buttons on the page with a class of 'goog-button'. if (webspace.user.hasWriteAccess) { JOT\_decorateButtons(); } // Fires delayed events. (function() { JOT\_fullyLoaded = true; var delayedEvents = JOT\_delayedEvents; for (var x = 0; x < delayedEvents.length; x++) { var event = delayedEvents\[x\]; JOT\_postEvent(event.eventName, event.eventSrc, event.payload); } JOT\_delayedEvents = null; JOT\_postEvent('pageLoaded'); })(); //\]\]> JOT\_postEvent('decorateGvizCharts'); JOT\_setupPostRenderingManager(); JOT\_postEvent('renderPlus', null, 'sites-chrome-main'); sites.codeembed.init();

window.jstiming.load.tick('render'); JOT\_postEvent('usercontentrendered', this);