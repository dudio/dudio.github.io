//圖表一
var bestData = [];
var finalCash = [];
var bestLife= [];
//圖表二
var rentData = {};
var houseData = {};

function drawHighchart1() {
	seriesOptionsBest= [{
		name: "最終資產",
		data: bestData
	},{
		name: "實值物質<br/>生活總計",
		data: bestLife
	},{
		name: "最終現金",
		data: finalCash
	},{
		name: "未償貸款",
		data: leftLoan
	}];

	var showLegend = [1,1,0,0];
	$("#highchartContent-best .highcharts-legend").each(function(){
		$(this).find(".highcharts-legend-item").each(function(i){
			showLegend[i] = ($(this).children("text").css("color")=="rgb(51, 51, 51)");
		});
	});
	//var colors = Highcharts.getOptions().colors;
	//console.log(colors);
	$('#highchartContent-best').highcharts({
		chart: {
			height: 300
		},
		title: {
			text: '買房時間點比較圖(藍線/紅線高點為適合買房的時間點)',
			x: -20 //center
		},
		colors: ['#7cb5ec','#f15c80','#434348','#8085e9'],
		xAxis: {
			title: {
				text: '買房年紀'
			},
			categories: xAxis
		},
		yAxis: {
			title: {
				text: '最終資產總額(NT)'
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			valueSuffix: 'NT'
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
			borderWidth: 0
		},
		series: seriesOptionsBest
	});
	//hide some legend
	//把圖表中第3條折線先行隱藏
	$("#highchartContent-best .highcharts-legend").each(function(){
		$(this).find(".highcharts-legend-item").each(function(i){
			if(!showLegend[i]) $(this).click();
		});
	});
}

function drawHighchart2() {
	seriesOptionsHouse = [{
		name: "累計資產",
		data: houseData['property']
	},{
		name: "累計現金",
		data: houseData['cash']
	},{
		name: "年收入",
		data: houseData['income']
	},{
		name: "年支出",
		data: houseData['outgoing']
	},{
		name: "剩餘貸款",
		data: houseData['loan']
	},{
		name: "生活水平",
		data: houseData['life']
	}];

	var showLegend = [1,1,0,0,1,0];
	$("#highchartContent-house .highcharts-legend").each(function(){
		$(this).find(".highcharts-legend-item").each(function(i){
			showLegend[i] = ($(this).children("text").css("color")=="rgb(51, 51, 51)");
		});
	});

	$('#highchartContent-house').highcharts({
		chart: {
			height: 300
		},
		title: {
			text: buyYear+'歲買屋資產變化圖',
			x: -20 //center
		},
//		subtitle: {
//			text: 'Source: WorldClimate.com',
//			x: -20
//		},
		xAxis: { categories: xAxis },
		yAxis: {
			title: {
				text: '資產/現金總額(NT)'
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			valueSuffix: 'NT'
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
			borderWidth: 0
		},
		series: seriesOptionsHouse
	});
	//hide some legend
	//把圖表中第3,4,6條折線先行隱藏
	$("#highchartContent-house .highcharts-legend").each(function(){
		$(this).find(".highcharts-legend-item").each(function(i){
			if(!showLegend[i]) $(this).click();
		});
	});
}




