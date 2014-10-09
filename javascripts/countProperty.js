var xAxis;
var year,month;
var yearIncome, yearOutgoing;
var nowSalary, nowOutgoing, nowCash, nowPriceIndex;

var priceIndex;
var age, life, cash, outgoing, invest, saveMoney;
var retireAge, salary, bonus, salaryAdjust, workHourPerDay, restPerWeek, restPerMonth, restPerYear, workDayPerYear, retirementPayOnce, retirementPayMonthly;//工作資料
var house = {};//可買房產資料
var buyYear;
var totalMaterialLife;

function getData(){
	priceIndex		= 1+$("#priceIndex").val()/100;//物價指數
	nowPriceIndex		= 1;

	//個人資料
	age		= parseInt($("#age").val());//當前年齡
	life		= parseInt($("#life").val());//預期壽命
	cash		= parseInt($("#cash").val());//當前現金
	outgoing	= parseInt($("#outgoing").val());//支出/月
	invest		= $("#invest").val()/100;//投資報酬率
	saveMoney	= $("#saveMoney").val();//最低現金

	//工作資料
	retireAge	= $("#retireAge").val();//退休年齡
	salary		= parseInt($("#salary").val());//月薪
	bonus		= parseFloat($("#bonus").val());//年終
	salaryAdjust	= 1+$("#salaryAdjust").val()/100;//調薪
	retirementPayOnce	= parseInt($("#retirementPayOnce").val());//退休金 - 一次領
	retirementPayMonthly	= parseInt($("#retirementPayMonthly").val());//退休金 - 月領
	workHourPerDay	= parseFloat($("#workHourPerDay").val());//每日工時
	restPerWeek	= parseFloat($("#restPerWeek").val());//每週休假日數
	restPerMonth	= parseFloat($("#restPerMonth").val());//每月休假日數
	restPerYear	= parseFloat($("#restPerYear").val());//每年休假日數
	workDayPerYear	= 365.2425*(7-restPerWeek)/7 - 12*restPerMonth - restPerYear;

	//工作日數(by/週/月/年)
	//每日工時*(365*(7-週休日數)/7 - 休假日數) = 每年工時

	//可購房產資料
	buyYear			= buyYear || age;
	house["priceChange"]	= 1+$("#house .priceChange").val()/100;//房價漲幅
	house["maintainCost"]	= $("#house .maintainCost").val()/100;//維護成本
	house["loanRatePerYear"] = 1+$("#house .loanRatePerYear").val()/100;//貸款年利率
	house["equalRent"]	= parseInt($("#house .equalRent").val());
}

//租房子到y歲的時候
function rentTo(y, data) {
	//住宿資料
	var rent	= {};//可租房產資料
	var yearMaterialLife;
	rent["cost"]	= parseInt($("#rent .cost").val());//租金
	var rentValue	= rent["cost"];
	rent["priceChange"] = 1+parseFloat($("#rent .priceChange").val())/100;//租金漲幅
	nowPriceIndex	= priceIndex;

	for(year=age;year<=y;year++){
		yearIncome = yearOutgoing = yearMaterialLife = 0;
			
		//計算每月收支
		for(month = 1;month<=12;month++) {
			if(year<=retireAge)
				yearIncome += nowSalary;
			else
				yearIncome += retirementPayMonthly;
			yearOutgoing += nowOutgoing;
			yearOutgoing += parseInt(rent['cost']);
			yearMaterialLife += outgoing;
			yearMaterialLife += rentValue;
		}
		//領年終 調薪
		if(year<=retireAge) {
			yearIncome += bonus*nowSalary;
			nowSalary *= salaryAdjust;
		}

		//退休金 一次領
		if(year==retireAge) {
			yearIncome += retirementPayOnce;
		}

		//投資所得(定存)
		if(nowCash > saveMoney)
			yearIncome += invest*(nowCash-saveMoney);

		nowCash = parseFloat(nowCash) + parseFloat(yearIncome) - parseFloat(yearOutgoing);

		//調整物價指數
		nowPriceIndex *= priceIndex;
		nowOutgoing = nowPriceIndex * outgoing;

		//計算房價漲幅
		house["cost"] *= house["priceChange"];
		rent["cost"] *= rent["priceChange"];

		//物質生活累計
		totalMaterialLife += yearMaterialLife;

		data['cash'].push(Math.round(nowCash));
		data['income'].push(Math.round(yearIncome));
		data['outgoing'].push(Math.round(yearOutgoing));
		data['property'].push(Math.round(nowCash));
		data['loan'].push(null);
		data['life'].push(Math.round(yearMaterialLife));
	}

}

//從y歲開始買房子
function buyHouseFrom(y, data) {
	var loan = house["cost"];//貸款
	var yearMaterialLife;

	//買屋-資產計算
	var perYearPaidLoan;//每年實繳交貸款
	var firstLoanPay=0;//用第一年能繳出的金額預估本息均攤額度

	//繳頭期款
	var firstPay;
	if(nowCash > saveMoney) {
		if(nowCash-saveMoney >= loan) {
			firstPay = loan;
			nowCash -= loan;
			loan = 0;
		} else{
			loan -= (nowCash-saveMoney);
			firstPay = (nowCash-saveMoney);
			nowCash = saveMoney;
		}
	}
	
	for(year=y;year<=life;year++){
		yearIncome = yearOutgoing = perYearPaidLoan = yearMaterialLife = 0;
			
		//計算每月收支
		for(month = 1;month<=12;month++) {
			if(year<=retireAge)
				yearIncome += nowSalary;
			else
				yearIncome += retirementPayMonthly;
			yearOutgoing += nowOutgoing;
			yearOutgoing += house["cost"]*house["maintainCost"]/12;
			yearMaterialLife += outgoing;
			yearMaterialLife += house["equalRent"];
		}

		//領年終 調薪
		if(year<=retireAge) {
			yearIncome += bonus*nowSalary;
			nowSalary *= salaryAdjust;
		}

		//退休金 一次領
		if(year==retireAge) {
			yearIncome += retirementPayOnce;
		}

		//計算貸款利息
		loan *= house['loanRatePerYear'];

		//計算房價漲幅
		house["cost"] *= house["priceChange"];

		//先加上基本花費跟扣除基本開銷
		nowCash = parseFloat(nowCash) + parseFloat(yearIncome) - parseFloat(yearOutgoing);

		//將餘錢繳納貸款
		if(nowCash > saveMoney) {
			if(nowCash-saveMoney >= loan) {
				perYearPaidLoan = loan;
				loan = 0;
			} else{
				//預設使用本息均攤;
				if(!firstLoanPay) firstLoanPay = (nowCash-saveMoney);
				perYearPaidLoan = firstLoanPay;
				loan -= firstLoanPay;

				/* 有多少閒錢還多少
				perYearPaidLoan = (nowCash-saveMoney);
				loan -= (nowCash-saveMoney); */
			}
			yearOutgoing += perYearPaidLoan;
			nowCash = parseFloat(nowCash) - parseFloat(perYearPaidLoan);
		}

		//投資所得(定存) 繳完貸款才考慮其它投資
		//應該要考慮投報率高於貸款利率的情況....
		if(nowCash > saveMoney) {
			var yearInvenstIncome = invest*(nowCash-saveMoney);
			yearIncome += yearInvenstIncome;
			nowCash += yearInvenstIncome;
		}

		//調整物價指數
		nowPriceIndex *= priceIndex;
		nowOutgoing = nowPriceIndex * outgoing;

		if(firstPay) {
			yearOutgoing += parseInt(firstPay);
			firstPay = 0;
		}
		//物質生活累計
		totalMaterialLife += yearMaterialLife;

		data['cash'].push(Math.round(nowCash));
		data['income'].push(Math.round(yearIncome));
		data['outgoing'].push(Math.round(yearOutgoing));
		if(perYearPaidLoan)
			data['loan'].push(Math.round(loan));
		data['property'].push(Math.round(house["cost"]-loan+nowCash));
		data['life'].push(Math.round(yearMaterialLife));
	}
}
/* 從<buyOn>歲開始買房子 在這之前都是租房子 */
function buyHouseOn(buyOn){
	data = {'cash':[],'income':[],'outgoing':[],'property':[],'loan':[],'life':[]};

	//資產計算
	nowSalary = salary; //當前月薪
	nowOutgoing = outgoing; //當前每月支出
	nowCash = cash; //現金
	totalMaterialLife = 0;//一生物質生活累計

	if(buyOn) {
		house["cost"] = parseInt($("#house .cost").val());//總價
		rentTo(buyYear-1, data);
		buyHouseFrom(buyYear, data);
	} else
		rentTo(life, data);
	return data;
} 

function countProperty(){
	getData();
	
	$("#buyYear").slider({
		min: age,
		max: life,
		change: function(e, ui){
			buyYear = ui.value;
			countProperty();
		}
	});

	//設定座標軸
	xAxis = [];
	for(year=age;year<=life;year++)
		xAxis.push(year);

	houseData = buyHouseOn(true);
	rentData = buyHouseOn(false);

	//計算最佳買房時機
	bestData = [];
	finalCash = [];
	bestLife = [];
	var oriBuyYear = buyYear;
	for(buyYear=age;buyYear<=life;buyYear++) {
		var tempData = {};
		tempData = buyHouseOn(true);
		var i = tempData['property'].length;
		bestData.push(tempData['property'][i-1]);
		finalCash.push(tempData['cash'][i-1]);
		bestLife.push(totalMaterialLife);
	}
	buyYear = oriBuyYear; //算完最佳解後要還原原本的buyYear值

	writeSummary();
	drawHighchart();

	//hide some legend
	//把圖表中第3,4,6條折線先行隱藏
	$(".highcharts-legend").each(function(){
		$(this).find(".highcharts-legend-item").each(function(i){
			if(i==2||i==3||i==5) $(this).click();
		});
	});
}

$(function(){
	$(":input").not("#basicData :input,#showOndo").change(countProperty);
});
