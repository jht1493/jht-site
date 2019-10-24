  /\* Copyright 2008 Google. \*/ (function() { (function(){function e(g){this.t={};this.tick=function(h,k,f){this.t\[h\]=\[void 0!=f?f:(new Date).getTime(),k\];if(void 0==f)try{window.console.timeStamp("CSI/"+h)}catch(m){}};this.tick("start",null,g)}var a;if(window.performance)var d=(a=window.performance.timing)&&a.responseStart;var l=0<d?new e(d):new e;window.jstiming={Timer:e,load:l};if(a){var b=a.navigationStart;0<b&&d>=b&&(window.jstiming.srt=d-b)}if(a){var c=window.jstiming.load;0<b&&d>=b&&(c.tick("\_wtsrt",void 0,b),c.tick("wtsrt\_","\_wtsrt", d),c.tick("tbsd\_","wtsrt\_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),c&&0<b&&(c.tick("\_tbnd",void 0,window.chrome.csi().startE),c.tick("tbnd\_","\_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,c&&0<b&&(c.tick("\_tbnd",void 0,window.external.startE),c.tick("tbnd\_","\_tbnd",b))),a&&(window.jstiming.pt=a)}catch(g){}})(); })()    /\* Copyright 2008 Google. \*/ (function() { function d(a){return document.getElementById(a)}window.byId=d;function g(a){return a.replace(/^\\s+|\\s+$/g,"")}window.trim=g;var h=\[\],k=0;window.JOT\_addListener=function(a,b,c){var f=new String(k++);a={eventName:a,handler:b,compId:c,key:f};h.push(a);return f};window.JOT\_removeListenerByKey=function(a){for(var b=0;b<h.length;b++)if(h\[b\].key==a){h.splice(b,1);break}};window.JOT\_removeAllListenersForName=function(a){for(var b=0;b<h.length;b++)h\[b\].eventName==a&&h.splice(b,1)}; window.JOT\_postEvent=function(a,b,c){var f={eventName:a,eventSrc:b||{},payload:c||{}};if(window.JOT\_fullyLoaded)for(b=h.length,c=0;c<b&&c<h.length;c++){var e=h\[c\];e&&e.eventName==a&&(f.listenerCompId=e.compId||"",(e="function"==typeof e.handler?e.handler:window\[e.handler\])&&e(f))}else window.JOT\_delayedEvents.push({eventName:a,eventSrc:b,payload:c})};window.JOT\_delayedEvents=\[\];window.JOT\_fullyLoaded=!1; window.JOT\_formatRelativeToNow=function(a,b){a=((new Date).getTime()-a)/6E4;if(1440<=a||0>a)return null;var c=0;60<=a&&(a/=60,c=2);2<=a&&c++;return b?window.JOT\_siteRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a)):window.JOT\_userRelTimeStrs\[c\].replace("\_\_duration\_\_",Math.floor(a))}; })()   var breadcrumbs = \[{"path":"/yoga","deleted":false,"title":"Yoga","dir":"ltr"},{"path":"/yoga/i-choose-ashtanga","deleted":false,"title":"I Choose Ashtanga (2008)","dir":"ltr"}\]; var JOT\_clearDotPath = 'http://www.gstatic.com/sites/p/fb83f7/system/app/images/cleardot.gif'; var JOT\_userRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\]; var webspace = {"gvizGstaticVersion":"current","enableAnalytics":false,"pageSharingId":"jotspot\_page","codeembeds":{"outerIframeSrc":"https://www.gstatic.com/jotspot/embeds/code/0f08d42392f2000e7e3f3daf5b427a43/outer\_iframe.html","innerIframeSrc":"https://1726586818-jotspot-embeds.googleusercontent.com/code/8d87fa64604b2a11fae2ed06104c58d3/inner\_iframe.html"},"enableUniversalAnalytics":false,"sharingPolicy":"OPENED\_WITH\_INDICATOR","siteTitle":"John Henry Thompson - Invent Your Future","jot2atari":{"eligibility":"ineligible"},"onepickUrl":"https://docs.google.com/picker","adsensePublisherId":null,"features":{"moreMobileStyleImprovements":null,"subscriptionDataMigrationInProgress":false,"plusBadge":false},"isPublic":true,"newSitesBaseUrl":"https://sites.google.com","isConsumer":false,"serverFlags":{"jot2AtariLearnMoreUrl":"https://support.google.com/sites/answer/7035197"},"domainAnalyticsAccountId":"","plusPageId":"","signInUrl":"https://accounts.google.com/AccountChooser?continue\\u003dhttp://sites.google.com/a/johnhenrythompson.com/jht/yoga/i-choose-ashtanga\\u0026service\\u003djotspot","analyticsAccountId":"","scottyUrl":"/\_/upload","homePath":"/","siteNoticeUrlEnabled":null,"plusPageUrl":"","adsensePromoClickedOrSiteIneligible":true,"csiReportUri":"http://csi.gstatic.com/csi","sharingId":"jotspot","termsUrl":"//www.google.com/intl/en/policies/terms/","gvizVersion":1,"editorResources":{"sitelayout":\["http://www.gstatic.com/sites/p/fb83f7/system/app/css/sitelayouteditor.css"\],"text":\["http://www.gstatic.com/sites/p/fb83f7/system/js/codemirror.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codemirror\_css.css","http://www.gstatic.com/sites/p/fb83f7/system/js/trog\_edit\_\_en.js","http://www.gstatic.com/sites/p/fb83f7/system/app/css/trogedit.css","/\_/rsrc/1570087315000/system/app/css/editor.css","http://www.gstatic.com/sites/p/fb83f7/system/app/css/codeeditor.css","/\_/rsrc/1570087315000/system/app/css/camelot/editor-jfk.css"\]},"sharingUrlPrefix":"/\_/sharing","isAdsenseEnabled":true,"domain":"johnhenrythompson.com","baseUri":"","name":"jht","siteTemplateId":false,"siteNoticeRevision":null,"siteNoticeUrlAddress":null,"siteNoticeMessage":null,"page":{"isRtlLocale":false,"canDeleteWebspace":null,"isPageDraft":null,"parentPath":"/yoga","parentWuid":"wuid:gx:6f339a2a60326ffc","siteLocale":"en","timeZone":"America/Los\_Angeles","type":"text","title":"I Choose Ashtanga (2008)","locale":"en","wuid":"wuid:gx:7de6f5856228fbce","revision":60,"path":"/yoga/i-choose-ashtanga","isSiteRtlLocale":false,"pageInheritsPermissions":null,"name":"i-choose-ashtanga","canChangePath":true,"state":"","properties":{},"bidiEnabled":false,"currentTemplate":{"path":"/system/app/pagetemplates/text","title":"Web Page"}},"canPublishScriptToAnyone":true,"user":{"keyboardShortcuts":true,"sessionIndex":"","onePickToken":"","guest\_":true,"displayNameOrEmail":"guest","userName":"guest","uid":"","renderMobile":false,"domain":"","namespace":"","hasWriteAccess":false,"namespaceUser":false,"primaryEmail":"guest","hasAdminAccess":false},"gadgets":{"baseUri":"/system/app/pages/gadgets"}}; webspace.page.breadcrumbs = breadcrumbs; var JOT\_siteRelTimeStrs = \["a minute ago","\_\_duration\_\_ minutes ago","an hour ago","\_\_duration\_\_ hours ago"\];   window.jstiming.load.tick('scl');            I Choose Ashtanga (2008) - John Henry Thompson - Invent Your Future   window.jstiming.load.tick('cl'); 

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

### I Choose Ashtanga (2008)

[President Kennedy's moon speech](http://www.historyplace.com/speeches/jfk-space.htm): 

**We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard..."**

[David Garrigues](http://www.davidgarrigues.com/) wrote: "[If you chose Ashtanga you chose to fight.](http://davidgarrigues.tumblr.com/post/4031218381/if-you-chose-ashtanga-you-chose-to-fight)" Made me think: How I did I come to settle on a regular Ashtanga yoga practice and why?  

  

I choose to physically, mentally, and spiritually challenge myself to sweat, observe, learn, and grow. I choose a journey in Self study.  

  

The Ashtanga Primary Series is a  sequence of  postures (asanas) practiced on a regular basis with specific breath,  internal locks (Bandhas), and visual focus (Drishti). It is the first of several series in [](videos.html) Ashtanga Yoga, founded by [K. Pattabhi Jois](http://kpjayi.org/biographies/k-pattabhi-jois).  
  
[I plan to record my practice every 3 months.](videos.html) Below is my rendition broken down by individual asansa. The video was recorded December 2010, after first 3 months of regular practice. [Other videos at this link.](videos.html)  
  
[Samasthiti  "Standing"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=0m0s)  
[Surya Namaskara A #1  "Sun Salutation A"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=0m5s)  
[Surya Namaskara A #2](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=0m5s)  
[Surya Namaskara A﻿ #3](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=0m36s)  
[Surya Namaskara A #4](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=01m16s)  
[Surya Namaskara A #5](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=01m53s)  
[Surya Namaskara B #1 "Sun Salutation B"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=3m23s)  
[Surya Namaskara B #2](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=4m28s)  
[Surya Namaskara B #3](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=5m25s)  
[Surya Namaskara B #4](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=6m26s)  
[Surya Namaskara B #5](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=7m23s)  
[Samasthiti "Standing"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=8m31s)  
[Padangusthasana "Foot Big Toe Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=8m39s)  
[Padahastasana "Foot To Hand Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=9m09s)  
[Utthita Trikonasana Right "Extended Triangle Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=9m45s)  
[Utthita Trikonasana Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=10m10s)  
[Parivritta Trikonasana﻿ Right "Revolved Triangle Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=10m26s)  
[Parivritta Trikonasana﻿ Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=11m31s)  
[Utthita Parsvakonasana Right "Extended Side Angle Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=11m06s)  
[Utthita Parsvakonasana Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=11m31s)  
[Parivritta Parsvakonasana Right "Revolved Side Angle Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=11m46s)  
[Parivritta Parsvakonasana Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=12m05s)  
[Bind Right (Optional)](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=12m26s)  
[Bind Left (Optional)](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=12m46s)  
[Prasarita Padottanasana A "Feet Spread Intense Stretch Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=13m07s)  
[Prasarita Padottanasana B](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=13m40s)  
[Prasarita Padottanasana C](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=14m04s)  
[Prasarita Padottanasana D](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=14m32s)  
[Hanumanasana Right (Optional)](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=15m04s)  
[Hanumanasana Left (Optional )](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=15m35s)  
[Parsvottanasana Right "Intense Side Strech Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=16m18s)  
[Parsvottanasana Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=16m50s)  
[Utthita Hasta Padangusthasana ABCD Rt "Extended Hand Big Toe Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=17m12s)  
[Utthita Hasta Padangusthasana ABCD Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=17m53s)  
[Ardha Baddha Padmottanasana Rt "1/2 Bound Lotus Intense Stretch Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=18m25s)  
[Ardha Baddha Padmottanasana Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=18m59s)  
[Vinyasa](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=19m41s)  
[Utkatasana "Fierce Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=20m00s)  
[Virabhadrasana A Right "Warrior Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=20m14s)  
[Virabhadrasana A Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=20m45s)  
[Virabhadrasana B Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=20m50s)  
[Virabhadrasana B Right](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=21m09s)  
[Vinyasa﻿ #1](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=21m13s)  
[Dandasana "Staff Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=21m25s)  
[Paschimottanasana A,B,C "Western Intense Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=21m25s)  
[Vinyasa﻿ #2](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=22m10s)  
[Purvottanasana "Eastern Intense Strech Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=22m20s)  
[Vinyasa﻿ #3](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=22m30s)  
[Ardha Baddha Padma Paschimottanasana Rt "Half Bound Lotus Western Intense Stretch Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=22m44s)  
[Vinyasa﻿ #4](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=23m12s)  
[Ardha Baddha Padma Paschimottanasana Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=23m24s)  
[Vinyasa﻿ #5](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=23m51s)  
[Trianga Mukhaikapada Paschimottanasana Rt "Three Limbs Face One Foot Western Intense Stretch Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=24m02s)  
[Vinyasa﻿ #6](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=24m26s)  
[Trianga Mukhaikapada Paschimottanasana Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=24m37s)  
[Vinyasa﻿ #7](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=25m15s)  
[Janu Sirsasana A Right "Head to Knee Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=25m29s)  
[Vinyasa﻿ #8](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=26m01s)  
[Janu Sirsasana A Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=26m14s)  
[Vinyasa﻿ #9](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=26m43s)  
[Janu Sirsasana C Right](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=26m57s)  
[Vinyasa﻿ #10](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=27m28s)  
[Janu Sirsasana C Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=27m43s)  
[Vinyasa﻿ #11](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=28m12s)  
[Marichyasana A Right "Dedicated to Marichi"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=28m24s)  
[Vinyasa﻿ #12](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=28m45s)  
[Marichyasana A Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=28m57s)  
[Vinyasa﻿ #13](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=29m17s)  
[Marichyasana B Right](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=29m29s)  
[Vinyasa﻿ #14](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=29m59s)  
[Marichyasana B Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=30m11s)  
[Vinyasa﻿ #15](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=30m44s)  
[Marichyasana C Right](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=30m57s)  
[Vinyasa﻿ #16](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=31m23s)  
[Marichyasana C Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=31m27s)  
[Vinyasa﻿ #17](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=32m12s)  
[Marichyasana D Right](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=32m24s)  
[Vinyasa﻿ #18](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=32m55s)  
[Marichyasana D Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=33m07s)  
[Vinyasa﻿ #19](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=33m59s)  
[Navasana #1 "Boat Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=34m11s)  
[Navasana #2](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=34m24s)  
[Navasana #3](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=34m36s)  
[Navasana #4](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=34m50s)  
[Navasana #5](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=35m09s)  
[Vinyasa﻿ #20](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=35m47s)  
[Bhujapidasana "Arm Pressure Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=36m02s)  
[Vinyasa﻿ #21](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=36m21s)  
[Kurmasana "Tortoise Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=36m39s)  
[Supta Kurmasana "Sleeping Tortoise Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=37m10s)  
[Vinyasa﻿ #22](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=37m38s)  
[Garbha Pindasana "Womb Embryo Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=37m51s)  
[Kukkutasana "Cock Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=39m10s)  
[Vinyasa﻿ #23](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=39m22s)  
[Baddha Konasana "Bound Angle Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=39m34s)  
[Vinyasa﻿ #24](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=40m19s)  
[Upavishta Konasana "Seated Angle Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=40m30s)  
[Vinyasa﻿ #25](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=41m06s)  
[Supta Konasana "Sleeping Angle Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=41m18s)  
[Vinyasa﻿ #26](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=42m11s)  
[Supta Padangusthasana A Right "Sleeping Big Toe Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=42m25s)  
[Supta Padangusthasana B Right](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=42m40s)  
[Supta Padangusthasana C Right](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=42m57s)  
[Supta Padangusthasana A Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=43m13s)  
[Supta Padangusthasana B Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=43m34s)  
[Supta Padangusthasana C Left](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=43m49s)  
[Vinyasa﻿ #27](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=44m07s)  
[Ubhaya Pandagusthasana "Both Feet Big Toe Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=44m27s)  
[Vinyasa﻿ #28](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=44m53s)  
[Urdhva Mukha Paschimottanasana "Upward Facing Western Intense Stretch Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=45m07s)  
[Vinyasa﻿ #29](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=45m41s)  
[Setu Bandhasana "Bridge Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=45m53s)  
[Vinyasa﻿ #30](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=46m30s)  
[Finishing Sequence](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=46m45s)  
[Urdhva Dhaurasana #1 "Upward Bow Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=46m55s)  
[Urdhva Dhaurasana #2](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=47m15s)  
[Urdhva Dhaurasana #3](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=47m27s)  
[Paschimottanasana A "Western Intense Stretch Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=47m39s)  
[Rest](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=48m39s)  
[Salamba Sarvangasana "Whole Body Supported Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=48m55s)  
[Halasana "Plow Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=49m41s)  
[Karnapidasana "Ear Pressure Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=50m02s)  
[Urdhva Padmasana "Upward Lotus Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=50m19s)  
[Pindasana "Embryo Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=50m53s)  
[Matsyasana "Fish Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=51m07s)  
[Uttana Padasana "Extended Leg Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=51m34s)  
[Vinyasa﻿ #31](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=51m52s)  
[Sirsasana A "Head Standing Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=52m02s)  
[Child Posture](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=52m54s)  
[Baddha Padmasana "Bound Lotus Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=53m05s)  
[Yogamudra ?](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=54m20s)  
[Broomadhya ?](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=54m37s)  
[Padmasana "Lotus Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=54m55s)  
[Tolasana "Scale Posture"](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=55m52s)  
[Laying flat in lotus](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=56m40s)  
[On elbows in lotus](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=57m08s)  
[On elbows legs horizontal](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=57m16s)  
[Child Posture](http://www.youtube.com/watch?v=bIoiPerB8_Y&cc_load_policy=1#t=57m20s)

**[Patanjali's Yoga Sutra - A Comparison](patanjani.html)  
  
Ashtanga (Eight Limb) Yoga**  
  
[**Patanjali 1.2:**](patanjani/book-1/12.html)  

The restraint of the modifications of the mind-stuff (CHITTA) is Yoga.  

  
**[Patanjali 2.29](patanjani/book-2/229.html):** The eight limbs of Yoga are:  

1) yama (abstinences)  

2) niyama (observances)  
3) asana (posture)  
4) pranayama (breath control)  
5) pratyahara (sense withdrawal)  
6) dharana (concentration)  
7) dhyana (meditation)  
8) samadhi (contemplation, absorption or superconscious state)  

[  
**Patanjali 2.30:**](patanjani/book-2/230.html) Yama consists of  

non-violence,  
truthfulness,  
non-stealing,  
continence,  
and non-greed  

  
[**Patanjali 2.32:**](patanjani/book-2/232.html) Niyama consists of  

purity,  
contentment,  
accepting but not causing pain (TAPAH),  
study of spiritual books (SVADHYAYA)  
and worship of God \[self-surrender\] (ISVARAPRANIDHANANI).  

  
[**Patanjali 1.33**:](patanjani/book-1/133.html)  

By cultivating attitudes of  
friendliness towards the happy,  
compassion for the unhappy,  
delight in the virtuous,  
and disregard toward the wicked,  
the mind-stuff retains  
its undisturbed calmness.  

  
[Translation by Sri Swami Satchidananda](http://www.amazon.com/Yoga-Sutras-Patanjali-Commentary-Satchidananda/dp/0932040381/ref=sr_1_1?ie=UTF8&qid=1311735074&sr=8-1)  
  

[![](../_/rsrc/1357253273552/yoga/i-choose-ashtanga/lotus-height=320&width=283.png)](http://www.johnhenrythompson.com/yoga/i-choose-ashtanga/lotus.png?attredirects=0)

  

Comments

[Sign in](https://accounts.google.com/ServiceLogin?continue=http://sites.google.com/a/johnhenrythompson.com/jht/yoga/i-choose-ashtanga&service=jotspot)|[Recent Site Activity](../system/app/pages/recentChanges.html)|[Report Abuse](http://sites.google.com/a/johnhenrythompson.com/jht/system/app/pages/reportAbuse)|[Print Page](javascript:;)|Powered By **[Google Sites](http://sites.google.com/site)**

window.jstiming.load.tick('sjl'); window.jstiming.load.tick('jl'); sites.Searchbox.initialize( 'sites-searchbox-search-button', {"object":\[\]}\['object'\], 'search-site', {"label":"Configure search options...","url":"/system/app/pages/admin/settings"}); gsites.HoverPopupMenu.createSiteDropdownMenus('sites-header-nav-dropdown', false); JOT\_setupNav("2bd", "Navigation", true); JOT\_addListener('titleChange', 'JOT\_NAVIGATION\_titleChange', 'COMP\_2bd'); new sites.CommentPane('//docs.google.com/comments/d/AAHRpnXtRMj1XgBLQa4Y22KDIypZzMBseQwT3ox3jtLpaJLSiQKFmu7Q4t4zH7E7DViM8FmDNvkmKBmBb4wDT6Axks4x19KCcNA2dMD\_52U959U4DNcrp2hbOK7biWyCcJCJxU-BiOIMy/api/js?anon=true', false, false); setTimeout(function() { var fingerprint = gsites.date.TimeZone.getFingerprint(\[1109635200000, 1128902400000, 1130657000000, 1143333000000, 1143806400000, 1145000000000, 1146380000000, 1152489600000, 1159800000000, 1159500000000, 1162095000000, 1162075000000, 1162105500000\]); gsites.Xhr.send('http://www.johnhenrythompson.com/\_/tz', null, null, 'GET', null, null, { afjstz: fingerprint }); }, 500); window.onload = function() { if (false) { JOT\_setMobilePreview(); } var loadTimer = window.jstiming.load; loadTimer.tick("ol"); loadTimer\["name"\] = "load," + webspace.page.type + ",user\_page"; window.jstiming.report(loadTimer, {}, 'http://csi.gstatic.com/csi'); } JOT\_insertAnalyticsCode(false, false); var maestroRunner = new gsites.pages.view.SitesMaestroRunner( webspace, "en"); maestroRunner.initListeners(); maestroRunner.installEditRender(); //<!\[CDATA\[ // Decorate any fastUI buttons on the page with a class of 'goog-button'. if (webspace.user.hasWriteAccess) { JOT\_decorateButtons(); } // Fires delayed events. (function() { JOT\_fullyLoaded = true; var delayedEvents = JOT\_delayedEvents; for (var x = 0; x < delayedEvents.length; x++) { var event = delayedEvents\[x\]; JOT\_postEvent(event.eventName, event.eventSrc, event.payload); } JOT\_delayedEvents = null; JOT\_postEvent('pageLoaded'); })(); //\]\]> JOT\_postEvent('decorateGvizCharts'); JOT\_setupPostRenderingManager(); JOT\_postEvent('renderPlus', null, 'sites-chrome-main'); sites.codeembed.init();

window.jstiming.load.tick('render'); JOT\_postEvent('usercontentrendered', this);