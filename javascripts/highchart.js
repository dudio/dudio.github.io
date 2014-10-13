var rentData = {};
var houseData = {};
var bestData = [];
var finalCash = [];
var bestLife= [];

function drawHighchart() {
	seriesOptionsBest= [{
		name: "最終資產",
		data: bestData
	},{
		name: "實值物質<br/>生活總計",
		data: bestLife
	},{
		name: "最終現金",
		data: finalCash
	}];
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
	createChart();
}


// create the chart when all data is loaded
function createChart() {
	//直接新增一個圖表區塊~置於body後方
//	$('<div>').insertAfter("body").highcharts({});

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
		colors: ['#7cb5ec','#f15c80','#434348'],
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
}
