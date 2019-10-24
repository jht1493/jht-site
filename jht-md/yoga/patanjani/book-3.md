  /\* Copyright 2008 Google. \*/ (function() { (function(){function e(g){this.t={};this.tick=function(h,k,f){this.t\[h\]=\[void 0!=f?f:(new Date).getTime(),k\];if(void 0==f)try{window.console.timeStamp("CSI/"+h)}catch(m){}};this.tick("start",null,g)}var a;if(window.performance)var d=(a=window.performance.timing)&&a.responseStart;var l=0<d?new e(d):new e;window.jstiming={Timer:e,load:l};if(a){var b=a.navigationStart;0<b&&d>=b&&(window.jstiming.srt=d-b)}if(a){var c=window.jstiming.load;0<b&&d>=b&&(c.tick("\_wtsrt",void 0,b),c.tick("wtsrt\_","\_wtsrt", d),c.tick("tbsd\_","wtsrt\_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),c&&0<b&&(c.tick("\_tbnd",void 0,window.chrome.csi().startE),c.tick("tbnd\_","\_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,c&&0<b&&(c.tick("\_tbnd",void 0,window.external.startE),c.tick("tbnd\_","\_tbnd",b))),a&&(window.jstiming.pt=a)}catch(g){}})(); })()    /\* Copyright 2008 Google. \*/ (function() { function d(a){return document.getElementById(a)}window.byId=d;function g(a){return a.replace(/^\\s+|\\s+$/g,"")}window.trim=g;var h=\[\],k=0;window.JOT\_addListener=function(a,b,c){var f=new String(k++);a={eventName:a,handler:b,compId:c,key:f};h.push(a);return f};window.JOT\_removeListenerByKey=function(a){for(var b=0;b<h.length;b++)if(h\[b\].key==a){h.splice(b,1);break}};window.JOT\_removeAllListenersForName=function(a){for(var b=0;b<h.length;b++)h\[b\].eventName==a&&h.splice(b,1)}; window.JOT\_postEvent=function(a,b,c){var f={eventName:a,eventSrc:b||{},payload:c||{}};if(window.JOT\_fullyLoaded)for(b=h.length,c=0;c<b&&c<h.length;c++){var e=h\[c\];e&&e.eventName==a&&(f.listenerCompId=e.compId||"",(e="function"==typeof e.handler?e.handler:window\[e.handler\])&&e(f))}else window.JOT\_delayedEvents.push({eventName:a,eventSrc:b,payload:c})};window.JOT\_delayedEvents=\[\];window.JOT\_fullyLoaded=!1; window.JOT\_formatRelativeToNow=function(a,b){a=((new Date).getTime()-a)/6E4;if(1440<=a||0>a)return null;var c=0;60<=a&&(a/=60,c=2);2<=a&&c++;return b?window.JOT\_siteRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a)):window.JOT\_userRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a))}; })()   var breadcrumbs = \[{"path":"/yoga","deleted":false,"title":"Yoga","dir":"ltr"},{"path":"/yoga/patanjani","deleted":false,"title":"Patanjali\\u0027s Yoga Sutras - A Comparison","dir":"ltr"},{"path":"/yoga/patanjani/book-3","deleted":false,"title":"Book 3","dir":"ltr"}\]; var JOT\_clearDotPath = 'http://www.gstatic.com/sites/p/fb83f7/system/app/images/cleardot.gif'; var JOT\_userRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\]; var webspace = {"gvizGstaticVersion":"current","enableAnalytics":false,"pageSharingId":"jotspot\_page","codeembeds":{"outerIframeSrc":"https://www.gstatic.com/jotspot/embeds/code/0f08d42392f2000e7e3f3daf5b427a43/outer\_iframe.html","innerIframeSrc":"https://2029360846-jotspot-embeds.googleusercontent.com/code/8d87fa64604b2a11fae2ed06104c58d3/inner\_iframe.html"},"enableUniversalAnalytics":false,"sharingPolicy":"OPENED\_WITH\_INDICATOR","siteTitle":"John Henry Thompson - Invent Your Future","jot2atari":{"eligibility":"ineligible"},"onepickUrl":"https://docs.google.com/picker","adsensePublisherId":null,"features":{"moreMobileStyleImprovements":null,"subscriptionDataMigrationInProgress":false,"plusBadge":false},"isPublic":true,"newSitesBaseUrl":"https://sites.google.com","isConsumer":false,"serverFlags":{"jot2AtariLearnMoreUrl":"https://support.google.com/sites/answer/7035197"},"domainAnalyticsAccountId":"","plusPageId":"","signInUrl":"https://accounts.google.com/AccountChooser?continue\\u003dhttp://sites.google.com/a/johnhenrythompson.com/jht/yoga/patanjani/book-3\\u0026service\\u003djotspot","analyticsAccountId":"","scottyUrl":"/\_/upload","homePath":"/","siteNoticeUrlEnabled":null,"plusPageUrl":"","adsensePromoClickedOrSiteIneligible":true,"csiReportUri":"http://csi.gstatic.com/csi","sharingId":"jotspot","termsUrl":"//www.google.com/intl/en/policies/terms/","gvizVersion":1,"editorResources":{"sitelayout":\["http://www.gstatic.com/sites/p/fb83f7/system/app/css/sitelayouteditor.css"\],"text":\["http://www.gstatic.com/sites/p/fb83f7/system/js/codemirror.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codemirror\_css.css","http://www.gstatic.com/sites/p/fb83f7/system/js/trog\_edit\_\_en.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/trogedit.css","/\_/rsrc/1570087315000/system/app/css/editor.css","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codeeditor.css","/\_/rsrc/1570087315000/system/app/css/camelot/editor-jfk.css"\]},"sharingUrlPrefix":"/\_/sharing","isAdsenseEnabled":true,"domain":"johnhenrythompson.com","baseUri":"","name":"jht","siteTemplateId":false,"siteNoticeRevision":null,"siteNoticeUrlAddress":null,"siteNoticeMessage":null,"page":{"isRtlLocale":false,"canDeleteWebspace":null,"isPageDraft":null,"parentPath":"/yoga/patanjani","parentWuid":"wuid:gx:5372bdddfbdbfbc1","siteLocale":"en","timeZone":"America/Los\_Angeles","type":"text","title":"Book 3","locale":"en","wuid":"wuid:gx:4cb923dca201f3c6","revision":45,"path":"/yoga/patanjani/book-3","isSiteRtlLocale":false,"pageInheritsPermissions":null,"name":"book-3","canChangePath":true,"state":"","properties":{},"bidiEnabled":false,"currentTemplate":{"path":"/system/app/pagetemplates/text","title":"Web Page"}},"canPublishScriptToAnyone":true,"user":{"keyboardShortcuts":true,"sessionIndex":"","onePickToken":"","guest\_":true,"displayNameOrEmail":"guest","userName":"guest","uid":"","renderMobile":false,"domain":"","namespace":"","hasWriteAccess":false,"namespaceUser":false,"primaryEmail":"guest","hasAdminAccess":false},"gadgets":{"baseUri":"/system/app/pages/gadgets"}}; webspace.page.breadcrumbs = breadcrumbs; var JOT\_siteRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\];   window.jstiming.load.tick('scl');            Book 3 - John Henry Thompson - Invent Your Future   window.jstiming.load.tick('cl'); 

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

### Book 3

[<Book 2](book-2.html) [Book 4>](book-4.html)  
  
**विभूतिपाद**  
[\[RS\]](http://www.ashtangayoga.info/source-texts/yoga-sutra-patanjali/chapter-3/) Yoga-Sutra 3 - Vibhuti Pada: about the results  
[\[JW\]](http://books.google.com/books?id=YzFImjtOxUwC&pg=PA203&ci=223%2C218%2C537%2C153&source=bookclip) BOOK THIRD - SUPERNORMAL POWERS  
[\[SS\]](http://www.amazon.com/Yoga-Sutras-Patanjali-Commentary-Satchidananda/dp/0932040381) VIBHUTI PADA - _Portion on Accomplishments_  
[\[EB\]](http://www.amazon.com/Yoga-Sutras-Patanjali-Translation-Commentary/dp/0865477361/ref=sr_1_1?ie=UTF8&s=books&qid=1250508322&sr=1-1) MYSTIC POWERS  
  
[First direct aid: vi. Fixed attention](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR37&ci=86%2C206%2C793%2C101&source=bookclip)  
iii. 1. The knower focuses the process of knowing upon the object to be known.  
  

[iii. 1. Binding the mind stuff to a place is fixed attention.](book-3/3-1.html)  

  
[Second direct aid: vii. Contemplation](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR37&ci=48%2C317%2C831%2C127&source=bookclip)  
iii. 2. A two-term relation between the process of knowing and the object to be known.  
  

[iii. 2. Focusedness of the presented idea upon that \[place\] is contemplation.](book-3/32.html)  

  
[Third direct aid: viii. Concentration.](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR37&ci=82%2C447%2C771%2C155&source=bookclip)  
iii. 3. A fusion of the knower and the process of knowing with the object to be known.  
  

[iii. 3. This same \[contemplation\], shining forth \[in consciousness\] as the intended object and nothing more, and, as it were, emptied of itself, is concentration.](book-3/33.html)  

  
[Transition to seedless concentration](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR37&ci=86%2C603%2C762%2C330&source=bookclip)  
iii. 4 - 10. The direct aids in combination result in insight and restricted subliminal-impressions and the calm flow of the mind-stuff.  
  

[iii. 4. The three in one are constraint.](book-3/34.html)  
  
[iii. 5. As a result of mastering this constraint, there follows the shining forth of insight.](book-3/35.html)  
  
[iii. 6. Its application is by stages.](book-3/36.html)  
  
[iii. 7. The three are direct aids in comparison with the previous \[five\].](book-3/37.html)  
  
[iii. 8. Even these \[three\] are indirect aids to seedless \[concentration\].](book-3/38.html)  
  
[iii. 9. When there is a becoming invisible of the subliminal-impression of emergence and a becoming visible of the subliminal impression of restriction, the mutation of restriction is inseparably connected with mind-stuff in its period of restriction.](book-3/39.html)  
  
[iii. 10. This \[mind-stuff\] flows peacefully by reason of the subliminal impression.](book-3/310.html)  

  
[Mutations of substances](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR37&ci=69%2C933%2C813%2C374&source=bookclip)  
iii. 11 - 15. In the focused state the concentration holds two time-forms within the span of attention. Mutations are in fixed orders of subliminal impressions in the restricted state.  
  

[iii. 11. The mutation of concentration is the dwindling of dispersiveness and the uprisal of singleness-of-intent belonging to the mind-stuff.](book-3/311.html)  
  
[iii. 12. Then again when the quiescent and the uprisen presented-ideas are similar \[in respect of having a single object\] the mind-stuff has a mutation single-in-intent.](book-3/312.html)  
  
[iii. 13. Thus with regard to elements and to organs, mutations of external aspect and of time-variation and of intensity have been enumerated.](book-3/313.html)  
  
[iii. 14. A substance conforms itself to quiescent and uprisen and indeterminable external-aspects.](book-3/314.html)  
  
[iii. 15. The order of the sequence is the reason for the order of the mutations.](book-3/315.html)  

  
[Application of constraints to different orders of mutations](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR38&ci=117%2C161%2C787%2C1115&source=bookclip)  
iii. 16 - 52. Given a single mutation of external aspect or time-form or intensity, the whole sequence comes under control of the concentrated insight.  
  

[iii. 16. As a result of constraint upon the three mutations \[there follows\] the knowledge of the past and the future.](book-3/316.html)  
  
[iii. 17. Word and intended object and presented-idea are confused because they are erroneously identified with each other. By constraint upon the distinctions between them \[there arises the intuitive\] knowledge of the cries of all living beings.](book-3/317.html)  
  
[iii. 18. As a result of direct perception of subliminal-impressions there is \[intuitive\] knowledge of previous births.](book-3/318.html)  
  
[iii. 19. \[As a result of constraint\] upon a presented-idea \[there arises intuitive\] knowledge of the mind-stuff of another.](book-3/319.html)  
  
[iii. 20. But \[the intuitive knowledge of the mind-stuff of another\] does not have that \[idea\] together with that upon which it depends \[as its object\], since that \[upon which it depends\] is not-in-the-field \[of consciousness\].](book-3/320.html)  
  
[iii. 21. As a result of constraint upon the \[outer\] form of the body, when its power to be known is stopped, then as a consequence of the disjunction of the light and of the eye there follows indiscernibility \[of the yogin's body\].](book-3/321.html)  

  

[iii. 22. Advancing and not-advancing is karma, as a result of constraint upon this \[two-fold karma\] or from the signs of death \[there arises an intuitive\] knowledge of the latter end.](book-3/322.html)  

  

[iii. 23. \[As a result of constraint\] upon friendliness and \[other sentiments there arise\] powers \[of friendliness\].](book-3/323.html)  

  

[iii. 24. \[As a result of constraint\] upon powers \[there arise\] powers like those of an elephant.](book-3/324.html)  

  

[iii. 25. As a result of casting the light of a sense-activity \[there arises the intuitive\] knowledge of the subtile and the concealed and the obscure.](book-3/325.html)  

  

[iii. 26. As a result of constraint upon the sun \[there arises the intuitive\] knowledge of the cosmic-spaces.](book-3/326.html)  

  

[iii. 27. \[As a result of constraint\] upon the moon \[there arises the intuitive\] knowledge of the arrangement of the stars.](book-3/327.html)  

  

[iii. 28. \[As a result of constraint\] upon the pole-star \[there arises the intuitive\] knowledge of their movements.](book-3/328.html)  

  

[iii. 29. \[As a result of constraint\] upon the wheel of the navel \[there arises the intuitive\] knowledge of the arrangement of the body.](book-3/329.html)  

  

[iii. 30. \[As a result of constraint\] upon the well of the throat \[there follows\] the cessation of hunger and thirst.](book-3/330.html)  

  

[iii. 31. \[As a result of constraint\] upon the tortoise-tube there follows motionlessness of the mind-stuff.](book-3/331.html)  

  

[iii. 32. \[As a result of constraint\] upon the radiance in the head \[there follows\] the sight of the Siddhas.](book-3/332.html)  

  

[iii. 33. Or as a result of vividness the yogin discerns all.](book-3/333.html)  

  

[iii. 34. As a result of constraint upon the heart \[there arises\] a consciousness of the mind-stuff.](book-3/334.html)  

  

[iii. 35. Experience is a presented-idea which fails to distinguish the sativa and the Self, which are absolutely uncommingled \[in the presented-idea\]. Since the sattva exists as object for another, the \[intuitive\] knowledge of the Self arises as the result of constraint upon that which exists for its own sake.](book-3/335.html)  

  

[iii. 36. As a result of this \[constraint upon that which exists for its own sake\] there arise vividness and the organ-of-\[supernal\], hearing and the organ-of-\[supernal\] touch and the organ-of-\[supernal\] sight and the organ-of-\[supernal\] taste and the organ-of-\[supernal\] smell.](book-3/336.html)  

  

[iii. 37. In concentration these \[supernal activities\] are obstacles; in the emergent state they are perfections (siddhi).](book-3/337.html)  

  

[iii. 38. As a result of slackening the causes of bondage and as a result of the knowledge of the procedure \[of the mind-stuff\], the mind-stuff penetrates into the body of another.](book-3/338.html)  

  

[iii. 39. As a result of mastering the Udana there is no adhesion to water or mud or thorns or similar objects, and \[at death\] the upward flight.](book-3/339-1.html)  
  
[iii. 40. As a result of mastering the Samana \[there arises\] a radiance.](book-3/340.html)  

  

[iii. 41. As a result of constraint upon the relation between the organ-of-hearing and the air, \[there arises\] the supernal-organ-of-hearing.](book-3/341.html)  

  

[iii. 42. Either as a result of constraint upon the relation between the body and the air, or as a result of the balanced-state of lightness, such as that of cotton fibre, there follows the passing through air.](book-3/342.html)  

  

[iii. 43. An outwardly unadjusted fluctuation is the Great Discarnate; as a result of this the dwindling of the covering to the brightness.](book-3/343.html)  

  

[iii. 44. As a result of constraint upon the coarse and the essential-attribute and the subtile and the inherence and purposiveness, there is a mastery of the elements.](book-3/344.html)  

  

[iii. 45. As a result of this atomization and the other \[perfections\] come about, \[there is\] perfection of body; and there is no obstruction by the properties of these \[elements\].](book-3/345.html)  

  

[iii. 46. Beauty and grace and power and compactness of the thunderbolt, - \[this is\] perfection of body.](book-3/346.html)  

  

[iii. 47. As a result of constraint upon the process-of-knowing and the essential attribute and the feeling-of-personality and the inherence and the purposiveness, \[there follows\] the subjugation of the organs.](book-3/347.html)  

  

[iii. 48. As a result of this \[there follows\] speed \[great as that\] of the central-organ, action of the instruments \[of knowledge\] disjunct \[from the body\], and the subjugation of the primary-cause.](book-3/348.html)  

  

[iii. 49. He who has only the full discernment into the difference between the sattva and the Self is one who has authority over all states-of-existence and is one who knows all.](book-3/349.html)  

  

[iii. 50. As a result of passionlessness even with regard to these \[perfections\] there follows, after the dwindling of the seeds of the defects, Isolation.](book-3/350.html)  

  

[iii. 51. In case of invitations from those-in-high-places these, should arouse no attachment or pride, for undesired consequences recur.](book-3/351.html)  

  

[iii. 52. As a result of constraint upon moments and their sequence \[there arises the intuitive\] knowledge proceeding from discrimination.](book-3/351/352.html)  

  
[Culmination of concentration](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR39&ci=96%2C1131%2C769%2C161&source=bookclip)  
iii. 53 - 55. The particular which is indiscernible in respect of class or term or point in space is intuitively discerned the widest span of objectivity is also discerned. This is the attainment of Isolation.  
  

[iii. 53. As a result of this there arises the deeper-knowledge of two equivalent things which cannot be distinctly qualified in species or characteristic-mark or point-of-space.](book-3/353.html)  

  

[iii. 54. The \[intuitive\] knowledge proceeding from discrimination is a deliverer, has all things as its object, and has all times for its object, and is an \[inclusive whole\] without sequence.](book-3/354.html)  
  
[iii. 55. When the purity of the sattva and of the Self are equal there is Isolation.](book-3/355.html)  
  

  

  

Subpages (55): [View All](../../system/app/pages/subPages-path=-yoga-patanjani-book-3.html)

Comments

[Sign in](https://accounts.google.com/ServiceLogin?continue=http://sites.google.com/a/johnhenrythompson.com/jht/yoga/patanjani/book-3&service=jotspot)|[Recent Site Activity](../../system/app/pages/recentChanges.html)|[Report Abuse](http://sites.google.com/a/johnhenrythompson.com/jht/system/app/pages/reportAbuse)|[Print Page](javascript:;)|Powered By **[Google Sites](http://sites.google.com/site)**

window.jstiming.load.tick('sjl'); window.jstiming.load.tick('jl'); sites.Searchbox.initialize( 'sites-searchbox-search-button', {"object":\[\]}\['object'\], 'search-site', {"label":"Configure search options...","url":"/system/app/pages/admin/settings"}); gsites.HoverPopupMenu.createSiteDropdownMenus('sites-header-nav-dropdown', false); JOT\_setupNav("2bd", "Navigation", true); JOT\_addListener('titleChange', 'JOT\_NAVIGATION\_titleChange', 'COMP\_2bd'); new sites.CommentPane('//docs.google.com/comments/d/AAHRpnXtRMj1XgBLQa4Y22KDIypZzMBseQwT3ox3jtLpaJLSiQMDCzXw\_ridiEYLJGP7gsSbIyJfGwZZaz6ogGxcG2wm20f8SxTg4Arg8l4IOd2GlLiLCJ9g5xhroR8yvXk\_HtadQc2na/api/js?anon=true', false, false); setTimeout(function() { var fingerprint = gsites.date.TimeZone.getFingerprint(\[1109635200000, 1128902400000, 1130657000000, 1143333000000, 1143806400000, 1145000000000, 1146380000000, 1152489600000, 1159800000000, 1159500000000, 1162095000000, 1162075000000, 1162105500000\]); gsites.Xhr.send('http://www.johnhenrythompson.com/\_/tz', null, null, 'GET', null, null, { afjstz: fingerprint }); }, 500); window.onload = function() { if (false) { JOT\_setMobilePreview(); } var loadTimer = window.jstiming.load; loadTimer.tick("ol"); loadTimer\["name"\] = "load," + webspace.page.type + ",user\_page"; window.jstiming.report(loadTimer, {}, 'http://csi.gstatic.com/csi'); } JOT\_insertAnalyticsCode(false, false); var maestroRunner = new gsites.pages.view.SitesMaestroRunner( webspace, "en"); maestroRunner.initListeners(); maestroRunner.installEditRender(); //<!\[CDATA\[ // Decorate any fastUI buttons on the page with a class of 'goog-button'. if (webspace.user.hasWriteAccess) { JOT\_decorateButtons(); } // Fires delayed events. (function() { JOT\_fullyLoaded = true; var delayedEvents = JOT\_delayedEvents; for (var x = 0; x < delayedEvents.length; x++) { var event = delayedEvents\[x\]; JOT\_postEvent(event.eventName, event.eventSrc, event.payload); } JOT\_delayedEvents = null; JOT\_postEvent('pageLoaded'); })(); //\]\]> JOT\_postEvent('decorateGvizCharts'); JOT\_setupPostRenderingManager(); JOT\_postEvent('renderPlus', null, 'sites-chrome-main'); sites.codeembed.init();

window.jstiming.load.tick('render'); JOT\_postEvent('usercontentrendered', this);