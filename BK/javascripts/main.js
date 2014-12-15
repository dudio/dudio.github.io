function setDimentions(){
	var Vwidth = $(window).width();
	$("body").css("font-size",Vwidth*16/1300);

	//設定幻燈片尺寸
	$(".jcarousel li,.jcarousel li img").width(Vwidth);

}
$(function(){
	//避免主選單在不同字型下過長折行
/*	var $mainMenu = $("#mainMenu");
	var $li = $("#mainMenu li");
	var liMarginRight = 4.2;
	while($mainMenu.height()>25) {
		liMarginRight -= 0.5;
		if(liMarginRight < 0) break;
		$li.css("margin-right",liMarginRight+"%");
	};
	var mainMenuPaddingLeft = 21.55;
	while($mainMenu.height()>25) {
		mainMenuPaddingLeft -= 0.5;
		if(mainMenuPaddingLeft<15) break;
		$mainMenu.css("padding-left",mainMenuPaddingLeft+"%");
	};*/

	//將主選單增加分隔線
	$("#mainMenu > div:not(:last)").each(function(i){
		$('<img src="../images/menuline.jpg" />').insertAfter($(this));
	});
	
	//變動視窗寬度事件
	setDimentions();
	window.onresize = setDimentions;

	//設定幻燈片(要先設定完setDimention 這樣計算圖片張數才會正確)
	$('.jcarousel').jcarousel({wrap:'circular'}).jcarouselAutoscroll({
            interval: 4000,
            target: '+=1',
            autostart: true
        });
        $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination();

});
