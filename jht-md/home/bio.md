  /\* Copyright 2008 Google. \*/ (function() { (function(){function e(g){this.t={};this.tick=function(h,k,f){this.t\[h\]=\[void 0!=f?f:(new Date).getTime(),k\];if(void 0==f)try{window.console.timeStamp("CSI/"+h)}catch(m){}};this.tick("start",null,g)}var a;if(window.performance)var d=(a=window.performance.timing)&&a.responseStart;var l=0<d?new e(d):new e;window.jstiming={Timer:e,load:l};if(a){var b=a.navigationStart;0<b&&d>=b&&(window.jstiming.srt=d-b)}if(a){var c=window.jstiming.load;0<b&&d>=b&&(c.tick("\_wtsrt",void 0,b),c.tick("wtsrt\_","\_wtsrt", d),c.tick("tbsd\_","wtsrt\_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),c&&0<b&&(c.tick("\_tbnd",void 0,window.chrome.csi().startE),c.tick("tbnd\_","\_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,c&&0<b&&(c.tick("\_tbnd",void 0,window.external.startE),c.tick("tbnd\_","\_tbnd",b))),a&&(window.jstiming.pt=a)}catch(g){}})(); })()    /\* Copyright 2008 Google. \*/ (function() { function d(a){return document.getElementById(a)}window.byId=d;function g(a){return a.replace(/^\\s+|\\s+$/g,"")}window.trim=g;var h=\[\],k=0;window.JOT\_addListener=function(a,b,c){var f=new String(k++);a={eventName:a,handler:b,compId:c,key:f};h.push(a);return f};window.JOT\_removeListenerByKey=function(a){for(var b=0;b<h.length;b++)if(h\[b\].key==a){h.splice(b,1);break}};window.JOT\_removeAllListenersForName=function(a){for(var b=0;b<h.length;b++)h\[b\].eventName==a&&h.splice(b,1)}; window.JOT\_postEvent=function(a,b,c){var f={eventName:a,eventSrc:b||{},payload:c||{}};if(window.JOT\_fullyLoaded)for(b=h.length,c=0;c<b&&c<h.length;c++){var e=h\[c\];e&&e.eventName==a&&(f.listenerCompId=e.compId||"",(e="function"==typeof e.handler?e.handler:window\[e.handler\])&&e(f))}else window.JOT\_delayedEvents.push({eventName:a,eventSrc:b,payload:c})};window.JOT\_delayedEvents=\[\];window.JOT\_fullyLoaded=!1; window.JOT\_formatRelativeToNow=function(a,b){a=((new Date).getTime()-a)/6E4;if(1440<=a||0>a)return null;var c=0;60<=a&&(a/=60,c=2);2<=a&&c++;return b?window.JOT\_siteRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a)):window.JOT\_userRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a))}; })()   var breadcrumbs = \[{"path":"/home","deleted":false,"title":"About me","dir":"ltr"},{"path":"/home/bio","deleted":false,"title":"Brief Bio","dir":"ltr"}\]; var JOT\_clearDotPath = 'http://www.gstatic.com/sites/p/fb83f7/system/app/images/cleardot.gif'; var JOT\_userRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\]; var webspace = {"gvizGstaticVersion":"current","enableAnalytics":false,"pageSharingId":"jotspot\_page","codeembeds":{"outerIframeSrc":"https://www.gstatic.com/jotspot/embeds/code/0f08d42392f2000e7e3f3daf5b427a43/outer\_iframe.html","innerIframeSrc":"https://1030727462-jotspot-embeds.googleusercontent.com/code/8d87fa64604b2a11fae2ed06104c58d3/inner\_iframe.html"},"enableUniversalAnalytics":false,"sharingPolicy":"OPENED\_WITH\_INDICATOR","siteTitle":"John Henry Thompson - Invent Your Future","jot2atari":{"eligibility":"ineligible"},"onepickUrl":"https://docs.google.com/picker","adsensePublisherId":null,"features":{"moreMobileStyleImprovements":null,"subscriptionDataMigrationInProgress":false,"plusBadge":false},"isPublic":true,"newSitesBaseUrl":"https://sites.google.com","isConsumer":false,"serverFlags":{"jot2AtariLearnMoreUrl":"https://support.google.com/sites/answer/7035197"},"domainAnalyticsAccountId":"","plusPageId":"","signInUrl":"https://accounts.google.com/AccountChooser?continue\\u003dhttp://sites.google.com/a/johnhenrythompson.com/jht/home/bio\\u0026service\\u003djotspot","analyticsAccountId":"","scottyUrl":"/\_/upload","homePath":"/","siteNoticeUrlEnabled":null,"plusPageUrl":"","adsensePromoClickedOrSiteIneligible":true,"csiReportUri":"http://csi.gstatic.com/csi","sharingId":"jotspot","termsUrl":"//www.google.com/intl/en/policies/terms/","gvizVersion":1,"editorResources":{"sitelayout":\["http://www.gstatic.com/sites/p/fb83f7/system/app/css/sitelayouteditor.css"\],"text":\["http://www.gstatic.com/sites/p/fb83f7/system/js/codemirror.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codemirror\_css.css","http://www.gstatic.com/sites/p/fb83f7/system/js/trog\_edit\_\_en.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/trogedit.css","/\_/rsrc/1570087315000/system/app/css/editor.css","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codeeditor.css","/\_/rsrc/1570087315000/system/app/css/camelot/editor-jfk.css"\]},"sharingUrlPrefix":"/\_/sharing","isAdsenseEnabled":true,"domain":"johnhenrythompson.com","baseUri":"","name":"jht","siteTemplateId":false,"siteNoticeRevision":null,"siteNoticeUrlAddress":null,"siteNoticeMessage":null,"page":{"isRtlLocale":false,"canDeleteWebspace":null,"isPageDraft":null,"parentPath":"/home","parentWuid":"wuid:gx:7d1cf15857900a2e","siteLocale":"en","timeZone":"America/Los\_Angeles","type":"text","title":"Brief Bio","locale":"en","wuid":"wuid:gx:39264ea0dcf7c6c","revision":53,"path":"/home/bio","isSiteRtlLocale":false,"pageInheritsPermissions":null,"name":"bio","canChangePath":true,"state":"","properties":{},"bidiEnabled":false,"currentTemplate":{"path":"/system/app/pagetemplates/text","title":"Web Page"}},"canPublishScriptToAnyone":true,"user":{"keyboardShortcuts":true,"sessionIndex":"","onePickToken":"","guest\_":true,"displayNameOrEmail":"guest","userName":"guest","uid":"","renderMobile":false,"domain":"","namespace":"","hasWriteAccess":false,"namespaceUser":false,"primaryEmail":"guest","hasAdminAccess":false},"gadgets":{"baseUri":"/system/app/pages/gadgets"}}; webspace.page.breadcrumbs = breadcrumbs; var JOT\_siteRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\];   window.jstiming.load.tick('scl');            Brief Bio - John Henry Thompson - Invent Your Future   window.jstiming.load.tick('cl'); 

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
    

[About me](../home.html)‎ > ‎

### Brief Bio

Bio For Present Century - 2010's:
=================================

I am developing [DICE: ](goog_705698171.html)
=============================================

> [a platform for exploring art, learning, and computer science.](../3-dice.html)
> ===============================================================================

I write [iPhone apps for EP Visual Design](../iphone-apps.html).
================================================================

I teach computer science and creative learning:
===============================================

[• Youth Workshop: D.I.Y. Photoshop at Scribe Video Feb 2017.](http://www.scribe.org/events/youth-workshop-diy-photoshop)

[• Play to Learn Workshop at Scribe Video in 2014.](../the-art-of-learning/play-to-learn.html)
==============================================================================================

[• Play to Learn Workshop at Scribe Video in July 2013. ](../the-art-of-learning/play-to-learn/2013-edition.html)
=================================================================================================================

• [Mobile application workshop in Jamaica 2012](http://jamaica-gleaner.com/gleaner/20120504/lead/lead9.html). 
==============================================================================================================

> A video [interview about the workshop](http://www.youtube.com/watch?v=Qu99hZhyhdc). 
> ====================================================================================
> 
> My vision [statement for the workshop](http://www.j4u2.com/breadfruit/workshop/vision-page/).
> =============================================================================================

Awards:
=======

• [Patent 8,700,804: Methods and apparatus for managing mobile content.](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=8700804.PN.&OS=PN/8700804&RS=PN/8700804)

• The Institute of Jamaica 2012 Musgrave award for Science.  

Bio For Past Century - 1990's:
==============================

My most significant contribution to the computer industry to date is the invention of the [Macromedia](http://www.macromedia.com/) [Director Lingo scripting language](http://www.macromedia.com/software/director/)
====================================================================================================================================================================================================================

I've also helped nurture a generation of multimedia professionals as a graduate level college professor at [New York University](http://itp.nyu.edu/), and author of the "[Macromedia Director Lingo Workshop](http://www.j4u2.com/jht/lingoworkshop.html)" book.   
  
I studied studio art at the New York Student Art League and the Boston Museum School. I earned my degree in Computer Science and Visual Studies from the [Massachusetts Institute of Technology](http://web.mit.edu/) in the 1983. After graduating, I continued at MIT as a technical instructor and developed an early color pre-press design system for the Visible Language Workshop, now part of the [MIT Media Lab](http://www.media.mit.edu/). Following this I was a project lead at Lucas Films on the EditDriod project, an early nonlinear editing system.

  

I have created art using 3D graphics, video disc, and real-time video processing. Some of my interactive art installations have been exhibited internationally.

  

My interest in both art and technology lead me to [Macromedia](http://www.macromedia.com/) (formerly MacroMind). From 1987, at Macromedia I developed a number of products, including: The VideoWorks Accelerator, VideoWorks II, MediaMaker, Action, and Macromedia Director. I created for a number of core technologies including the Lingo Scripting engine. Until I left the company in 2001, I held the position of Chief Scientist, the highest engineering position at Macromedia.

  

While creating multimedia tools, I was also a professor at New York University's graduate [Interactive Telecommunications Program (ITP)](http://itp.nyu.edu/). From 1988 to 1997 I developed and taught five different courses covering various aspects of interactive design and programming. Drawing upon experience teaching my Lingo scripting language, I wrote and published the book "[Macromedia Director Lingo Workshop](http://www.j4u2.com/jht/lingoworkshop.html)." The book is a popular guide to the Lingo programing language and was published in two editions and translated to Japanese, German, and Italian.  
  

  

  

  

  

[![](../_/rsrc/1481644120915/home/bio/me-color-rainbow-height=180&width=320.png)](https://www.youtube.com/watch?feature=player_embedded&v=Z6z09QfPaW0)

  
[![](../_/rsrc/1481644120915/home/bio/ash-6mo-head-cu-height=320&width=272.png)](http://www.youtube.com/watch?v=plPbLxta760)  

[![](../_/rsrc/1481644120915/home/bio/me-height=242&width=320.jpg)](http://www.j4u2.com/jht/art1981.html)

  

  

[![](../_/rsrc/1481644120915/home/bio/d1boxfront-height=400&width=352.jpg)](http://www.adobe.com/products/director/)

  

[![](../_/rsrc/1481644120915/home/bio/lws_2eng_full-height=400&width=320.jpg)](http://www.johnhenrythompson.com/home/bio/lws_2eng_full.jpg?attredirects=0)

  

[![](../_/rsrc/1481644120915/home/bio/lws_2ger_full-height=400&width=275.jpg)](http://www.johnhenrythompson.com/home/bio/lws_2ger_full.jpg?attredirects=0)

  

  

  

[![](../_/rsrc/1481644120915/home/bio/lws_1jap_full-height=400&width=313.jpg)](http://www.johnhenrythompson.com/home/bio/lws_1jap_full.jpg?attredirects=0)

  

[![](../_/rsrc/1481644120915/home/bio/lws_1itl_full-height=400&width=284.jpg)](http://www.johnhenrythompson.com/home/bio/lws_1itl_full.jpg?attredirects=0)

  

  

  

  

Comments

[Sign in](https://accounts.google.com/ServiceLogin?continue=http://sites.google.com/a/johnhenrythompson.com/jht/home/bio&service=jotspot)|[Recent Site Activity](../system/app/pages/recentChanges.html)|[Report Abuse](http://sites.google.com/a/johnhenrythompson.com/jht/system/app/pages/reportAbuse)|[Print Page](javascript:;)|Powered By **[Google Sites](http://sites.google.com/site)**

window.jstiming.load.tick('sjl'); window.jstiming.load.tick('jl'); sites.Searchbox.initialize( 'sites-searchbox-search-button', {"object":\[\]}\['object'\], 'search-site', {"label":"Configure search options...","url":"/system/app/pages/admin/settings"}); gsites.HoverPopupMenu.createSiteDropdownMenus('sites-header-nav-dropdown', false); JOT\_setupNav("2bd", "Navigation", true); JOT\_addListener('titleChange', 'JOT\_NAVIGATION\_titleChange', 'COMP\_2bd'); new sites.CommentPane('//docs.google.com/comments/d/AAHRpnXtzWv6Cgc7jKlWmQm5FEwOxERPwXgHKNb-AQ-uZfxScuEeW9yttyK\_TauDQDsNbMHJXCNu67Dso8Aed\_nDVR1-B6jRVoimBJCxTCXl11xgq8NuPd0aX8EIYw2UfzyySTzYNHRu7/api/js?anon=true', false, false); setTimeout(function() { var fingerprint = gsites.date.TimeZone.getFingerprint(\[1109635200000, 1128902400000, 1130657000000, 1143333000000, 1143806400000, 1145000000000, 1146380000000, 1152489600000, 1159800000000, 1159500000000, 1162095000000, 1162075000000, 1162105500000\]); gsites.Xhr.send('http://www.johnhenrythompson.com/\_/tz', null, null, 'GET', null, null, { afjstz: fingerprint }); }, 500); window.onload = function() { if (false) { JOT\_setMobilePreview(); } var loadTimer = window.jstiming.load; loadTimer.tick("ol"); loadTimer\["name"\] = "load," + webspace.page.type + ",user\_page"; window.jstiming.report(loadTimer, {}, 'http://csi.gstatic.com/csi'); } JOT\_insertAnalyticsCode(false, false); var maestroRunner = new gsites.pages.view.SitesMaestroRunner( webspace, "en"); maestroRunner.initListeners(); maestroRunner.installEditRender(); //<!\[CDATA\[ // Decorate any fastUI buttons on the page with a class of 'goog-button'. if (webspace.user.hasWriteAccess) { JOT\_decorateButtons(); } // Fires delayed events. (function() { JOT\_fullyLoaded = true; var delayedEvents = JOT\_delayedEvents; for (var x = 0; x < delayedEvents.length; x++) { var event = delayedEvents\[x\]; JOT\_postEvent(event.eventName, event.eventSrc, event.payload); } JOT\_delayedEvents = null; JOT\_postEvent('pageLoaded'); })(); //\]\]> JOT\_postEvent('decorateGvizCharts'); JOT\_setupPostRenderingManager(); JOT\_postEvent('renderPlus', null, 'sites-chrome-main'); sites.codeembed.init();

window.jstiming.load.tick('render'); JOT\_postEvent('usercontentrendered', this);