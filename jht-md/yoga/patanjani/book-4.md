  /\* Copyright 2008 Google. \*/ (function() { (function(){function e(g){this.t={};this.tick=function(h,k,f){this.t\[h\]=\[void 0!=f?f:(new Date).getTime(),k\];if(void 0==f)try{window.console.timeStamp("CSI/"+h)}catch(m){}};this.tick("start",null,g)}var a;if(window.performance)var d=(a=window.performance.timing)&&a.responseStart;var l=0<d?new e(d):new e;window.jstiming={Timer:e,load:l};if(a){var b=a.navigationStart;0<b&&d>=b&&(window.jstiming.srt=d-b)}if(a){var c=window.jstiming.load;0<b&&d>=b&&(c.tick("\_wtsrt",void 0,b),c.tick("wtsrt\_","\_wtsrt", d),c.tick("tbsd\_","wtsrt\_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),c&&0<b&&(c.tick("\_tbnd",void 0,window.chrome.csi().startE),c.tick("tbnd\_","\_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,c&&0<b&&(c.tick("\_tbnd",void 0,window.external.startE),c.tick("tbnd\_","\_tbnd",b))),a&&(window.jstiming.pt=a)}catch(g){}})(); })()    /\* Copyright 2008 Google. \*/ (function() { function d(a){return document.getElementById(a)}window.byId=d;function g(a){return a.replace(/^\\s+|\\s+$/g,"")}window.trim=g;var h=\[\],k=0;window.JOT\_addListener=function(a,b,c){var f=new String(k++);a={eventName:a,handler:b,compId:c,key:f};h.push(a);return f};window.JOT\_removeListenerByKey=function(a){for(var b=0;b<h.length;b++)if(h\[b\].key==a){h.splice(b,1);break}};window.JOT\_removeAllListenersForName=function(a){for(var b=0;b<h.length;b++)h\[b\].eventName==a&&h.splice(b,1)}; window.JOT\_postEvent=function(a,b,c){var f={eventName:a,eventSrc:b||{},payload:c||{}};if(window.JOT\_fullyLoaded)for(b=h.length,c=0;c<b&&c<h.length;c++){var e=h\[c\];e&&e.eventName==a&&(f.listenerCompId=e.compId||"",(e="function"==typeof e.handler?e.handler:window\[e.handler\])&&e(f))}else window.JOT\_delayedEvents.push({eventName:a,eventSrc:b,payload:c})};window.JOT\_delayedEvents=\[\];window.JOT\_fullyLoaded=!1; window.JOT\_formatRelativeToNow=function(a,b){a=((new Date).getTime()-a)/6E4;if(1440<=a||0>a)return null;var c=0;60<=a&&(a/=60,c=2);2<=a&&c++;return b?window.JOT\_siteRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a)):window.JOT\_userRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a))}; })()   var breadcrumbs = \[{"path":"/yoga","deleted":false,"title":"Yoga","dir":"ltr"},{"path":"/yoga/patanjani","deleted":false,"title":"Patanjali\\u0027s Yoga Sutras - A Comparison","dir":"ltr"},{"path":"/yoga/patanjani/book-4","deleted":false,"title":"Book 4","dir":"ltr"}\]; var JOT\_clearDotPath = 'http://www.gstatic.com/sites/p/fb83f7/system/app/images/cleardot.gif'; var JOT\_userRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\]; var webspace = {"gvizGstaticVersion":"current","enableAnalytics":false,"pageSharingId":"jotspot\_page","codeembeds":{"outerIframeSrc":"https://www.gstatic.com/jotspot/embeds/code/0f08d42392f2000e7e3f3daf5b427a43/outer\_iframe.html","innerIframeSrc":"https://1198703962-jotspot-embeds.googleusercontent.com/code/8d87fa64604b2a11fae2ed06104c58d3/inner\_iframe.html"},"enableUniversalAnalytics":false,"sharingPolicy":"OPENED\_WITH\_INDICATOR","siteTitle":"John Henry Thompson - Invent Your Future","jot2atari":{"eligibility":"ineligible"},"onepickUrl":"https://docs.google.com/picker","adsensePublisherId":null,"features":{"moreMobileStyleImprovements":null,"subscriptionDataMigrationInProgress":false,"plusBadge":false},"isPublic":true,"newSitesBaseUrl":"https://sites.google.com","isConsumer":false,"serverFlags":{"jot2AtariLearnMoreUrl":"https://support.google.com/sites/answer/7035197"},"domainAnalyticsAccountId":"","plusPageId":"","signInUrl":"https://accounts.google.com/AccountChooser?continue\\u003dhttp://sites.google.com/a/johnhenrythompson.com/jht/yoga/patanjani/book-4\\u0026service\\u003djotspot","analyticsAccountId":"","scottyUrl":"/\_/upload","homePath":"/","siteNoticeUrlEnabled":null,"plusPageUrl":"","adsensePromoClickedOrSiteIneligible":true,"csiReportUri":"http://csi.gstatic.com/csi","sharingId":"jotspot","termsUrl":"//www.google.com/intl/en/policies/terms/","gvizVersion":1,"editorResources":{"sitelayout":\["http://www.gstatic.com/sites/p/fb83f7/system/app/css/sitelayouteditor.css"\],"text":\["http://www.gstatic.com/sites/p/fb83f7/system/js/codemirror.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codemirror\_css.css","http://www.gstatic.com/sites/p/fb83f7/system/js/trog\_edit\_\_en.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/trogedit.css","/\_/rsrc/1570087315000/system/app/css/editor.css","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codeeditor.css","/\_/rsrc/1570087315000/system/app/css/camelot/editor-jfk.css"\]},"sharingUrlPrefix":"/\_/sharing","isAdsenseEnabled":true,"domain":"johnhenrythompson.com","baseUri":"","name":"jht","siteTemplateId":false,"siteNoticeRevision":null,"siteNoticeUrlAddress":null,"siteNoticeMessage":null,"page":{"isRtlLocale":false,"canDeleteWebspace":null,"isPageDraft":null,"parentPath":"/yoga/patanjani","parentWuid":"wuid:gx:5372bdddfbdbfbc1","siteLocale":"en","timeZone":"America/Los\_Angeles","type":"text","title":"Book 4","locale":"en","wuid":"wuid:gx:7721306327941087","revision":40,"path":"/yoga/patanjani/book-4","isSiteRtlLocale":false,"pageInheritsPermissions":null,"name":"book-4","canChangePath":true,"state":"","properties":{},"bidiEnabled":false,"currentTemplate":{"path":"/system/app/pagetemplates/text","title":"Web Page"}},"canPublishScriptToAnyone":true,"user":{"keyboardShortcuts":true,"sessionIndex":"","onePickToken":"","guest\_":true,"displayNameOrEmail":"guest","userName":"guest","uid":"","renderMobile":false,"domain":"","namespace":"","hasWriteAccess":false,"namespaceUser":false,"primaryEmail":"guest","hasAdminAccess":false},"gadgets":{"baseUri":"/system/app/pages/gadgets"}}; webspace.page.breadcrumbs = breadcrumbs; var JOT\_siteRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\];   window.jstiming.load.tick('scl');            Book 4 - John Henry Thompson - Invent Your Future   window.jstiming.load.tick('cl'); 

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
    

[Yoga](../../yoga.html)‎ > ‎[Patanjali's Yoga Sutras - A Comparison](../patanjani.html)‎ > ‎

### Book 4

[<Book 3](book-3.html)  
  
**कैवल्यपाद**  
[\[RS\]](http://www.ashtangayoga.info/source-texts/yoga-sutra-patanjali/chapter-4/) YOGA-SUTRA 4 - KAIVALYA PADA: ABOUT LIBERATION  
[\[JW\]](http://books.google.com/books?id=YzFImjtOxUwC&pg=PA299&ci=308%2C231%2C285%2C114&source=bookclip) BOOK FOURTH - ISOLATION  
[\[SS\]](http://www.amazon.com/Yoga-Sutras-Patanjali-Commentary-Satchidananda/dp/0932040381) KAIVALYA PADA - _Portion on Absoluteness_  
[\[EB\]](http://www.amazon.com/Yoga-Sutras-Patanjali-Translation-Commentary/dp/0865477361/ref=sr_1_1?ie=UTF8&s=books&qid=1250508322&sr=1-1) ABSOLUTE INDEPENDENCE  
  
[Substances and subconsciousness](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR40&ci=168%2C394%2C782%2C720&source=bookclip)  
iv. 1 - 13. Correspondence between imperceptible forms of substance and latent impressions of concentrated states.  
  

[iv. 1. Perfections proceed from birth or from drugs or from spells or from self-castigation or from concentration.](book-4/41.html)  

  

[iv. 2. The mutation into another birth is the result of the filling in of the evolving-cause.](book-4/42.html)  

  

[iv. 3. The efficient cause gives no impulse to the evolving-causes but \[the mutation\] follows when the barrier \[to the evolving cause\] is cut, as happens with the peasant.](book-4/43.html)  

  

[iv. 4. Created mind-stuffs may result from the sense-of-personality and from this alone.](book-4/44.html)  

  

[iv. 5. While there is a variety of actions, the mind-stuff which impels the many is one.](book-4/45.html)  

  

[iv. 6. Of these \[five perfections\] that which proceeds from contemplation leaves no latent-deposit.](book-4/46.html)  

  

[iv. 7. The yogin's karma is neither-white-nor-black; \[the karma\] of others is of three kinds.](book-4/47.html)  

  

[iv. 8. As a result of this there follows the manifestation of those subconscious-impressions only which correspond to the fruition of their \[karma\].](book-4/48.html)  

  

[iv. 9. There is an uninterrupted-causal-relation \[of subconscious impressions\], although remote in species and point-of-space and moment-of-time, by reason of the correspondence between memory and subliminal-impressions.](book-4/49.html)  

  

[iv. 10. Furthermore the \[subconscious-impressions\] have no beginning \[that we can set in time\] since desire is permanent.](book-4/411.html)  

  

[iv. 11. Since \[subconscious-impressions\] are associated with cause and motive and mental-substrate and stimulus, if these cease to be, then those \[subconscious impressions\] cease to be.](book-4/411.html)  

  

[iv. 12. Past and future as such exist; \[therefore subconscious impressions do not cease to be\]. For the different time forms belong to the external-aspects.](book-4/412.html)  
  
[iv. 13. These \[external-aspects with the three time-forms\] are phenomenalized \[individuals\] or subtile \[generic-forms\] and their essence is the aspects (guna).](book-4/413.html)  

  
[Polemic against Idealism](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR40&ci=143%2C1118%2C796%2C188&source=bookclip)  
iv. 14 - 23. Knowledge of the stream of consciousness is impossible unless it be a permanent order as contrasted with a succession of transient appearances.  
  

[iv. 14. The that-ness of a thing is due to a singleness of mutation.](book-4/414.html)  

  

[iv. 15. Because, while the \[physical\] thing remains the same, the mind-stuffs are different, \[therefore the two are upon\] distinct levels of existence.](book-4/415.html)  

  

[iv. 16. And a thing is not dependent upon a single mind-stuff, \[for then in certain cases\] it could not be proved \[by that mind-stuff\], \[and\] then what would it be?](book-4/416.html)  

  

[iv. 17. A thing is known or not known by virtue of its affecting \[or not affecting\] the mind-stuff.](book-4/417.html)  

  

[iv. 18. Unintermittently the Master of that \[mind-stuff\] knows the fluctuations of mind-stuff \[and thus\] the Self undergoes-no-mutations.](book-4/418.html)  

  

[iv. 19. It does not illumine itself, since it is an object-for-sight.](book-4/419.html)  

  

[iv. 20. And there cannot be a cognition of both \[thinking-substance and thing\] at the same time.](book-4/420.html)  

  

[iv. 21. If \[one mind-stuff\] were the object-for-sight for another, there would be an infinite regress from one thinking-substance to another thinking-substance as well as confusion of memory.](book-4/421.html)  

  

[iv. 22. The Intellect (citi) which unites not \[with objects\] is conscious of its own thinking-substance when \[the mind-stuff\] takes the form of that \[thinking-substance by reflecting it\].](book-4/422.html)  

  

[iv. 23. Mind-stuff affected by the Seer and by the object-for-sight \[leads to the perception of\] all intended objects.](book-4/423.html)  

  
[Complete Self realization of the Self](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR41&ci=93%2C584%2C807%2C626&source=bookclip)  
iv. 24 - 34. All hindrances subside; all acts of the Self are spontaneous and free; absence of limitations which thwart one who wishes to attain the ultimate ideal of his own nature.  
  

[iv. 24. This \[mind-stuff\], although diversified by countless subconscious impressions exists for the sake of another, because its nature is to produce \[things as\] combinations.](book-4/424.html)  

  

[iv. 25. For him who sees the distinction, pondering upon his own states-of-being ceases.](book-4/425.html)  

  

[iv. 26. Then the mind-stuff is borne down to discrimination onward towards Isolation.](book-4/426.html)  

  

[iv. 27. In the intervals of this \[mind-stuff\] there are other presented-ideas \[coming\] from subliminal-impressions.](book-4/427.html)  

  

[iv. 28. The escape from these \[subliminal-impressions\] is described as being like \[the escape from\] the hindrances.](book-4/428.html)  

  

[iv. 29. For one who is not usurious even in respect of Elevation, there follows in every case as a result of discriminative discernment the concentration \[called\] Rain-cloud of \[knowable\] things.](book-4/429.html)  

  

[iv. 30. Then follows the cessation of the hindrances and of karma.](book-4/430.html)  

  

[iv. 31. Then because of the endlessness of knowledge from which all obscuring defilements have passed away, what is yet to be known amounts to little.](book-4/431.html)  

  

[iv. 32. When as a result of this the aspects (guna) have fulfilled their purpose, they attain to the limit of the sequence of mutations.](book-4/432.html)  

  

[iv. 33. The positive correlate to the moment, recognized as such at the final limit of the mutation is a sequence.](book-4/433.html)  

  

[iv. 34. Isolation is the inverse generation of the aspects, no longer provided with a purpose by the Self or it is the Energy of Intellect grounded in itself.](book-4/434.html)  
  
  

Subpages (34): [View All](../../system/app/pages/subPages-path=-yoga-patanjani-book-4.html)

Comments

[Sign in](https://accounts.google.com/ServiceLogin?continue=http://sites.google.com/a/johnhenrythompson.com/jht/yoga/patanjani/book-4&service=jotspot)|[Recent Site Activity](../../system/app/pages/recentChanges.html)|[Report Abuse](http://sites.google.com/a/johnhenrythompson.com/jht/system/app/pages/reportAbuse)|[Print Page](javascript:;)|Powered By **[Google Sites](http://sites.google.com/site)**

window.jstiming.load.tick('sjl'); window.jstiming.load.tick('jl'); sites.Searchbox.initialize( 'sites-searchbox-search-button', {"object":\[\]}\['object'\], 'search-site', {"label":"Configure search options...","url":"/system/app/pages/admin/settings"}); gsites.HoverPopupMenu.createSiteDropdownMenus('sites-header-nav-dropdown', false); JOT\_setupNav("2bd", "Navigation", true); JOT\_addListener('titleChange', 'JOT\_NAVIGATION\_titleChange', 'COMP\_2bd'); new sites.CommentPane('//docs.google.com/comments/d/AAHRpnXtRMj1XgBLQa4Y22KDIypZzMBseQwT3ox3jtLpaJLSiQNt28lC-txzBKCmjp1Ti8INTf-aR5sXCFw1MaIDy979HLUnOuBZn1SyjaeHv9V8GdNZX4f8We14BN8Aii36mVokiL-Fg/api/js?anon=true', false, false); setTimeout(function() { var fingerprint = gsites.date.TimeZone.getFingerprint(\[1109635200000, 1128902400000, 1130657000000, 1143333000000, 1143806400000, 1145000000000, 1146380000000, 1152489600000, 1159800000000, 1159500000000, 1162095000000, 1162075000000, 1162105500000\]); gsites.Xhr.send('http://www.johnhenrythompson.com/\_/tz', null, null, 'GET', null, null, { afjstz: fingerprint }); }, 500); window.onload = function() { if (false) { JOT\_setMobilePreview(); } var loadTimer = window.jstiming.load; loadTimer.tick("ol"); loadTimer\["name"\] = "load," + webspace.page.type + ",user\_page"; window.jstiming.report(loadTimer, {}, 'http://csi.gstatic.com/csi'); } JOT\_insertAnalyticsCode(false, false); var maestroRunner = new gsites.pages.view.SitesMaestroRunner( webspace, "en"); maestroRunner.initListeners(); maestroRunner.installEditRender(); //<!\[CDATA\[ // Decorate any fastUI buttons on the page with a class of 'goog-button'. if (webspace.user.hasWriteAccess) { JOT\_decorateButtons(); } // Fires delayed events. (function() { JOT\_fullyLoaded = true; var delayedEvents = JOT\_delayedEvents; for (var x = 0; x < delayedEvents.length; x++) { var event = delayedEvents\[x\]; JOT\_postEvent(event.eventName, event.eventSrc, event.payload); } JOT\_delayedEvents = null; JOT\_postEvent('pageLoaded'); })(); //\]\]> JOT\_postEvent('decorateGvizCharts'); JOT\_setupPostRenderingManager(); JOT\_postEvent('renderPlus', null, 'sites-chrome-main'); sites.codeembed.init();

window.jstiming.load.tick('render'); JOT\_postEvent('usercontentrendered', this);