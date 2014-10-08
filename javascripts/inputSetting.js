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
	$("input.day").attr("size","3");
	$("input.month").attr("size","4");
	$("input.year").attr("size","3");
	$("input.percentage").attr("size","5");

	//自動計算預期壽命
	$("#age").change(function(){
		var age = parseInt($(this).val());
		if($(this).val()>0)
			$("#life").val(Math.ceil(Math.max(80+age/5,age+10)));
	});

	//自動計算最終年薪/調薪
	countFinalSalary();
	$("#finalYearSalary").change(countSalaryAdjust);
	$("#salaryAdjust").change(countFinalSalary);

});
