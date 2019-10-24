  /\* Copyright 2008 Google. \*/ (function() { (function(){function e(g){this.t={};this.tick=function(h,k,f){this.t\[h\]=\[void 0!=f?f:(new Date).getTime(),k\];if(void 0==f)try{window.console.timeStamp("CSI/"+h)}catch(m){}};this.tick("start",null,g)}var a;if(window.performance)var d=(a=window.performance.timing)&&a.responseStart;var l=0<d?new e(d):new e;window.jstiming={Timer:e,load:l};if(a){var b=a.navigationStart;0<b&&d>=b&&(window.jstiming.srt=d-b)}if(a){var c=window.jstiming.load;0<b&&d>=b&&(c.tick("\_wtsrt",void 0,b),c.tick("wtsrt\_","\_wtsrt", d),c.tick("tbsd\_","wtsrt\_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),c&&0<b&&(c.tick("\_tbnd",void 0,window.chrome.csi().startE),c.tick("tbnd\_","\_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,c&&0<b&&(c.tick("\_tbnd",void 0,window.external.startE),c.tick("tbnd\_","\_tbnd",b))),a&&(window.jstiming.pt=a)}catch(g){}})(); })()    /\* Copyright 2008 Google. \*/ (function() { function d(a){return document.getElementById(a)}window.byId=d;function g(a){return a.replace(/^\\s+|\\s+$/g,"")}window.trim=g;var h=\[\],k=0;window.JOT\_addListener=function(a,b,c){var f=new String(k++);a={eventName:a,handler:b,compId:c,key:f};h.push(a);return f};window.JOT\_removeListenerByKey=function(a){for(var b=0;b<h.length;b++)if(h\[b\].key==a){h.splice(b,1);break}};window.JOT\_removeAllListenersForName=function(a){for(var b=0;b<h.length;b++)h\[b\].eventName==a&&h.splice(b,1)}; window.JOT\_postEvent=function(a,b,c){var f={eventName:a,eventSrc:b||{},payload:c||{}};if(window.JOT\_fullyLoaded)for(b=h.length,c=0;c<b&&c<h.length;c++){var e=h\[c\];e&&e.eventName==a&&(f.listenerCompId=e.compId||"",(e="function"==typeof e.handler?e.handler:window\[e.handler\])&&e(f))}else window.JOT\_delayedEvents.push({eventName:a,eventSrc:b,payload:c})};window.JOT\_delayedEvents=\[\];window.JOT\_fullyLoaded=!1; window.JOT\_formatRelativeToNow=function(a,b){a=((new Date).getTime()-a)/6E4;if(1440<=a||0>a)return null;var c=0;60<=a&&(a/=60,c=2);2<=a&&c++;return b?window.JOT\_siteRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a)):window.JOT\_userRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a))}; })()   var breadcrumbs = \[{"path":"/artifacts","deleted":false,"title":"Artifacts","dir":"ltr"}\]; var JOT\_clearDotPath = 'http://www.gstatic.com/sites/p/fb83f7/system/app/images/cleardot.gif'; var JOT\_userRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\]; var webspace = {"gvizGstaticVersion":"current","enableAnalytics":false,"pageSharingId":"jotspot\_page","codeembeds":{"outerIframeSrc":"https://www.gstatic.com/jotspot/embeds/code/0f08d42392f2000e7e3f3daf5b427a43/outer\_iframe.html","innerIframeSrc":"https://22912078-jotspot-embeds.googleusercontent.com/code/8d87fa64604b2a11fae2ed06104c58d3/inner\_iframe.html"},"enableUniversalAnalytics":false,"sharingPolicy":"OPENED\_WITH\_INDICATOR","siteTitle":"John Henry Thompson - Invent Your Future","jot2atari":{"eligibility":"ineligible"},"onepickUrl":"https://docs.google.com/picker","adsensePublisherId":null,"features":{"moreMobileStyleImprovements":null,"subscriptionDataMigrationInProgress":false,"plusBadge":false},"isPublic":true,"newSitesBaseUrl":"https://sites.google.com","isConsumer":false,"serverFlags":{"jot2AtariLearnMoreUrl":"https://support.google.com/sites/answer/7035197"},"domainAnalyticsAccountId":"","plusPageId":"","signInUrl":"https://accounts.google.com/AccountChooser?continue\\u003dhttp://sites.google.com/a/johnhenrythompson.com/jht/artifacts\\u0026service\\u003djotspot","analyticsAccountId":"","scottyUrl":"/\_/upload","homePath":"/","siteNoticeUrlEnabled":null,"plusPageUrl":"","adsensePromoClickedOrSiteIneligible":true,"csiReportUri":"http://csi.gstatic.com/csi","sharingId":"jotspot","termsUrl":"//www.google.com/intl/en/policies/terms/","gvizVersion":1,"editorResources":{"sitelayout":\["http://www.gstatic.com/sites/p/fb83f7/system/app/css/sitelayouteditor.css"\],"text":\["http://www.gstatic.com/sites/p/fb83f7/system/js/codemirror.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codemirror\_css.css","http://www.gstatic.com/sites/p/fb83f7/system/js/trog\_edit\_\_en.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/trogedit.css","/\_/rsrc/1570087315000/system/app/css/editor.css","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codeeditor.css","/\_/rsrc/1570087315000/system/app/css/camelot/editor-jfk.css"\]},"sharingUrlPrefix":"/\_/sharing","isAdsenseEnabled":true,"domain":"johnhenrythompson.com","baseUri":"","name":"jht","siteTemplateId":false,"siteNoticeRevision":null,"siteNoticeUrlAddress":null,"siteNoticeMessage":null,"page":{"isRtlLocale":false,"canDeleteWebspace":null,"isPageDraft":null,"parentPath":null,"parentWuid":null,"siteLocale":"en","timeZone":"America/Los\_Angeles","type":"text","title":"Artifacts","locale":"en","wuid":"wuid:gx:7128cb7043bc17ad","revision":22,"path":"/artifacts","isSiteRtlLocale":false,"pageInheritsPermissions":null,"name":"artifacts","canChangePath":true,"state":"","properties":{},"bidiEnabled":false,"currentTemplate":{"path":"/system/app/pagetemplates/text","title":"Web Page"}},"canPublishScriptToAnyone":true,"user":{"keyboardShortcuts":true,"sessionIndex":"","onePickToken":"","guest\_":true,"displayNameOrEmail":"guest","userName":"guest","uid":"","renderMobile":false,"domain":"","namespace":"","hasWriteAccess":false,"namespaceUser":false,"primaryEmail":"guest","hasAdminAccess":false},"gadgets":{"baseUri":"/system/app/pages/gadgets"}}; webspace.page.breadcrumbs = breadcrumbs; var JOT\_siteRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\];   window.jstiming.load.tick('scl');            Artifacts - John Henry Thompson - Invent Your Future   window.jstiming.load.tick('cl'); 

[![John Henry Thompson - Invent Your Future](_/rsrc/1329567069254/config/customLogo.gif-revision=6.png)](index.html)

[John Henry Thompson - Invent Your Future](index.html)
------------------------------------------------------

Search this site

*   [About me](home.html)
    
*   [0\. Reflections](0-refections-on-learning.html)
    
*   [1\. Learn to Code](learning-to-program.html)
    
*   [2\. The Art of Learning](the-art-of-learning.html)
    
*   [3\. DICE](3-dice.html)
    
*   [4\. History](4-history.html)
    
*   [5\. Respect](heros.html)
    
*   Artifacts
    
*   [Blog](z-blog-1.html)
    
*   [Garden](4-garden.html)
    
*   [iPhone Apps](iphone-apps.html)
    
*   [Notes](notes.html)
    
*   [Photos](family.html)
    
*   [Yoga](yoga.html)
    
*   [Sitemap](system/app/pages/sitemap/hierarchy.html)
    

### Artifacts

As of the beginning of 2017 Adobe announced the end-of-life for Adobe Director (formerly Macromedia Director).

  

I started working on Director 1.0 back in 1980's, it evolved to be the go-to authoring tool of interactive content.

  

Last product info for Adobe Director:

> "Create and publish compelling interactive games, demos, prototypes, simulations, and eLearning courses for the web, iOS devices, Mac and Windows® desktops, DVDs, and CDs. Integrate virtually any major file format, including FLV and native 3D content, for the greatest return on your creativity."

  

My scan of product box covers over the many years:

> [https://github.com/jht1900/macr](https://github.com/jht1900/macr)
> 
> [https://github.com/jht1900/macr/blob/master/director-boxes/README.md](https://github.com/jht1900/macr/blob/master/director-boxes/README.md)
> 
> [https://github.com/jht1900/macr/blob/master/books/README.md](https://github.com/jht1900/macr/blob/master/books/README.md)

  

There is interest in open source player to keep old content alive in the discussion forum announcing end-of-life for Adobe Director product:

> [https://blogs.adobe.com/creativecloud/the-future-of-adobe-contribute-director-and-shockwave/](https://blogs.adobe.com/creativecloud/the-future-of-adobe-contribute-director-and-shockwave/)

  

* * *

Notable Director Content:

*   Spaceship Warlock
*   The Journeyman Project
*   AMBER: Journeys Beyond
*   [Total Distortion](https://archive.org/details/dazzeloids) 

*   Joe Sparks -- [http://www.joesparks.com/bio/milestones1.htm](http://www.joesparks.com/bio/milestones1.htm) 
*   2017:  ["Too Much" Music Video by Joe Sparks](https://youtu.be/LouJ3Utvp0s) 

*   [Dazzleoids](https://archive.org/details/dazzeloids) -- [https://en.wikipedia.org/wiki/Dazzleoids](https://en.wikipedia.org/wiki/Dazzleoids)

*   Rodney Alan Greenblat 

*   [https://en.wikipedia.org/wiki/Rodney\_Greenblat](https://en.wikipedia.org/wiki/Rodney_Greenblat)
*   [http://whimsyload.com/](http://whimsyload.com/)

*     
    

* * *

  

**An incredible effort to revive Director content:**

> [http://www.scummvm.org](http://www.scummvm.org/)
> 
> [https://github.com/scummvm/scummvm/tree/master/engines/director](https://github.com/scummvm/scummvm/tree/master/engines/director)

  

Learn about this from email from Eugene Sandulenko <sev@scummvm.org> received 12/8/2016:

  

Hi John,

  

Thank you very much for reacting to my message on the Facebook. I really feel privileged being able to talk to you.

  

My name is Eugene Sandulenko, and I am the team lead of ScummVM (http://www.scummvm.org), an open source project which is entitled to make classic adventure and RPG games work on modern hardware.

  

Currently we support hundreds of adventures, including famous ones from LucasArts, Sierra, Revolution Software, Cryo, Tsunami Media etc. What we do is basically reverse engineering the executable and rewriting it in a portable C++, so it runs on over 20+ supported platforms but requires the original game media to run.

  

This year we started a project for making the Director working. Our aim is to eventually have all versions up to D6 working, though it is going to be a long process. Currently we're concentrating on D2-D4. Anything beyond D6 became large, bloated and complicated. The reason why we are doing it is that several great adventure games such as Spaceship Warlock, The Journeyman Project and AMBER: Journeys Beyond were created with it. As a side effect, we expect most of the Director creations to be working as well.

  

Recently, while sweeping eBay and Amazon for all available books, software and materials on the topic, I eventually got your excellent book "Lingo Workshop", and learned that you are in fact the inventor and the author of this masterpiece. We are working now slowly over the samples from the CD-ROMs and making them working. Initially I started to work on The Apartment demo for D3, and it shows some signs of life already.

  

I think you could be interested in our effort. Currently I am working mostly from the specs, and went into the D4 Windows executable internals only few times. The work is published here: https://github.com/scummvm/scummvm/tree/master/engines/director

  

I also wonder, do you happen to have the old sources available, so it could speed up our development?

  

Regards,

Eugene

* * *

Eugene's instructions:

[http://scummvm.org/frs/demos/director/theapartment3.zip](http://scummvm.org/frs/demos/director/theapartment3.zip)

[http://buildbot.scummvm.org/snapshots/master/osx\_intel-master-latest.tar.xz](http://buildbot.scummvm.org/snapshots/master/osx_intel-master-latest.tar.xz)

  

Must use Terminal command to extract .tar.xz file:

tar xf /Users/jht/Downloads/osx\_intel-master-latest.tar.xz 

Navigate to apartment3 directory and choose Add game.

Individual files are not selectable, but Choose will still work.

  

[http://www.scummvm.org/downloads/](http://www.scummvm.org/downloads/)

  

  

  

  

Comments

[Sign in](https://accounts.google.com/ServiceLogin?continue=http://sites.google.com/a/johnhenrythompson.com/jht/artifacts&service=jotspot)|[Recent Site Activity](system/app/pages/recentChanges.html)|[Report Abuse](http://sites.google.com/a/johnhenrythompson.com/jht/system/app/pages/reportAbuse)|[Print Page](javascript:;)|Powered By **[Google Sites](http://sites.google.com/site)**

window.jstiming.load.tick('sjl'); window.jstiming.load.tick('jl'); sites.Searchbox.initialize( 'sites-searchbox-search-button', {"object":\[\]}\['object'\], 'search-site', {"label":"Configure search options...","url":"/system/app/pages/admin/settings"}); gsites.HoverPopupMenu.createSiteDropdownMenus('sites-header-nav-dropdown', false); JOT\_setupNav("2bd", "Navigation", true); JOT\_addListener('titleChange', 'JOT\_NAVIGATION\_titleChange', 'COMP\_2bd'); new sites.CommentPane('//docs.google.com/comments/d/AAHRpnXtRMj1XgBLQa4Y22KDIypZzMBseQwT3ox3jtLpaJLSiQMFsvZqI-JjHEQf7r0GhLzUonBxxP1ly5NiC2J\_aR0ymFENfndOAV8CupnGuic2ZpgQh8pM8GcSSFozIPTxMP2MFsEUU/api/js?anon=true', false, false); setTimeout(function() { var fingerprint = gsites.date.TimeZone.getFingerprint(\[1109635200000, 1128902400000, 1130657000000, 1143333000000, 1143806400000, 1145000000000, 1146380000000, 1152489600000, 1159800000000, 1159500000000, 1162095000000, 1162075000000, 1162105500000\]); gsites.Xhr.send('http://www.johnhenrythompson.com/\_/tz', null, null, 'GET', null, null, { afjstz: fingerprint }); }, 500); window.onload = function() { if (false) { JOT\_setMobilePreview(); } var loadTimer = window.jstiming.load; loadTimer.tick("ol"); loadTimer\["name"\] = "load," + webspace.page.type + ",user\_page"; window.jstiming.report(loadTimer, {}, 'http://csi.gstatic.com/csi'); } JOT\_insertAnalyticsCode(false, false); var maestroRunner = new gsites.pages.view.SitesMaestroRunner( webspace, "en"); maestroRunner.initListeners(); maestroRunner.installEditRender(); //<!\[CDATA\[ // Decorate any fastUI buttons on the page with a class of 'goog-button'. if (webspace.user.hasWriteAccess) { JOT\_decorateButtons(); } // Fires delayed events. (function() { JOT\_fullyLoaded = true; var delayedEvents = JOT\_delayedEvents; for (var x = 0; x < delayedEvents.length; x++) { var event = delayedEvents\[x\]; JOT\_postEvent(event.eventName, event.eventSrc, event.payload); } JOT\_delayedEvents = null; JOT\_postEvent('pageLoaded'); })(); //\]\]> JOT\_postEvent('decorateGvizCharts'); JOT\_setupPostRenderingManager(); JOT\_postEvent('renderPlus', null, 'sites-chrome-main'); sites.codeembed.init();

window.jstiming.load.tick('render'); JOT\_postEvent('usercontentrendered', this);