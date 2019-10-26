 September « 2009 « John Henry Thompson Blog @import url( "../../wp-content/themes/classic2/style.css" );           

[John Henry Thompson Blog](../../index.md)
============================================

### [PHP IDE search](10/php-ide-search/index.md)

Filed under: [Webdev](../../category/webdev/index.html "View all posts in Webdev") — admin @ 10:52 am September 10, 2009

Notes from my search for an IDE for PHP.

I searched the web for info on PHP IDE:

“[Seven great PHP IDEs compared”](http://www.ibm.com/developerworks/library/os-php-ide/index.html)

“[The Big PHP IDE Test: Why Use One And Which To Choose](http://www.smashingmagazine.com/2009/02/11/the-big-php-ides-test-why-use-oneand-which-to-choose/)“

I need PHP IDE for MacOSX 10.5 / Intel.

You need a local server setup. I choose to use [macports](http://www.macports.org "macports") to install apache/php/mysql.

This was recommended buy  [fixing-my-php-woes-with-macports](http://iparrizar.mnstate.edu/~juan/urania/2008/08/14/fixing-my-php-woes-with-macports/ "fixing-my-php-woes-with-macports")

My brother recommended [mamp](http://www.mamp.info/en/index.html "mamp"), but since I had already used macports for another project I stuck with it.

  

Macports puts installed  in /opt/local/

I have PHP 5.2.9, mysql 5.0.77

I considered to first try [zend studio](http://shop.zend.com/en/zend-studio-for-eclipse.html "zend-studio") **but after installing I let the free trail lapse. Since it cost about $400, I decided to try another komodo commercial IDE, which is about $300.**

**Following the article “[Remote PHP Debugging on Intel-based Macs with Komodo](http://www.sysarchitects.com/node/22)“, I was able to get it running debug my local word press install. Success!**

For the Komodo, the xdebug module it came with did not work. I had to download and compiled xdebug:

sudo wget http://xdebug.org/files/xdebug-2.0.5.tgz

sudo tar xzf xdebug-2.0.5.tgz

cd xdebug-2.0.5

phpize

./configure –enable-xdebug

make

mkdir /usr/local/xdebug

cp modules/xdebug.so /usr/local/xdebug/

I added the following lines to /opt/local/etc/php.ini

JHT-macpro:bin jht$ grep xdebug /opt/local/etc/php.ini

;extension\_dir = “/opt/local/xdebug/”

zend\_extension=/opt/local/xdebug/xdebug.so

xdebug.remote\_enable=1

xdebug.remote\_handler=dbgp

xdebug.remote\_mode=req

xdebug.remote\_host=127.0.0.1

xdebug.remote\_port=9000

xdebug.idekey=komodo

Note I had to use the full path name to xdebug.so.

I next tried [Netbean](http://www.netbeans.org/features/index.html), a free IDE from Sun microsystems. I was able to use the same xdebug from Komodo install.

Netbean looks like the winner. Its free, well supported by a large company, and passes my initial test: debug wordpress on local install.

JHT-macpro:bin jht$ grep xdebug /opt/local/etc/php.ini

;extension\_dir = “/opt/local/xdebug/”

zend\_extension=/opt/local/xdebug/xdebug.so

xdebug.remote\_enable=1

xdebug.remote\_handler=dbgp

xdebug.remote\_mode=req

xdebug.remote\_host=127.0.0.1

xdebug.remote\_port=9000

xdebug.idekey=komod

Comments Off

*   Pages:
    *   [About](../../about/index.html "About")
*   Blogroll
    *   [Development Blog](http://wordpress.org/development/)
    *   [Documentation](http://codex.wordpress.org/)
    *   [Plugins](http://wordpress.org/extend/plugins/)
    *   [Suggest Ideas](http://wordpress.org/extend/ideas/)
    *   [Support Forum](http://wordpress.org/support/)
    *   [Themes](http://wordpress.org/extend/themes/)
    *   [WordPress Planet](http://planet.wordpress.org/)
*   Categories:
    *   [Uncategorized](../../category/uncategorized/index.html "View all posts filed under Uncategorized")
    *   [Webdev](../../category/webdev/index.html "View all posts filed under Webdev")
    *   [Wordpress](../../category/wordpress/index.html "View all posts filed under Wordpress")
*   Search:
    
      
    
*   Archives:
    *   [February 2010](../../2010/02/index.html "February 2010")
    *   [September 2009](index.html "September 2009")
    *   [August 2009](../08/index.html "August 2009")
*   Meta:
    *   [Log in](../../wp-login.php.md)
    *   [RSS](../../feed/index.rss "Syndicate this site using RSS")
    *   [Comments RSS](../../comments/feed/index.rss "The latest comments to all posts in RSS")
    *   [Valid XHTML](http://validator.w3.org/check/referer "This page validates as XHTML 1.0 Transitional")
    *   [XFN](http://gmpg.org/xfn/)
    *   [WP](http://wordpress.org/ "Powered by WordPress, state-of-the-art semantic personal publishing platform.")

Powered by [**WordPress**](http://wordpress.org/ "Powered by WordPress, state-of-the-art semantic personal publishing platform.")