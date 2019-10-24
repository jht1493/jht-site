  /\* Copyright 2008 Google. \*/ (function() { (function(){function e(g){this.t={};this.tick=function(h,k,f){this.t\[h\]=\[void 0!=f?f:(new Date).getTime(),k\];if(void 0==f)try{window.console.timeStamp("CSI/"+h)}catch(m){}};this.tick("start",null,g)}var a;if(window.performance)var d=(a=window.performance.timing)&&a.responseStart;var l=0<d?new e(d):new e;window.jstiming={Timer:e,load:l};if(a){var b=a.navigationStart;0<b&&d>=b&&(window.jstiming.srt=d-b)}if(a){var c=window.jstiming.load;0<b&&d>=b&&(c.tick("\_wtsrt",void 0,b),c.tick("wtsrt\_","\_wtsrt", d),c.tick("tbsd\_","wtsrt\_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),c&&0<b&&(c.tick("\_tbnd",void 0,window.chrome.csi().startE),c.tick("tbnd\_","\_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,c&&0<b&&(c.tick("\_tbnd",void 0,window.external.startE),c.tick("tbnd\_","\_tbnd",b))),a&&(window.jstiming.pt=a)}catch(g){}})(); })()    /\* Copyright 2008 Google. \*/ (function() { function d(a){return document.getElementById(a)}window.byId=d;function g(a){return a.replace(/^\\s+|\\s+$/g,"")}window.trim=g;var h=\[\],k=0;window.JOT\_addListener=function(a,b,c){var f=new String(k++);a={eventName:a,handler:b,compId:c,key:f};h.push(a);return f};window.JOT\_removeListenerByKey=function(a){for(var b=0;b<h.length;b++)if(h\[b\].key==a){h.splice(b,1);break}};window.JOT\_removeAllListenersForName=function(a){for(var b=0;b<h.length;b++)h\[b\].eventName==a&&h.splice(b,1)}; window.JOT\_postEvent=function(a,b,c){var f={eventName:a,eventSrc:b||{},payload:c||{}};if(window.JOT\_fullyLoaded)for(b=h.length,c=0;c<b&&c<h.length;c++){var e=h\[c\];e&&e.eventName==a&&(f.listenerCompId=e.compId||"",(e="function"==typeof e.handler?e.handler:window\[e.handler\])&&e(f))}else window.JOT\_delayedEvents.push({eventName:a,eventSrc:b,payload:c})};window.JOT\_delayedEvents=\[\];window.JOT\_fullyLoaded=!1; window.JOT\_formatRelativeToNow=function(a,b){a=((new Date).getTime()-a)/6E4;if(1440<=a||0>a)return null;var c=0;60<=a&&(a/=60,c=2);2<=a&&c++;return b?window.JOT\_siteRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a)):window.JOT\_userRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a))}; })()    var breadcrumbs = \[{"path":"/z-blog-1","deleted":false,"title":"Blog","dir":"ltr"}\]; var JOT\_clearDotPath = 'http://www.gstatic.com/sites/p/fb83f7/system/app/images/cleardot.gif'; var JOT\_userRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\]; var webspace = {"gvizGstaticVersion":"current","enableAnalytics":false,"pageSharingId":"jotspot\_page","codeembeds":{"outerIframeSrc":"https://www.gstatic.com/jotspot/embeds/code/0f08d42392f2000e7e3f3daf5b427a43/outer\_iframe.html","innerIframeSrc":"https://1515405618-jotspot-embeds.googleusercontent.com/code/8d87fa64604b2a11fae2ed06104c58d3/inner\_iframe.html"},"enableUniversalAnalytics":false,"sharingPolicy":"OPENED\_WITH\_INDICATOR","siteTitle":"John Henry Thompson - Invent Your Future","jot2atari":{"eligibility":"ineligible"},"onepickUrl":"https://docs.google.com/picker","adsensePublisherId":null,"features":{"moreMobileStyleImprovements":null,"subscriptionDataMigrationInProgress":false,"plusBadge":false},"isPublic":true,"newSitesBaseUrl":"https://sites.google.com","isConsumer":false,"serverFlags":{"jot2AtariLearnMoreUrl":"https://support.google.com/sites/answer/7035197"},"domainAnalyticsAccountId":"","plusPageId":"","signInUrl":"https://accounts.google.com/AccountChooser?continue\\u003dhttp://sites.google.com/a/johnhenrythompson.com/jht/z-blog-1\\u0026service\\u003djotspot","analyticsAccountId":"","scottyUrl":"/\_/upload","homePath":"/","siteNoticeUrlEnabled":null,"plusPageUrl":"","adsensePromoClickedOrSiteIneligible":true,"csiReportUri":"http://csi.gstatic.com/csi","sharingId":"jotspot","termsUrl":"//www.google.com/intl/en/policies/terms/","gvizVersion":1,"editorResources":{"sitelayout":\["http://www.gstatic.com/sites/p/fb83f7/system/app/css/sitelayouteditor.css"\],"text":\["http://www.gstatic.com/sites/p/fb83f7/system/js/codemirror.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codemirror\_css.css","http://www.gstatic.com/sites/p/fb83f7/system/js/trog\_edit\_\_en.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/trogedit.css","/\_/rsrc/1570087315000/system/app/css/editor.css","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codeeditor.css","/\_/rsrc/1570087315000/system/app/css/camelot/editor-jfk.css"\]},"sharingUrlPrefix":"/\_/sharing","isAdsenseEnabled":true,"domain":"johnhenrythompson.com","baseUri":"","name":"jht","siteTemplateId":false,"siteNoticeRevision":null,"siteNoticeUrlAddress":null,"siteNoticeMessage":null,"page":{"isRtlLocale":false,"canDeleteWebspace":null,"isPageDraft":null,"parentPath":null,"parentWuid":null,"siteLocale":"en","timeZone":"America/Los\_Angeles","type":"announcements","title":"Blog","locale":"en","wuid":"wuid:gx:5cada476210984ee","revision":8,"path":"/z-blog-1","isSiteRtlLocale":false,"pageInheritsPermissions":null,"name":"z-blog-1","canChangePath":true,"state":"","properties":{},"bidiEnabled":false,"currentTemplate":{"path":"/system/app/pagetemplates/announcements","title":"Announcements"}},"canPublishScriptToAnyone":true,"user":{"keyboardShortcuts":true,"sessionIndex":"","onePickToken":"","guest\_":true,"displayNameOrEmail":"guest","userName":"guest","uid":"","renderMobile":false,"domain":"","namespace":"","hasWriteAccess":false,"namespaceUser":false,"primaryEmail":"guest","hasAdminAccess":false},"gadgets":{"baseUri":"/system/app/pages/gadgets"}}; webspace.page.breadcrumbs = breadcrumbs; var JOT\_siteRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\];   window.jstiming.load.tick('scl');            Blog - John Henry Thompson - Invent Your Future    window.jstiming.load.tick('cl'); 

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
    
*   [Artifacts](artifacts.html)
    
*   Blog
    
*   [Garden](4-garden.html)
    
*   [iPhone Apps](iphone-apps.html)
    
*   [Notes](notes.html)
    
*   [Photos](family.html)
    
*   [Yoga](yoga.html)
    
*   [Sitemap](system/app/pages/sitemap/hierarchy.html)
    

### Blog

What's on the colored mind?

![](_/rsrc/1570087315000/system/app/images/icon_feed.gif) [ Subscribe to posts](http://www.johnhenrythompson.com/z-blog-1/posts.xml)

#### [Single Character Kill iPhone](z-blog-1/singlecharacterkilliphone.html)

//<!\[CDATA\[ function JOT\_insertRelDate(timestamp, absTimeStr, isSiteLocale, dir) { var relTimeStr = JOT\_formatRelativeToNow(timestamp, isSiteLocale); if (relTimeStr) { if (isSiteLocale) { document.write('<span timestamp="' + timestamp + '" issitelocale="' + isSiteLocale + '" title="' + absTimeStr + '" dir="' + dir + '">' + relTimeStr + '<' + '/span>'); } else { document.write('<span timestamp="' + timestamp + '" title="' + absTimeStr + '" dir="' + dir + '">' + relTimeStr + '<' + '/span>'); } } else { document.write(absTimeStr); } } //\]\]> posted Feb 19, 2018, 1:38 PM by John Henry Thompson   \[ updated Feb 19, 2018, 1:39 PM \]

  

[https://www.macrumors.com/2018/02/15/apple-telugu-bug-fix-minor-ios-update/](https://www.macrumors.com/2018/02/15/apple-telugu-bug-fix-minor-ios-update/)

  

Telugu character 

జ్ఞా

  

#### [D.I.Y. Photoshop @ Scribe 2018-03-03](z-blog-1/diyphotoshopscribe2018-03-03.html)

posted Jan 14, 2018, 5:50 PM by John Henry Thompson   \[ updated Feb 17, 2018, 8:43 AM by John Henry Thompson \]

(Event for two sessions. Link now retired. -JHT 2018-02-18)  

[http://www.scribe.org/events/youth-workshop-diy-photoshop](http://www.scribe.org/events/youth-workshop-diy-photoshop)

  

Youth Workshop: D.I.Y. Photoshop
================================

![](http://www.scribe.org/sites/default/files/styles/width300/public/inline_images/332673135839014203-jht-half-color-2.png?itok=x7HV-dLm)

4 Sessions – Saturdays, Starts Feb 3. 11:00 AM – 1:00PM

Location(s): 

Scribe Video Center  
4035 Walnut St.  
Philadelphia, PA 19104

Event Type: 

Workshop

Youth

  

  

  

Instructor: 

John Henry Thompson

Have you ever wondered how snapchat filters work? Or those Photo Booth effects? Photo manipulation is a huge part of our 21st century culture. And coding literacy is a core skill at this point. Don’t take for granted how simple it is to click a button to make a photo black & white or pixelated or colorized. In this workshop you will learn the basic mechanics behind photo editing in a “do it yourself” approach. 

**John Henry Thompson**’s coding language is the predecessor of Flash & JavaScript. Learn from the originator of photo filters. It is an exciting and accessible way to learn “do it yourself” photo editing.

Contact Email Address: 

[inquiry@scribe.org](mailto:inquiry@scribe.org)

Contact Phone Number: 

215-222-4201

Cost: 

$25, $10 Scribe Member’s Family

  

#### [DICE is coming!](z-blog-1/diceiscoming.html)

posted Dec 16, 2017, 12:04 PM by John Henry Thompson

DICE is coming! (sent last month - blogged for legacy)

  

Please join me at my presentation:  

  

[https://tisch.nyu.edu/itp/events/fall-2017/dice-with-john-henry-thompson](https://tisch.nyu.edu/itp/events/fall-2017/dice-with-john-henry-thompson)

The talk will be about DICE, a software platform in development to explore learning, art and science: [http://www.johnhenrythompson.com/3-dice](3-dice.html).

FRIDAY, NOV. 17, 2017. 1:00 PM — 2:30 PM

NYU-ITP, 4TH FLOOR

721 Broadway, New York, NY 10003

  

#### [DICE presentation at NYU-ITP](z-blog-1/dicepresentationatnyu-itp.html)

posted Nov 21, 2017, 8:37 AM by John Henry Thompson   \[ updated Dec 16, 2017, 12:08 PM \]

Thank you Shindy!

[http://www.johnhenrythompson.com/z-blog-1/diceiscoming](z-blog-1/diceiscoming.html)

  

[![](_/rsrc/1511282434170/z-blog-1/dicepresentationatnyu-itp/shindy-nyuitp-dice-2017-11-17.png)](http://www.johnhenrythompson.com/z-blog-1/dicepresentationatnyu-itp/shindy-nyuitp-dice-2017-11-17.png?attredirects=0)

  

[https://www.facebook.com/shindy.jo](https://www.facebook.com/shindy.jo)

What a fabulous collaboration with the inimitable, computer scientist, engineer and inventor John Henry Thompson at New York University's ITP Program at Tisch School of the Arts. SO exciting to learn about JT's newest invention - DICE:- an open source platform under development to enable the creation of interactive art. DICE will unlock the power of your devices and enable them to communicate with each other in ways limited only by your imagination. Come join the revolution! Collaborators wanted. 

Contact JHT at [github.com/jht1493.](https://github.com/jht1493.)  
Coincidentally, JT was the keynote speaker at a conference which I along with[Marilyn Nance](https://www.facebook.com/sistanance?fref=mentions),[Bathsheba Okwenje](https://www.facebook.com/bathsheba.okwenje?fref=mentions),[Sandra Aluoch Simbiri](https://www.facebook.com/atieno.aluochsimbiri?fref=mentions), Omowale Morgan,[Afua Brown](https://www.facebook.com/afuabrown?fref=mentions), Leticia and many others organized and hosted as students at ITP in 1999!!!

  

  

#### [Augmentation not replacement.](z-blog-1/augmentationnotreplacement.html)

posted Sep 26, 2017, 4:59 AM by John Henry Thompson

"the most effective way to solve problems was to augment human intelligence and develop ways of building collective intelligence"  

[https://en.wikipedia.org/wiki/Douglas\_Engelbart](https://en.wikipedia.org/wiki/Douglas_Engelbart)

  

  

  

#### [Relicensing React, Jest, Flow, and Immutable.js](z-blog-1/relicensingreactjestflowandimmutablejs.html)

posted Sep 25, 2017, 9:43 AM by John Henry Thompson

  

[https://code.facebook.com/posts/300798627056246/relicensing-react-jest-flow-and-immutable-js/](https://code.facebook.com/posts/300798627056246/relicensing-react-jest-flow-and-immutable-js/)

#### [JavaScript Books](z-blog-1/javascriptbooks.html)

posted Sep 25, 2017, 6:44 AM by John Henry Thompson

Phil's recommendation for javascript books.

  

[https://www.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647](https://www.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647)

  

[https://abookapart.com/products/javascript-for-web-designers](https://abookapart.com/products/javascript-for-web-designers)

  

[https://www.barnesandnoble.com/w/murachs-javascript-and-jquery-zak-ruvalcaba/1120735152?ean=9781890774707&pcta=u&st=PLA&sid=BNB\_DRS\_Core+Shopping+Textbooks\_00000000&2sid=Google\_&sourceId=PLGoP62412](https://www.barnesandnoble.com/w/murachs-javascript-and-jquery-zak-ruvalcaba/1120735152?ean=9781890774707&pcta=u&st=PLA&sid=BNB_DRS_Core+Shopping+Textbooks_00000000&2sid=Google_&sourceId=PLGoP62412)

  

[https://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/1617292850/ref=pd\_lpo\_sbs\_14\_t\_0?\_encoding=UTF8&psc=1&refRID=939C4RVGB33HGS45HNQY](https://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/1617292850/ref=pd_lpo_sbs_14_t_0?_encoding=UTF8&psc=1&refRID=939C4RVGB33HGS45HNQY)

  

I also have the ES6 for Everyone video series shown here (pretty informative and well organized):

  

[http://wesbos.com/courses/](http://wesbos.com/courses/)

  

  

  

#### [Philly company digitizes 25,000 old records](z-blog-1/phillycompanydigitizes25000oldrecords.html)

posted Sep 23, 2017, 5:35 AM by John Henry Thompson

  

Philly company digitizes 25,000 old records and they're free to download

  

[http://www.newsworks.org/index.php/local/arts-culture/106319-philly-company-digitizes-collection-of-25000-old-records-and-growing-free-to-download](http://www.newsworks.org/index.php/local/arts-culture/106319-philly-company-digitizes-collection-of-25000-old-records-and-growing-free-to-download)

  

[https://archive.org/details/georgeblood](https://archive.org/details/georgeblood)

  

  

#### [Facebook snap shot](z-blog-1/facebooksnapshot.html)

posted Sep 12, 2017, 2:56 PM by John Henry Thompson

I will not be silenced, nor locked into facebook.

[![](_/rsrc/1505253417936/z-blog-1/facebooksnapshot/facebook-2017-09-12.png)](http://www.johnhenrythompson.com/z-blog-1/facebooksnapshot/facebook-2017-09-12.png?attredirects=0)

  

#### [The Emergence of Video Processing Tools](z-blog-1/theemergenceofvideoprocessingtools-booklaunchpanelnewmuseumnyc.html)

posted Sep 9, 2017, 2:43 PM by John Henry Thompson   \[ updated Sep 9, 2017, 2:45 PM \]

This is the full documentation of the book launch panel @the New Museum, NYC for The Emergence of Video Processing Tools: Television Becoming Unglued, edited by Sherry Miller Hocking, Kathy High and Mona Jimenez. You can purchase this book online at:   
[amazon.com/The-Emergence-Video-Processing-Tools/dp/184150663X](http://www.amazon.com/The-Emergence-Video-Processing-Tools/dp/184150663X)

[https://vimeo.com/101163660](https://vimeo.com/101163660)

Link from Blake

1-10 of 118

[Sign in](https://accounts.google.com/ServiceLogin?continue=http://sites.google.com/a/johnhenrythompson.com/jht/z-blog-1&service=jotspot)|[Recent Site Activity](system/app/pages/recentChanges.html)|[Report Abuse](http://sites.google.com/a/johnhenrythompson.com/jht/system/app/pages/reportAbuse)|[Print Page](javascript:;)|Powered By **[Google Sites](http://sites.google.com/site)**

window.jstiming.load.tick('sjl'); JOT\_postEvent('moduleLoad'); window.jstiming.load.tick('jl'); sites.Searchbox.initialize( 'sites-searchbox-search-button', {"object":\[\]}\['object'\], 'search-site', {"label":"Configure search options...","url":"/system/app/pages/admin/settings"}); gsites.HoverPopupMenu.createSiteDropdownMenus('sites-header-nav-dropdown', false); JOT\_setupNav("2bd", "Navigation", true); JOT\_addListener('titleChange', 'JOT\_NAVIGATION\_titleChange', 'COMP\_2bd'); var domHelper = goog.dom.getDomHelper(); var paginatorPageJs = new sites.components.Paginator(domHelper); paginatorPageJs.initListeners('sites-pagination-prev-link-top', 'sites-pagination-next-link-top', 118, 0, 10, 'asc', 'announcements'); setTimeout(function() { var fingerprint = gsites.date.TimeZone.getFingerprint(\[1109635200000, 1128902400000, 1130657000000, 1143333000000, 1143806400000, 1145000000000, 1146380000000, 1152489600000, 1159800000000, 1159500000000, 1162095000000, 1162075000000, 1162105500000\]); gsites.Xhr.send('http://www.johnhenrythompson.com/\_/tz', null, null, 'GET', null, null, { afjstz: fingerprint }); }, 500); window.onload = function() { if (false) { JOT\_setMobilePreview(); } var loadTimer = window.jstiming.load; loadTimer.tick("ol"); loadTimer\["name"\] = "load," + webspace.page.type + ",user\_page"; window.jstiming.report(loadTimer, {}, 'http://csi.gstatic.com/csi'); } JOT\_insertAnalyticsCode(false, false); var maestroRunner = new gsites.pages.view.SitesMaestroRunner( webspace, "en"); maestroRunner.initListeners(); maestroRunner.installEditRender(); //<!\[CDATA\[ // Decorate any fastUI buttons on the page with a class of 'goog-button'. if (webspace.user.hasWriteAccess) { JOT\_decorateButtons(); } // Fires delayed events. (function() { JOT\_fullyLoaded = true; var delayedEvents = JOT\_delayedEvents; for (var x = 0; x < delayedEvents.length; x++) { var event = delayedEvents\[x\]; JOT\_postEvent(event.eventName, event.eventSrc, event.payload); } JOT\_delayedEvents = null; JOT\_postEvent('pageLoaded'); })(); //\]\]> JOT\_postEvent('decorateGvizCharts'); JOT\_setupPostRenderingManager(); JOT\_postEvent('renderPlus', null, 'sites-chrome-main'); sites.codeembed.init();

window.jstiming.load.tick('render'); JOT\_postEvent('usercontentrendered', this);