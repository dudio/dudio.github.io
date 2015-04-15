﻿function setPosition(target, width, top, left, zIndex) {
	var $t = typeof(target)=='object' ? target : $(target);
	$t.width(width).css({
		position:	"relative",
		top:		top,
		left:		left,
		"z-index": 	zIndex || 3
	});
}

function setFont(target, color, fontSize, letterSpacing, bold, fontFamily, lineHeight) {
	var $t = typeof(target)=='object' ? target : $(target);
	$t.css({
		color:		color,
		"font-size":	fontSize,
		"letter-spacing": letterSpacing,
		"font-weight":	bold,
		height:		0
	});
	if(fontFamily) $t.css("font-family", "微軟正黑體Bold");
	if(lineHeight) $t.css("line-height", lineHeight);
}

function setTriPosition(target, top, left, c){
	var $t = $(target);
	var $p = $t.parent();
	if(c) alert((top-40)*100/$p.height()+","+left*100/$p.width());
	var newTop = $p.offset().top+$p.height()*top/100;
	var newLeft = $p.width()*left/100;
	$t.css("top",newTop+"px").css("left",newLeft+"px");
}

function setDimensions(){
	//設定各區塊高度
	var windowWidth = $("#worldEarthDay").width();
	var windowHeight = $(window).height();

	$("#worldEarthDay").css("font-size",windowWidth/100+"px");
	$("#topSec").height(windowWidth*0.438);
	$("#sec1").height(windowWidth*0.548);
	$("#sec2").height(windowWidth*0.567);
	$("#sec3").height(windowWidth*0.498);
	$("#sec4").height(windowWidth*0.567);

	$("#earth").css("top",windowWidth*15.2/100+"px");
	$("#slogan").css("top",-windowWidth*43/100+"px");

	$("#menu").css("top",windowHeight-windowWidth*0.13);

	//設定小三角尺寸
	var triWidth = windowWidth*0.0571/2;
	$(".upTri").css("border-width","0 "+triWidth+"px "+triWidth*1.732+"px "+triWidth+"px");
	$(".downTri").css("border-width",triWidth*1.732+"px "+triWidth+"px 0px "+triWidth+"px");

	//設定小三角座標
	setTriPosition("#upTri-1",-0.27,9.8);
	setTriPosition("#upTri-2",22,21.286);
	setTriPosition("#upTri-3",88.74,4.09);
	setTriPosition("#upTri-4",10.67,75.77);
	setTriPosition("#upTri-5",22,84.3);
	setTriPosition("#upTri-6",88.87,84.3);
	setTriPosition("#downTri-7",44.5,12.75);
	setTriPosition("#downTri-8",77.88,15.57);
	setTriPosition("#downTri-9",44.5,81.44);
	setTriPosition("#downTri-10",66.9,75.65);
	var l = 2.85;
	var t = 8.9;
	setTriPosition("#downTri-11",0,4.09);
	setTriPosition("#downTri-12",0,4.09+l*2);
	setTriPosition("#downTri-13",0,4.09+l*4);
	setTriPosition("#downTri-14",t,4.09+l*1);
	setTriPosition("#downTri-15",t,4.09+l*3);
	setTriPosition("#downTri-16",t*2,4.09+l*2);
	var l = 2.84;
	var t = -8.7;
	setTriPosition("#upTri-21",91.6,67.4);
	setTriPosition("#upTri-22",91.6,67.4+l*2);
	setTriPosition("#upTri-23",91.6,67.4+l*4);
	setTriPosition("#upTri-24",91.6+t,67.4+l*1);
	setTriPosition("#upTri-25",91.6+t,67.4+l*3);
	setTriPosition("#upTri-26",91.6+t*2,67.4+l*2);
	var l = 2.85;
	var t = 10;
	setTriPosition("#downTri-31",0,73.08);
	setTriPosition("#downTri-32",0,73.08+l*2);
	setTriPosition("#downTri-33",0,73.08+l*4);
	setTriPosition("#downTri-34",t,73.08+l*1);
	setTriPosition("#downTri-35",t,73.08+l*3);
	setTriPosition("#downTri-36",t*2,73.08+l*2);
	var l = -2.84;
	var t = -8.7;
	setTriPosition("#upTri-41",91.2,26.6);
	setTriPosition("#upTri-42",91.2,26.6+l*2);
	setTriPosition("#upTri-43",91.2,26.6+l*4);
	setTriPosition("#upTri-44",91.2+t,26.6+l*1);
	setTriPosition("#upTri-45",91.2+t,26.6+l*3);
	setTriPosition("#upTri-46",91.2+t*2,26.6+l*2);
}


$(function(){

	//添加元素
	$("#topSec").append("<img id='earth' src='images/earth.gif'>");
	$("#topSec").append("<br/><img id='slogan' src='images/slogan.png'>");
	//各區塊前方的icon
	$("#sec1 > .title").prepend("<img src='images/p1icon.png'>");
	$("#sec2 > .title").append("<img src='images/p2icon.png'>");
	$("#sec3 > .title").prepend("<img src='images/p3icon.png'>");
	$("#sec4 > .title").prepend("<img src='images/p4icon.png'>");
	//添加buy
	$(".product").append("<div class='buy'><div><div class='up'><div class='leftArrow'></div><div>&nbsp;BUY&nbsp;</div><div class='rightArrow'></div></div><div class='down'><div class='leftArrow'></div><div>&nbsp;BUY&nbsp;</div><div class='rightArrow'></div></div></div></div>");

	//添加變色小三角
	for(var i=1;i<=6;i++)
		$("#topSec").append("<div class='upTri' id='upTri-"+i+"''></div>");
	for(var i=7;i<=10;i++)
		$("#topSec").append("<div class='downTri' id='downTri-"+i+"''></div>");
	for(var i=11;i<=16;i++)
		$("#sec1").append("<div class='downTri' id='downTri-"+i+"''></div>");
	for(var i=21;i<=26;i++)
		$("#sec2").append("<div class='upTri' id='upTri-"+i+"''></div>");
	for(var i=31;i<=36;i++)
		$("#sec3").append("<div class='downTri' id='downTri-"+i+"''></div>");
	for(var i=41;i<=46;i++)
		$("#sec4").append("<div class='upTri' id='upTri-"+i+"''></div>");


	function changeColor(t) {
		var $t = $(t);
		var statu = $t.attr("statu");
		var key = Math.floor(Math.random()*6);
		var time = Math.random()*3000+1000;
		colorArray = ["#d1f684","rgb(0,191,132)","rgb(0,157,130)","rgb(1,119,120)","rgb(0,97,129)","#002373"];
		if($t.hasClass("downTri"))
			$t.animate({borderTopColor:colorArray[key]},time,function(){changeColor(t);});
		else
			$t.animate({borderBottomColor:colorArray[key]},time,function(){changeColor(t);});
	}

	$(".upTri,.downTri").each(function(){
		changeColor(this);
	});

	//視窗變動
	setDimensions();
	window.onresize=setDimensions;

	//共用CSS
	$(".sec").each(function(){
		$(this).find(".describe").first().css("font-style","italic");
	});


	//將product內的元素移至sec下方，方便使用relative定位
	$(".sec").each(function(i){
		var $t = $(this);
		i++;
		$t.children(".product").attr("class","product"+i).each(function(j){
			var $t = $(this);
			var href = $t.attr("link");
			var $sec = $t.parent();
			j++;
			var newClass = $t.attr("class")+"_"+j;
			$t.children().addClass(newClass).appendTo($sec).css("cursor","pointer").click(function(){
				document.location.href = href;
			});
		});
	});

	//將buy全部排到最後面~
	$(".buy").each(function(){
		var $t = $(this);
		$t.appendTo($t.parent());
	});

	//設定小區塊位置大小
	setPosition("#topSec > .title", "11.1%", "25.6%", "68.2%");
	setFont("#topSec > .title", "white", "1em", "0.12em", "bold", "", "1.504em");
	setPosition("#topSec > .describe", "11.1%", "28.6%", "68.2%");
	setFont("#topSec > .describe", "white", ".96em", "0em", "", "", "1.504em");

	//sec1
	setPosition("#sec1 > .title:first", "30%", "44.2%", "19.2%");
	setFont("#sec1 > .title:first", "rgb(1,46,163)", "5em", "0.03em", "bold", "", "1.504em");
	setPosition("#sec1 > .describe:first", "21.6%", "77.8%", "54.6%",100);
	setFont("#sec1 > .describe:first", "rgb(1,46,163)", "1.25em", ".06em", "bold", "", "1.504em");

	setPosition(".product1_1.title", "30%", "41.2%", "47.2%");
	setFont(".product1_1.title", "black", "1.4em", "", "bold", "", "1.504em");
	setPosition(".product1_1.describe", "25%", "20%", "47.2%");
	setFont(".product1_1.describe", "black", ".8em", "", "", "", "1.9em");
	setPosition(".product1_1.video", "22%", "20%", "24.2%");
	
	//設定youtube影片高度
	var $video = $(".video iframe");
	var videoWidth = $video.width();
	$video.height(videoWidth*0.6);

	setPosition(".product1_2.title", "30%", "60.2%", "24.2%");
	setFont(".product1_2.title", "black", "1.3em", ".045em", "bold", "", "1.4em");
	setPosition(".product1_2.describe", "11%", "67.2%", "24.3%");
	setFont(".product1_2.describe", "black", ".8em", "", "", "", "1.85em");

	//sec2
	setPosition("#sec2 > .title:first", "30%", "44.2%", "55%");
	setFont("#sec2 > .title:first", "rgb(1,46,163)", "5em", "0.03em", "bold", "", "1.504em");
	setPosition("#sec2 > .describe:first", "20.5%", "57.5%", "55%",100);
	setFont("#sec2 > .describe:first", "rgb(1,46,163)", "1.25em", ".06em", "bold", "", "1.504em");

	setPosition(".product2_1.title", "30%", "7.7%", "24.2%");
	setFont(".product2_1.title", "black", "1.4em", "", "bold", "", "1.504em");
	setPosition(".product2_1.describe", "25%", "12%", "24.2%");
	setFont(".product2_1.describe", "black", ".8em", "", "", "", "1.9em");

	setPosition(".product2_2.title", "30%", "25.2%", "55%");
	setFont(".product2_2.title", "black", "1.35em", "", "bold", "", "1.504em");
	setPosition(".product2_2.describe", "20.3%", "34.2%", "55.2%");
	setFont(".product2_2.describe", "black", ".8em", "", "", "", "1.9em");

	setPosition(".product2_3.title", "30%", "43%", "24.2%");
	setFont(".product2_3.title", "black", "1.4em", "", "bold", "", "1.4em");
	setPosition(".product2_3.describe", "13.2%", "52%", "24.2%");
	setFont(".product2_3.describe", "black", ".85em", "", "", "", "1.9em");

	setPosition(".product2_4.title", "30%", "75%", "24.2%");
	setFont(".product2_4.title", "black", "1.4em", "", "bold", "", "1.25em");
	setPosition(".product2_4.describe", "11.2%", "87%", "24.2%");
	setFont(".product2_4.describe", "black", ".85em", "", "", "", "1.9em");

	//sec3
	setPosition("#sec3 > .title:first", "30%", "2.2%", "24.2%");
	setFont("#sec3 > .title:first", "rgb(1,46,163)", "5em", "0.03em", "bold", "", "1.504em");
	setPosition("#sec3 > .describe:first", "25.6%", "3.8%", "49.6%",100);
	setFont("#sec3 > .describe:first", "rgb(1,46,163)", "1.25em", ".06em", "bold", "", "1.504em");

	setPosition(".product3_1.title", "30%", "54.7%", "24.3%");
	setFont(".product3_1.title", "black", "1.3em", "", "bold", "", "1.4em");
	setPosition(".product3_1.describe", "13.4%", "64.6%", "24.2%");
	setFont(".product3_1.describe", "black", ".8em", "", "", "", "1.9em");

	setPosition(".product3_2.title", "30%", "30.7%", "57.2%");
	setFont(".product3_2.title", "black", "1.3em", "", "bold", "", "1.504em");
	setPosition(".product3_2.describe", "18.1%", "42%", "57.4%");
	setFont(".product3_2.describe", "black", ".8em", "", "", "", "1.85em");

	//sec4
	setPosition("#sec4 > .title:first", "30%", "29.5%", "24.2%");
	setFont("#sec4 > .title:first", "rgb(1,46,163)", "5em", "0.03em", "bold", "", "1.504em");
	setPosition("#sec4 > .describe:first", "19.4%", "42.8%", "29.2%",100);
	setFont("#sec4 > .describe:first", "rgb(1,46,163)", "1.25em", ".06em", "bold", "", "1.504em");

	$("#sec4 > .describe:first").css("text-align","right");

	setPosition(".product4_1.title", "30%", "20.6%", "24.3%");
	setFont(".product4_1.title", "black", "1.3em", "", "bold", "", "1.4em");
	setPosition(".product4_1.describe", "21.8%", "24.6%", "24.2%");
	setFont(".product4_1.describe", "black", ".8em", "", "", "", "1.9em");

	setPosition(".product4_2.title", "30%", "4.2%", "65.3%");
	setFont(".product4_2.title", "black", "1.3em", "", "bold", "", "1.4em");
	setPosition(".product4_2.describe", "19.2%", "8.6%", "56.2%");
	setFont(".product4_2.describe", "black", ".8em", "", "", "", "1.9em");

	setPosition(".product4_3.title", "30%", "71.2%", "29.3%");
	setFont(".product4_3.title", "black", "1.3em", "", "bold", "", "1.4em");
	setPosition(".product4_3.describe", "15%", "78.2%", "29.3%");
	setFont(".product4_3.describe", "black", ".8em", "", "", "", "1.9em");

	setPosition(".product4_4.title", "30%", "72.4%", "65.2%");
	setFont(".product4_4.title", "black", "1.3em", "", "bold", "", "1.4em");
	setPosition(".product4_4.describe", "10.3%", "79.6%", "65.2%");
	setFont(".product4_4.describe", "black", ".8em", "", "", "", "1.9em");

	//主選單
	$("#menu > div").each(function(i){
		var $t = $(this);
		var $more = $t.find(".more").prependTo($t);
		var $other = $t.find(".icon,.title");
		$t.hover(function(){
			$t.animate({
				opacity: ".85"
			});
			$more.animate({
				top: "+=13em"
			});
			$other.animate({
				top: "+=13em"
			});
		},function(){
			$t.animate({
				opacity: "1"
			});
			$more.animate({
				top: "-=13em"
			});
			$other.animate({
				top: "-=13em"
			});
		}).click(function(){
			j=i+1;
			document.location.href="#sec"+j;
		});
	});

	$(".buy > div").each(function(){
		var $t = $(this);
		$t.hover(function(){
			$t.children().animate({top:"+=1.4em"});
		}, function(){
			$t.children().animate({top:"-=1.4em"});
		});
	});

	//主選單(縮)
	var $smallMenu = $("<div id='smallMenu'></div>").appendTo($("body"));
	$("#menu .title").each(function(i){
		var $div = $("<div>").click(function(){
			j=i+1;
			document.location.href="#sec"+j;
		});
		var title = $(this).text();
		$("<div>").addClass("more").text(title).appendTo($div);
		$("<div>").addClass("title").text(title).appendTo($div);
		$div.appendTo($("#smallMenu"));
	});

	$("#smallMenu > div").each(function(){
		var $t = $(this);
		var $more = $t.find(".more").prependTo($t);
		var $other = $t.find(".title");
		$t.hover(function(){
			$t.animate({
				opacity: ".85"
			});
			$more.animate({
				top: "+=1.6em"
			});
			$other.animate({
				top: "+=1.6em"
			});
		},function(){
			$t.animate({
				opacity: "1"
			});
			$more.animate({
				top: "-=1.6em"
			});
			$other.animate({
				top: "-=1.6em"
			});
		});
	});
	$(window).scroll(function(){
		var $menu = $("#menu");
		var $smallMenu = $("#smallMenu");
		var $window = $(window);
		var menuTop = $window.height()-$window.width()*0.13;
		var windowTop = $window.scrollTop();

		if($("#menu").is(":visible")) {
			if(windowTop>menuTop) {
				$menu.hide();
				$smallMenu.show();
			}
		} else {
			if(windowTop<menuTop) {
				$menu.show();
				$smallMenu.hide();
			}
		}

		//底圖變色
		var s1 = $("#sec1").offset().top;
		var s4 = $("#sec4").offset().top;
		var r = Math.max(Math.min(Math.round(204*(windowTop-s4)/(s1-s4)),255),0);
		var g = Math.max(Math.min(Math.round(83*(windowTop-s4)/(s1-s4)+161),255),0);
		$(".sec").css("background-color","rgb("+r+","+g+",132)");
	});
});