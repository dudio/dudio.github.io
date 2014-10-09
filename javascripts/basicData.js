function countYearSalary(){
	$("#yearSalary").val($("#copy-salary").val()*$("#salaryMonth").val());
}


function countHouseMulti(){
	$("#houseMulti").val(Math.round(Math.pow(1+$("#copy-priceChange").val()/100,20)*10)/10);
}
function setBasicData(){
	$("#copy-age").val($("#age").val());
	$("#copy-salary").val($("#salary").val());
	$("#salaryMonth").val(parseFloat($("#bonus").val())+12);
	countYearSalary();
	$("#copy-salary, #salaryMonth").change(countYearSalary);
	$("#yearSalary").change(function(){
		$("#copy-salary").val(Math.round($("#yearSalary").val()/$("#salaryMonth").val()));
	});
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
	$("#age").val($("#copy-age").val());
	$("#salary").val($("#copy-salary").val());
	$("#bonus").val(parseFloat($("#salaryMonth").val())-12);
	$("#rent .cost").val($("#rentCost").val());
	$("#house .cost").val($("#houseCost").val());
	$("#house .priceChange").val($("#copy-priceChange").val());
	countHouseEqual();

	//自動計算每月支出 ~= (月薪-房租-15000)^0.8*2+15000
	$("#outgoing").val(Math.min(Math.round(Math.pow(Math.max($("#yearSalary").val()/12-$("#rentCost").val()-15000,0),0.8)/50)*100+15000,$("#copy-salary").val()-$("#rentCost").val()));

	countProperty();
}

function getWorkData(){
	age             = parseInt($("#age").val());//當前年齡
        retireAge       = $("#retireAge").val();//退休年齡
        salary          = parseInt($("#salary").val());//月薪
        bonus           = parseFloat($("#bonus").val());//年終
}

function countFinalSalary(){
	getWorkData();
        salaryAdjust    = 1+$("#salaryAdjust").val()/100;//調薪
	$("#finalYearSalary").val(Math.round(salary * (12+bonus) * Math.pow( salaryAdjust, retireAge - age)));
}

function countSalaryAdjust(){
	getWorkData();
	var finalYearSalary = $("#finalYearSalary").val();
	$("#salaryAdjust").val(Math.round((Math.pow(finalYearSalary / (salary * (12+bonus)), 1/(retireAge - age))-1)*100000)/1000);
}

$(function(){

	//設定初始資料
	setBasicData();
	$("#basicData").dialog({
		title:"基本資料",
		width:"auto",
		close: copyBasicData,
		position: { my: "center", at: "center", of: window },
		modal: true
	});

});
