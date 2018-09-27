//ClassName适配
	function byClass(className){//全局获取
		var tags=document.all?document.all:document.getElementsByTagName('*');
		var arr=[];
		for(var i=0;i<tags.length;i++){
			if(tags[i].className==className){
				arr.push(tags[i]);
			}
		}
		return arr;
	}
	function byClass2(parentId,className){//局部获取
		var parent=document.getElementById(parentId);
		var tags=parent.all?parent.all:parent.getElementsByTagName('*');
		var arr=[];
		for(var i=0;i<tags.length;i++){
			if(tags[i].className==className){
				arr.push(tags[i]);
			}
		}
		return arr;
	}


//tab切换
	var spans=document.getElementsByClassName("headRight")[0].getElementsByTagName("span");
	var contents=document.getElementsByClassName("content");

	var conLefts=document.getElementsByClassName("oulis");
	var conRights=document.getElementsByClassName("conRight");

	for(var i=0;i<spans.length;i++){//遍历
		spans[i].onclick=function(){
			for(var j=0;j<spans.length;j++){
				if(spans[j]==this){//匹配
					if(j==0){
						conRights[0].style.display="block";
						conLefts[0].id="lis";
						conLefts[1].id="";
						conLefts[2].id="";
						conRights[1].style.display="none";
						conRights[2].style.display="none";
					}
					if(j==1){
						conLefts[3].id="lis";
						conRights[3].style.display="block";
					}
					if(j==2){
						conLefts[4].id="lis";
						conLefts[5].id="";
						conRights[5].style.display="none";
						conRights[4].style.display="block";
					}
					spans[j].id="select";
					contents[j].style.display="block";
				}else{
					spans[j].id="";
					contents[j].style.display="none";
				}
			}
		}
	}
//二级标签的tab切换
	for(var m=0;m<conLefts.length;m++){//遍历
		conLefts[m].onclick=function(){
			for(var n=0;n<conLefts.length;n++){
				if(conLefts[n]==this){//匹配
					conLefts[n].id="lis";
					conRights[n].style.display="block";
				}else{
					conLefts[n].id="";
					conRights[n].style.display="none";
				}
			}
		}
	}


	//改密，注销效果
$(".titleImg3").on("click",function(){
	$(".headImg").toggle(1000);
	$(".titleImg3").toggle(1000);
})
$(".titleImg4").on("click",function(){
	$(".headImg").toggle(1000);
	$(".titleImg3").toggle(1000);
})

var btnautograph=document.getElementsByClassName("btnautograph")[0];
