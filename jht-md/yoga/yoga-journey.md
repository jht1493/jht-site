  /\* Copyright 2008 Google. \*/ (function() { (function(){function e(g){this.t={};this.tick=function(h,k,f){this.t\[h\]=\[void 0!=f?f:(new Date).getTime(),k\];if(void 0==f)try{window.console.timeStamp("CSI/"+h)}catch(m){}};this.tick("start",null,g)}var a;if(window.performance)var d=(a=window.performance.timing)&&a.responseStart;var l=0<d?new e(d):new e;window.jstiming={Timer:e,load:l};if(a){var b=a.navigationStart;0<b&&d>=b&&(window.jstiming.srt=d-b)}if(a){var c=window.jstiming.load;0<b&&d>=b&&(c.tick("\_wtsrt",void 0,b),c.tick("wtsrt\_","\_wtsrt", d),c.tick("tbsd\_","wtsrt\_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),c&&0<b&&(c.tick("\_tbnd",void 0,window.chrome.csi().startE),c.tick("tbnd\_","\_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,c&&0<b&&(c.tick("\_tbnd",void 0,window.external.startE),c.tick("tbnd\_","\_tbnd",b))),a&&(window.jstiming.pt=a)}catch(g){}})(); })()    /\* Copyright 2008 Google. \*/ (function() { function d(a){return document.getElementById(a)}window.byId=d;function g(a){return a.replace(/^\\s+|\\s+$/g,"")}window.trim=g;var h=\[\],k=0;window.JOT\_addListener=function(a,b,c){var f=new String(k++);a={eventName:a,handler:b,compId:c,key:f};h.push(a);return f};window.JOT\_removeListenerByKey=function(a){for(var b=0;b<h.length;b++)if(h\[b\].key==a){h.splice(b,1);break}};window.JOT\_removeAllListenersForName=function(a){for(var b=0;b<h.length;b++)h\[b\].eventName==a&&h.splice(b,1)}; window.JOT\_postEvent=function(a,b,c){var f={eventName:a,eventSrc:b||{},payload:c||{}};if(window.JOT\_fullyLoaded)for(b=h.length,c=0;c<b&&c<h.length;c++){var e=h\[c\];e&&e.eventName==a&&(f.listenerCompId=e.compId||"",(e="function"==typeof e.handler?e.handler:window\[e.handler\])&&e(f))}else window.JOT\_delayedEvents.push({eventName:a,eventSrc:b,payload:c})};window.JOT\_delayedEvents=\[\];window.JOT\_fullyLoaded=!1; window.JOT\_formatRelativeToNow=function(a,b){a=((new Date).getTime()-a)/6E4;if(1440<=a||0>a)return null;var c=0;60<=a&&(a/=60,c=2);2<=a&&c++;return b?window.JOT\_siteRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a)):window.JOT\_userRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a))}; })()   var breadcrumbs = \[{"path":"/yoga","deleted":false,"title":"Yoga","dir":"ltr"},{"path":"/yoga/yoga-journey","deleted":false,"title":"My Yoga Journey (2004 - 2013)","dir":"ltr"}\]; var JOT\_clearDotPath = 'http://www.gstatic.com/sites/p/fb83f7/system/app/images/cleardot.gif'; var JOT\_userRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\]; var webspace = {"gvizGstaticVersion":"current","enableAnalytics":false,"pageSharingId":"jotspot\_page","codeembeds":{"outerIframeSrc":"https://www.gstatic.com/jotspot/embeds/code/0f08d42392f2000e7e3f3daf5b427a43/outer\_iframe.html","innerIframeSrc":"https://1892528811-jotspot-embeds.googleusercontent.com/code/8d87fa64604b2a11fae2ed06104c58d3/inner\_iframe.html"},"enableUniversalAnalytics":false,"sharingPolicy":"OPENED\_WITH\_INDICATOR","siteTitle":"John Henry Thompson - Invent Your Future","jot2atari":{"eligibility":"ineligible"},"onepickUrl":"https://docs.google.com/picker","adsensePublisherId":null,"features":{"moreMobileStyleImprovements":null,"subscriptionDataMigrationInProgress":false,"plusBadge":false},"isPublic":true,"newSitesBaseUrl":"https://sites.google.com","isConsumer":false,"serverFlags":{"jot2AtariLearnMoreUrl":"https://support.google.com/sites/answer/7035197"},"domainAnalyticsAccountId":"","plusPageId":"","signInUrl":"https://accounts.google.com/AccountChooser?continue\\u003dhttp://sites.google.com/a/johnhenrythompson.com/jht/yoga/yoga-journey\\u0026service\\u003djotspot","analyticsAccountId":"","scottyUrl":"/\_/upload","homePath":"/","siteNoticeUrlEnabled":null,"plusPageUrl":"","adsensePromoClickedOrSiteIneligible":true,"csiReportUri":"http://csi.gstatic.com/csi","sharingId":"jotspot","termsUrl":"//www.google.com/intl/en/policies/terms/","gvizVersion":1,"editorResources":{"sitelayout":\["http://www.gstatic.com/sites/p/fb83f7/system/app/css/sitelayouteditor.css"\],"text":\["http://www.gstatic.com/sites/p/fb83f7/system/js/codemirror.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codemirror\_css.css","http://www.gstatic.com/sites/p/fb83f7/system/js/trog\_edit\_\_en.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/trogedit.css","/\_/rsrc/1570087315000/system/app/css/editor.css","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codeeditor.css","/\_/rsrc/1570087315000/system/app/css/camelot/editor-jfk.css"\]},"sharingUrlPrefix":"/\_/sharing","isAdsenseEnabled":true,"domain":"johnhenrythompson.com","baseUri":"","name":"jht","siteTemplateId":false,"siteNoticeRevision":null,"siteNoticeUrlAddress":null,"siteNoticeMessage":null,"page":{"isRtlLocale":false,"canDeleteWebspace":null,"isPageDraft":null,"parentPath":"/yoga","parentWuid":"wuid:gx:6f339a2a60326ffc","siteLocale":"en","timeZone":"America/Los\_Angeles","type":"text","title":"My Yoga Journey (2004 - 2013)","locale":"en","wuid":"wuid:gx:35936836501706e7","revision":101,"path":"/yoga/yoga-journey","isSiteRtlLocale":false,"pageInheritsPermissions":null,"name":"yoga-journey","canChangePath":true,"state":"","properties":{},"bidiEnabled":false,"currentTemplate":{"path":"/system/app/pagetemplates/text","title":"Web Page"}},"canPublishScriptToAnyone":true,"user":{"keyboardShortcuts":true,"sessionIndex":"","onePickToken":"","guest\_":true,"displayNameOrEmail":"guest","userName":"guest","uid":"","renderMobile":false,"domain":"","namespace":"","hasWriteAccess":false,"namespaceUser":false,"primaryEmail":"guest","hasAdminAccess":false},"gadgets":{"baseUri":"/system/app/pages/gadgets"}}; webspace.page.breadcrumbs = breadcrumbs; var JOT\_siteRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\];   window.jstiming.load.tick('scl');            My Yoga Journey (2004 - 2013) - John Henry Thompson - Invent Your Future   window.jstiming.load.tick('cl'); 

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

### My Yoga Journey (2004 - 2013)

My personal journey to yoga began when I experienced pain and numbness in my right arm. I spend the most of my workday seated, but I try to keep active by going to the gym regularly. I suspect the physically problem was due to working at a computer most of the day and experimented with different sitting arrangements and increased my gym work out. Unfortunately the condition kept worsening.  I found a doctor that diagnosed the cause of the problem: foraminal stenosis at C6-C7 in my neck, a condition where the nerves in the neck are pinched as they come out of the spinal column. I followed all the doctor recommended treatments (traction, steroid pills, steroid injections), but did not experience any improvement. I then tried chiropractic treatment: decompression therapy and massage. I experienced some improvement, or at least it stopped getting worse. 

  

Finally I switched from mostly gym workout to regular yoga classes. Over the course of a few months I experienced significant improvement. The pain and numbness in my right arm decreased significantly and I was able to continue to work at the computer. Also I have discovered other parts of yoga: I have grown to enjoy the Kirtan (a style Indian devotional music), and I eat more plant-based food.

**  
The Beginning - Capoiera and Power Yoga  
  
**

In 2004 I started attending a "Power Yoga" class at [my local gym](http://www.lafitness.com/Pages/clubClassSchedule.aspx?clubid=243) on Sundays. Unlike my previous expose to yoga, the class moved at fast pace and the workout was very aerobic. After the class I'd usually practiced some [Capoeira](http://www.youtube.com/watch?v=OIX9BcYMy7Y) too. I got my start in Capoeira back in the 1980's, attended classes regularly for a few years and drifted in and out of solo practice over the years. The foraminal stenosis problem in my neck was not yet diagnosed and I was using yoga to supplement my existing Capoeira work out.

  

About September of 2007, seeking to improve the problem in my neck, I purchased a Power Yoga DVD by Rodney Lee and practiced yoga daily for several months. I felt some improvement in the problem in my neck and decided to seek out regular yoga classes.

  
**Fours Years Later - Ashtanga primary begins** (Sep 2010)

  

In April of 2008 I started taking Vinyasa yoga classes at the [Main Line Yoga](http://www.dhyana-yoga.com/mainline.html) studio in Ardmore. The classes where not as fast pace as the Power yoga style, but I was challenged in other ways. In May of 2008 I was introduced to Ashtanga Yoga and I like the fact that it was set sequence that you were encourage to practice on your own. I purchased the recommended book: ["Ashtanga Yoga: Practice Manual" by David Swenson](http://www.amazon.com/Ashtanga-Yoga-Practice-Illustrated-Personal/dp/1891252089). I also purchased the [Richard Freeman DVD "Ashtanga Yoga The Primary Series."](http://www.amazon.com/Ashtanga-Yoga-Primary-Richard-Freeman/dp/B000NIVNKK) I was impressed by what I saw as physically possible with a consistent yoga practice. The internal meditation and breathing process describe in the book and DVD intrigued me too. Although I read the Ashtanga book and watched the DVD, from 2008 to 2010 I mostly attended the morning Vinyasa  classes at Main Line Yoga. On my own I occasionally practiced the first movements of Ashtanga primary series (the sun salutation and the standing postures). 

  

In September of 2010 my work schedule changed and I could no longer take regular classes at Main Line Yoga. Fortunately, I was re-introduced to Ashtanga Yoga at the [Yoga Garden in Narbeth](http://www.yogagardennarberth.com/). Coincidently the class was taught by a person that attended the one and only formal Ashtanga Yoga class I attended back in 2008. I took to regular Sunday morning Ashtanga classes at the Yoga Garden and solo Ashtanga practice at my gym. 

  

**Three Months of Ashtanga Primary Study  
**

  

Here's a video of my Ashtanga practice after about 14 weeks of regular practice: [John Henry Thompson Ashtanga primary series practice on Youtube (60 mintutes) ](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1) In class the full sequence usually takes 90 minutes. [Krishna Das Kirtan music](http://www.krishnadas.com/) is playing in the background. The captions on the video are the name of the asanas (postures) from the David Swenson book.  
  

**Six Months** **of Ashtanga Primary Study**

  

Recording of my Ashtanga primary series practice after 3 months since last recording, approximately 90 days, about 29 sessions.

[John Henry Thompson Ashtanga 2011-03](http://www.youtube.com/watch?v=L6M3EDv51Tk)

  

**Nine Months** **of Ashtanga Primary Study**

My third recording after 3 months since last recording.  

[John Henry Thompson Ashtanga Primary #99](http://www.youtube.com/watch?v=upCetKXWseE) After only 8 minutes my iPhone shut down due to the heat. I, however, enjoyed the extra sweat.  
  
[Here's my 100th practice of Ashtanga Primary.](http://www.youtube.com/watch?v=lVgjK5uJNPA)  
[View from second camera.](http://www.youtube.com/watch?v=plPbLxta760)  
  
**Twelve Months** **of Ashtanga Primary Study** (Oct 2011)  
  
[My fourth recording, 3 months since last recording.](http://www.youtube.com/watch?v=1JmGc0qyk78) Practice #130.  
  
I was fortunate in my twelfth month to take a 5-day Mysore style workshop with [Jill Manning](http://www.jillmanning.com/). Up at 6:30am and practice the sequence at my own pace with guidance from Jill. There were 9 others in the workshop, including the director of Yoga Garden, Mark Nelson. The workshop opened me up to the possibility of an early morning practice. Jill said it was the one "obstacle" to regular practice that removed all the other obstacles. I'm beginning to see what she means. By getting the practice out of the way I don't have to struggle to fit into or around my work schedule or my eating schedule. I have a solid block of time everyday that I can devote to the practice. The key for me was to go to bed time two hours earlier.  Subtract two hours at night, but gain two hours the next day.  
  
In the workshop Jill helped me with a couple of things. She corrected my dristi during Sirsasana. I was looking the at edge of my mat, she correct me to look at my nose. The first time I tried I almost fell down, but now I think my head stand it more vertical - it was at an angle. She help me get achieve a full bind in Marichyasana D, which I haven't been able to fully repeat yet, but my entrance into Marichyasana D has improved. She also corrected my Parivitta Parsvakonasana, Ardha Baddha Padmottanasana, Supta Kurmasana, and Supta Padangusthasana. Thank you Jill.  
  
**Year** **Two** (Nov 2012)  
  
It has been a bumpy ride on the yoga road since a year ago. In early November 2011 (Practice #143) [my lower back issue flared up and kept me out of practice for about 2 months](../z-blog-1/goodbyeandgivingthanks.html). Slowly I built my practice back up and was able to take another Mysore workshop with Jill Manning on March 20, 2012 (Practice #155,#156,#157). My practice slowed down a little after that.  
  
After Practice #160, April 19, 2012, I went to give a mobile app development workshop in Jamaica. Second day into the workshop my lower back flared up again. I haven't had a full practice since then and only in the last week, after over 7 months, have I been able to do an abbreviated practice. I do about 30 minutes on elliptical cycle, then sun salutation A (5 times), B (3-5 times), standing sequence and then closing sequence, with a few additional asanas thrown in. While on the elliptical I listen to [audio books on astrophysics](../z-blog-1/deathbyblackholeandothercosmicquandaries.html) and study my Ashtanga charts.  
  
Let's see if I can continue to re-build to a full practice.  
  
****Year** **Two** \+ 3 Months** (Jan 2013)  
  
Back in the groove. Attending Sunday morning classes at [Yoga Garden](http://yogagardennarberth.com) with Mark. Getting up early to do solo practice at gym 3-4 times per week. Improving but not yet at prior level. January ended with practice #201.  
  
**Year Two + 5 Months** (Mar 2013)  
  
Completed my Ashtanga practice #231 on Sunday March 31, 2013. [Video here](http://www.youtube.com/watch?v=zjJI_3KuGR0).  
  
**Year Two + 10 Months** (Aug 2013)  
  

Had my first private class in Kingston Jamaica with [Shakira Williams](http://about.me/ashtangajamaica), practice #267 on Saturday August 31, 2013. She gave suggestions on entering up dog and lots of cool adjustments.  
  
Back in USA, the [Yoga Garden](http://yogagardennarberth.com) has started offering Tuesday and Thursday 11am - 12:30pm classes with Elizabeth Sitzler in addition to the 8:30 am Sunday classes. Plan on attending all of them.  
  

**Year Three** (Nov 2013)  
  

Capture video of my [practice #301](http://www.youtube.com/watch?v=4SZ3CslIb-s&feature=youtu.behttp://www.youtube.com/watch?v=4SZ3CslIb-s&feature=youtu.be) at Yoga Gargen with Elizabeth Sitzler. Her Tuesday and Thursday classes will end Nov 26. We had a good run. I plan to continue taking Wednesday morning classes at [Ashtanga Yoga School of Philadelphia](http://aysphiladelphia.com) and Sunday classes at Yoga Garden. Will probable start hitting the gym more during the week.  
  

* * *

Copyright © 2011-2013 John Henry Thompson. All rights reserved.

  

  

[![](../_/rsrc/1329795151888/yoga/yoga-journey/jht-mid-shot-height=318&width=320.png)](../home.html)

  

[![](../_/rsrc/1329795151888/yoga/yoga-journey/gym-setting.png)](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=54m58s)

[![](../_/rsrc/1329795151887/yoga/yoga-journey/ash-3mo.png)](http://www.youtube.com/watch?v=L6M3EDv51Tk#t=41m32s)

[![](../_/rsrc/1329795151887/yoga/yoga-journey/ash-6mo-head-cu.png)](http://www.youtube.com/watch?v=lVgjK5uJNPA#t=59m48s)

[![](../_/rsrc/1329795151887/yoga/yoga-journey/ash-6mo-head-long.png)](http://www.youtube.com/watch?v=plPbLxta760#t=59m33s)  

[![](../_/rsrc/1329795151888/yoga/yoga-journey/ash-6mo-lotus-elevated.png)](http://www.youtube.com/watch?v=plPbLxta760#t=1h04m51s)  
  

[![](../_/rsrc/1364842320894/yoga/yoga-journey/garb-2013-03-height=320&width=216.png)](http://www.youtube.com/watch?v=zjJI_3KuGR0&cc_load_policy=1#t=39m30s)

  

  

[![](../_/rsrc/1364842080041/yoga/yoga-journey/full-lotus-lift-2013-03-height=320&width=240.png)](http://www.youtube.com/watch?v=zjJI_3KuGR0&cc_load_policy=1#t=57m54s)

  

Comments

[Sign in](https://accounts.google.com/ServiceLogin?continue=http://sites.google.com/a/johnhenrythompson.com/jht/yoga/yoga-journey&service=jotspot)|[Recent Site Activity](../system/app/pages/recentChanges.html)|[Report Abuse](http://sites.google.com/a/johnhenrythompson.com/jht/system/app/pages/reportAbuse)|[Print Page](javascript:;)|Powered By **[Google Sites](http://sites.google.com/site)**

window.jstiming.load.tick('sjl'); window.jstiming.load.tick('jl'); sites.Searchbox.initialize( 'sites-searchbox-search-button', {"object":\[\]}\['object'\], 'search-site', {"label":"Configure search options...","url":"/system/app/pages/admin/settings"}); gsites.HoverPopupMenu.createSiteDropdownMenus('sites-header-nav-dropdown', false); JOT\_setupNav("2bd", "Navigation", true); JOT\_addListener('titleChange', 'JOT\_NAVIGATION\_titleChange', 'COMP\_2bd'); new sites.CommentPane('//docs.google.com/comments/d/AAHRpnXtRMj1XgBLQa4Y22KDIypZzMBseQwT3ox3jtLpaJLSiQJgghWj0HYltEcb8EafUrbLvPRA2Saen\_zDEiLgyrRF6GnKszZFoL1qr8ehIVuBdYLTW6F9X7-DDyqPFPPsv2GSQpi5S/api/js?anon=true', false, false); setTimeout(function() { var fingerprint = gsites.date.TimeZone.getFingerprint(\[1109635200000, 1128902400000, 1130657000000, 1143333000000, 1143806400000, 1145000000000, 1146380000000, 1152489600000, 1159800000000, 1159500000000, 1162095000000, 1162075000000, 1162105500000\]); gsites.Xhr.send('http://www.johnhenrythompson.com/\_/tz', null, null, 'GET', null, null, { afjstz: fingerprint }); }, 500); window.onload = function() { if (false) { JOT\_setMobilePreview(); } var loadTimer = window.jstiming.load; loadTimer.tick("ol"); loadTimer\["name"\] = "load," + webspace.page.type + ",user\_page"; window.jstiming.report(loadTimer, {}, 'http://csi.gstatic.com/csi'); } JOT\_insertAnalyticsCode(false, false); var maestroRunner = new gsites.pages.view.SitesMaestroRunner( webspace, "en"); maestroRunner.initListeners(); maestroRunner.installEditRender(); //<!\[CDATA\[ // Decorate any fastUI buttons on the page with a class of 'goog-button'. if (webspace.user.hasWriteAccess) { JOT\_decorateButtons(); } // Fires delayed events. (function() { JOT\_fullyLoaded = true; var delayedEvents = JOT\_delayedEvents; for (var x = 0; x < delayedEvents.length; x++) { var event = delayedEvents\[x\]; JOT\_postEvent(event.eventName, event.eventSrc, event.payload); } JOT\_delayedEvents = null; JOT\_postEvent('pageLoaded'); })(); //\]\]> JOT\_postEvent('decorateGvizCharts'); JOT\_setupPostRenderingManager(); JOT\_postEvent('renderPlus', null, 'sites-chrome-main'); sites.codeembed.init();

window.jstiming.load.tick('render'); JOT\_postEvent('usercontentrendered', this);