function setDimentions(){
	var Vwidth = $(window).width();
	$("body").css("font-size",Vwidth*16/1300);

	//設定幻燈片尺寸
	$(".jcarousel li,.jcarousel li img").width(Vwidth);

}
$(function(){
	//將主選單增加分隔線
	$("#mainMenu > div:not(:last)").each(function(i){
		$('<img src="../images/menuline.jpg" />').insertAfter($(this));
	});

	// ---- news ----
	//增加前置icon
	$("#bkNews > .title").prepend('<img src="../demo/blueArrow.jpg">');
	//增加圖片下方分隔條
	$("#bkNews .news > img").after("<div class='grayLine'></div>");
	
	$("#bkNews .news")
	//分隔條 hover變色
	.hover(function(){		
		$(this).find(".grayLine").addClass("hover");
	},function(){
		$(this).find(".grayLine").removeClass("hover");
	})
	//增加 Read more
	.append('<div class="readmore">Read More</div>')
	//綁定click事件
	.click(function(){
		document.location.href = $(this).attr("href");
	});

	
	//變動視窗寬度事件
	setDimentions();
	window.onresize = setDimentions;

	//設定幻燈片(要先設定完setDimention 這樣計算圖片張數才會正確)
	$('.jcarousel').jcarousel({wrap:'circular'}).jcarouselAutoscroll({
		interval: 5200,
		target: '+=1',
		autostart: true
        });
        $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
		$(this).addClass('active');
        }).on('jcarouselpagination:inactive', 'a', function() {
		$(this).removeClass('active');
        }).jcarouselPagination();

});
