
var imgPointer=0;

window.onload=function(){/*
	var bannerHandle=document.getElementById('banner-handle');
	while(1){
		console.log(bannerHandle.scrollLeft);
		
	}*/
	scrollBanner('L');
	scrollBanner('R');
	autoScrollTimer = setTimeout(scrollBanner,3000,'R');
	console.log(' __  __     ______     ______  \n/\\ \\_\\ \\   /\\  __ \\   /\\__  _\\ \n\\ \\  __ \\  \\ \\  __ \\  \\/_/\\ \\/ \n \\ \\_\\ \\_\\  \\ \\_\\ \\_\\    \\ \\_\\ \n  \\/_/\\/_/   \\/_/\\/_/     \\/_/ \n                               \nDEBUG CONSOLE\tDEBUG MODE = OFF');
};
var autoScrollTimer;
function bannerScrolling(){
	clearTimeout(autoScrollTimer);
	autoScrollTimer = setTimeout(scrollBanner,4500,'R');
};

function scrollBanner(scrollDirection){//L or R
	bannerHandle=document.getElementById('banner-handle');
	var imgCount = (document.getElementById('banner-handle').childNodes.length-1)/2;
	if(scrollDirection=='L') imgPointer--;
	if(scrollDirection=='R') imgPointer++;
	//change the img
	if(imgPointer<0) imgPointer=imgCount-1;
	if(imgPointer>imgCount-1) imgPointer=0;
	//lim exec
	bannerHandle.scrollTo({
		left: (bannerHandle.scrollWidth/imgCount+1)*imgPointer,
		behavior: "smooth"
	});
//	console.log('['+imgPointer+'] '+((bannerHandle.scrollWidth/imgCount+1)*imgPointer));
};