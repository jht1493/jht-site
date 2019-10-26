var NS = (document.layers) ? 1 : 0;
var IE = (document.all) ? 1: 0;

function openwin(url,width,height)
{	var w = width + 20;
	var h = height + 20;
	if ( IE ) {
		h = h + 15;
		w = w + 20;
	}
	zoomwin=open(url,"popup","width="+w+",height="+h+",status=1,scrollbars=1,resizable");
	if ( NS ) { zoomwin.focus(); }
}

function openpage(url,width,height,options)
{	var w = width + 20;
	var h = height + 20;
	if ( IE ) {
		h = h + 15;
		w = w + 20;
	}
	zoomwin=open(url,"popup","width="+w+",height="+h+",status=1,scrollbars=1,resizable=1"+options);
	if ( NS ) { zoomwin.focus(); }
}

function zoomimage(url,width,height,title,options)
{ var w = width + 22;
  var h = height + 42;
  if ( IE ) { h = h + 10; }
  zoomwin=open("","zi","width="+w+",height="+h+",status=0,menubar=0,resizable"+options);
  zoomwin.document.write('<html><head><title>'+title+'</title></head><body bgcolor="#E7EBCE">');
  zoomwin.document.write('<table border="0" cellpadding="2" cellspacing="0" width="100%">');
  zoomwin.document.write('<tr><td width="100%" align="center"><table border="1" cellpadding="0" cellspacing="0"><tr><td><img src="'+url+'" BORDER="0" WIDTH="'+width+'" HEIGHT="'+height+'"></td></tr></table></td>');
  zoomwin.document.write('</tr><tr><td width="100%" align="center"><form><div align="center"><center><p><input type="button" value="close" onclick="self.close()"></p>');
  zoomwin.document.write('</center></div></form></td></tr></table></body></html>');
  zoomwin.focus();
}
