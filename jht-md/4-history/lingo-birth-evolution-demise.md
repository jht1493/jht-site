Lingo: Birth, Evolution, Demise. - John Henry Thompson - Invent Your Future   
    

[4\. History](../4-history.md)‎ > ‎

### Lingo: Birth, Evolution, Demise.

  
Lingo - scripting language for Macromedia Director
-----------------------------------------------------

\- predecessor to Flash/ActionScript & JavaScript  
\- For beginners  
\- Dynamic -- untyped
--------------------------------------------------------------------------------------------

\- Auto memory management  
\- Objects  
\- Cross Platform
----------------------------------------------------------

  

\-- Example of Lingo syntax of Fibonacci sequence

`on fib n`

`  if n <= 2 then return 1`

`  return fib(n-2) + fib(n-1)`

`end`

(Classic sequence attributed to Fibonacci should be called [pingala](../heros/pingala.md))

  

  

Lingo influenced by...
----------------------

  

  

  

  

  

  

  

  

  

  

  

  

  

SmallTalk  -- classes and objects
---------------------------------

    fib
      ^ self <= 2
        ifTrue: [ 1 ]
        ifFalse: [ (self - 2) fib + (self - 1) fib ]


--------------------------------------------------------------------------------------------------------

  

---

  

  

  

  

  

  

  

  

  

---

Lisp  -- symbolic -- atoms(symbols) and lists
---------------------------------------------

    (defun fibonacci (n &optional (a 0) (b 1) (acc ()))
      (if (zerop n)
          (nreverse acc)
          (fibonacci (1- n) b (+ a b) (cons a acc))))
    
    (fibonacci 5) ; ==> (0 1 1 2 3)


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  

---

  

---

  

  

  

  

  

  

  

  

  

  

BASIC - Beginner's All-purpose Symbolic Instruction Code
--------------------------------------------------------

2030 ARRAY F

2040 LET F\[0\] = 0

2050 LET F\[1\] = 1

2060 LET N = 1

2080 LET F\[N+1\] = F\[N\] + F\[N-1\]

2090 LET N = N + 1

2100 PRINT F\[N\];", ";

2120 IF N < 50 THEN GOTO 2080

  

  

---

  

---

  

  

  

other influences-peers:
-----------------------

\- ChatterBox Interpreter  
\- HyperTalk
----------------------------------------

\- ToolBook  
\- ScriptX
------------------------

\- mTropolis
------------

  

---

\- JavaScript
-------------

  
  
  
  
  
  
  
  
What's happening today?
-----------------------------------------------

  

---

  

---

ActionScript/Flash  
  -- Retired  
[  https://theblog.adobe.com/adobe-flash-update/](https://theblog.adobe.com/adobe-flash-update/)  
  "...stop updating and distributing the Flash Player at the end of 2020..."  
  
  
  
  

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  
  
  
  
Java  
\- strong typed  
\- classes  
  
  
  
  
  
  

--------------------------------------------------------------------

  

---

\- JavaScript
-------------

  



-------

function fib(n) {

if (n <= 2) return 1;

return fib(n\-2) + fib(n\-1);

}




--------------------------------------------------------------------------------

  

---

function fibonacci(num) {

var a \= 1, b \= 0, temp;

while (num \>= 0){

temp \= a;

a \= a + b;

b \= temp;

num\--;

}

return b;

}




---------------------------------------------------------------------------------------------------------------------------------------------

  

---

JavaScript  
  ECMA-262 -- June 1997  
  ECMAScript 3 -- December 1999  
  ECMAScript 5 -- December 2009  
  ECMAScript 2015 -- June 2015  
    http://es6-features.org  
  ECMAScript 2017 -- June 2017  
nodejs  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

Scratch  
\- For beginners  
\- Drag and drop blocks  
Scratch 1.0  
  Squeak -- dialect of Smalltalk  
Scratch 2.0  
  ActionScript  
Scratch 3.0  
  JavaScript  
  
  
  
codehs.com  
  
  
  
  
  
  
  
  
  

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  
Objective-C  
Swift
----------------------

