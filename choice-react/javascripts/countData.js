function countHappy(){
	var workdayHappiness = parseInt($("#workdayHappiness").val());
	happyViaMoney = [workdayHappiness, 100];

	var monthlyOutput = parseFloat($("#monthlyOutput").val());
	var daylyOutput = Math.round(monthlyOutput*1000000/30)/100;

	var yearIncome = parseInt($("#yearIncome").val()*10000); //年收入
	var yearlyWorkdays = parseInt($("#yearlyWorkdays").val()); //年工作日數
	var daylySalary = Math.round(yearIncome/yearlyWorkdays);
	moneyAxix = [daylyOutput-daylySalary, daylyOutput];

	drawHappy();
};

function countProperty(){
	var depositMoney = parseFloat($("#depositMoney").val());
	var birthYear = parseInt($("#birthYear").val());
	var yearIncome = parseFloat($("#yearIncome").val());
	var retireAge = parseInt($("#retireAge").val());
	var yearlyOutput = parseFloat($("#monthlyOutput").val())*12;

	var nowMoney = depositMoney;
	var old;
	ageAxix = [];
	propertyData = [];
	for(old = 104-birthYear; old<100; old++) {
		propertyData.push(Math.round(nowMoney));
		ageAxix.push(old);
		if(old<=retireAge)
			nowMoney += yearIncome;
		nowMoney -= yearlyOutput;
	}



	drawProperty();
};

function countLive(){
	var birthYear = parseInt($("#birthYear").val());
	var sex = $(":input[name=sex]:checked").val();
	all = (sex=='m')?manLive:womanLive;
	
	var nowYear = 104;//當前年份(民國)
	var old = nowYear-birthYear;
	var year = nowYear;
	var nowLive, livePorb;
	liveData = [];
	ageAxix = [];
	do {
		if(year<=149) {
			nowLive = all[old][year-99];
			year++;
		} else {
			if(all[old][50] < all[old-1][49])
				nowLive *= all[old][50] / all[old-1][49];
		}
		liveProb = Math.round(parseFloat(nowLive)*1000/parseInt(all[nowYear-birthYear][nowYear-99]))/10;
		liveData.push(liveProb);
		ageAxix.push(old);
		old++;

	} while(old<100);//一百歲以上的無法計算

	/*	var year = 50; //民國99(0)年 最大到149(50)年
	var old = 100;//實歲0歲 最大到100
	console.log(all[old][year]);*/

	drawLive();
};

function countExpectHappy(){
	expectHappyData = [];
	var birthYear = parseInt($("#birthYear").val());
	var workdayHappiness = parseInt($("#workdayHappiness").val());
	var yearlyWorkdays = parseInt($("#yearlyWorkdays").val()); //年工作日數
	var retireAge = parseInt($("#retireAge").val());
	var workYearHappy = (workdayHappiness*yearlyWorkdays+100*(365-yearlyWorkdays))/365;
	for(old = 104-birthYear; old<100; old++) {
		if(old<retireAge)
			expectHappyData.push(workYearHappy*liveData[old-104+birthYear]);
		else
			expectHappyData.push(100*liveData[old-104+birthYear]);
		expectHappyData.push();
	}

	drawExpectHappy();
};
