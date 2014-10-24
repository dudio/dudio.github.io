var xAxis;
var year,month,w;
var nowMemberAge=[];
var yearIncome, yearOutgoing;
var nowSalary=[], nowCash, nowPriceIndex;

var priceIndex;
var member = [];//家庭成員
var nowOutgoing = [];
var outgoing = [];
var age, life, cash, betterLife, invest, saveMoney;
var work = [];//工作資料
var workNum;
var workHourPerDay, workDayPerYear;
var house = {};//可買房產資料
var buyYear;
var totalMaterialLife;

function getData(){
	priceIndex		= 1+$("#priceIndex").val()/100;//物價指數
	nowPriceIndex		= 1;

	//個人資料
	age		= parseInt($(".age").val());//當前年齡
	life		= parseInt($(".life").val());//預期壽命
	//成員資料
	member = [];
	$(".member").each(function(i){
		var thisMember = {};
		var $t = $(this);
		thisMember['age']	= parseInt($t.find(".age").val());//當前年齡
		thisMember['life']	= parseInt($t.find(".life").val());//預期壽命
		thisMember['outgoing']	= $("#outgoing-"+i).val();//支出
		member[i] = thisMember;
	});

	cash		= parseFloat($("#cash").val())*10000;//當前現金
	betterLife	= 1+$("#betterLife").val()/100;//生活水平改善幅度
	invest		= $("#invest").val()/100;//投資報酬率
	saveMoney	= parseFloat($("#saveMoney").val())*10000;//最低現金

	//工作資料
	work = [];
	$(".work").each(function(i){
		var thisWork = {};
		var $t = $(this);

		thisWork['workAge']		= $t.find(".workAge").val();//工作起始年齡
		thisWork['retireAge']		= $t.find(".retireAge").val();//退休年齡
		thisWork['salary']		= parseInt($t.find(".salary").val());//月薪
		var workMember = $(":input[name='workMember"+i+"']:checked").val();
		if(workMember > 0) {
			thisWork['workAge']	= thisWork['workAge']-member[workMember]['age']+age;
			thisWork['retireAge']	= thisWork['retireAge']-member[workMember]['age']+age;
		}
		thisWork['bonus']		= parseFloat($t.find(".bonus").val());//年終
		thisWork['salaryAdjust']	= 1+$t.find(".salaryAdjust").val()/100;//調薪
		thisWork['retirementPayOnce']	= parseInt($t.find(".retirementPayOnce").val());//退休金 - 一次領
		thisWork['retirementPayMonthly'] = parseInt($t.find(".retirementPayMonthly").val());//退休金 - 月領
		work[i]	= thisWork;
	});
	workNum		= work.length;
	workHourPerDay	= parseFloat($("#workHourPerDay").val());//每日工時
	var restPerWeek	= parseFloat($("#restPerWeek").val());//每週休假日數
	var restPerMonth = parseFloat($("#restPerMonth").val());//每月休假日數
	var restPerYear	= parseFloat($("#restPerYear").val());//每年休假日數
	workDayPerYear	= (365.2425-19)*(7-restPerWeek)/7 - 12*restPerMonth - restPerYear;//扣除年假及國定假日共19天

	//可購房產資料
	buyYear			= buyYear || age;
	house["priceChange"]	= 1+$("#house .priceChange").val()/100;//房價漲幅
	house["maintainCost"]	= $("#house .maintainCost").val()/100;//維護成本
	house["loanRatePerYear"] = 1+$("#house .loanRatePerYear").val()/100;//貸款年利率
	house["loanType"] = $("[name='loanType']:checked").val();//還款方式
	house["equalRent"]	= parseInt($("#house .equalRent").val());

	house["transCost"] = parseFloat($("#house .transCost").val());//每上班日通勤支出
	house["transCostPerMonth"] = Math.round(workDayPerYear*house["transCost"]/12);//每月通勤支出

	house["transTime"] = parseFloat($("#house .transTime").val());//每上班日通勤時間(分)
//	house["transTimeRatio"] = [];
//	for(var i=0;i<workNum;i++)
//		house["transTimeRatio"][i] = house["transTime"]/(work[i]['workHourPerDay']*60+house["transTime"]);//通勤佔工時比例
	house["transTimeRatio"] = house["transTime"]/(workHourPerDay*60+house["transTime"]);//通勤佔工時比例
}

//租房子到y歲的時候
function rentTo(y, data) {
	var rent	= {};//可租房產資料
	var yearMaterialLife;
	rent["cost"]	= parseInt($("#rent .cost").val());//租金
	var rentValue	= rent["cost"];
	rent["priceChange"] = 1+parseFloat($("#rent .priceChange").val())/100;//租金漲幅
	nowPriceIndex	= priceIndex;

	rent["transCost"] = parseFloat($("#rent .transCost").val());//每上班日通勤支出
	rent["transCostPerMonth"] = Math.round(workDayPerYear*rent["transCost"]/12);//每月通勤支出

	rent["transTime"] = parseFloat($("#rent .transTime").val());//每上班日通勤時間(分)
	var transTimeRatio = rent["transTime"]/(workHourPerDay*60+rent["transTime"]);//通勤佔工時比例
	
	for(w=0;w<member.length;w++)
		nowMemberAge[w] = member[w]['age'];

	for(year=age;year<=y;year++){
		yearIncome = yearOutgoing = yearMaterialLife = 0;
		var working = 0;//目前有幾份工作
			
		//計算每月收支
		for(month = 1;month<=12;month++) {
			for(var i=0;i<workNum;i++){
				if(year<=work[i]['retireAge']) {
					if(year >= work[i]['workAge']) {
						yearIncome += nowSalary[i];
						if(nowSalary[i]>0) working++;
					}
				} else
					yearIncome += work[i]['retirementPayMonthly'];
			}
			for(w=0;w<member.length;w++) {
				if((nowMemberAge[w] >= 0) && (nowMemberAge[w] <= member[w]['life'])) {
					yearOutgoing += parseFloat(nowOutgoing[w]);
					yearMaterialLife += parseFloat(outgoing[w]);
				}
			}
			if($(".home:checked").val()!="1")
				yearOutgoing += parseInt(rent['cost']);
			if(working)
				yearOutgoing += parseInt(rent['transCostPerMonth'])*working;
			yearMaterialLife += rentValue;
		}
		
		//領年終 調薪
		for(var i=0;i<workNum;i++) if((year<=work[i]['retireAge'])&&(year>=work[i]['workAge'])) {
			yearIncome += work[i]['bonus']*nowSalary[i];
			nowSalary[i] *= work[i]['salaryAdjust'];
		}
		
		//將實值生活品質扣除通勤時間成本
		if(working)
			yearMaterialLife -= yearIncome * transTimeRatio / nowPriceIndex;
		
		//退休金 一次領
		for(var i=0;i<workNum;i++) if(year==work[i]['retireAge'])
			yearIncome += work[i]['retirementPayOnce'];

		//投資所得(定存)
		if(nowCash > saveMoney) {
			var yearInvestIncome = invest*(nowCash-saveMoney);
			yearIncome += yearInvestIncome;
			//將實值生活品質扣除通勤時間成本
			if(working)
				yearMaterialLife -= yearInvestIncome * transTimeRatio / nowPriceIndex;
		}
		nowCash = parseFloat(nowCash) + parseFloat(yearIncome) - parseFloat(yearOutgoing);

		//負債會增加利息支出
		if(nowCash<0) {
			yearOutgoing -= nowCash * (house['loanRatePerYear']-1);
			nowCash *= house['loanRatePerYear'];
		}


		//調整物價指數
		nowPriceIndex *= priceIndex;

		//調整生活水平
		for(w=0;w<member.length;w++) {
			if((nowMemberAge[w] >= 0) && (nowMemberAge[w] <= member[w]['life'])) {
				outgoing[w] *= betterLife;
				nowOutgoing[w] = nowPriceIndex * outgoing[w];
			}
			nowMemberAge[w]++;
		}
		
		//計算通勤成本漲幅
		rent['transCostPerMonth'] *= priceIndex;//每月通勤成本
		houseTransCostPerMonth *= priceIndex;//每月通勤成本

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
	
	for(w=0;w<member.length;w++)
		nowMemberAge[w] = member[w]['age']+y-member[0]['age'];

	for(year=y;year<=life;year++){
		yearIncome = yearOutgoing = perYearPaidLoan = yearMaterialLife = 0;
		var working = 0;//目前有幾份工作
			
		//計算每月收支
		for(month = 1;month<=12;month++) {
			for(var i=0;i<workNum;i++) {
				if(year<=work[i]['retireAge']) {
					if(year >= work[i]['workAge']) {
						yearIncome += nowSalary[i];
						if(nowSalary[i]>0) working++;
					}
				} else
					yearIncome += work[i]['retirementPayMonthly'];
			}
			for(w=0;w<member.length;w++) {
				if((nowMemberAge[w] >= 0) && (nowMemberAge[w] <= member[w]['life'])) {
					yearOutgoing += parseFloat(nowOutgoing[w]);
					yearMaterialLife += parseFloat(outgoing[w]);
				}
			}
			yearOutgoing += house["cost"]*house["maintainCost"]/12;
			if(working)
				yearOutgoing += houseTransCostPerMonth*working;
			yearMaterialLife += house["equalRent"];
		}

		//領年終 調薪
		for(var i=0;i<workNum;i++) if((year<=work[i]['retireAge'])&&(year>=work[i]['workAge'])) {
			yearIncome += work[i]['bonus']*nowSalary[i];
			nowSalary[i] *= work[i]['salaryAdjust'];
		}
		
		//將實值生活品質扣除通勤時間成本
		if(working)
			yearMaterialLife -= yearIncome * house["transTimeRatio"]  / nowPriceIndex;

		//退休金 一次領
		for(var i=0;i<workNum;i++) if(year==work[i]['retireAge'])
			yearIncome += work[i]['retirementPayOnce'];

		//計算貸款利息
		loan *= house['loanRatePerYear'];

		//計算房價漲幅
		house["cost"] *= house["priceChange"];

		//先加上基本花費跟扣除基本開銷
		nowCash = parseFloat(nowCash) + parseFloat(yearIncome) - parseFloat(yearOutgoing);

		//負債會增加利息支出
		if(nowCash<0) {
			yearOutgoing -= nowCash * (house['loanRatePerYear']-1);
			nowCash *= house['loanRatePerYear'];
		}

		//將餘錢繳納貸款
		if(nowCash > saveMoney) {
			if(nowCash-saveMoney >= loan) {
				perYearPaidLoan = loan;
				loan = 0;
			} else{
				if(house["loanType"]=="1") {
					//使用本息均攤 + 一次還清
					if(!firstLoanPay) firstLoanPay = (nowCash-saveMoney);
					perYearPaidLoan = firstLoanPay;
					loan -= firstLoanPay;
				} else  {
					//有多少閒錢還多少
					perYearPaidLoan = (nowCash-saveMoney);
					loan -= (nowCash-saveMoney); 
				}
			}
			yearOutgoing += perYearPaidLoan;
			nowCash = parseFloat(nowCash) - parseFloat(perYearPaidLoan);
		}

		//投資所得(定存) 繳完貸款才考慮其它投資
		//應該要考慮投報率高於貸款利率的情況....
		if(nowCash > saveMoney) {
			var yearInvestIncome = invest*(nowCash-saveMoney);
			yearIncome += yearInvestIncome;
			nowCash += yearInvestIncome;
			//將實值生活品質扣除通勤時間成本
			if(working)
				yearMaterialLife -= yearInvestIncome * house["transTimeRatio"]  / nowPriceIndex;

		}

		//調整物價指數
		nowPriceIndex *= priceIndex;

		//調整生活水平
		for(w=0;w<member.length;w++) {
			if((nowMemberAge[w] >= 0) && (nowMemberAge[w] <= member[w]['life'])) {
				outgoing[w] *= betterLife;
				nowOutgoing[w] = nowPriceIndex * outgoing[w];
			}
			nowMemberAge[w]++;
		}
		
		//計算通勤成本漲幅
		houseTransCostPerMonth *= priceIndex;

		if(firstPay) {
			yearOutgoing += parseInt(firstPay);
			firstPay = 0;
		}
		//物質生活累計
		totalMaterialLife += yearMaterialLife;

		data['cash'].push(Math.round(nowCash));
		data['income'].push(Math.round(yearIncome));
		data['outgoing'].push(Math.round(yearOutgoing));
		if(loan > 0)
			data['loan'].push(Math.round(loan));
		else
			data['loan'].push(null);
		data['property'].push(Math.round(house["cost"]-loan+nowCash));
		data['life'].push(Math.round(yearMaterialLife));
	}

	//有欠債心情會不好~
	if(loan>0)
		totalMaterialLife -= loan/nowPriceIndex;
	if(nowCash<0)
		totalMaterialLife += nowCash/nowPriceIndex;
}

// 從<buyOn>歲開始買房子 在這之前都是租房子
function buyHouseOn(buyOn){
	data = {'cash':[],'income':[],'outgoing':[],'property':[],'loan':[],'life':[]};

	//資產計算
	for(var i=0;i<workNum;i++)
		nowSalary[i] = work[i]['salary']; //當前月薪
	nowOutgoing.length = 0;
	outgoing.length = 0;
	for(i=0;i<member.length;i++)
		nowOutgoing[i] = outgoing[i] = member[i]['outgoing'];//當前每月支出

	nowCash = cash; //現金
	totalMaterialLife = 0;//一生物質生活累計
	houseTransCostPerMonth = house['transCostPerMonth'];

	if(buyOn) {
		house["cost"] = Math.round(parseFloat($("#house .cost").val())*10000);//總價
		rentTo(buyYear-1, data);
		buyHouseFrom(buyYear, data);
	} else
		rentTo(life, data);
	return data;
}

function countBestAge(){
	//計算最佳買房時機
	bestData = [];
	finalCash = [];
	bestLife = [];
	leftLoan = [];
	var oriBuyYear = buyYear;
	for(buyYear=age;buyYear<=life;buyYear++) {
		var tempData = {};
		tempData = buyHouseOn(true);
		var i = tempData['property'].length;
		bestData.push(tempData['property'][i-1]);
		finalCash.push(tempData['cash'][i-1]);
		bestLife.push(parseInt(totalMaterialLife));
		leftLoan.push(tempData['loan'][i-1]);
	}
	buyYear = oriBuyYear; //算完最佳解後要還原原本的buyYear值

	return writeSummary();
}

function countChart1(){
	var bestAge = countBestAge();
	drawHighchart1();

	return bestAge;
}

function countChart2(bestAge){
	buyYear = bestAge;
	houseData = buyHouseOn(true);
	rentData = buyHouseOn(false);
	drawHighchart2();
}

function countProperty(){
	getData();

	$("#buyYear").slider({
		min: age,
		max: life
	});
	
	//設定座標軸
	xAxis = [];
	for(year=age;year<=life;year++)
		xAxis.push(year);

	var bestAge = countChart1();
	$("#buyYear").slider({"value":bestAge}); //用調動buyYear來觸發countChart2
}

$(function(){
	//$(":input").not("#basicData :input,#showOndo,#buyYear").change(countProperty);
	//delay0.1秒 在切換input時會比較順暢
	$(":input").not(".age,#basicData :input,#showOndo,#buyYear,.title").change(function(){setTimeout(function(){countProperty();},100);});
	//workMember是動態生成的~要用on來綁定事件
	$(document).on("change",".workMember :input",function(){
		var $t = $(this);
		var workAge = Math.max($(".member").eq($t.val()).find(".age").val(),25);
		$(".work").eq($t.attr("name").substring(10)).find(".workAge").val(workAge);
		setTimeout(function(){countProperty();},100);
	});
});
