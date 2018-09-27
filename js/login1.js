var oh4=document.getElementsByTagName('h4');
var oli=document.getElementsByTagName('li');
for (var i = 0; i < oh4.length; i++) {
	oh4[i].onmouseover=function() {
		for (var j = 0; j < oh4.length; j++) {
			if (oh4[j]==this) {
				oh4[j].className="select";
				oli[j].className="show";
			}else{
				oh4[j].className="";
				oli[j].className="";
			}
		}
	}
}