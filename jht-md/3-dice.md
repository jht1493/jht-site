  /\* Copyright 2008 Google. \*/ (function() { (function(){function e(g){this.t={};this.tick=function(h,k,f){this.t\[h\]=\[void 0!=f?f:(new Date).getTime(),k\];if(void 0==f)try{window.console.timeStamp("CSI/"+h)}catch(m){}};this.tick("start",null,g)}var a;if(window.performance)var d=(a=window.performance.timing)&&a.responseStart;var l=0<d?new e(d):new e;window.jstiming={Timer:e,load:l};if(a){var b=a.navigationStart;0<b&&d>=b&&(window.jstiming.srt=d-b)}if(a){var c=window.jstiming.load;0<b&&d>=b&&(c.tick("\_wtsrt",void 0,b),c.tick("wtsrt\_","\_wtsrt", d),c.tick("tbsd\_","wtsrt\_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),c&&0<b&&(c.tick("\_tbnd",void 0,window.chrome.csi().startE),c.tick("tbnd\_","\_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,c&&0<b&&(c.tick("\_tbnd",void 0,window.external.startE),c.tick("tbnd\_","\_tbnd",b))),a&&(window.jstiming.pt=a)}catch(g){}})(); })()    /\* Copyright 2008 Google. \*/ (function() { function d(a){return document.getElementById(a)}window.byId=d;function g(a){return a.replace(/^\\s+|\\s+$/g,"")}window.trim=g;var h=\[\],k=0;window.JOT\_addListener=function(a,b,c){var f=new String(k++);a={eventName:a,handler:b,compId:c,key:f};h.push(a);return f};window.JOT\_removeListenerByKey=function(a){for(var b=0;b<h.length;b++)if(h\[b\].key==a){h.splice(b,1);break}};window.JOT\_removeAllListenersForName=function(a){for(var b=0;b<h.length;b++)h\[b\].eventName==a&&h.splice(b,1)}; window.JOT\_postEvent=function(a,b,c){var f={eventName:a,eventSrc:b||{},payload:c||{}};if(window.JOT\_fullyLoaded)for(b=h.length,c=0;c<b&&c<h.length;c++){var e=h\[c\];e&&e.eventName==a&&(f.listenerCompId=e.compId||"",(e="function"==typeof e.handler?e.handler:window\[e.handler\])&&e(f))}else window.JOT\_delayedEvents.push({eventName:a,eventSrc:b,payload:c})};window.JOT\_delayedEvents=\[\];window.JOT\_fullyLoaded=!1; window.JOT\_formatRelativeToNow=function(a,b){a=((new Date).getTime()-a)/6E4;if(1440<=a||0>a)return null;var c=0;60<=a&&(a/=60,c=2);2<=a&&c++;return b?window.JOT\_siteRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a)):window.JOT\_userRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a))}; })()   var breadcrumbs = \[{"path":"/3-dice","deleted":false,"title":"3. DICE","dir":"ltr"}\]; var JOT\_clearDotPath = 'http://www.gstatic.com/sites/p/fb83f7/system/app/images/cleardot.gif'; var JOT\_userRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\]; var webspace = {"gvizGstaticVersion":"current","enableAnalytics":false,"pageSharingId":"jotspot\_page","codeembeds":{"outerIframeSrc":"https://www.gstatic.com/jotspot/embeds/code/0f08d42392f2000e7e3f3daf5b427a43/outer\_iframe.html","innerIframeSrc":"https://674214847-jotspot-embeds.googleusercontent.com/code/8d87fa64604b2a11fae2ed06104c58d3/inner\_iframe.html"},"enableUniversalAnalytics":false,"sharingPolicy":"OPENED\_WITH\_INDICATOR","siteTitle":"John Henry Thompson - Invent Your Future","jot2atari":{"eligibility":"ineligible"},"onepickUrl":"https://docs.google.com/picker","adsensePublisherId":null,"features":{"moreMobileStyleImprovements":null,"subscriptionDataMigrationInProgress":false,"plusBadge":false},"isPublic":true,"newSitesBaseUrl":"https://sites.google.com","isConsumer":false,"serverFlags":{"jot2AtariLearnMoreUrl":"https://support.google.com/sites/answer/7035197"},"domainAnalyticsAccountId":"","plusPageId":"","signInUrl":"https://accounts.google.com/AccountChooser?continue\\u003dhttp://sites.google.com/a/johnhenrythompson.com/jht/3-dice\\u0026service\\u003djotspot","analyticsAccountId":"","scottyUrl":"/\_/upload","homePath":"/","siteNoticeUrlEnabled":null,"plusPageUrl":"","adsensePromoClickedOrSiteIneligible":true,"csiReportUri":"http://csi.gstatic.com/csi","sharingId":"jotspot","termsUrl":"//www.google.com/intl/en/policies/terms/","gvizVersion":1,"editorResources":{"sitelayout":\["http://www.gstatic.com/sites/p/fb83f7/system/app/css/sitelayouteditor.css"\],"text":\["http://www.gstatic.com/sites/p/fb83f7/system/js/codemirror.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codemirror\_css.css","http://www.gstatic.com/sites/p/fb83f7/system/js/trog\_edit\_\_en.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/trogedit.css","/\_/rsrc/1570087315000/system/app/css/editor.css","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codeeditor.css","/\_/rsrc/1570087315000/system/app/css/camelot/editor-jfk.css"\]},"sharingUrlPrefix":"/\_/sharing","isAdsenseEnabled":true,"domain":"johnhenrythompson.com","baseUri":"","name":"jht","siteTemplateId":false,"siteNoticeRevision":null,"siteNoticeUrlAddress":null,"siteNoticeMessage":null,"page":{"isRtlLocale":false,"canDeleteWebspace":null,"isPageDraft":null,"parentPath":null,"parentWuid":null,"siteLocale":"en","timeZone":"America/Los\_Angeles","type":"text","title":"3. DICE","locale":"en","wuid":"wuid:gx:2790b5e128240084","revision":92,"path":"/3-dice","isSiteRtlLocale":false,"pageInheritsPermissions":null,"name":"3-dice","canChangePath":true,"state":"","properties":{},"bidiEnabled":false,"currentTemplate":{"path":"/system/app/pagetemplates/text","title":"Web Page"}},"canPublishScriptToAnyone":true,"user":{"keyboardShortcuts":true,"sessionIndex":"","onePickToken":"","guest\_":true,"displayNameOrEmail":"guest","userName":"guest","uid":"","renderMobile":false,"domain":"","namespace":"","hasWriteAccess":false,"namespaceUser":false,"primaryEmail":"guest","hasAdminAccess":false},"gadgets":{"baseUri":"/system/app/pages/gadgets"}}; webspace.page.breadcrumbs = breadcrumbs; var JOT\_siteRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\];   window.jstiming.load.tick('scl');            3\. DICE - John Henry Thompson - Invent Your Future   window.jstiming.load.tick('cl'); 

[![John Henry Thompson - Invent Your Future](_/rsrc/1329567069254/config/customLogo.gif-revision=6.png)](index.html)

[John Henry Thompson - Invent Your Future](index.html)
------------------------------------------------------

Search this site

*   [About me](home.html)
    
*   [0\. Reflections](0-refections-on-learning.html)
    
*   [1\. Learn to Code](learning-to-program.html)
    
*   [2\. The Art of Learning](the-art-of-learning.html)
    
*   3\. DICE
    
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
    

### 3\. DICE

**[DICE iOS Mobile Public App](https://itunes.apple.com/us/app/dicecpu/id1347427207?ls=1&mt=8)**

  

[Link to Apple App Store for DICE App](https://itunes.apple.com/us/app/dicecpu/id1347427207?ls=1&mt=8)

Or search for "DICECPU" in the Apple App Store.

>   

Use the DICE app to explore raw RGB pixels from your camera

and coding with [p5js](https://p5js.org/)  

  

Features:

> \- colormeter: see RGB pixel values.   -- insight
> 
> \- colord: rainbow color effect            -- Light
> 
> \- delay: slow motion effect               -- Time
> 
> \- pixeld: pixel sub sampling effect     -- Space

> \- scripting with [p5js](https://p5js.org/)                         -- Algorithm

  

What does DICE mean?

> Distributed Instruments for Computed Expression  
> 
>   

Next public demo of DICE:

  

> [Fri. Oct 26, 2018 10:30AM at Smithsonian African American Film Festival](https://aafilmfest.si.edu/discover/events/code-switch-technology-and-video-art)

  

Recent Interviews:

  

> [The Coding Train welcomes John Henry Thompson](https://www.youtube.com/watch?v=DvS4h-1Eyu4)

>   

* * *

**The DICE Vision**
-------------------

DICE is a platform for exploring art, learning, and computer science.

  
It is an open source project consisting of these major components:

> \- DICE iOS Mobile App
> 
> \- DICE OSX Desktop App
> 
> \- DICE Store backend server

  

The goal of DICE is to make it easier play and create art with mobile device sensor data.

  

The full version of DICE is currently in private beta, [contact me](https://twitter.com/jht1493) to collaborate on github.

  

DICE Preview Videos:

>   
> 
> [DICE Preview Video 2018-02-24 1mins](https://www.youtube.com/watch?v=z1cH5ou8OkA&feature=youtu.be)
> 
> [DICE Preview Video 2018-02-24 3mins](https://www.youtube.com/watch?v=KfH3YCw2Bno&feature=youtu.be)
> 
> [DICE Preview Video 2017-09-13 2mins](https://youtu.be/d7a-RcjS6uc)

  

More photos entombed in these silos: 

  

> [https://www.instagram.com/johnhenrythompson1493/](https://www.instagram.com/johnhenrythompson1493/)

> [https://www.facebook.com/johnhenrythompson](https://www.facebook.com/johnhenrythompson)

> [https://twitter.com/jht1493](https://twitter.com/jht1493)

  

[![](_/rsrc/1519494183908/3-dice/IMG_2235-height=320&width=179.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_2235.jpg?attredirects=0) [![](_/rsrc/1519493871737/3-dice/IMG_0232-height=320&width=240.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0232.jpg?attredirects=0) [![](_/rsrc/1519493908123/3-dice/IMG_0234-height=320&width=240.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0234.jpg?attredirects=0)  [![](_/rsrc/1519493961066/3-dice/IMG_2189-height=320&width=179.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_2189.jpg?attredirects=0)

[![](_/rsrc/1519494021886/3-dice/IMG_2214-height=320&width=179.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_2214.jpg?attredirects=0) [![](_/rsrc/1519494070668/3-dice/IMG_2219-height=320&width=179.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_2219.jpg?attredirects=0) [![](_/rsrc/1519494114555/3-dice/IMG_2228-height=320&width=179.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_2228.jpg?attredirects=0) [![](_/rsrc/1519494404857/3-dice/IMG_2198-height=320&width=179.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_2198.jpg?attredirects=0)

Variety pack 2018-02-24: Color meter brush and gravity brush.

  

  

[![](_/rsrc/1519137909711/3-dice/IMG_2092-height=320&width=179.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_2092.jpg?attredirects=0)

2018-02-19 DICE colored mind: gravity on black.

  

  

[![](_/rsrc/1518899633235/3-dice/IMG_0089-height=239&width=320.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0089.jpg?attredirects=0)

2018-02-17 DICE Colored mind: Team work with gravity lines.

  

  

[![](_/rsrc/1518124427160/3-dice/IMG_1887-am-i-not-height=320&width=179.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_1887-am-i-not.jpg?attredirects=0)

DICE colored mind: Am I not a black man?

  

[![](_/rsrc/1517930648342/3-dice/jht-cu-full-pixel-height=252&width=320.jpg)](http://www.johnhenrythompson.com/3-dice/jht-cu-full-pixel.jpg?attredirects=0)

Dice colored mind: selfie test.

[2018-02-03 For DIY Photoshop workshop at Scribe Video.](z-blog-1/diyphotoshopscribe2018-03-03.html)

  

[![](_/rsrc/1517930817287/3-dice/hand%20colors%20-%20i%20come%20in%20peace-height=320&width=200.jpg)](http://www.johnhenrythompson.com/3-dice/hand%20colors%20-%20i%20come%20in%20peace.jpg?attredirects=0)

Colored mind: I come in peace.

[2018-02-03 For DIY Photoshop workshop at Scribe Video.](z-blog-1/diyphotoshopscribe2018-03-03.html)

  

[![](_/rsrc/1517931012490/3-dice/doll%20test-height=203&width=320.jpg)](http://www.johnhenrythompson.com/3-dice/doll%20test.jpg?attredirects=0)

DICE colored mind: Doll Test.

[2018-02-03 For DIY Photoshop workshop at Scribe Video.](z-blog-1/diyphotoshopscribe2018-03-03.html)

  

The colored mind meditates on DICE:

[![](_/rsrc/1513455115437/3-dice/IMG_1397-height=400&width=224.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_1397.jpg?attredirects=0)

  

  

Logo design by Zahra Khosravi at ITP-NYU:

[![](_/rsrc/1513455112511/3-dice/IMG_1395.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_1395.jpg?attredirects=0)

  

[Photos from NYU-ITP presentation:](https://tisch.nyu.edu/itp/events/fall-2017/dice-with-john-henry-thompson)

[![](_/rsrc/1513455100863/3-dice/IMG_0077-height=320&width=180.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0077.jpg?attredirects=0)  [![](_/rsrc/1513455095241/3-dice/IMG_0071-height=320&width=180.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0071.jpg?attredirects=0)    [![](_/rsrc/1513455098215/3-dice/IMG_0072-height=320&width=180.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0072.jpg?attredirects=0)  [![](_/rsrc/1513455109413/3-dice/IMG_1215-height=320&width=179.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_1215.jpg?attredirects=0)

  

[![](_/rsrc/1513455107025/3-dice/IMG_1187-height=300&width=400.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_1187.jpg?attredirects=0)

[![](_/rsrc/1513455103487/3-dice/IMG_1173-height=300&width=400.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_1173.jpg?attredirects=0)

  

[NYU-ITP presentation annoucement](z-blog-1/diceiscoming.html)

  

  

[![](_/rsrc/1510483342422/3-dice/p5%20RGB%20z4-height=200&width=200.jpg)](http://www.johnhenrythompson.com/3-dice/p5%20RGB%20z4.jpg?attredirects=0) [![](_/rsrc/1510483339428/3-dice/p5%20RGB%204k%20hold%20bz-height=200&width=200.jpg)](http://www.johnhenrythompson.com/3-dice/p5%20RGB%204k%20hold%20bz.jpg?attredirects=0) [![](_/rsrc/1510483335762/3-dice/IMG_1081-height=200&width=112.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_1081.jpg?attredirects=0)  [![](_/rsrc/1510483277435/3-dice/IMG_0177-height=150&width=200.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0177.jpg?attredirects=0) [![](_/rsrc/1510483329743/3-dice/IMG_1075-height=200&width=112.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_1075.jpg?attredirects=0)

p5js  + DICE  2017-11-xx

  

[![](_/rsrc/1510483304679/3-dice/IMG_1040.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_1040.jpg?attredirects=0)

  

DICE desktop basic.dice + webkit debugging of dice devices 2017-11-xx

  

[![](_/rsrc/1506427624521/3-dice/IMG_0036-height=149&width=200.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0036.jpg?attredirects=0) [![](_/rsrc/1506427632031/3-dice/IMG_0038-height=149&width=200.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0038.jpg?attredirects=0)  [![](_/rsrc/1506427628004/3-dice/IMG_0037-height=149&width=200.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0037.jpg?attredirects=0)  [![](_/rsrc/1506427636744/3-dice/IMG_0026-height=149&width=200.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0026.jpg?attredirects=0)

DICE Color wave 2017-09-10

  

  

[![DICE Device Preview 2017-09-13](_/rsrc/1505342615340/3-dice/DICE-preview-thumb-height=235&width=400.png)](https://www.youtube.com/watch?v=d7a-RcjS6uc)

DICE Preview on Devices 2017-09-13

  

[![](_/rsrc/1504967621245/3-dice/IMG_0261-height=400&width=300.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0261.jpg?attredirects=0) [![](_/rsrc/1504967633823/3-dice/IMG_0258-height=400&width=224.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0258.jpg?attredirects=0)

At the [nMAAhC](https://nmaahc.si.edu/) 2017-09-08 planning to archive old work and previewing new work.

  

[![](_/rsrc/1504967624610/3-dice/IMG_0254-height=400&width=224.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0254.jpg?attredirects=0)  [![](_/rsrc/1504967630738/3-dice/IMG_0255-height=400&width=224.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0255.jpg?attredirects=0)

DICE color meter view of Brown Bag Test at nMAAhC 2017-09-08.

  

[![](_/rsrc/1504752902468/3-dice/IMG_0213-height=300&width=400.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0213.jpg?attredirects=0)

Orchestrated DICE. Using devices to explore art and science.

  

[![](_/rsrc/1504606296945/3-dice/IMG_0174-height=400&width=308.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0174.jpg?attredirects=0)

  

[![](_/rsrc/1504605581327/3-dice/IMG_0167-height=400&width=224.jpg) ![](_/rsrc/1504605592951/3-dice/IMG_0163-height=400&width=224.jpg) ](http://www.johnhenrythompson.com/3-dice/IMG_0163.jpg?attredirects=0) [![](_/rsrc/1504605588105/3-dice/IMG_0156-height=400&width=224.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0156.jpg?attredirects=0)

  

  

[![](_/rsrc/1504579612067/3-dice/IMG_0142-height=400&width=224.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0142.jpg?attredirects=0)[![](_/rsrc/1504579700800/3-dice/IMG_0144-height=400&width=224.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0144.jpg?attredirects=0)

[![](_/rsrc/1504533637865/3-dice/IMG_0147-height=400&width=300.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0147.jpg?attredirects=0)  [![](_/rsrc/1504533634188/3-dice/IMG_0048-height=400&width=225.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0048.jpg?attredirects=0)

[![](_/rsrc/1504533631235/3-dice/IMG_0001-height=400&width=224.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_0001.jpg?attredirects=0) [![](_/rsrc/1503405999502/3-dice/IMG_9198-height=400&width=224.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_9198.jpg?attredirects=0)[![](_/rsrc/1503790449942/3-dice/IMG_9408-height=400&width=224.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_9408.jpg?attredirects=0)

[![](_/rsrc/1503963559036/3-dice/IMG_9606-height=400&width=224.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_9606.jpg?attredirects=0)  [![](_/rsrc/1503963561972/3-dice/IMG_9610-height=400&width=224.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_9610.jpg?attredirects=0)

Place of my workship: [episual design](http://www.epvisual.com/), with by co-worker and brother [Jervis Thompson aka JERVO](http://jervo.org), also [Drexel professor](http://drexel.edu/westphal/about/directory/ThompsonJervis/)in [DIGM](http://digm.drexel.edu/).

  

[![](_/rsrc/1503963566670/3-dice/IMG_9627.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_9627.jpg?attredirects=0)

  

[![](_/rsrc/1503405150246/3-dice/IMG_8935-height=400&width=224.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_8935.jpg?attredirects=0) [![](_/rsrc/1503405156062/3-dice/IMG_9038-height=400&width=224.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_9038.jpg?attredirects=0) 

[![](_/rsrc/1503405990272/3-dice/IMG_9185-height=400&width=224.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_9185.jpg?attredirects=0)[![](_/rsrc/1503405996001/3-dice/IMG_9190-height=400&width=224.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_9190.jpg?attredirects=0)

  

[![](_/rsrc/1503963569551/3-dice/IMG_9647.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_9647.jpg?attredirects=0)

  

  

  

  

  

  

[![](_/rsrc/1503405153170/3-dice/IMG_8953.jpg)](http://www.johnhenrythompson.com/3-dice/IMG_8953.jpg?attredirects=0)

**DICE** image from iPhone 2017-08-?? me at my crib in front of my art wall. Laminated 8x10 color prints: Color Wheel generated by Javascript, WEB DuBois photo, and Family photo on lower right.

  

**DICE**: Distributed Instruments for Computed Expression.

flowing from [my early software.](http://j4u2.com/jht/newwork.html)

[  
![](_/rsrc/1505500572890/3-dice/dmi_works-from%20BB.jpg)](http://www.johnhenrythompson.com/3-dice/dmi_works-from%20BB.jpg?attredirects=0)

I sent my cosmic twin, Benjamin B., my DICE app in 2001, he sent back this screen shot.

  

Subpages (2): [DICE-demo](3-dice/dice-demo.html) [DICE-Privacy](3-dice/dice-privacy.html)

Comments

[Sign in](https://accounts.google.com/ServiceLogin?continue=http://sites.google.com/a/johnhenrythompson.com/jht/3-dice&service=jotspot)|[Recent Site Activity](system/app/pages/recentChanges.html)|[Report Abuse](http://sites.google.com/a/johnhenrythompson.com/jht/system/app/pages/reportAbuse)|[Print Page](javascript:;)|Powered By **[Google Sites](http://sites.google.com/site)**

window.jstiming.load.tick('sjl'); window.jstiming.load.tick('jl'); sites.Searchbox.initialize( 'sites-searchbox-search-button', {"object":\[\]}\['object'\], 'search-site', {"label":"Configure search options...","url":"/system/app/pages/admin/settings"}); gsites.HoverPopupMenu.createSiteDropdownMenus('sites-header-nav-dropdown', false); JOT\_setupNav("2bd", "Navigation", true); JOT\_addListener('titleChange', 'JOT\_NAVIGATION\_titleChange', 'COMP\_2bd'); new sites.CommentPane('//docs.google.com/comments/d/AAHRpnXtRMj1XgBLQa4Y22KDIypZzMBseQwT3ox3jtLpaJLSiQJgDlHogxjoBpdY7InijqT5Sm9O683F623ABxIa9jtcJX0oFPnCzc3QRiC7U9ZP11\_UpfYlEq3qQtW9gw-Dvs7ltM0Gn/api/js?anon=true', false, false); setTimeout(function() { var fingerprint = gsites.date.TimeZone.getFingerprint(\[1109635200000, 1128902400000, 1130657000000, 1143333000000, 1143806400000, 1145000000000, 1146380000000, 1152489600000, 1159800000000, 1159500000000, 1162095000000, 1162075000000, 1162105500000\]); gsites.Xhr.send('http://www.johnhenrythompson.com/\_/tz', null, null, 'GET', null, null, { afjstz: fingerprint }); }, 500); window.onload = function() { if (false) { JOT\_setMobilePreview(); } var loadTimer = window.jstiming.load; loadTimer.tick("ol"); loadTimer\["name"\] = "load," + webspace.page.type + ",user\_page"; window.jstiming.report(loadTimer, {}, 'http://csi.gstatic.com/csi'); } JOT\_insertAnalyticsCode(false, false); var maestroRunner = new gsites.pages.view.SitesMaestroRunner( webspace, "en"); maestroRunner.initListeners(); maestroRunner.installEditRender(); //<!\[CDATA\[ // Decorate any fastUI buttons on the page with a class of 'goog-button'. if (webspace.user.hasWriteAccess) { JOT\_decorateButtons(); } // Fires delayed events. (function() { JOT\_fullyLoaded = true; var delayedEvents = JOT\_delayedEvents; for (var x = 0; x < delayedEvents.length; x++) { var event = delayedEvents\[x\]; JOT\_postEvent(event.eventName, event.eventSrc, event.payload); } JOT\_delayedEvents = null; JOT\_postEvent('pageLoaded'); })(); //\]\]> JOT\_postEvent('decorateGvizCharts'); JOT\_setupPostRenderingManager(); JOT\_postEvent('renderPlus', null, 'sites-chrome-main'); sites.codeembed.init();

window.jstiming.load.tick('render'); JOT\_postEvent('usercontentrendered', this);