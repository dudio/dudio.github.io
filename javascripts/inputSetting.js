function countHouseEqual(){
	//租金房價比目前設定為 20:10000 = 1：500 為高房價
	$("#house .equalRent").val(Math.round(parseFloat($("#house .cost").val())*20));
}

function countFinalSalary(){
	age = parseInt($("#age").val());//當前年齡
	$(".work").each(function(i){
		var $t = $(this);
		work[i]['retireAge']	= $t.find(".retireAge").val();//退休年齡
		work[i]['salary']	= parseInt($t.find(".salary").val());//月薪
		work[i]['bonus']	= parseFloat($t.find(".bonus").val());//年終
	        work[i]['salaryAdjust']    = 1+$t.find(".salaryAdjust").val()/100;//調薪
		$t.find(".finalYearSalary").val(Math.round((work[i]['salary'] * (12+work[i]['bonus']) * Math.pow( work[i]['salaryAdjust'], work[i]['retireAge'] - age))/10000));
	});
}

function countSalaryAdjust(){
	$(".work").each(function(i){
		var $t = $(this);
		var finalYearSalary = $t.find(".finalYearSalary").val()*10000;
		$t.find(".salaryAdjust").val(Math.round((Math.pow(finalYearSalary / (work[i]['salary'] * (12+work[i]['bonus'])), 1/(work[i]['retireAge'] - age))-1)*100000)/1000);
	});
}


$(function(){

	//設定未完成功能樣式
	$(".ondo :input").attr("disabled","disabled");
	$("#showOndo").change(function(){
		$(".ondo").toggle();
	});

	//設定分頁
	$("#inputTabs").tabs();

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

	$("#age").change(function(){
		var age = parseInt($(this).val());
		if(age>0) {
			//自動計算預期壽命
			$("#life").val(Math.ceil(Math.max(80+age/5,age+10)));
			//調整最低買房年紀
			var $buyYear = $("#buyYear");
			if(age > $buyYear.slider( "option", "value" ))
				$buyYear.slider({"value":age});
			else
				countProperty();//如果有重設buyYear 就會重算 但沒設的話 只好補呼叫一次countProperty
		}
	});

	//自動計算最終年薪/調薪
	$(".finalYearSalary").change(countSalaryAdjust);
	$("#age, .retireAge, .salary, .bonus, .salaryAdjust").change(countFinalSalary);

	//自動計算房價漲幅 & 倍數
	$("#house .priceChange").change(function(){
		$("#house .houseMulti").val(Math.round(Math.pow(1+$("#house .priceChange").val()/100,20)*10)/10);
	});
	$("#house .houseMulti").change(function(){
		$("#house .priceChange").val(Math.round((Math.pow($("#house .houseMulti").val(),0.05)-1)*10000)/100);
	});
	
	//自動計算房產感受價值
	$("#house .cost").change(countHouseEqual);

	
});
