}  

  

![](images/johnhenry1.gif)

![](images/tin_publi.gif)

![](images/tin_cations.gif)

**[home](index.md) > [publications](publications.md) > interview 1994**

JHT interview 1994  
1994 [1995](interview1995.md) [1997](interview1997.md) [1998](interview1998.md)

  
behind the curtain with john "jt" thompson

_by Terry Schussler_

**Background**

Welcome. This is the first in a series of one-on-one interviews with the programmers who have brought you innovative products at Macromedia. In this first interview, we talk to John Henry Michael Thompson who is known by his friends as "JT." JT is a 34-year old programmer at Macromedia who has worked on many Macromedia products, most particularly Macromedia Director. In fact, most of the Lingo language was invented and developed by JT.

Today he tele-commutes from Philadelphia, PA, where he lives with his wife and two sons. JT noted to me in the interview that his four year old son Pharoah was born when Director 2.0 shipped, and his two year old son Nile was born when Action! 1.0 shipped. JT is expecting a third child in August, so we should safely assume that Director for Windows will ship by then!

**How did you get the nickname "JT?"**

In college at MIT, the kids built their own networks, and everyone had to use a short name to log in. JT was what I used and it sort of stuck.

**Tell me about your background.![](images/intv94man.jpg)**

Academically, I�ve been involved with computers since high school - the Bronx High School of Science in Bronx, NY. I concentrated in mainly math, but I�ve always had a strong visual sense. I was either going to go to the Bronx Science or Music and Art which is the main art school there. I went on from there to MIT where I focused on computer languages, mainly LISP and interpretive languages - I was very interested in that - but I always had a strong need at that point to reconnect with the visual world - the aesthetic world. So, after about two years at MIT I took some time off and went back to New York and study just straight drawing and painting for a while. And then I went back to MIT and got refocused on integrating those two worlds, the engineering and the art side, so I focused on visual arts.

Once I started doing it, I found that there was a wealth of information and services at MIT to help in that direction so I got connected with the Visible Languages Workshop (VLW). This was a small group off to the side of MIT which was doing color prepress stuff, this was back in 1981-82, this was before even the B&W Mac. (laughs)

They�re now integrated into the Media Lab. Their focus was really in line with what I was trying to do at that point which was to develop tools that brings the computer power to the designer. They were doing stuff that was pretty much on unique platforms, there was only a few one-of-a-kind full color frame buffers back then. They were running the same operating system as what ArcMac was running, which was a predecessor to what the Media Lab uses today. It was a custom built Unix-like workstation which you couldn�t find anywhere else in the world. It was a really unique environment but their focus was pretty much exactly where the Macintosh is today - making tools for the designer, bypassing all the intermediate levels of programmers and bringing all that horsepower as something useful, making the machine more fluid.

I focused there initially on 3D stuff - there was a set of 3D tools already at ArcMac which was really hard to use so I started doing a WYSIWYG interface for them. It was one of my undergraduate projects there.

My undergraduate thesis was in another information system type thing, \[(1983-84) - Newspeak or Nexis\], which was basically the kind of thing that you see coming up now where you have an agent going off and collecting information from the online services and creating a personalized newspaper for you. I wrote a visual map that showed the interconnections of various places that you went to in your visual database - your personal newspaper. It would actually go off and get the articles and format it - really like a paper - so it wasn�t screens full of text. It was color coded according to interest and laid out spatially according to how much interest you had. Interest articles got more space. The main feature was that it was dynamically laided out and as easy to read as your regular paper.

My main work though, pretty much underground, was taking advantage of the vlw and the film/video section there too that did personal documentary. Their focus was not doing major motion picture but very intimate documentaries - they tried to take the portable cinematography technology, 16mm, 8mm, and make it very accessible - and taught it from that perspective.

From that, my main personal work there was between those two departments and after I had the 3D stuff running on the VLW computer I got into realtime. I kind of hit the wall - you can spend all this time - processing time - constructing animation - it wasn�t really satisfying. So I thought of using the realtime image processing capabilities of the frame buffer to do some music video type stuff. We set up a link between the VLW computer and the high-end 1 inch broadcast quality video equipment that the film/video section had. It was basically modifying the frame buffer to output NSTC and creating a controller for the 1 inch video equipment. Basically building stuff by hand that now you can buy. It was fun, I did some animation and some music videos. We integrated this with live performances and 3D. I built some robots that would fly around to the music and break apart - stuff like that.

**So what did you do after you graduated?**

After graduation, I hung around MIT for a while and then decided to move to San Francisco because it was warmer. I got a job working at Lucas Film working in DroidWorks project. This meshed my goals at the time which was to learn more about the image making industry - film, video - and from the industry point of view but without getting tied up into it too much. I did work there mainly on the EditDroid system which was a nonlinear video disc based editing system which they were trying to productize.

It was a great experience for me because I got a beeline right into all the high end video post productions places. They showed me how they cut their films and how the while thing worked - and got a look at another startup.

In parallel with all of this, I got to see the Mac from day one. We saw the Mac, a small group of entrepreneurs I was working with, and we said �yeah this is the machine, let�s clone it!�

![](images/resume_83jt_pc.jpg)We were very proud to be one of the first to clone MacPaint for the 8086-based PC - it was a product called TelePaint. It was integrated graphic telecommunications product.

**TelePaint let you do cooperative painting with modems? That�s pretty cool.**

Yes, but I�m more proud that we faithfully cloned MacPaint. We had undo�s and flips and lassos - all that kind of stuff. We were way ahead of the time - we had to pretty much build the windowing system. I wrote all the graphic libraries for that and the image encryption code.

Even though I was doing all of that workstation stuff, I still wanted to do stuff on the Mac from that day one - I was just waiting for the right opportunity. With the Mac I saw the merger of the highend stuff that was happening at ArcMac and the VLW in terms of ease of use and the graphic user interface with something that could happen on the desktop without all that highend custom hardware. When Lucas Film shut down the DroidWorks, I took my severance pay and bought a Mac Plus.

I started coding on it, playing around and getting used to Think C and thought �this is what I want to do.� Through a friend and some associates at DroidWorks I met Marc Canter. Then I started working on the original Accelerator which was a predecessor to QuickTime - the same concept - digital video stuff optimized to make playback of Director movies faster.

**Had you had any experience with VideoWorks at the time?**

No, I didn�t. \[Marc Canter\] showed it to me. Actually it was very similar to the direction that we had been headed in the development of the realtime processing stuff. Rather than look at stuff and build tools which were based on the 3D metaphor where you go off, render, then comeback and look at your effect, I was starting to do stuff based on the limitations on what you can do in real time on the machine. It was nice to see a tool which was like that - it was all WYSIWYG.

**Tell me about how you transitioned from working on Accelerator to a regular relationship with Marc and MacroMind.**

I�ve always worked with small groups of entrepreneurs in that kind of area - so \[working on Accelerator\] was right in line with what I wanted to do. So we just hit it off, and kept on working together. It was a small group then so we just worked on what needed to be done. First Accelerator, then Color Accelerator, then integrating Accelerator into Director...

**So before there was a color Accelerator there was one which was just black and white?**

Well, we never shipping it, but yes the first version just worked in black and white. I started working on it when there was no Mac II yet. I had to wait until I could physically get a Mac II...(laughs)...so the first Mac II I got was used to build the color Accelerator.

**How did you and the others at Macromind work together?**

In the early part I was contracted to do the Accelerator. The Paint program was the next project I got assigned. It evolved from code in CheapPaint and GraphicsWorks - which were part of the Macromind Utilities Disks that were sold as a product.

**You were working on the Paint program for VideoWorks?**

No, it was for Director 1.0. Actually what happened there was first, there was VideoWorks and then in the transition from Chicago to SF and getting their first injection of venture capital, instead of releasing VideoWorks Professional they released Director 1.0 - which had no interactivity. VideoWorks Interactive was still in this never-ending beta where they just gave out to a few people for about $500 and about two pages of documentation (laughs.)

During that transition from Chicago, I also started ripping out the language and replacing it with a more sophisticated, more HyperTalk-like language and replacing it for VideoWorks Interactive.

**There was a language in there but it was only internal?**

The original language was modelled after Basic . You had single character variable names, a very limited vocabulary, no structure in terms of handlers, no real string handling.

It was internal but it was sold one-on-one to other people. Apple used it for all of their guided tours... - there were maybe a couple of hundred people who were licensed the language - mainly people in doing simulations or in education.

**That was the language that was in the beta release of VideoWorks Interactive?**

Right. I didn�t work on it until after that. The original language was done by Jay Fenton. I started re-writing the language to make it more HyperTalk-like and putting in XObjects. That was pretty the main part of Director 2.0.

First they were going to ship a version of Director that was going to be called Director Interactive Toolkit, or something wacky, which was going to include the language and the XObject stuff but about a month before it shipped they changed their minds and decided that was a bad idea and decided to roll it into one product. That became Director 2.0. That really didn�t get any planning until the very end when the manuals needed to get put together. It was just me, Dan \[Sadowski\] and Al \[McNeil.\] At that point the company was so small it could only focus on one product at a time.

**When you finished Director 2.0, you had completely ripped out this old language, put this new one in and built extensibility into it. Was your thought at the time to make Director more competitive with HyperCard? Did you see deficiencies in HyperCard that you were hoping to address?**

Yeah, the only other authoring system at that time was HyperCard. Its benefits were its ease of use and its openness. The only way to to really address it was to make the language as easy to use as HyperTalk - hopefully borrow some of the ideas from it and also borrow some ideas from other object oriented languages. At that point I was researching object orientness in general - SmallTalk, Objective C - and I had background in LISP in terms of the kind of things that you can do interpretively, encapsulate data, recursion, that kind of stuff. So those ideas got synthesized into Lingo and XObjects. The notion of factories is borrowed from Objective C. The semantics of the interpretive language is borrowed from SmallTalk and LISP.

It�s interesting, right after \[Director 2.0\] shipped, the company began believing that it was at the end of its life cycle so they started work on Action! I think that Director has survived because it offers a more dynamic metaphor than the stacks concept of HyperCard.

**Director 4.0 has a tremendous amount of new Lingo keywords. Many of them provide a more object-oriented nature to the language. How do you feel that Lingo will continue to evolve as an object-oriented language?**

Yes, the Lingo changes in Director 4.0 were somewhat driven by the introduction of AppleScript. Another example of this is the birth and ancestor command.

I think in the future we will put the Score under Lingo control. This would allow users to create object-oriented templates which would simplify production development.

**What's your opinion of Apple's Media Language Programming Framework and Kaleida's ScriptX?**

I think ScriptX is a catch-up which deals with the substrate of multimedia authoring. These tools are pointing in the same directions - it comes down to performance and delivery - the issue of code migration. It�s like C - there�s hundreds of C compilers but it�s their performance and availability that distringuishes them. It�s the implementation of the language not the definition that makes the difference.

**How do you think the authoring metaphors will evolve?**

I would like to see it easy to switch back and forth between multiple visual metaphors and the underlying procedural code environment. There�s a need to provide a sense of flow between them. If there were a continuum of levels, the one you would use would depend on your level of commitment and level of expertise. No one view is appropriate for all tasks.

**Do you think that programming will become encapsulated to the point that there will no longer be a need to traditional procedural programming?**

I think that there will always be a need to get "under the hood" - every view will have compromise, there will be a need to get closer to the machine. More people will get familiar with using the tools to get their ideas implemented. They will then need to get underneath the metaphor presented by the tool. The demand for procedural programming skills will be very high. In fact the ability to work iteratively is a great strength of Director because the metaphor is very accessible.

**What percentage of the code in Director was re-written or new in the 4.0 release?**

Every line of code was touched because it went from Pascal to C - but that was just translation. In terms of new code, most of Lingo is new, which is about a third of Director�s code. The core of Lingo got rebuilt. All the new windows of the user interface got a new object-oriented framework. All of the text window, text editing, and the Cast window code is new.

**What's the coolest thing you've ever seen done in Director?**

(thinks for a while)

It�s tough to say because I haven�t been really blown away by anything - some of the earlier animations were very eye-opening though...

(thinks some more)

Let�s constrain the question to a commercial title...

Well, the most interesting has been Iron Helix, but I don�t play games on the computer that much so I�ve only just gone through a few scenes of it. I appreciated the response and stuff like that. It�s a not a single thing I see, a single piece, it�s more the variety that I see. Different people doing different things.

**What categories of content being developed in Director do you find the most interesting?**

The kid�s products - WordTales, Yearn2Learn PEANUTS - because I have kids I spend more time playing with those.

I don�t think that the potential has really been tapped. I spend a lot of time looking at these titles and theres still a long ways to go. It�s hard to be awed by any one title given their limitations and the potential that I have in my mind. Most of the time I look at these titles and think �oh, they should have done this, and this, and this...�

**Do you think Director will become an authoring tool for interactive television productions?**

That�s still pretty vague. It could evolve into doing that. its really not set up to do that right now. Where it has the most benefit is that people can prototype new interfaces very quickly to get a preview of those kinds of things until they have the actual underlying structure for two way communications.

My little two cents on interactive tv is that it still like a lot of the titles - they�re still wedded to the old metaphors. Just like HyperCard is thinking in the old static metaphor they still think that �oh you have interactive tv so that means there�s one producer thats spewing out all this stuff into the home�

As opposed to �there�s a media, just like the telephone conversation we�re having now, you and I, and the important thing is that the carrier can facilitate it or communicate it.� There�s no way in hell that you can create the hours of interactive tv that they project. Plus that type of media is not interesting. People are more interested in interacting with other peoples than with the computer. People can carried away with the technology so much that they forget that really evolves people is when they can use the technology to be in touch with more people, instead of more computers. (laughs)

Interactive tv should focus on remote access to other real world environments rather than synthetic worlds. I�d rather sit at home getting even just a camera view of a real beach rather than just a synthesized view. And with interactive tv, I�d rather have an interactive two-way voice and video communication with my family than interactive shopping. The nice thing there is that you�re not spending more time thinking about new "content" issues but rather how to make this use of the technology more transparent.

**What do you do for relaxation?**

I like to spend family time away from the computer. I�m in front of the computer so much I prefer to take them to the park, to the playground, to dance class. Real world stuff. I�d rather have \[my kids\] building video games than playing them.

**A lot of people don�t know that you�re also a teacher. Where do you teach and what's your motivation as a teacher?**

I teach "Interactive Video" at the Interactive Telecommunications Program at Tisch School of the Arts at New York Univerity. My long term objective is to create tools that make the creative process more accessible to the computer. I want to teach people how to do this as well. I�m particularly interested in increasing people�s media literacy.

An added advantage of teaching is it helps me keep in touch with Director users and how the product is actually used.

**What did you want to be when you were little?**

**![](images/intv94_color_dance.gif)**I wanted to design cars. I was doing isometric design drawings of cars - even though I hated being in them because I got carsick- because my father worked at Ford Motor Company painting cars. He would bring home those brochures with the futuristic cars. Then I wanted to be an architect and in junior high school I wanted to build computers - I wanted to get a PhD in computer science. I also wanted to be an artist too - a traditional artist - but this is my niche here.

**What do you think you will be doing in the year 2000?**

I�ll be teaching...I�m not sure...it�s not even that far away is it? I�d like to spend more time in Jamaica. I grew in two geographically different cultures (England and Jamaica) and I�d like my kids to spend time growing up in Jamaica and then ultimately Africa.

One of my visions is to create the Encyclopaedia Africanus. Just like you have the Encyclopaedia Brittannica, I�d like to create one on and about Africa. I�d like to travel around and have everyone say hello in their native language - there�s 1,500 different dialects. It�s a very rich opportunity in that it�s only now that Africans are talking for themselves, so there�s a lot of potential for fresh material.

The long term mission is to be a part of that somehow. To go back to the third world and bring some of this technology there and also come back with something that I can present to other people like travelogues or whatever.

**If people want to send you email, which email address should they use?**

dimage@apple.applelink.com

[top](#topofpage)

**.........................................**

� 2001 John Henry Thompson - site by [Pixelyze](http://www.pixelyze.com/) & [CAGE](http://www.cage.nl/)

![](images/spacer.gif)