  /\* Copyright 2008 Google. \*/ (function() { (function(){function e(g){this.t={};this.tick=function(h,k,f){this.t\[h\]=\[void 0!=f?f:(new Date).getTime(),k\];if(void 0==f)try{window.console.timeStamp("CSI/"+h)}catch(m){}};this.tick("start",null,g)}var a;if(window.performance)var d=(a=window.performance.timing)&&a.responseStart;var l=0<d?new e(d):new e;window.jstiming={Timer:e,load:l};if(a){var b=a.navigationStart;0<b&&d>=b&&(window.jstiming.srt=d-b)}if(a){var c=window.jstiming.load;0<b&&d>=b&&(c.tick("\_wtsrt",void 0,b),c.tick("wtsrt\_","\_wtsrt", d),c.tick("tbsd\_","wtsrt\_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),c&&0<b&&(c.tick("\_tbnd",void 0,window.chrome.csi().startE),c.tick("tbnd\_","\_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,c&&0<b&&(c.tick("\_tbnd",void 0,window.external.startE),c.tick("tbnd\_","\_tbnd",b))),a&&(window.jstiming.pt=a)}catch(g){}})(); })()    /\* Copyright 2008 Google. \*/ (function() { function d(a){return document.getElementById(a)}window.byId=d;function g(a){return a.replace(/^\\s+|\\s+$/g,"")}window.trim=g;var h=\[\],k=0;window.JOT\_addListener=function(a,b,c){var f=new String(k++);a={eventName:a,handler:b,compId:c,key:f};h.push(a);return f};window.JOT\_removeListenerByKey=function(a){for(var b=0;b<h.length;b++)if(h\[b\].key==a){h.splice(b,1);break}};window.JOT\_removeAllListenersForName=function(a){for(var b=0;b<h.length;b++)h\[b\].eventName==a&&h.splice(b,1)}; window.JOT\_postEvent=function(a,b,c){var f={eventName:a,eventSrc:b||{},payload:c||{}};if(window.JOT\_fullyLoaded)for(b=h.length,c=0;c<b&&c<h.length;c++){var e=h\[c\];e&&e.eventName==a&&(f.listenerCompId=e.compId||"",(e="function"==typeof e.handler?e.handler:window\[e.handler\])&&e(f))}else window.JOT\_delayedEvents.push({eventName:a,eventSrc:b,payload:c})};window.JOT\_delayedEvents=\[\];window.JOT\_fullyLoaded=!1; window.JOT\_formatRelativeToNow=function(a,b){a=((new Date).getTime()-a)/6E4;if(1440<=a||0>a)return null;var c=0;60<=a&&(a/=60,c=2);2<=a&&c++;return b?window.JOT\_siteRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a)):window.JOT\_userRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a))}; })()   var breadcrumbs = \[{"path":"/yoga","deleted":false,"title":"Yoga","dir":"ltr"},{"path":"/yoga/patanjani","deleted":false,"title":"Patanjali\\u0027s Yoga Sutras - A Comparison","dir":"ltr"}\]; var JOT\_clearDotPath = 'http://www.gstatic.com/sites/p/fb83f7/system/app/images/cleardot.gif'; var JOT\_userRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\]; var webspace = {"gvizGstaticVersion":"current","enableAnalytics":false,"pageSharingId":"jotspot\_page","codeembeds":{"outerIframeSrc":"https://www.gstatic.com/jotspot/embeds/code/0f08d42392f2000e7e3f3daf5b427a43/outer\_iframe.html","innerIframeSrc":"https://125577430-jotspot-embeds.googleusercontent.com/code/8d87fa64604b2a11fae2ed06104c58d3/inner\_iframe.html"},"enableUniversalAnalytics":false,"sharingPolicy":"OPENED\_WITH\_INDICATOR","siteTitle":"John Henry Thompson - Invent Your Future","jot2atari":{"eligibility":"ineligible"},"onepickUrl":"https://docs.google.com/picker","adsensePublisherId":null,"features":{"moreMobileStyleImprovements":null,"subscriptionDataMigrationInProgress":false,"plusBadge":false},"isPublic":true,"newSitesBaseUrl":"https://sites.google.com","isConsumer":false,"serverFlags":{"jot2AtariLearnMoreUrl":"https://support.google.com/sites/answer/7035197"},"domainAnalyticsAccountId":"","plusPageId":"","signInUrl":"https://accounts.google.com/AccountChooser?continue\\u003dhttp://sites.google.com/a/johnhenrythompson.com/jht/yoga/patanjani\\u0026service\\u003djotspot","analyticsAccountId":"","scottyUrl":"/\_/upload","homePath":"/","siteNoticeUrlEnabled":null,"plusPageUrl":"","adsensePromoClickedOrSiteIneligible":true,"csiReportUri":"http://csi.gstatic.com/csi","sharingId":"jotspot","termsUrl":"//www.google.com/intl/en/policies/terms/","gvizVersion":1,"editorResources":{"sitelayout":\["http://www.gstatic.com/sites/p/fb83f7/system/app/css/sitelayouteditor.css"\],"text":\["http://www.gstatic.com/sites/p/fb83f7/system/js/codemirror.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codemirror\_css.css","http://www.gstatic.com/sites/p/fb83f7/system/js/trog\_edit\_\_en.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/trogedit.css","/\_/rsrc/1570087315000/system/app/css/editor.css","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codeeditor.css","/\_/rsrc/1570087315000/system/app/css/camelot/editor-jfk.css"\]},"sharingUrlPrefix":"/\_/sharing","isAdsenseEnabled":true,"domain":"johnhenrythompson.com","baseUri":"","name":"jht","siteTemplateId":false,"siteNoticeRevision":null,"siteNoticeUrlAddress":null,"siteNoticeMessage":null,"page":{"isRtlLocale":false,"canDeleteWebspace":null,"isPageDraft":null,"parentPath":"/yoga","parentWuid":"wuid:gx:6f339a2a60326ffc","siteLocale":"en","timeZone":"America/Los\_Angeles","type":"text","title":"Patanjali\\u0027s Yoga Sutras - A Comparison","locale":"en","wuid":"wuid:gx:5372bdddfbdbfbc1","revision":67,"path":"/yoga/patanjani","isSiteRtlLocale":false,"pageInheritsPermissions":null,"name":"patanjani","canChangePath":true,"state":"","properties":{},"bidiEnabled":false,"currentTemplate":{"path":"/system/app/pagetemplates/text","title":"Web Page"}},"canPublishScriptToAnyone":true,"user":{"keyboardShortcuts":true,"sessionIndex":"","onePickToken":"","guest\_":true,"displayNameOrEmail":"guest","userName":"guest","uid":"","renderMobile":false,"domain":"","namespace":"","hasWriteAccess":false,"namespaceUser":false,"primaryEmail":"guest","hasAdminAccess":false},"gadgets":{"baseUri":"/system/app/pages/gadgets"}}; webspace.page.breadcrumbs = breadcrumbs; var JOT\_siteRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\];   window.jstiming.load.tick('scl');            Patanjali's Yoga Sutras - A Comparison - John Henry Thompson - Invent Your Future   window.jstiming.load.tick('cl'); 

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
    

[Yoga](../yoga.html)‎ > ‎

### Patanjali's Yoga Sutras - A Comparison

After taking yoga classes for a while someone asked me what is "Raja Yoga." I wasn't sure but I thought it had something to do with royalty or nobility - like the four noble truths of Buddhism. I wasn't happy with the vagueness of my answer and decided to research.  
  
Raja Yoga is defined in the ancient text Patanjani's Yoga Sutras. Written circa 5,000 B.C. - 300 A.D, the Sutras are organized into four books:  
  
[Book 1](patanjani/book-1.html) [Book 2](patanjani/book-2.html) [Book 3](patanjani/book-3.html) [Book 4](patanjani/book-4.html)  
  
The Yoga Sutras have been translated and commented on by many authors over many centuries. Here I compare a few of these translations.  
  

[Click to read the first sutra](patanjani/book-1/11.html)  
  

* * *

James H. Woods, a Havard professor of philosophy in the early 1900's gives a very detailed translation of Patanjani's Yoga Sutras along with early commentary and explanations by other authors. His entire work is available online, thanks to google digital book. Thank you google for providing such flexible online access to public domain content.  
  
[Title page from James H. Wood's translation (long titles popular back then I guess):](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR3&ci=20%2C54%2C931%2C809&source=bookclip)  

  
THE  
YOGA SYSTEM OF PATANJALI  
Or the Ancient Hindu Doctrine of Concentration of Mind  
EMBRACING  
THE MNEMONIC RULES, CALLED YOGA SUTRAS, OF PATANJALI  
AND  
THE COMMENT, CALLED YOGA-BHASHYA ATTRIBUTED TO VEDA-VYASA  
AND  
THE EXPLANATION CALLED TATTVA VAICARADl OF VACHASPATI-MICBA  
TRANSLATED FROM THE ORIGINAL SANSKRIT  
BY  
JAMES HAUGHTON WOODS  
PROFESSOR OF PHILOSOPHY IN HARVARD UNIVERSITY  
  

* * *

  
References to translations and interpretation of the Yoga Sutras:  
  
[\[RS\] Website ashtangayoga.info by Arjuna, Dr. Ronald Steiner](http://www.ashtangayoga.info/philosophy/yoga-sutra-patanjali/)  
  
[\[JW\] The Yoga-System of Patanjali, By Patañjali, Vyāsa, Vācaspatimiśra. Translated by James H. Woods](http://books.google.com/books?id=YzFImjtOxUwC)  
  
[\[SS\] The Yoga Sutras of Patanjali: Commentary on the Raja Yoga Sutras by Sri Swami Satchidananda](http://www.amazon.com/Yoga-Sutras-Patanjali-Commentary-Satchidananda/dp/0932040381)  
  
[\[TD\] The Heart of Yoga: Developing a Personal Practice by T. K. V. Desikachar](http://www.amazon.com/Heart-Yoga-Developing-Personal-Practice/dp/089281764X/ref=sr_1_5?ie=UTF8&qid=1326228195&sr=8-5)  
  
[\[EB\] The Yoga Sutras of Patañjali: A New Edition, Translation, and Commentary by Edwin Francis Bryant](http://www.amazon.com/Yoga-Sutras-Patanjali-Translation-Commentary/dp/0865477361/ref=sr_1_1?ie=UTF8&s=books&qid=1250508322&sr=1-1)  
  

* * *

  
  

* * *

  

My motivation for this study is related to what Patanjani writes in Book 1 sentence 39. He gives suggestions to eliminate our misconceptions, including:  
  
**यथाभिमतध्यानाद्वा ॥३९॥**  
yathā-abhimata-dhyānād-vā ||39||  
  
(**यथ**, yatha) = how  
(**आभिमत**, ābhimata) = love  
(**ध्यानाद्**, dhyānād) = meditation  
(**वा**, vā) = or  
  
[\[RS\] 1.39 Or through contemplation (dhyana) of love.](http://www.ashtangayoga.info/philosophy/yoga-sutra-patanjali/chapter-1/item/yatha-abhimata-dhyanad-va-39)  
  
[\[JW\] 1.39 Or \[the mind stuff reaches the stable state\] by contemplation upon any such an object as is desired.](http://books.google.com/books?id=YzFImjtOxUwC&pg=PA77&ci=150%2C314%2C699%2C54&source=bookclip) [\[Image\]](http://www.johnhenrythompson.com/yoga/patanjani/Book1-39.png?attredirects=0)  
  
[\[SS\]](http://www.amazon.com/Yoga-Sutras-Patanjali-Commentary-Satchidananda/dp/0932040381) 1.39 Or by meditating on anything one chooses that is elevating. \[p62\]  
  
[\[TD\]](http://www.amazon.com/Heart-Yoga-Developing-Personal-Practice/dp/089281764X/ref=sr_1_5?ie=UTF8&qid=1326228195&sr=8-5) 1.39 Any inquiry of interest can calm the mind. \[p161\]  
  
[\[EB\]](http://www.amazon.com/Yoga-Sutras-Patanjali-Translation-Commentary/dp/0865477361/ref=sr_1_1?ie=UTF8&s=books&qid=1250508322&sr=1-1) 1.39 Or \[steadiness of mind is attained\] from meditation upon anything of one's inclination. \[p139\]  
  

[![](../_/rsrc/1357256041325/yoga/patanjani/eyes-closed-bound2-height=400&width=275.jpg)](http://www.johnhenrythompson.com/yoga/patanjani/eyes-closed-bound2.jpg?attredirects=0)

  

Subpages (4): [Book 1](patanjani/book-1.html) [Book 2](patanjani/book-2.html) [Book 3](patanjani/book-3.html) [Book 4](patanjani/book-4.html)

Comments

[Sign in](https://accounts.google.com/ServiceLogin?continue=http://sites.google.com/a/johnhenrythompson.com/jht/yoga/patanjani&service=jotspot)|[Recent Site Activity](../system/app/pages/recentChanges.html)|[Report Abuse](http://sites.google.com/a/johnhenrythompson.com/jht/system/app/pages/reportAbuse)|[Print Page](javascript:;)|Powered By **[Google Sites](http://sites.google.com/site)**

window.jstiming.load.tick('sjl'); window.jstiming.load.tick('jl'); sites.Searchbox.initialize( 'sites-searchbox-search-button', {"object":\[\]}\['object'\], 'search-site', {"label":"Configure search options...","url":"/system/app/pages/admin/settings"}); gsites.HoverPopupMenu.createSiteDropdownMenus('sites-header-nav-dropdown', false); JOT\_setupNav("2bd", "Navigation", true); JOT\_addListener('titleChange', 'JOT\_NAVIGATION\_titleChange', 'COMP\_2bd'); new sites.CommentPane('//docs.google.com/comments/d/AAHRpnXtRMj1XgBLQa4Y22KDIypZzMBseQwT3ox3jtLpaJLSiQD-NUpiqmbvckQJtqZ7mSWSAA-RvbXyPpR177P4jA\_Hg5mQqVzHY8BwifbxHPpxy04Ae5s9ftTwjuQIegCWW0bsUzkAe/api/js?anon=true', false, false); setTimeout(function() { var fingerprint = gsites.date.TimeZone.getFingerprint(\[1109635200000, 1128902400000, 1130657000000, 1143333000000, 1143806400000, 1145000000000, 1146380000000, 1152489600000, 1159800000000, 1159500000000, 1162095000000, 1162075000000, 1162105500000\]); gsites.Xhr.send('http://www.johnhenrythompson.com/\_/tz', null, null, 'GET', null, null, { afjstz: fingerprint }); }, 500); window.onload = function() { if (false) { JOT\_setMobilePreview(); } var loadTimer = window.jstiming.load; loadTimer.tick("ol"); loadTimer\["name"\] = "load," + webspace.page.type + ",user\_page"; window.jstiming.report(loadTimer, {}, 'http://csi.gstatic.com/csi'); } JOT\_insertAnalyticsCode(false, false); var maestroRunner = new gsites.pages.view.SitesMaestroRunner( webspace, "en"); maestroRunner.initListeners(); maestroRunner.installEditRender(); //<!\[CDATA\[ // Decorate any fastUI buttons on the page with a class of 'goog-button'. if (webspace.user.hasWriteAccess) { JOT\_decorateButtons(); } // Fires delayed events. (function() { JOT\_fullyLoaded = true; var delayedEvents = JOT\_delayedEvents; for (var x = 0; x < delayedEvents.length; x++) { var event = delayedEvents\[x\]; JOT\_postEvent(event.eventName, event.eventSrc, event.payload); } JOT\_delayedEvents = null; JOT\_postEvent('pageLoaded'); })(); //\]\]> JOT\_postEvent('decorateGvizCharts'); JOT\_setupPostRenderingManager(); JOT\_postEvent('renderPlus', null, 'sites-chrome-main'); sites.codeembed.init();

window.jstiming.load.tick('render'); JOT\_postEvent('usercontentrendered', this);