function countHouseEqual(){
	//租金房價比目前設定為 20:10000 = 1：500 為高房價
	$("#house .equalRent").val(Math.round(parseFloat($("#house .cost").val())*20));
}

function countFinalSalary(){
	$(".work").each(function(i){
		var $t = $(this);
		work[i]['workAge']	= $t.find(".workAge").val();//退休年齡
		work[i]['retireAge']	= $t.find(".retireAge").val();//退休年齡
		work[i]['salary']	= parseInt($t.find(".salary").val());//月薪
		work[i]['bonus']	= parseFloat($t.find(".bonus").val());//年終
	        work[i]['salaryAdjust']    = 1+$t.find(".salaryAdjust").val()/100;//調薪
		$t.find(".finalYearSalary").val(Math.round((work[i]['salary'] * (12+work[i]['bonus']) * Math.pow( work[i]['salaryAdjust'], work[i]['retireAge'] - work[i]['workAge']))/10000));
	});
}

function countSalaryAdjust(){
	$(".work").each(function(i){
		var $t = $(this);
		var finalYearSalary = $t.find(".finalYearSalary").val()*10000;
		$t.find(".salaryAdjust").val(Math.round((Math.pow(finalYearSalary / (work[i]['salary'] * (12+work[i]['bonus'])), 1/(work[i]['retireAge'] - work[i]['workAge']))-1)*100000)/1000);
	});
}


$(function(){

	//設定未完成功能樣式
	$(".ondo :input").attr("disabled","disabled");
	$("#showOndo").change(function(){
		$(".ondo").toggle();
	});

	//設定button樣式
	$(".button").addClass("ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only").children().addClass("ui-button-text");

	//設定分頁
	$("#inputTabs,#tabs-1,#tabs-2").tabs();

	//設定基本輸入欄位
	$("input").css("text-align","right");
	$("input.money").attr("size","10");
	$("input.wanMoney").attr("size","6");
	$("input.minite").attr("size","4");
	$("input.hour").attr("size","3");
	$("input.day").attr("size","3");
	$("input.month").attr("size","4");
	$("input.year").attr("size","3");
	$("input.percentage").attr("size","5");


	$(".title").change(function(){
		var $t = $(this);
		var newTitle = $t.val();
		var memberNum = $t.parents("div:first").attr("id").substring(7)-1;
		//改成員上方tab文字
		$("#tabs-1 > ul a").eq(memberNum).text(newTitle);
		//改工作及支出
		$(".title-"+memberNum).text(newTitle);
	});

	$(".age").change(function(){
		var age = parseInt($(this).val());
		//自動計算預期壽命
		$(this).siblings(".life").val(Math.ceil(Math.max(80+age/5,age+10)));
		$(".workAge").each(function(){
			var $t = $(this);
			var $workMember = $t.siblings(".workMember");
			if($workMember.length) {
				var memberNum = $workMember.find(":input:checked").val();
				var memberAge = $(".member").eq(memberNum).find(".age").val();
				if(memberAge > $t.val()) $t.val(memberAge);
			} else if(age > $t.val()) $t.val(age);
		});
		countProperty();
	});

	//自動計算最終年薪/調薪
	$(".finalYearSalary").change(countSalaryAdjust);
	$(".age, .workAge, .retireAge, .salary, .bonus, .salaryAdjust").change(countFinalSalary);

	//切換住家裡文字顯示
	$(".home").change(function(){
		$(".homeWord").toggle();
	});

	//自動計算房價漲幅 & 倍數
	$("#house .priceChange").change(function(){
		$("#house .houseMulti").val(Math.round(Math.pow(1+$("#house .priceChange").val()/100,20)*10)/10);
	});
	$("#house .houseMulti").change(function(){
		$("#house .priceChange").val(Math.round((Math.pow($("#house .houseMulti").val(),0.05)-1)*10000)/100);
	});
	
	//自動計算房產感受價值
	$("#house .cost").change(countHouseEqual);
	
	//應該只需要更新第二張圖表
	$("#buyYear").slider({
		change: function(e, ui){
			buyYear = ui.value;
			countChart2(buyYear);
		}
	});

});
