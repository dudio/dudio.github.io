function countYearSalary(){
	$("#yearSalary").val($("#copy-salary").val()*$("#salaryMonth").val());
}


function countHouseMulti(){
	$("#houseMulti").val(Math.round(Math.pow(1+$("#copy-priceChange").val()/100,20)*10)/10);
}

function setBasicData(){
	$("#copy-age").val($(".age").val());
	$("#copy-salary").val($(".salary").val());

	//月薪年薪設定
	$("#salaryMonth").val(parseFloat($(".bonus").val())+12);
	countYearSalary();
	$("#copy-salary, #salaryMonth").change(countYearSalary);
	$("#yearSalary").change(function(){
		$("#copy-salary").val(Math.round($("#yearSalary").val()/$("#salaryMonth").val()));
	});

	//房租
	$("#rentCost").val($("#rent .cost").val());
	$("#houseCost").val($("#house .cost").val());

	$("#copy-priceChange").val($("#house .priceChange").val());
	countHouseMulti();
	$("#copy-priceChange").change(countHouseMulti);
	$("#houseMulti").change(function(){
		$("#copy-priceChange").val(Math.round((Math.pow($("#houseMulti").val(),0.05)-1)*10000)/100);
	});
}

function copyBasicData(){
//	$("#basicData :input").attr("disabled","disabled");
	alert("資料計算中，請耐心等待");

	$(".age,.workAge").val($("#copy-age").val());
	$(".salary").val($("#copy-salary").val());
	$(".bonus").val(parseFloat($("#salaryMonth").val())-12);
	$("#rent .cost").val($("#rentCost").val());
	$("#house .cost").val($("#houseCost").val());
	$("#house .priceChange").val($("#copy-priceChange").val());
	$("#house .houseMulti").val($("#houseMulti").val());
	countHouseEqual();

	//自動計算每月支出 ~= (月薪-房租-15000)^0.8*2+15000
	$("#outgoing-0").val(Math.min(Math.round(Math.pow(Math.max($("#yearSalary").val()/12-$("#rentCost").val()-15000,0),0.8)/50)*100+15000,$("#copy-salary").val()-$("#rentCost").val()));

	//自動計算現有資金 ~= (年薪 - 12*(月支出+房租)) * (年齡-24)
	$("#cash").val(Math.round(($("#yearSalary").val()-12*(parseInt($("#outgoing-0").val())+parseInt($("#rentCost").val())))*($(".age").val()-24)/10000));

	alert(autoCount());
//	countProperty();
	countFinalSalary();
}

$(function(){
	//設定初始資料
	setBasicData();
	$("#basicData").dialog({
		title:"幾歲買屋好哩？ - 填寫基本資料",
		width:"auto",
		close: copyBasicData,
		position: { my: "center", at: "center", of: window },
		modal: true
	});

	$("#closeBasicData").click(function(){$("#basicData").dialog("close");});
});
