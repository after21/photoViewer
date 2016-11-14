var image=document.getElementById("image");//获取图片
var links=document.getElementsByTagName("a");//获取链接
//var photo=document.getElementById("photos");//获取放置图片的div
function select(obj){
	for(var i=0;i<links.length;i++){
		links[i].setAttribute("class","");//清除所有链接的active类样式
	}
	obj.setAttribute("class","active");
	image.src=obj.href;
	// document.body.removeChild("img");
	// obj.setAttribute("class","active");
	// var image=document.createElement("img");
	// image.src=obj.href;
	// photo.appendChild(image);
	// for(var j=0;j<images.length;j++){
	// 	if(images[j].src.slice(-11)==obj.href.slice(-11)){
	// 		obj.setAttribute("class","active");
			
	// 	}
	// }
}
window.onload=function(){
	for(var k=0;k<links.length-1;k++){
		links[k].onclick=function(e){
			e.preventDefault();
			select(this);
		}
	}
}