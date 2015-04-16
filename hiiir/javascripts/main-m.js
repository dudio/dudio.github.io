function setPosition(target, width, top, left, zIndex) {
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

function setDimensions(){
	//設定各區塊高度
	var windowWidth = $("#MworldEarthDay").width();
	var windowHeight = $(window).height();

	//$("#MworldEarthDay").css("font-size",windowWidth/100+"px");
	$("#topSec").height(windowHeight);
	//$("#sec1").height(windowWidth*0.548);
	//$("#sec2").height(windowWidth*0.567);
	//$("#sec3").height(windowWidth*0.498);
	//$("#sec4").height(windowWidth*0.567);

	var earthWidth = windowHeight*1017/931;
	$("#earth")
		.width(earthWidth)
		.css("top",windowHeight*.3324)
		.css("left",-windowHeight/200);
	if(earthWidth > windowWidth) $("#earth").css("left", (windowWidth-earthWidth)/2-windowHeight/200);

	//$("#menu").css("top",windowHeight-windowWidth*0.13);
}

$(function(){
	//添加元素
	$("#topSec").append("<img id='earth' src='images/earth.gif'>");
	$("#topSec").append("<img id='slogan' src='images/mslogan.png'>");
	//添加buy
	//$(".product").append("<div class='buy'><div><div class='up'><div class='leftArrow'></div><div>&nbsp;BUY&nbsp;</div><div class='rightArrow'></div></div><div class='down'><div class='leftArrow'></div><div>&nbsp;BUY&nbsp;</div><div class='rightArrow'></div></div></div></div>");

	//視窗變動
	setDimensions();
	window.onresize=setDimensions;
return;
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