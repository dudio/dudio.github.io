function setPosition(target, width, top, left, zIndex) {
	var $t = typeof(target)=='object' ? target : $(target);
	$t.width(width);
	if($t.css("position")!="absolute") {
		$t.css({
			position: "relative", 
			top:		top,
			left:		left,
			"z-index": 	zIndex || 3
		});
	} else {
		$t.css({
			top:		top,
			left:		left,
			"z-index": 	zIndex || 0
		});

		$t.css("top", $t.offset().top+$("header").height());
	}
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
	if(fontFamily) $t.css("font-family", '"微軟正黑體Bold", "Microsoft JhengHei Bold"');
	if(lineHeight) $t.css("line-height", lineHeight);
}

function setTriPosition(target, top, left, docOffset){
	var $t = $(target);
	var $p = $t.parent();
	var newTop = $p.offset().top+$p.height()*top/100;
	var newLeft = $p.width()*left/100 + docOffset;
	$t.css("top",newTop+"px").css("left",newLeft+"px");
}

function setDimensions(){
	//設定各區塊高度
	var $world = $("#worldEarthDay");
	var worldWidth = $world.width();
	var $window = $(window);
	var windowWidth = $window.width();
	var windowHeight = $window.height();

	$("body").css("overflow-x",(windowWidth<1000)?"scroll":"hidden");

	$world.css("font-size",	worldWidth/100+"px");
	$("#topSec").height(worldWidth*0.438);
	$("#sec1").height(worldWidth*0.548);
	$("#sec2").height(worldWidth*0.567);
	$("#sec3").height(worldWidth*0.498);
	$("#sec4").height(worldWidth*0.567);

	$("#earth").css("top",worldWidth*15.2/100+"px");
	$("#slogan").css("top",-worldWidth*43/100+"px");

	//var docOffset = windowWidth<1920 ? Math.max((windowWidth - worldWidth)/2,-380) : 0;
	var docOffset = Math.max((windowWidth - worldWidth)/2,-460);
	$world.css("margin-left", docOffset);
	var docWidth = worldWidth+docOffset*2;

	//設定小三角尺寸
	var triWidth = worldWidth*0.0571/2;
	$(".upTri").css("border-width","0 "+triWidth+"px "+triWidth*1.732+"px "+triWidth+"px");
	$(".downTri").css("border-width",triWidth*1.732+"px "+triWidth+"px 0px "+triWidth+"px");

	triWidth = worldWidth*0.0571;
	$(".upWhiteTri").css("border-width","0 "+triWidth+"px "+triWidth*1.732+"px "+triWidth+"px");
	$(".downWhiteTri").css("border-width",triWidth*1.732+"px "+triWidth+"px 0 "+triWidth+"px");
	$("#tri-57").css("border-width","0 0 "+triWidth*1.732+"px "+triWidth+"px");
	triWidth = worldWidth*0.0571*1.2;
	$("#tri-56").css("border-width","0 "+triWidth+"px "+triWidth*1.732+"px 0");
	
	triWidth = worldWidth*0.0571*2*1.3;
	$("#tri-52").css("border-width",triWidth*1.732+"px "+triWidth+"px 0 "+triWidth+"px");
	

	//設定小三角座標
	setTriPosition("#upTri-1",-0.27,9.8, docOffset);
	setTriPosition("#upTri-2",22,21.286, docOffset);
	setTriPosition("#upTri-3",88.8,4.12, docOffset);
	setTriPosition("#upTri-4",10.67,75.77, docOffset);
	setTriPosition("#upTri-5",22,84.3, docOffset);
	setTriPosition("#upTri-6",88.8,84.3, docOffset);
	setTriPosition("#downTri-7",44.5,12.75, docOffset);
	setTriPosition("#downTri-8",77.95,15.66, docOffset);
	setTriPosition("#downTri-9",44.5,81.44, docOffset);
	setTriPosition("#downTri-10",66.9,75.73, docOffset);
	var l = 2.85;
	var t = 8.9;
	setTriPosition("#downTri-11",0,4.2, docOffset);
	setTriPosition("#downTri-12",0,4.2+l*2, docOffset);
	setTriPosition("#downTri-13",0,4.2+l*4, docOffset);
	setTriPosition("#downTri-14",t,4.2+l*1, docOffset);
	setTriPosition("#downTri-15",t,4.2+l*3, docOffset);
	setTriPosition("#downTri-16",t*2,4.2+l*2, docOffset);
	var l = 2.84;
	var t = -8.7;
	setTriPosition("#upTri-21",91.3,67.4, docOffset);
	setTriPosition("#upTri-22",91.3,67.4+l*2, docOffset);
	setTriPosition("#upTri-23",91.3,67.4+l*4, docOffset);
	setTriPosition("#upTri-24",91.3+t,67.4+l*1, docOffset);
	setTriPosition("#upTri-25",91.3+t,67.4+l*3, docOffset);
	setTriPosition("#upTri-26",91.3+t*2,67.4+l*2, docOffset);	
	var l = 2.85;
	var t = 10;
	setTriPosition("#downTri-31",0,73.08, docOffset);
	setTriPosition("#downTri-32",0,73.08+l*2, docOffset);
	setTriPosition("#downTri-33",0,73.08+l*4, docOffset);
	setTriPosition("#downTri-34",t,73.08+l*1, docOffset);
	setTriPosition("#downTri-35",t,73.08+l*3, docOffset);
	setTriPosition("#downTri-36",t*2,73.08+l*2, docOffset);
	var l = -2.84;
	var t = -8.7;
	setTriPosition("#upTri-41",91.3,26.6, docOffset);
	setTriPosition("#upTri-42",91.3,26.6+l*2, docOffset);
	setTriPosition("#upTri-43",91.3,26.6+l*4, docOffset);
	setTriPosition("#upTri-44",91.3+t,26.6+l*1, docOffset);
	setTriPosition("#upTri-45",91.3+t,26.6+l*3, docOffset);
	setTriPosition("#upTri-46",91.3+t*2,26.6+l*2, docOffset);

	setTriPosition("#tri-51", 75, 70, docOffset);
	setTriPosition("#tri-52", 51.8, 23.9, docOffset);
	setTriPosition("#tri-53", 6.65, 18.2, docOffset);
	setTriPosition("#tri-54", 28.75, 52, docOffset);
	setTriPosition("#tri-55", 0, 51.1, docOffset);
	setTriPosition("#tri-56", 75.8, 31.7, docOffset);
	setTriPosition("#tri-57", 83.5, 37.5, docOffset);

	setPosition("#tri-h1",0.115*worldWidth,61.5*worldWidth/100,0.499*worldWidth+docOffset);
	setPosition("#tri-h2",0.115*worldWidth,75.4*worldWidth/100,0.189*worldWidth+docOffset);
	setPosition("#tri-h3",0.115*worldWidth,107.7*worldWidth/100,0.624*worldWidth+docOffset);
	setPosition("#tri-h4",0.115*worldWidth,137.6*worldWidth/100,0.181*worldWidth+docOffset);
	setPosition("#tri-h5",0.115*worldWidth,177.4*worldWidth/100,0.181*worldWidth+docOffset);
	setPosition("#tri-h6",0.115*worldWidth,214.4*worldWidth/100,0.181*worldWidth+docOffset);
	setPosition("#tri-h7",0.115*worldWidth,242.1*worldWidth/100,0.685*worldWidth+docOffset);
	setPosition("#tri-h8",0.115*worldWidth,243.7*worldWidth/100,0.237*worldWidth+docOffset);

	$("#line-1").height(0.1*worldWidth).css({
		top: 1488,
		left:-180+docOffset
	});

	$("#line-2").height(0.1*worldWidth).css({
		top: 2106,
		left:1361+docOffset
	});

	$("#line-3").height(0.1*worldWidth).css({
		top: 2681,
		left:-196+docOffset
	});

	$("#line-4").height(0.1*worldWidth).css({
		top: 3710,
		left:1256+docOffset
	});

	$("#line-5").height(0.1*worldWidth).css({
		top: 4156,
		left:-198.2+docOffset
	});

	$("#maskBar-1").css({
		top: 1850,
		left:617+docOffset
	});

	$("#maskBar-2").css({
		top: 118.8*worldWidth/100,
		left:0.287*worldWidth+docOffset
	});

	$("#maskBar-3").css({
		top: 2482,
		left:630+docOffset
	});
	$("#maskBar-4").css({
		top: 3684,
		left:1217.5+docOffset 
	});

	$("#maskBar-5").css({
		top: 4170.6,
		left:1295.32+docOffset
	});

	$("#maskBar-6").css({
		top: 4539,
		left:1187+docOffset
	});
}


$(function(){
	$("<div></div>").addClass("maskBar").attr("id","maskBar-1").appendTo("body");
	$("<div></div>").addClass("maskBar").attr("id","maskBar-2").appendTo("body");
	$("<div></div>").addClass("maskBar").attr("id","maskBar-3").appendTo("body");
	$("<div></div>").addClass("maskBar").attr("id","maskBar-4").appendTo("body");
	$("<div></div>").addClass("maskBar").attr("id","maskBar-5").appendTo("body");
	$("<div></div>").addClass("maskBar").attr("id","maskBar-6").appendTo("body");

	//手機版
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$("#worldEarthDay,.maskBar").remove();
		$("").remove();

setTimeout(function(){

		$("header").css({
			display: "absolute"
		});

		var windowWidth = $("#mobile-worldEarthDay").width();
		var windowHeight = $(window).height();
		var dx = windowWidth/764;

//		console.log(windowWidth);

		//設定topSec底圖
		$("#mobile-topSec").height(windowHeight);
		$("#mobile-worldEarthDay").css("font-size", windowWidth*0.04);

		var earthWidth = windowHeight*1017/931;
		$("#mobile-earth")
			.width(earthWidth)
			.css("top",windowHeight*.3324)
			.css("left",-windowHeight/200);
		if(earthWidth > windowWidth) $("#mobile-earth").css("left", (windowWidth-earthWidth)/2-windowHeight/200);

		//設定sec底圖
		$(".sec").each(function(){
			var $t = $(this);
			var bg = $t.find(".mback > img").attr("src");
			$t.css("background-image", "url('"+bg+"')");
		});
		$(".mback").remove();

		$("#mobile-worldEarthDay .product:even").css("text-align", "right");

		//添加buy
		$(".product").append("<div class='buy'><div class='leftArrow'></div> <div>&nbsp;BUY&nbsp;</div> <div class='rightArrow'></div></div>");
		
		$("#mobile-sec1 > .describe").height(215*dx);

		//設定youtube影片高度
		var $video = $(".video iframe");
		var videoWidth = $video.width();
		$video.height(videoWidth*0.6);
		$(".video").height(videoWidth*0.75);

		$("body").css("background-color","rgb(72,204,131)");


		$(".product").each(function(i){
			var $t = $(this);
			var href = $t.attr("link");
			$t.css("cursor","pointer").click(function(){
				document.location.href = href;
			});
		});

		$("#mobile-menu > div").each(function(i){
			var $t = $(this);
			var j = i+1;
			$t.click(function(){
				document.location.href = "#mobile-sec"+j;
			});
		});

		var lastScrollTop = 0;
		$(window).scroll(function(event){
			var s1 = $("#mobile-sec1").offset().top-20;
			var s2 = $("#mobile-sec2").offset().top-20;
			var s3 = $("#mobile-sec3").offset().top-20;
			var s4 = $("#mobile-sec4").offset().top-20;
			var tar;
			var st = $(this).scrollTop();
			if(st >= s1 && st < s2) tar = 1;
			else if(st >= s2 && st < s3) tar = 2;
			else if(st >= s3 && st < s4) tar = 3;
			else if(st >= s4) tar = 4;
			else tar = 0;
			$("#mobile-menu > div").removeClass("on");
			if(tar) $("#mobile-menu > div").eq(tar-1).addClass("on");
			if (st > lastScrollTop){
				$("#mobile-menu").hide();
			} else {
				$("#mobile-menu").show();//.css("top",st+$(this).height()-$("#mobile-menu").height());
			}
			lastScrollTop = st;
			var top = $("#p4-4 img").offset().top+$("#p4-4 img").height()-$(window).height()+100;
			if(st>top)
				window.scrollTo(0,top);
		});
		$("html,body").height($("#p4-4").offset().top+$("#p4-4").height());
},100);
		return;
	}
	$("#mobile-worldEarthDay").remove();

	//會亂跑的斜線
	$(".lineA").wrap("<div id='line-1'></div>");
	$("#line-1").addClass("line").clone().attr("id","line-2").insertAfter($("#line-1"));
	$("#line-1").clone().attr("id","line-3").insertAfter($("#line-2"));
	$("#line-1").clone().attr("id","line-4").insertAfter($("#line-3"));
	$("#line-1").clone().attr("id","line-5").insertAfter($("#line-4"));

	//添加空白三角框
	$(".upWhiteTri-h").attr("id","tri-h1").prependTo("worldEarthDay");
	$(".downWhiteTri-h").attr("id","tri-h2");
	$("#tri-h1").clone().attr("id","tri-h3").insertAfter($("#tri-h1"));
	$("#tri-h1").clone().attr("id","tri-h4").insertAfter($("#tri-h1"));
	$("#tri-h1").clone().attr("id","tri-h5").insertAfter($("#tri-h1"));
	$("#tri-h2").clone().attr("id","tri-h6").insertAfter($("#tri-h1"));
	$("#tri-h1").clone().attr("id","tri-h7").insertAfter($("#tri-h1"));
	$("#tri-h2").clone().attr("id","tri-h8").insertAfter($("#tri-h1"));



	//添加buy
	$(".product").append("<div class='buy'><div class='leftArrow'></div><div><div class='up'><div>&nbsp;BUY&nbsp;</div></div><div class='down'><div>&nbsp;BUY&nbsp;</div></div></div><div class='rightArrow'></div></div>");

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
	for(var i=41;i<=46;i++) {
		$("#sec4").append("<div class='upTri' id='upTri-"+i+"''></div>");
		$("#upTri-"+i).css("z-index","2");
	}

	//添加實心白三角
	$("#sec1").append("<div class='upWhiteTri' id='tri-51'></div>");
	$("#sec2").append("<div class='downWhiteTri' id='tri-52'></div>");
	$("#sec2").append("<div class='downWhiteTri' id='tri-53'></div>");
	$("#sec3").append("<div class='downWhiteTri' id='tri-54'></div>");
	$("#sec4").append("<div class='downWhiteTri' id='tri-55'></div>");
	
	//添加遮罩
	$("#sec2").append("<div class='mask upWhiteTri' id='tri-56'></div>");
	$("#sec2").append("<div class='mask upWhiteTri' id='tri-57'></div>");

	//側邊有色三角
	//$("#sec1").append("<div class='downWhiteTri' id='tri-61'></div>");
	//$("#sec2").append("<div class='downWhiteTri' id='tri-62'></div>");
	//$("#sec3").append("<div class='downWhiteTri' id='tri-63'></div>");
	//$("#sec4").append("<div class='downWhiteTri' id='tri-64'></div>");
		

	function changeColor(t) {
		var $t = $(t);
		var statu = $t.attr("statu");
		var key = Math.floor(Math.random()*6);
		var time = Math.random()*1800+1000;
		colorArray = ["#d1f684","rgb(0,191,132)","rgb(0,157,130)","rgb(1,119,120)","rgb(0,97,129)","#002373"];
		if($t.hasClass("downTri") || $t.hasClass("downWhiteTri"))
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
	var $menu = $("#menu");
	var menuTop = $menu.offset().top - 0.6*$menu.height();
	$menu.css("top",menuTop);

	$("#menu > div").each(function(i){
		var $t = $(this);
		var $more = $t.find(".more").prependTo($t);
		$("<div>").addClass("moreTri").appendTo($more);
		var $other = $t.find(".icon,.title");
		$t.hover(function(){
			$t.stop(true,true).animate({
				opacity: "1"
			});
			$more.stop(true,true).animate({
				top: "+=13em"
			});
			$other.stop(true,true).animate({
				top: "+=13em"
			});
		},function(){
			$t.stop(true,true).animate({
				opacity: "0.9"
			});
			$more.stop(true,true).animate({
				top: "-=13em"
			});
			$other.stop(true,true).animate({
				top: "-=13em"
			});
		}).click(function(){
			j=i+1;
			document.location.href="#sec"+j;
		});
	});

	$(".buy").each(function(){
		var $t = $(this);

		$("."+$t.attr("class").substring(4)).not(".describe").hover(function(){
			var $up = $t.find(".up").css("top","-19px");
			var $down = $t.find(".down").css("top","-19px");
			$up.css("visibility","visible");
			$up.stop(true,false);
			$down.stop(true,false);
			$up.animate({top:"-3px"},function(){
				$up.css("visibility","visible");
				$up.css("top","-3px");
			});
			$down.animate({top:"-3px"},function(){
				$down.css("visibility","hidden");
				$down.css("top","-3px");
			});
		}, function(){
			var $up = $t.find(".up").css("top","-3px");
			var $down = $t.find(".down").css("top","-3px");
			$down.css("visibility","visible");
			$up.stop(true,false);
			$down.stop(true,false);
			$down.animate({top:"-19px"},function(){
				$down.css("visibility","visible");
				$down.css("top","-19px");
			});
			$up.animate({top:"-19px"},function(){
				$up.css("visibility","hidden");
				$up.css("top","-19px");
			});
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
			$t.stop(true,true).animate({
				opacity: "1"
			});
			$more.stop(true,true).animate({
				top: "+=40px"
			});
			$other.stop(true,true).animate({
				top: "+=40px"
			});
		},function(){
			$t.stop(true,true).animate({
				opacity: ".9"
			});
			$more.stop(true,true).animate({
				top: "-=40px"
			});
			$other.stop(true,true).animate({
				top: "-=40px"
			});
		});
	});

	$(window).scroll(function(){

		var $menu = $("#menu");
		var $smallMenu = $("#smallMenu");
		var $window = $(window);
		var menuTop = $("#sec1").offset().top-$window.width()*0.03;
		var windowTop = $window.scrollTop();

		if($("#menu").is(":visible")) {
			if(windowTop>menuTop) {
				$menu.fadeOut();
				$smallMenu.fadeIn();
			}
		} else {
			if(windowTop<menuTop) {
				$menu.fadeIn();
				$smallMenu.fadeOut();
			}
		}

		//底圖變色
		var s1 = $("#sec1").offset().top;
		var s2 = $("#sec2").offset().top;
		var s3 = $("#sec3").offset().top;
		var s4 = $("#sec4").offset().top;
		var wh = $window.height();
		if(windowTop<s2-40) windowTop = s1;
		else if(windowTop<s3-40) windowTop = s2;
		else if(windowTop<s4-40) windowTop = s3;
		else windowTop = s4;
		var r = Math.max(Math.min(Math.round(204*(windowTop-s4)/(s1-s4)),255),0);
		var g = Math.max(Math.min(Math.round(83*(windowTop-s4)/(s1-s4)+161),255),0);
		$(".sec,body").stop(false, false);
		$(".mask").stop(false, false);
		$(".sec,body").animate({backgroundColor:"rgb("+r+","+g+",132)"},1500);
		$(".mask").animate({borderBottomColor:"rgb("+r+","+g+",132)"},1500);

		var lp = ($("#line-1").offset().top - $window.scrollTop()) / wh;
		$("#line-1 > img").css("margin-left", 100 + 500 * lp);
		var lp = ($("#line-2").offset().top - $window.scrollTop()) / wh;
		$("#line-2 > img").css("margin-right", 100 + 500 * lp);
		var lp = ($("#line-3").offset().top - $window.scrollTop()) / wh;
		$("#line-3 > img").css("margin-left", 100 + 500 * lp);
		var lp = ($("#line-4").offset().top - $window.scrollTop()) / wh;
		$("#line-4 > img").css("margin-right", 100 + 500 * lp);
		var lp = ($("#line-5").offset().top - $window.scrollTop()) / wh;
		$("#line-5 > img").css("margin-left", 100 + 500 * lp);
	});

	$("#menu, #smallMenu").click(function(){
		$(window).scroll();
	});
	$(".product1_1").not(".describe").hover(function(){
		$("#tri-h1").attr("src",$(".upWhiteTri-hb").attr("src"));
	},function(){
		$("#tri-h1").attr("src",$("#tri-h3").attr("src"));
	});

	$(".product1_2").not(".describe").hover(function(){
		$("#tri-h2").attr("src",$(".downWhiteTri-hb").attr("src"));
//		$(".product1_2.buy > div").hover();
	},function(){
		$("#tri-h2").attr("src",$("#tri-h6").attr("src"));
	});

	$(".product2_1").not(".describe").hover(function(){
		$("#tri-53").css("border-top-color","rgb(0,46,162)");
	},function(){
		$("#tri-53").css("border-top-color","white");
	});

	$(".product2_2").not(".describe").hover(function(){
		$("#tri-h3").attr("src",$(".upWhiteTri-hb").attr("src"));
	},function(){
		$("#tri-h3").attr("src",$("#tri-h1").attr("src"));
	});

	$(".product2_4").not(".describe").hover(function(){
		$("#tri-h4").attr("src",$(".upWhiteTri-hb").attr("src"));
	},function(){
		$("#tri-h4").attr("src",$("#tri-h1").attr("src"));
	});

	$(".product3_1").not(".describe").hover(function(){
		$("#tri-h5").attr("src",$(".upWhiteTri-hb").attr("src"));
	},function(){
		$("#tri-h5").attr("src",$("#tri-h1").attr("src"));
	});

	$(".product3-2").not(".describe").hover(function(){
		$("#tri-54").css("border-top-color","rgb(0,46,162)");
	},function(){
		$("#tri-54").css("border-top-color","white");
	});

	$(".product4_1").not(".describe").hover(function(){
		$("#tri-h6").attr("src",$(".downWhiteTri-hb").attr("src"));
	},function(){
		$("#tri-h6").attr("src",$("#tri-h2").attr("src"));
	});

	$(".product4-2").not(".describe").hover(function(){
		$("#tri-55").css("border-top-color","rgb(0,46,162)");
	},function(){
		$("#tri-55").css("border-top-color","white");
	});

	$(".product4_3").not(".describe").hover(function(){
		$("#tri-h8").attr("src",$(".downWhiteTri-hb").attr("src"));
	},function(){
		$("#tri-h8").attr("src",$("#tri-h2").attr("src"));
	});

	$(".product4_4").not(".describe").hover(function(){
		$("#tri-h7").attr("src",$(".upWhiteTri-hb").attr("src"));
	},function(){
		$("#tri-h7").attr("src",$("#tri-h1").attr("src"));
	});

	$(".downWhiteTri-hb, .upWhiteTri-hb").hide();
});