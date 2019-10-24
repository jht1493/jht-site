  /\* Copyright 2008 Google. \*/ (function() { (function(){function e(g){this.t={};this.tick=function(h,k,f){this.t\[h\]=\[void 0!=f?f:(new Date).getTime(),k\];if(void 0==f)try{window.console.timeStamp("CSI/"+h)}catch(m){}};this.tick("start",null,g)}var a;if(window.performance)var d=(a=window.performance.timing)&&a.responseStart;var l=0<d?new e(d):new e;window.jstiming={Timer:e,load:l};if(a){var b=a.navigationStart;0<b&&d>=b&&(window.jstiming.srt=d-b)}if(a){var c=window.jstiming.load;0<b&&d>=b&&(c.tick("\_wtsrt",void 0,b),c.tick("wtsrt\_","\_wtsrt", d),c.tick("tbsd\_","wtsrt\_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),c&&0<b&&(c.tick("\_tbnd",void 0,window.chrome.csi().startE),c.tick("tbnd\_","\_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,c&&0<b&&(c.tick("\_tbnd",void 0,window.external.startE),c.tick("tbnd\_","\_tbnd",b))),a&&(window.jstiming.pt=a)}catch(g){}})(); })()    /\* Copyright 2008 Google. \*/ (function() { function d(a){return document.getElementById(a)}window.byId=d;function g(a){return a.replace(/^\\s+|\\s+$/g,"")}window.trim=g;var h=\[\],k=0;window.JOT\_addListener=function(a,b,c){var f=new String(k++);a={eventName:a,handler:b,compId:c,key:f};h.push(a);return f};window.JOT\_removeListenerByKey=function(a){for(var b=0;b<h.length;b++)if(h\[b\].key==a){h.splice(b,1);break}};window.JOT\_removeAllListenersForName=function(a){for(var b=0;b<h.length;b++)h\[b\].eventName==a&&h.splice(b,1)}; window.JOT\_postEvent=function(a,b,c){var f={eventName:a,eventSrc:b||{},payload:c||{}};if(window.JOT\_fullyLoaded)for(b=h.length,c=0;c<b&&c<h.length;c++){var e=h\[c\];e&&e.eventName==a&&(f.listenerCompId=e.compId||"",(e="function"==typeof e.handler?e.handler:window\[e.handler\])&&e(f))}else window.JOT\_delayedEvents.push({eventName:a,eventSrc:b,payload:c})};window.JOT\_delayedEvents=\[\];window.JOT\_fullyLoaded=!1; window.JOT\_formatRelativeToNow=function(a,b){a=((new Date).getTime()-a)/6E4;if(1440<=a||0>a)return null;var c=0;60<=a&&(a/=60,c=2);2<=a&&c++;return b?window.JOT\_siteRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a)):window.JOT\_userRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a))}; })()    var breadcrumbs = \[{"path":"/the-art-of-learning","deleted":false,"title":"2. The Art of Learning","dir":"ltr"},{"path":"/the-art-of-learning/learning-creative-learning","deleted":false,"title":"Learning Creative Learning","dir":"ltr"},{"path":"/the-art-of-learning/learning-creative-learning/session6","deleted":false,"title":"06 Session","dir":"ltr"}\]; var JOT\_clearDotPath = 'http://www.gstatic.com/sites/p/fb83f7/system/app/images/cleardot.gif'; var JOT\_userRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\]; var webspace = {"gvizGstaticVersion":"current","enableAnalytics":false,"pageSharingId":"jotspot\_page","codeembeds":{"outerIframeSrc":"https://www.gstatic.com/jotspot/embeds/code/0f08d42392f2000e7e3f3daf5b427a43/outer\_iframe.html","innerIframeSrc":"https://681691580-jotspot-embeds.googleusercontent.com/code/8d87fa64604b2a11fae2ed06104c58d3/inner\_iframe.html"},"enableUniversalAnalytics":false,"sharingPolicy":"OPENED\_WITH\_INDICATOR","siteTitle":"John Henry Thompson - Invent Your Future","jot2atari":{"eligibility":"ineligible"},"onepickUrl":"https://docs.google.com/picker","adsensePublisherId":null,"features":{"moreMobileStyleImprovements":null,"subscriptionDataMigrationInProgress":false,"plusBadge":false},"isPublic":true,"newSitesBaseUrl":"https://sites.google.com","isConsumer":false,"serverFlags":{"jot2AtariLearnMoreUrl":"https://support.google.com/sites/answer/7035197"},"domainAnalyticsAccountId":"","plusPageId":"","signInUrl":"https://accounts.google.com/AccountChooser?continue\\u003dhttp://sites.google.com/a/johnhenrythompson.com/jht/the-art-of-learning/learning-creative-learning/session6\\u0026service\\u003djotspot","analyticsAccountId":"","scottyUrl":"/\_/upload","homePath":"/","siteNoticeUrlEnabled":null,"plusPageUrl":"","adsensePromoClickedOrSiteIneligible":true,"csiReportUri":"http://csi.gstatic.com/csi","sharingId":"jotspot","termsUrl":"//www.google.com/intl/en/policies/terms/","gvizVersion":1,"editorResources":{"sitelayout":\["http://www.gstatic.com/sites/p/fb83f7/system/app/css/sitelayouteditor.css"\],"text":\["http://www.gstatic.com/sites/p/fb83f7/system/js/codemirror.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codemirror\_css.css","http://www.gstatic.com/sites/p/fb83f7/system/js/trog\_edit\_\_en.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/trogedit.css","/\_/rsrc/1570087315000/system/app/css/editor.css","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codeeditor.css","/\_/rsrc/1570087315000/system/app/css/camelot/editor-jfk.css"\]},"sharingUrlPrefix":"/\_/sharing","isAdsenseEnabled":true,"domain":"johnhenrythompson.com","baseUri":"","name":"jht","siteTemplateId":false,"siteNoticeRevision":null,"siteNoticeUrlAddress":null,"siteNoticeMessage":null,"page":{"isRtlLocale":false,"canDeleteWebspace":null,"isPageDraft":null,"parentPath":"/the-art-of-learning/learning-creative-learning","parentWuid":"wuid:gx:2ec267acef809600","siteLocale":"en","timeZone":"America/Los\_Angeles","type":"announcements","title":"06 Session","locale":"en","wuid":"wuid:gx:258a411805e1a983","revision":6,"path":"/the-art-of-learning/learning-creative-learning/session6","isSiteRtlLocale":false,"pageInheritsPermissions":null,"name":"session6","canChangePath":true,"state":"","properties":{},"bidiEnabled":false,"currentTemplate":{"path":"/system/app/pagetemplates/announcements","title":"Announcements"}},"canPublishScriptToAnyone":true,"user":{"keyboardShortcuts":true,"sessionIndex":"","onePickToken":"","guest\_":true,"displayNameOrEmail":"guest","userName":"guest","uid":"","renderMobile":false,"domain":"","namespace":"","hasWriteAccess":false,"namespaceUser":false,"primaryEmail":"guest","hasAdminAccess":false},"gadgets":{"baseUri":"/system/app/pages/gadgets"}}; webspace.page.breadcrumbs = breadcrumbs; var JOT\_siteRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\];   window.jstiming.load.tick('scl');            06 Session - John Henry Thompson - Invent Your Future   window.jstiming.load.tick('cl'); 

[![John Henry Thompson - Invent Your Future](../../_/rsrc/1329567069254/config/customLogo.gif-revision=6.png)](../../index.html)

[John Henry Thompson - Invent Your Future](../../index.html)
------------------------------------------------------------

Search this site

*   [About me](../../home.html)
    
*   [0\. Reflections](../../0-refections-on-learning.html)
    
*   [1\. Learn to Code](../../learning-to-program.html)
    
*   [2\. The Art of Learning](../../the-art-of-learning.html)
    
*   [3\. DICE](../../3-dice.html)
    
*   [4\. History](../../4-history.html)
    
*   [5\. Respect](../../heros.html)
    
*   [Artifacts](../../artifacts.html)
    
*   [Blog](../../z-blog-1.html)
    
*   [Garden](../../4-garden.html)
    
*   [iPhone Apps](../../iphone-apps.html)
    
*   [Notes](../../notes.html)
    
*   [Photos](../../family.html)
    
*   [Yoga](../../yoga.html)
    
*   [Sitemap](../../system/app/pages/sitemap/hierarchy.html)
    

[2\. The Art of Learning](../../the-art-of-learning.html)‎ > ‎[Learning Creative Learning](../learning-creative-learning.html)‎ > ‎

### 06 Session

//<!\[CDATA\[ function JOT\_insertRelDate(timestamp, absTimeStr, isSiteLocale, dir) { var relTimeStr = JOT\_formatRelativeToNow(timestamp, isSiteLocale); if (relTimeStr) { if (isSiteLocale) { document.write('<span timestamp="' + timestamp + '" issitelocale="' + isSiteLocale + '" title="' + absTimeStr + '" dir="' + dir + '">' + relTimeStr + '<' + '/span>'); } else { document.write('<span timestamp="' + timestamp + '" title="' + absTimeStr + '" dir="' + dir + '">' + relTimeStr + '<' + '/span>'); } } else { document.write(absTimeStr); } } //\]\]> posted Mar 17, 2013, 10:24 AM by John Henry Thompson   \[ updated May 4, 2013, 8:43 AM \]

March 18: Social Creativity (Session 6)

Panelists: Gerhard Fischer, Andres Monroy-Hernandez

Readings in Preparation for Session 6:

\* Gerhard Fischer (2011):[Understanding, Fostering, and Supporting Cultures of Participation](http://l3d.cs.colorado.edu/%7Egerhard/papers/2011/interactions-coverstory.pdf). Interactions.

\* Andrés Monroy-Hernández (2009): [Designing a Website for Creative Learning](http://journal.webscience.org/253/1/websci09_submission_161.pdf)

\* Andrés Monroy-Hernández (2012): Designing for Remixing (excerpts -- [Chapters 4 and 7](http://llk.media.mit.edu/courses/readings/Monroy-Hernandez-Ch4_And_Ch7.pdf))

Activity:

Remixing in Scratch

(1) Log on to Scratch. (If you’re new to Scratch, go to [New to Scratch?](https://docs.google.com/a/johnhenrythompson.com/document/d/1A8hndR0lc5RLOyWyK8vFJ8kdb90BR3G6_VJGAouCKjc/pub?embedded=true#id.tpndimeqiqcm))  

(2) Explore projects in the [Scratch website](http://scratch.mit.edu/) and find a project you would like to remix.

(3) Download the project and modify it in Scratch.

(4) Click the “Share” button to share your remix.

(5) In your project notes, explain what you changed and give credit.  
(6) Add your project to the [\[LCL\] Remix Gallery](http://scratch.mit.edu/galleries/view/194608).

(7) Reflect on the experience and share your thoughts with the [G+ community](https://plus.google.com/u/1/communities/106132864609383396284)

  

Fischer (2011) - good summary of state of the art:  
wikipedia - http://www.wikipedia.org  
KNOLA - http://knol.google.com  
iTunesU - http://www.apple.com/education/itunes-u  
YouTube - http://www.youtbue.com  
Encyclopedia of Life (EoL) - http://www.eol.org  
SketchUpand 3D Warehouse - http://sketchup.google.com/3dwarehouse  
Scratch - http://scratch.mit.edu  
Instructables - http://wwwinstructables.com  
PatientsLikeMe - http://www.patientslikeme.com  
Ushahidi - http://www.ushahidi.com (Kenyan)  
Stepgreen - http://www.stepgreen.org  
"A fundamental challenge for  
cultures of participation is to  
conceptualize, create, and evolve  
socio-technical environments that  
not only technically enable and  
support users’ participation, but  
also successfully encourage it."  
  
"Will the power of the  
collective human mind aided by  
technology improve further or are  
there major drawbacks to come  
(as Socrates argued would be the  
consequences of reading and writing)?"  
[Thoth challenge](../../heros/professor-john-fray/thoth.html) - every technology has positive / negative.  
  
• Meta-design  
• Social creativity,  
• Richer ecologies of participation  
  
  
  
  

Comments

[Sign in](https://accounts.google.com/ServiceLogin?continue=http://sites.google.com/a/johnhenrythompson.com/jht/the-art-of-learning/learning-creative-learning/session6&service=jotspot)|[Recent Site Activity](../../system/app/pages/recentChanges.html)|[Report Abuse](http://sites.google.com/a/johnhenrythompson.com/jht/system/app/pages/reportAbuse)|[Print Page](javascript:;)|Powered By **[Google Sites](http://sites.google.com/site)**

window.jstiming.load.tick('sjl'); JOT\_postEvent('moduleLoad'); window.jstiming.load.tick('jl'); sites.Searchbox.initialize( 'sites-searchbox-search-button', {"object":\[\]}\['object'\], 'search-site', {"label":"Configure search options...","url":"/system/app/pages/admin/settings"}); gsites.HoverPopupMenu.createSiteDropdownMenus('sites-header-nav-dropdown', false); JOT\_setupNav("2bd", "Navigation", true); JOT\_addListener('titleChange', 'JOT\_NAVIGATION\_titleChange', 'COMP\_2bd'); new sites.CommentPane('//docs.google.com/comments/d/AAHRpnXtRMj1XgBLQa4Y22KDIypZzMBseQwT3ox3jtLpaJLSiQMslNHS5nKzWcmA9E0DyMsxqeDEl0Af5ugLGByUQNennD8WuveiyTyTCPvJWX5dMS5g8SOf7DBjxdmw7mk5p-zbZmCLg/api/js?anon=true', false, false); setTimeout(function() { var fingerprint = gsites.date.TimeZone.getFingerprint(\[1109635200000, 1128902400000, 1130657000000, 1143333000000, 1143806400000, 1145000000000, 1146380000000, 1152489600000, 1159800000000, 1159500000000, 1162095000000, 1162075000000, 1162105500000\]); gsites.Xhr.send('http://www.johnhenrythompson.com/\_/tz', null, null, 'GET', null, null, { afjstz: fingerprint }); }, 500); window.onload = function() { if (false) { JOT\_setMobilePreview(); } var loadTimer = window.jstiming.load; loadTimer.tick("ol"); loadTimer\["name"\] = "load," + webspace.page.type + ",user\_page"; window.jstiming.report(loadTimer, {}, 'http://csi.gstatic.com/csi'); } JOT\_insertAnalyticsCode(false, false); var maestroRunner = new gsites.pages.view.SitesMaestroRunner( webspace, "en"); maestroRunner.initListeners(); maestroRunner.installEditRender(); //<!\[CDATA\[ // Decorate any fastUI buttons on the page with a class of 'goog-button'. if (webspace.user.hasWriteAccess) { JOT\_decorateButtons(); } // Fires delayed events. (function() { JOT\_fullyLoaded = true; var delayedEvents = JOT\_delayedEvents; for (var x = 0; x < delayedEvents.length; x++) { var event = delayedEvents\[x\]; JOT\_postEvent(event.eventName, event.eventSrc, event.payload); } JOT\_delayedEvents = null; JOT\_postEvent('pageLoaded'); })(); //\]\]> JOT\_postEvent('decorateGvizCharts'); JOT\_setupPostRenderingManager(); JOT\_postEvent('renderPlus', null, 'sites-chrome-main'); sites.codeembed.init();

window.jstiming.load.tick('render'); JOT\_postEvent('usercontentrendered', this);