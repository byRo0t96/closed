/**/
function js_css_file(filename, filetype){
    if (filetype=="js"){
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
    }
    else if (filetype=="css"){
        var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }
	else if (filetype=="ico"){
		var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
		link.type = 'image/x-icon';
		link.rel = 'shortcut icon';
		link.href = filename;
		document.getElementsByTagName('head')[0].appendChild(link);
    }
    if (typeof fileref!="undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref);
	}
}


/**/
function loader() {	
	myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}


js_css_file("css/css.css", "css");
js_css_file("css/fonts/Iceland/Iceland.css", "css");
js_css_file("img/Ro0t-96_v3.ico", "ico");

loader();
document.title="Ro0t96 | Official Website";

/**/
$(function () {
  count = 0;
  wordsArray = ["تم إغلاق الموقع للتجديد.", "サイトは改装のため閉鎖されました。", "Site yenileme için kapatıldı.", "The site was closed for renovation."];
  setInterval(function () {
    count++;
    $("#text").fadeOut(400, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
    });
  }, 2000);
});
/**/


