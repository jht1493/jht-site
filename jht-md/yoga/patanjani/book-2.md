  /\* Copyright 2008 Google. \*/ (function() { (function(){function e(g){this.t={};this.tick=function(h,k,f){this.t\[h\]=\[void 0!=f?f:(new Date).getTime(),k\];if(void 0==f)try{window.console.timeStamp("CSI/"+h)}catch(m){}};this.tick("start",null,g)}var a;if(window.performance)var d=(a=window.performance.timing)&&a.responseStart;var l=0<d?new e(d):new e;window.jstiming={Timer:e,load:l};if(a){var b=a.navigationStart;0<b&&d>=b&&(window.jstiming.srt=d-b)}if(a){var c=window.jstiming.load;0<b&&d>=b&&(c.tick("\_wtsrt",void 0,b),c.tick("wtsrt\_","\_wtsrt", d),c.tick("tbsd\_","wtsrt\_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),c&&0<b&&(c.tick("\_tbnd",void 0,window.chrome.csi().startE),c.tick("tbnd\_","\_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,c&&0<b&&(c.tick("\_tbnd",void 0,window.external.startE),c.tick("tbnd\_","\_tbnd",b))),a&&(window.jstiming.pt=a)}catch(g){}})(); })()    /\* Copyright 2008 Google. \*/ (function() { function d(a){return document.getElementById(a)}window.byId=d;function g(a){return a.replace(/^\\s+|\\s+$/g,"")}window.trim=g;var h=\[\],k=0;window.JOT\_addListener=function(a,b,c){var f=new String(k++);a={eventName:a,handler:b,compId:c,key:f};h.push(a);return f};window.JOT\_removeListenerByKey=function(a){for(var b=0;b<h.length;b++)if(h\[b\].key==a){h.splice(b,1);break}};window.JOT\_removeAllListenersForName=function(a){for(var b=0;b<h.length;b++)h\[b\].eventName==a&&h.splice(b,1)}; window.JOT\_postEvent=function(a,b,c){var f={eventName:a,eventSrc:b||{},payload:c||{}};if(window.JOT\_fullyLoaded)for(b=h.length,c=0;c<b&&c<h.length;c++){var e=h\[c\];e&&e.eventName==a&&(f.listenerCompId=e.compId||"",(e="function"==typeof e.handler?e.handler:window\[e.handler\])&&e(f))}else window.JOT\_delayedEvents.push({eventName:a,eventSrc:b,payload:c})};window.JOT\_delayedEvents=\[\];window.JOT\_fullyLoaded=!1; window.JOT\_formatRelativeToNow=function(a,b){a=((new Date).getTime()-a)/6E4;if(1440<=a||0>a)return null;var c=0;60<=a&&(a/=60,c=2);2<=a&&c++;return b?window.JOT\_siteRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a)):window.JOT\_userRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a))}; })()   var breadcrumbs = \[{"path":"/yoga","deleted":false,"title":"Yoga","dir":"ltr"},{"path":"/yoga/patanjani","deleted":false,"title":"Patanjali\\u0027s Yoga Sutras - A Comparison","dir":"ltr"},{"path":"/yoga/patanjani/book-2","deleted":false,"title":"Book 2","dir":"ltr"}\]; var JOT\_clearDotPath = 'http://www.gstatic.com/sites/p/fb83f7/system/app/images/cleardot.gif'; var JOT\_userRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\]; var webspace = {"gvizGstaticVersion":"current","enableAnalytics":false,"pageSharingId":"jotspot\_page","codeembeds":{"outerIframeSrc":"https://www.gstatic.com/jotspot/embeds/code/0f08d42392f2000e7e3f3daf5b427a43/outer\_iframe.html","innerIframeSrc":"https://283250021-jotspot-embeds.googleusercontent.com/code/8d87fa64604b2a11fae2ed06104c58d3/inner\_iframe.html"},"enableUniversalAnalytics":false,"sharingPolicy":"OPENED\_WITH\_INDICATOR","siteTitle":"John Henry Thompson - Invent Your Future","jot2atari":{"eligibility":"ineligible"},"onepickUrl":"https://docs.google.com/picker","adsensePublisherId":null,"features":{"moreMobileStyleImprovements":null,"subscriptionDataMigrationInProgress":false,"plusBadge":false},"isPublic":true,"newSitesBaseUrl":"https://sites.google.com","isConsumer":false,"serverFlags":{"jot2AtariLearnMoreUrl":"https://support.google.com/sites/answer/7035197"},"domainAnalyticsAccountId":"","plusPageId":"","signInUrl":"https://accounts.google.com/AccountChooser?continue\\u003dhttp://sites.google.com/a/johnhenrythompson.com/jht/yoga/patanjani/book-2\\u0026service\\u003djotspot","analyticsAccountId":"","scottyUrl":"/\_/upload","homePath":"/","siteNoticeUrlEnabled":null,"plusPageUrl":"","adsensePromoClickedOrSiteIneligible":true,"csiReportUri":"http://csi.gstatic.com/csi","sharingId":"jotspot","termsUrl":"//www.google.com/intl/en/policies/terms/","gvizVersion":1,"editorResources":{"sitelayout":\["http://www.gstatic.com/sites/p/fb83f7/system/app/css/sitelayouteditor.css"\],"text":\["http://www.gstatic.com/sites/p/fb83f7/system/js/codemirror.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codemirror\_css.css","http://www.gstatic.com/sites/p/fb83f7/system/js/trog\_edit\_\_en.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/trogedit.css","/\_/rsrc/1570087315000/system/app/css/editor.css","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codeeditor.css","/\_/rsrc/1570087315000/system/app/css/camelot/editor-jfk.css"\]},"sharingUrlPrefix":"/\_/sharing","isAdsenseEnabled":true,"domain":"johnhenrythompson.com","baseUri":"","name":"jht","siteTemplateId":false,"siteNoticeRevision":null,"siteNoticeUrlAddress":null,"siteNoticeMessage":null,"page":{"isRtlLocale":false,"canDeleteWebspace":null,"isPageDraft":null,"parentPath":"/yoga/patanjani","parentWuid":"wuid:gx:5372bdddfbdbfbc1","siteLocale":"en","timeZone":"America/Los\_Angeles","type":"text","title":"Book 2","locale":"en","wuid":"wuid:gx:355418e0781573fe","revision":43,"path":"/yoga/patanjani/book-2","isSiteRtlLocale":false,"pageInheritsPermissions":null,"name":"book-2","canChangePath":true,"state":"","properties":{},"bidiEnabled":false,"currentTemplate":{"path":"/system/app/pagetemplates/text","title":"Web Page"}},"canPublishScriptToAnyone":true,"user":{"keyboardShortcuts":true,"sessionIndex":"","onePickToken":"","guest\_":true,"displayNameOrEmail":"guest","userName":"guest","uid":"","renderMobile":false,"domain":"","namespace":"","hasWriteAccess":false,"namespaceUser":false,"primaryEmail":"guest","hasAdminAccess":false},"gadgets":{"baseUri":"/system/app/pages/gadgets"}}; webspace.page.breadcrumbs = breadcrumbs; var JOT\_siteRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\];   window.jstiming.load.tick('scl');            Book 2 - John Henry Thompson - Invent Your Future   window.jstiming.load.tick('cl'); 

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

### Book 2

[<Book 1](book-1.html)[Book 3>](book-3.html)  
  
**साधनपाद**  
[\[RS\]](http://www.ashtangayoga.info/source-texts/yoga-sutra-patanjali/chapter-2/) Yoga-Sutra 2 - Sadhana Pada: about the Practice  
[\[JW\]](http://books.google.com/books?id=YzFImjtOxUwC&pg=PA103&ci=225%2C213%2C555%2C159&source=bookclip) Book Second - Means of Attainment  
[\[SS\]](http://www.amazon.com/Yoga-Sutras-Patanjali-Commentary-Satchidananda/dp/0932040381) SADHANA PADA - _Portion on Practice_  
[\[EB\]](http://www.amazon.com/Yoga-Sutras-Patanjali-Translation-Commentary/dp/0865477361/ref=sr_1_1?ie=UTF8&s=books&qid=1250508322&sr=1-1) PRACTICE  
  
[Devices for weakening hindrances.](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR33&ci=93%2C787%2C845%2C531&source=bookclip)  
ii. 1 - 11 Aids serviceable to the beginner who is on the path to concentration.  
  

[ii. 1 Self-castigation and study and devotion to the Icvara are the Yoga of action.](book-2/2-01.html)  
  
[ii. 2 For the cultivation of concentration and for the attenuation of the hindrances.](book-2/202.html)  
  
[ii. 3 Undifferentiated consciousness (avidya) and the feeling-of-personality and passion and aversion and the will-to-live are the five hindrances.](book-2/203.html)  
  
[ii. 4 Undifferentiated consciousness is the field for the others whether they be dormant or attenuated or intercepted or sustained.](book-2/24.html)  
   
[ii. 5 The recognition of the permanent, of the pure, of pleasure, and of a self in what is impermanent, impure, pain, and not-self is undifferentiated-consciousness (avidya).](book-2/25.html)  
  
[ii. 6 When the power of seeing and the power by which one sees have the appearance of being a single self, \[this is\] the feeling-of-personality.](book-2/26.html)  
  
[ii. 7 Passion is that which dwells upon pleasure.](book-2/27.html)  
  
[ii. 8 Aversion is that which dwells upon pain.](book-2/28.html)  
  
[ii. 9 The will-to-live sweeping on \[by the force of\] its own nature exists in this form even in the wise.](book-2/29.html)  
  
[ii. 10 These \[hindrances when they have become subtile\] are to be escaped by the inverse propagation.](book-2/210.html)  
  
[ii. 11 The fluctuations of these should be escaped by means of contemplation.](book-2/211.html)  

  
[Karma](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR34&ci=155%2C261%2C780%2C239&source=bookclip)  

ii. 12 - 14 Origin of karma in hindrances; result of karma in state-of-existence, length of life, and pleasure or pain.  
  

[ii. 12 The latent deposit of karma has its root in the hindrances and may be felt in a birth seen or in a birth unseen.](book-2/212.html)  
  
[ii. 13 So long as the root exists there will be fruition from it \[that is\] birth \[and\] length-of-life \[and\] kind of experience.](book-2/213.html)  
  
[ii. 14 These \[fruitions\] have joy or extreme anguish as results in accordance with the quality of their causes whether merit or demerit.](book-2/214.html)  
  

[All is pain](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR34&ci=133%2C502%2C790%2C165&source=bookclip)  
ii. 15 Present and future and past correlations with objects result unavoidably in pain.  
  

[ii. 15 As being the pains which are mutations and anxieties and subliminal impressions and by reason of the opposition of the fluctuations of the aspects (guna) -  to the discriminating all is nothing but pain.](book-2/215.html)  
  

[There is an escape](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR34&ci=130%2C688%2C788%2C117&source=bookclip)  
ii. 16 Only yogins are sensitive to future pain. This may be avoided in that it has not expressed itself in actual suffering.  
  

[ii. 16 That which is to be escaped is pain yet to come.](book-2/216.html)  

   

[Cause of pain](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR34&ci=130%2C807%2C825%2C458&source=bookclip)  
ii. 17 - 24 The Seer sight relation implies 1. complexes of potential stresses between aspects (guna) and between sense-organs and elements, 2. the power of the Seer who is undefined by aspects, 3. the actual correlation until the purpose of the Seer, which is to differentiate consciousness is completed.  
  

[ii. 17 The correlation of the Seer and the object-of-sight is the cause of that which is to be escaped.](book-2/217.html)  
  
[ii. 18 With a disposition to brightness and to activity and to inertia, and with the elements and the organs as its essence, and with its purpose the experience and the liberation \[of the Self\], - this is the object-of-sight](book-2/218.html)  
  
[ii. 19 The particularized and the unparticularized \[forms\] and the resoluble only \[into primary matter\] and irresoluble-primary-matter are the divisions of the aspects (guna).](book-2/219.html)  
  
[ii. 20 The Seer who is nothing but \[the power of seeing\], although undefiled (cuddha), looks upon the presented idea.](book-2/220.html)  
  
[ii. 21 The object-of-sight is only for the sake of it \[the Self\].](book-2/221.html)  
  
[ii. 22 Though it has ceased \[to be seen\] in the case of one whose purpose is accomplished, it has not ceased to be, since it is common to others \[besides himself\].](book-2/222.html)  
  
[ii. 23 The reason for the apperception of what the power of the property and of what the power of the proprietor are, is correlation.](book-2/223.html)  
  
[ii. 24 The reason for this \[correlation\] is undifferentiated-consciousness (avidya).](book-2/224.html)  

  

[The escape](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR35&ci=88%2C315%2C784%2C128&source=bookclip)  
ii. 25 Positive state of Isolation follows the ending of the correlation.  
  

[ii. 25 Since this \[non-sight\] does not exist, there is no correlation. This is the escape, the Isolation of the Seer.](book-2/225.html)  
  

[Means of escape](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR35&ci=82%2C447%2C834%2C134&source=bookclip)  
ii. 26 - 27 The act of discrimination leading up to the act of insight.  
  

[ii. 26 The means of attaining escape is unwavering discriminative discernment.](book-2/226.html)  
  
[ii. 27 For him \[there is\] insight sevenfold and advancing in stages to the highest.](book-2/227.html)  

  
[Eight aids to yoga](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR35&ci=101%2C590%2C747%2C209&source=bookclip)  
ii. 28 - 29 To purify the aspects and to intensify intuitive thinking there are five indirect aids and three direct aids  
  

[ii. 28 After the aids to yoga have been followed up when the impurity has dwindled, there is an enlightenment of perception reaching up to the discriminative discernment.](book-2/228.html)  
  
[ii. 29 Abstentions and observances and postures and regulations-of-the-breath and withdrawal-of-the-senses and fixed-attention and contemplation and concentration.](book-2/229.html)  

  
  
[First indirect aid: i. Five abstentions](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR35&ci=86%2C800%2C772%2C196&source=bookclip)  
ii. 30 - 31 The elements and degrees of morality in the form of prohibitions.  
  

[ii. 30 Abstinence from injury and from falsehood and from theft and from incontinence and from acceptance of gifts are the abstentions.](book-2/230.html)  
  
[ii. 31 When they are unqualified by species or place or time or exigency and when \[covering\] all \[these\] classes - there is the Great Course-of-conduct.](book-2/231.html)  

  
[Second indirect aid ii Five observances](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR35&ci=88%2C997%2C820%2C114&source=bookclip)  
ii. 32 Advances in morality in the form of voluntary action.  
  

[ii. 32 Cleanliness and contentment and self-castigation and study and devotion to the Icvara are the observances.](book-2/232.html)  

  
[Results of the abstentions and observances](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR35&ci=93%2C1123%2C769%2C136&source=bookclip)  
ii. 33 - 45 Persistent inhibitions of certain kinds reorganize on increase of activity of the opposite kind.  
  

[ii. 33 If there be inhibition by perverse-considerations, there should be cultivation of the opposites.](book-2/233.html)  
  
[ii. 34 Since perverse-considerations such as injuries, whether done or caused to be done or approved, whether ensuing upon greed or anger or infatuation whether mild or moderate or vehement find their unending consequences in pain and lack of thinking, there should be the cultivation of their opposites.](book-2/234.html)  
  
[ii. 35 As soon as he is grounded in abstinence from injury, his presence begets a suspension of enmity.](book-2/235.html)  
  
[ii. 36 As soon as he is grounded in abstinence from falsehood, actions and consequences depend upon him.](book-2/236.html)  
  
[ii. 37 As soon as he is grounded in abstinence from theft, all jewels approach him.](book-2/237.html)  
  
[ii. 38 As soon as he is grounded in abstinence from incontinence, he acquires energy.](book-2/238.html)  
  
[ii. 39 As soon as he is established in abstinence from acceptance of gifts, a thorough illumination upon the conditions of birth.](book-2/239.html)  
  
[ii. 40 As a result of cleanliness there is disgust at one's own body and no intercourse with others.](book-2/240.html)  
  
[ii. 41 Purity of sattva and gentleness and singleness-of-intent and subjugation of the senses and fitness for the sight of the self.](book-2/241.html)  
  
[ii. 42 As a result of contentment there is an acquisition of superlative pleasure.](book-2/242.html)  
  
[ii. 43 Perfection in the body and in the organs after impurity has dwindled as a result of self-castigation.](book-2/243.html)  
  
[ii. 44 As a result of study there is communion with the chosen deity.](book-2/244.html)  
  
[ii. 45 Perfection of concentration as a result of devotion to the Icvara.](book-2/245.html)  

  
[Third indirect aid: iii. Postures](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR36&ci=126%2C672%2C826%2C149&source=bookclip)  
ii. 46 - 48 Bodily conditions favourable to concentration.  
  

[ii. 46 Stable and easy posture.](book-2/246.html)  
  
[ii. 47 By relaxation of effort or by a \[mental\] state-of-balance with reference to Ananta](book-2/247.html)  
  
[ii. 48 Thereafter he is unassailed by extremes.](book-2/248.html)  

  

[Fourth indirect aid: iv. Restraint of the breath](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR36&ci=115%2C820%2C823%2C223&source=bookclip)  
ii. 49 - 52 Calming of affective states is favourable to concentration.  
  

[ii. 49 When there is \[stability of posture\] the restraint of breath a cutting off of the flow of inspiration and expiration, follows.](book-2/249.html)  
  
[ii. 50 \[This is\] external or internal or suppressed in fluctuation and is regulated by place and time and number and is protracted and subtile.](book-2/250.html)  
  
[ii. 51 The fourth \[restraint of the breath\] transcends the external and the internal object.](book-2/251.html)  
  
[ii. 52 As a result of this the covering of the light dwindles away.](book-2/252.html)  

  

[Fifth indirect aid: v. Withdrawal of the sense organs](http://books.google.com/books?id=YzFImjtOxUwC&pg=PR36&ci=121%2C1032%2C815%2C251&source=bookclip)  
ii. 53 - 55 The span of attention is confined to an inner object.  
  

[ii. 53 For fixed-attentions also the central organ becomes fit.](book-2/253.html)  
  
[ii. 54 The withdrawal of the senses is as it were the imitation of the mind-stuff as it is in itself on the part of the organs by disjoining themselves from their object.](book-2/254.html)  
  
[ii. 55 As a result of this \[withdrawal\] there is a complete mastery of the organs.](book-2/255.html)  

  

Subpages (56): [View All](../../system/app/pages/subPages-path=-yoga-patanjani-book-2.html)

Comments

[Sign in](https://accounts.google.com/ServiceLogin?continue=http://sites.google.com/a/johnhenrythompson.com/jht/yoga/patanjani/book-2&service=jotspot)|[Recent Site Activity](../../system/app/pages/recentChanges.html)|[Report Abuse](http://sites.google.com/a/johnhenrythompson.com/jht/system/app/pages/reportAbuse)|[Print Page](javascript:;)|Powered By **[Google Sites](http://sites.google.com/site)**

window.jstiming.load.tick('sjl'); window.jstiming.load.tick('jl'); sites.Searchbox.initialize( 'sites-searchbox-search-button', {"object":\[\]}\['object'\], 'search-site', {"label":"Configure search options...","url":"/system/app/pages/admin/settings"}); gsites.HoverPopupMenu.createSiteDropdownMenus('sites-header-nav-dropdown', false); JOT\_setupNav("2bd", "Navigation", true); JOT\_addListener('titleChange', 'JOT\_NAVIGATION\_titleChange', 'COMP\_2bd'); new sites.CommentPane('//docs.google.com/comments/d/AAHRpnXtRMj1XgBLQa4Y22KDIypZzMBseQwT3ox3jtLpaJLSiQEzH7XaM9T8NWKNUMQJP9X6mF2\_9BH74oNU0dm0pJHBwxTAaaihTigDbkkRs1U6pnQGfgFiF2RA5-T7PKQkcX-pGpBDt/api/js?anon=true', false, false); setTimeout(function() { var fingerprint = gsites.date.TimeZone.getFingerprint(\[1109635200000, 1128902400000, 1130657000000, 1143333000000, 1143806400000, 1145000000000, 1146380000000, 1152489600000, 1159800000000, 1159500000000, 1162095000000, 1162075000000, 1162105500000\]); gsites.Xhr.send('http://www.johnhenrythompson.com/\_/tz', null, null, 'GET', null, null, { afjstz: fingerprint }); }, 500); window.onload = function() { if (false) { JOT\_setMobilePreview(); } var loadTimer = window.jstiming.load; loadTimer.tick("ol"); loadTimer\["name"\] = "load," + webspace.page.type + ",user\_page"; window.jstiming.report(loadTimer, {}, 'http://csi.gstatic.com/csi'); } JOT\_insertAnalyticsCode(false, false); var maestroRunner = new gsites.pages.view.SitesMaestroRunner( webspace, "en"); maestroRunner.initListeners(); maestroRunner.installEditRender(); //<!\[CDATA\[ // Decorate any fastUI buttons on the page with a class of 'goog-button'. if (webspace.user.hasWriteAccess) { JOT\_decorateButtons(); } // Fires delayed events. (function() { JOT\_fullyLoaded = true; var delayedEvents = JOT\_delayedEvents; for (var x = 0; x < delayedEvents.length; x++) { var event = delayedEvents\[x\]; JOT\_postEvent(event.eventName, event.eventSrc, event.payload); } JOT\_delayedEvents = null; JOT\_postEvent('pageLoaded'); })(); //\]\]> JOT\_postEvent('decorateGvizCharts'); JOT\_setupPostRenderingManager(); JOT\_postEvent('renderPlus', null, 'sites-chrome-main'); sites.codeembed.init();

window.jstiming.load.tick('render'); JOT\_postEvent('usercontentrendered', this);