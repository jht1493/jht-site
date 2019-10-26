}  

  

![](images/johnhenry1.gif)

![](images/tin_publi.gif)

![](images/tin_cations.gif)

**[home](index.html) > [publications](publications.html) > interview 1995**

JHT interview 1995  
[1994](interview1994.html) 1995 [1997](interview1997.html) [1998](interview1998.html)

  
**interview for the lingo users journal  
(now out of print)**

**Background**

_This interview ran in the premier issue of Lingo User�s Journal. That issue is no longer available for reprint, but due to multiple requests, we�re rerunning the interview here._

_Editor�s note: After the original article ran, I had a number of comments from people that they liked the interview, but wished I hadn�t interrupted J.T. so much._

_In reality, I didn�t interrupt him - the phone did. He�d be halfway through a reply, and then the phone would ring (again) and his answer would trail off..._

_When he returned, we tried to get back on track. I suppose I could just write "(telephone rings)" all over the place in the article, but... oops, wait, I hear the phone ringing._

_The following is the transcript of an interview with John Thompson (the "Father of Lingo"). John has been the primary developer behind Lingo, and the person you can call to thank (or curse, depending on how your project is going). Remember, this interview was taken in 1995._

**Now, how did you get started? You're not even in San Francisco \[home of Macromedia\], right?**

Actually, that's a funny story too. I was interested in software from a very early age, from junior high school and got in mainly from the language side, and kind of converged onto the multimedia. I've always had a very strong interest in art - the visual arts... I was living in San Francisco, actually in Oakland - the Bay Area - and I was working for LucasFilms on an editing system. I was staging myself to move more towards media, using my computer skills to get more into the media industry, to see how it works. I was interested in not only the technical aspects, but how the whole production process works, and how to create tools that make those things acceptable.

Right now movie making, and even video making, is still an exclusive thing even with the home camera and stuff like that.

**And what year are we talking about? When did you work with LucasFilms?**

This was '85. I went to school in Boston, at MIT. While I was there, in '83 or '84 I started combining my interest in the visual arts with computer graphics... I started doing stuff at the media lab. I focused there on integrating my interest in multimedia into my computer science degree. I got a minor in visual studies where I got exposed to film making, graphic design, photography, all that... It was actually not well known, but there was a lot going on there in the visual arts in MIT. I did a lot of independent work ![](images/apart_05_mini.jpg)there, I built some 3-D graphics systems and an interface to broadcast equipment, some real-time video processing things, sort of like music video effects, and from that, that took me more into the video production end of things, and I was hired from there, that was '84, I got a job at the DroidWorks, on the EditDroid project, which we were building a non-linear editing system. This was before digital video, this was based on laser disks, and so that's how I ended in the Bay Area working in San Rafael.

**So, how'd you manage to go from LucasFilms to working for Macromedia?**

From the early days I was interested in the Macintosh, so I took that opportunity to start looking around for work on the Macintosh, and I got a Mac Plus and through some people at DroidWorks, actually the husband of one of the employees there, I got in touch with Marc \[Canter, founder of MacroMind, the original name of Macromedia\]. At that point Macromedia was based in Chicago and they were making VideoWorks and MusicWorks and GraphicWorks. They've been around for a while - they were one of the first major applications on the Macintosh. They were there from, I think they started in '84. I don't know if you know, but VideoWorks started out on even before the 512K Mac. It was quite a feat that it was able to run.

So I got in touch with Marc through this friend from DroidWorks and he said he was looking for someone to write the \[video\] accelerator - it was in a lot of ways similar to QuickTime. That was my first work with them.

**How did Lingo fit in, or where did that come from?**

I evolved from the accelerator to working on the color paint program in Director. This was still working remotely - I was in San Francisco and they were in Chicago, and then the company moved from Chicago to San Francisco about the same time I moved from San Francisco to New York.

**Sounds like they were following you!**

Yeah, well, we were kind of hop-scotching! Anyway, during the transition, the focus of the company wasn't really clear. Pretty much one of my interests was languages; I've been working on languages since high school. In high school I had written a BASIC interpreter and in college I wrote about three different versions of a Lisp environment, one that was on a PDP-12.

**Now, when you wrote your BASIC interpreter, was that for a class?**

No, it was just my personal interest. I wrote it for a, actually it was a pre-digital computer. It was one of these decimal computers that was used for business. It was like a 1950 or 1960 model IBM. A 1620 I think it was. It was on cards!

**Yeah, I remember those. My first programs were saved on punched paper tape.**

Yeah - no storage.

![](images/lws_1eng_icon.jpg)**Anyway, you got involved in Director and somehow you got roped into doing Lingo?**

Well, no, actually I integrated Lingo into Director 2.0 on my own initiative. I wanted to see some of my work on interactive languages that I had been using for interactive art in a commercial product.

**You were just part of the development crew at that point?**

Yeah, well I was still a contractor, or a consultant, but most of my time was spent with MacroMind products at that point. The company's focus at that point was 3-D Works. It was kind of an unsupervised project - what they had at that point was VideoWorks Interactive, which was a central, BASIC-like language hooked on to the animation engine and that was used for the Guided Tour on the Macintosh.

And that was where Lingo started - it was a replacement for that BASIC language. (We were using a BASIC language) that I think was copied out of an article in Dr. Dobbs, so it was a very rudimentary implementation of a BASIC interpreter - you had single character variable names, the variables were typed by their names...

**Yeah, I've done that. Like everything between I and N was an integer...**

Yeah. So Lingo was a replacement for that. It started out just incrementally, because I was doing interactive stuff myself and I wanted to use Director to do it, so first I plugged in the xobject stuff, which was some code I had set up to control video disk and some other stuff that I was using in my interactive art. So, xobjects went in from day one, and then I started putting in more of the traditional features you find in a language: recursion, untyped variables, all that kind of stuff.

**Now, back when you started, I assume Lingo is not quite the way you envisioned it back in the beginning. It's now worked into an object-oriented language.**

Actually, from its very first incarnation it was object-oriented. Back at that point - this was '87 - this was when C++ and Objective C were making headway and I've done a lot of research on Smalltalk and the Lisp environments.

**I know you're from a Lisp background - you're from a Smalltalk background too?**

Yeah, I had used Smalltalk in school and on my own. It's a great language, it's very elegant, has a long history of development. It has some problems, but it's actually far ahead of the implementations of interactive languages now. If you compare it to, say, ScriptX, Smalltalk is lightyears ahead in terms of performance and reliability.

It's making a headway now for people who want to migrate to the object-oriented technology and they don't have an investment in C.

**Yeah, I've noticed that. It's coming up as the alternative.**

Yes, and actually, when you go and weigh the costs it's like, well, even now if you go to C++ there's no garbage collection, the class libraries are pretty immature.

**The learning curve is pretty nasty.**

Yeah, and if you don't have that commitment, like if you're starting with COBOL, and you decide we're going to retrain everybody anyway, it's actually very cost-effective to go to Smalltalk. I think there's a Xerox PARC implementation that's been around for a long time and it's on all the major platforms. I know some people that are doing MIS work, and one of their strengths is that they do have skills in Smalltalk and can deploy stuff on all these platforms very quickly.

**Now what is Lingo written in? Is it written in C?**

It was written, originally, in Pascal, but now it's in C. There were two major rewrites... there was a first implementation of Lingo, which shipped out in Director 2.0, and that was a straight interpretive language; there was no pre-processing on the text or anything. Then there was a total rewrite to be a compiled P-code based language and that went out first in the Director Player for Windows, 3.1, that was...

**3.1.3, or whatever it was.**

Yeah. First in Director Player for Windows and then in Director 4. That was a pretty significant rewrite, because it was rewritten not only for performance, to be compiled, but it was also written to be portable. That's like the first chunk of Director that's been portable and it's been used in 3DO, and 3DO player...

**And they're looking at the PlayStation, and OS/2, and all that fun stuff...**

Yeah, so we're still reaping the benefits from that.

**Now, Bud Colligan \[CEO of Macromedia\] is talking about Common Lingo. What's going on with that?**

I'm not sure what he said, but the...

**Basically his implication was that Lingo, which is predominently, or if not only, in Director, would be available to all the different products, and that a subset of the language would be called, or just a variant of the language, or just the whole language would be called Common Lingo and it would be available to all the different products, or that's what he wants to work everything toward.**

Yeah, there's always been talk of that. We haven't set a firm schedule. It's something that, in terms of vision, that's been in place. In fact, the xobject stuff, originally, was made so that they could fit into MediaMaker and into 3D Works, and some of that stuff's been used in other products already, from the early days.

**Lingo's at a point where it's a scripting language. It lacks some features of more traditional languages, like the run-time components to, say, allocate memory and get a pointer back. Where do you want to see it go in the future, or where does Macromedia want to see it go in the future? Are they kind of happy with where it is right now, or do they want to see it turned into a full-blown language with a full-blown run-time library?**

I see Lingo as more of an interpretive environment, or high-performance instant language, like Smalltalk or Lisp, and there the direction is not so much to give you more access to the lower level stuff like pointers and blocks of memory, but to provide high-level constructs that are more powerful and take less training to manage.

**Yeah, but what I see is as more developers, traditional engineers, get in there, they start asking for, oh, I wish I had access to the memory structure for this, or whatever, and there's more demand as more traditional developer's get in there.**

Yeah, I think what you're talking about is a more open architecture.

**Yeah, but not only that, also extended, for instance... we were talking about allocating memory. There isn't anything to, say, specifically allocate memory from within Lingo. We don't really need it, it's a scripting language... you want it, you can write an xobject to do it. But obviously developers would be quite happy to have that kind of thing in there. Is Macromedia trying to stay focused on being a scripting language, or moving into being a more traditional language?**

It's definitely going to be a scripting language. I think there's a couple of features people want that would get integrated into it. One of the things would be better, more open, architecture, so you can do more things from an xobject, like being able access the lists from an xobject.

**Yeah, that's one of my enhancement requests. I have two: one is to create a list from an xobject and return it, and the other one is to be able to call a script handler from an xobject. \[Note: We now have these features, thanks to MOA. - Ed.\]**

Those type of things are definitely going to be, those are on the near horizon. I can't say when; that I put in a class of opening it up. The other type of features are other high-level language constructs... thing's you'd see in SmallTalk and ScriptX and Lisp: high-level constructs like media data types, and threads, being able to compile it down so that the parts of the language that you don't use are not there...

**You mean more optimization**

Yeah, more optimization. That's another area. Improvements to performance, like faster execution, and I'd like to see a smaller footprint. I want to improve the ease of use: make it more regular and consistent and add things like browsers and debuggers and just a more open architecture overall.

**One nice thing about Lingo and its incorporation into Director is that you can experiment with it for as much as you're comfortable; you can use as little or as much of it as you like.**

Yes, that is a nice part. I call that "scalability", where you can grow into the language.

**Now, you're working on a book, or just finishing one up, is that not correct?**

Right, I've got a book I've been doing with Hayden Press, called the Macromedia Director Lingo Workshop. It's targeted toward beginners & intermediates. It's specifically for the non-programmer's and introduces you to the basic elements. Near the end it introduces you to Object Oriented Programming, showing you the benefits of OOP.

**How big is it?**

It's got 14 chapters. It starts off introducing you to the Goto command and works from there. It comes with a CD with some 500 movies as samples.

**And when will it be out?**

It should be out in July.

**What are you doing now?**

Well, I've also been teaching part time for the last 6 years at NYU Tisch School of the arts in the Interactive Telecommunications Program. It is one of the few graduate programs in new media. The program is run by Ms. Red Burns, very dynamic and forward thinking person. And, of course, I'll still be working with Director.

The challenge with Director is to help people see the new potential with multimedia. Take Dazzeloids  \[by Rodney Greenblat\]. Now there's a tremendous product with actually very little in the way of Lingo - some goto's, and that's about it. But artistically, it's great.

![Meet the Dazzeloids](images/intv95_dazzeloids.jpg)**That's the nice thing about Director - it helps artists and other people create without having to be programmers.**

Yeah, it really is.

**Well, John, thank you for your time.**

Thank you.

[top](#topofpage)

**.........................................**

� 2001 John Henry Thompson - site by [Pixelyze](http://www.pixelyze.com/) & [CAGE](http://www.cage.nl/)

![](images/spacer.gif)