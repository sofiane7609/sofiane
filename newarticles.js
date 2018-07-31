function showrecentpostswiththumbs(json) {
var displayseparator = true;
document.write('<ul class="articles_recents">'); for (var i = 0; i < nbmess; i++) {var entry = json.feed.entry[i];var posttitle = entry.title.$t;var posturl;if (i == json.feed.entry.length) break;for (var k = 0; k < entry.link.length;k++){
if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){var commenttext=entry.link[k].title;var commenturl=entry.link[k].href;}
if (entry.link[k].rel == 'alternate') {posturl = entry.link[k].href;break;}}var thumburl;try {thumburl=entry.media$thumbnail.url;}catch (error)
{s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){
thumburl=d;} else thumburl='http://www.webaholic.co.in/other/no-image.jpg';}
var postdate = entry.published.$t;var cdyear = postdate.substring(0,4);var cdmonth = postdate.substring(5,7);var cdday = postdate.substring(8,10);var monthnames = new Array();monthnames[1] = ".1";monthnames[2] = ".2";monthnames[3] = ".3";monthnames[4] = ".4";monthnames[5] = ".5";monthnames[6] = ".6";monthnames[7] = ".7";monthnames[8] = ".8";monthnames[9] = ".9";monthnames[10] = ".10";monthnames[11] = ".11";monthnames[12] = ".12";document.write('<li class="clearfix">');

if(aff_images==true) 
document.write('<img class="article_recent" src="'+thumburl+'"/>');
document.write('<b><a href="'+posturl+'" target ="_top">'+posttitle+'</a></b>');

 if ("content" in entry) {
 var postcontent = entry.content.$t;}
 else
 if ("summary" in entry) {
 var postcontent = entry.summary.$t;}
 else var postcontent = "";
 var re = /<\S[^>]*>/g; 
 postcontent = postcontent.replace(re, "");


if (aff_resum == true) {

 if (postcontent.length < aff_nb_car) {
 document.write('<i>');
 document.write(postcontent);
 document.write('</i>');}
 else {
 document.write('<i>');
 postcontent = postcontent.substring(0, aff_nb_car);
 var quoteEnd = postcontent.lastIndexOf(" ");
 postcontent = postcontent.substring(0,quoteEnd);
 document.write(' '+postcontent + '...');
 document.write('</i>');}
}

var towrite='';var flag=0;
document.write('<strong>');

if(aff_date==true) {towrite=towrite+' '+cdday+monthnames[parseInt(cdmonth,10)]+'.'+cdyear;flag=1;}

if(aff_nb_comm==true) 
{
if (flag==1) {towrite=towrite+' | ';}
if(commenttext=='1 Comments') commenttext='1 Comment';
if(commenttext=='0 Comments') commenttext='no Comment';
if(commenttext=='1 commentaires') commenttext='1 commentaire';
if(commenttext=='0 commentaires') commenttext='pas de commentaire';
towrite=towrite+commenttext;
flag=1;
;
}

if(aff_lire_suite==true) 
{
if (flag==1) towrite=towrite+' | ';
towrite=towrite+'<a href="'+posturl+'" class="url" target ="_top">Lire la suite ...</a>';
flag=1;
;
}
document.write(towrite);
document.write('</strong></li>');
}document.write('</ul>');
}
