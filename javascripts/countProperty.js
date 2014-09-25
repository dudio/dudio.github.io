	function countProperty(){
		rentData = {'cash':[],'income':[],'outgoing':[]};
		houseData = {'cash':[],'income':[],'outgoing':[],'property':[],'loan':[]};
		xAxis = [];
		$("#report").html("");
		var year,month;
		var yearIncome, yearOutgoing;
		var nowSalary, nowOutgoing, nowCash;

		var priceIndex		= 1+$("#priceIndex").val()/100;//物價指數

		//個人資料
		var age			= $("#age").val();//當前年齡
		var life		= $("#life").val();//預期壽命
		var cash		= parseInt($("#cash").val());//當前現金
		var outgoing		= parseInt($("#outgoing").val());//支出/月
		var invest		= $("#invest").val()/100;//投資報酬率
		var saveMoney		= $("#saveMoney").val();//最低現金

		//工作資料
		var retireAge		= $("#retireAge").val();//退休年齡
		var salary		= parseInt($("#salary").val());//月薪
		var bonus		= parseFloat($("#bonus").val());//年終
		var salaryAdjust	= 1+$("#salaryAdjust").val()/100;//調薪
		var workHourPerDay	= parseFloat($("#workHourPerDay").val());//每日工時
		var restPerWeek		= parseFloat($("#restPerWeek").val());//每週休假日數
		var restPerMonth	= parseFloat($("#restPerMonth").val());//每月休假日數
		var restPerYear		= parseFloat($("#restPerYear").val());//每年休假日數
		var workDayPerYear	= 365.2425*(7-restPerWeek)/7 - 12*restPerMonth - restPerYear;
		report("每年工作日數："+Math.round(workDayPerYear));

		//工作日數(by/週/月/年)
		//每日工時*(365*(7-週休日數)/7 - 休假日數) = 每年工時

		//住宿資料
		var rent		= {};//可租房產資料
		rent["cost"]		= parseInt($("#rent .cost").val());//租金

		//租屋-資產計算
		nowSalary = salary;
		nowOutgoing = outgoing;
		nowCash = cash;

		for(year=age;year<=life;year++){
			yearIncome = yearOutgoing = 0;
			
			//計算每月收支
			for(month = 1;month<=12;month++) {
				if(year<=retireAge)
					yearIncome += nowSalary;
				yearOutgoing += nowOutgoing;
				yearOutgoing += rent['cost'];
			}
			//領年終 調薪
			if(year<=retireAge) {
				yearIncome += bonus*nowSalary;
				nowSalary *= salaryAdjust;
			}
			//投資所得(定存)
			if(nowCash > saveMoney)
				yearIncome += invest*(nowCash-saveMoney);

			nowCash = parseFloat(nowCash) + parseFloat(yearIncome) - parseFloat(yearOutgoing);

			//調整物價指數
			nowOutgoing *= priceIndex;
			//report(year+"歲：年收入"+Math.round(yearIncome)+"，年支出"+Math.round(yearOutgoing)+"，累計資產"+Math.round(cash));
			rentData['cash'].push(Math.round(nowCash));
			rentData['income'].push(Math.round(yearIncome));
			rentData['outgoing'].push(Math.round(yearOutgoing));
			xAxis.push(year);
		}

		//可購房產資料
		var house	= {};//可買房產資料
		house["cost"]	= parseInt($("#house .cost").val());//總價
		house["priceChange"]	= 1+$("#house .priceChange").val()/100;//房價漲幅
		var loan	= house["cost"];//貸款
		house["loanRatePerYear"]	= 1+$("#house .loanRatePerYear").val()/100;//貸款年利率

		//買屋-資產計算
		nowSalary = salary;
		nowOutgoing = outgoing;//當前每月支出
		nowCash = cash;
		var perYearPaidLoan;//每年繳交貸款

		//繳頭期款
		var firstPay;
		if(nowCash > saveMoney) {
			if(nowCash-saveMoney >= loan) {
				firstPay = loan;
				loan = 0;
				nowCash -= loan;
			} else{
				loan -= (nowCash-saveMoney);
				firstPay = (nowCash-saveMoney);
				nowCash = saveMoney;
			}
		}
			
		for(year=age;year<=life;year++){
			yearIncome = yearOutgoing = perYearPaidLoan = 0;
			
			//計算每月收支
			for(month = 1;month<=12;month++) {
				if(year<=retireAge)
					yearIncome += nowSalary;
				yearOutgoing += nowOutgoing;
				yearOutgoing += rent['cost'];
				
			}
			//領年終 調薪
			if(year<=retireAge) {
				yearIncome += bonus*nowSalary;
				nowSalary *= salaryAdjust;
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
					perYearPaidLoan = (nowCash-saveMoney);
					loan -= (nowCash-saveMoney);
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
			nowOutgoing *= priceIndex;
			//report(year+"歲：年收入"+Math.round(yearIncome)+"，年支出"+Math.round(yearOutgoing)+"，累計資產"+Math.round(cash));
			houseData['cash'].push(Math.round(nowCash));
			houseData['income'].push(Math.round(yearIncome));
			houseData['outgoing'].push(Math.round(yearOutgoing));
			if(perYearPaidLoan)
				houseData['loan'].push(Math.round(loan));
			houseData['property'].push(Math.round(house["cost"]-loan+nowCash));
		}
		if(firstPay)
			houseData['outgoing'][0] = parseInt(houseData['outgoing'][0])+parseInt(firstPay);
		drawHighchart();
	}
