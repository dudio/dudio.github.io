var rentData = {};
var houseData = {};
var bestData = [];

function drawHighchart() {
	seriesOptionsRent = [{
		name: "累計現金",
		data: rentData['cash']
	},{
		name: "年收入",
		data: rentData['income']
	},{
		name: "年支出",
		data: rentData['outgoing']
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
	}];
	seriesOptionsCompare = [{
		name: "租屋資產",
		data: rentData['cash']
	},{
		name: "買屋資產",
		data: houseData['property']
	}];
	seriesOptionsBest= [{
		name: "最終資產",
		data: bestData
	}];
	createChart();
}


// create the chart when all data is loaded
function createChart() {
	//直接新增一個圖表區塊~置於body後方
//	$('<div>').insertAfter("body").highcharts({});

	//var colors = Highcharts.getOptions().colors;
	$('#highchartContent-rent').highcharts({
		title: {
			text: '租屋資產變化',
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
		series: seriesOptionsRent
	});
	$('#highchartContent-house').highcharts({
		title: {
			text: '買屋資產變化',
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
	$('#highchartContent-compare').highcharts({
		title: {
			text: '租屋買屋資產比較圖',
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
		series: seriesOptionsCompare
	});
	$('#highchartContent-best').highcharts({
		title: {
			text: '買房時間點(圖表最高點即最佳買房年紀)',
			x: -20 //center
		},
		xAxis: {
			title: {
				text: '買房年紀'
			},
			categories: xAxis
		},
		yAxis: {
			title: {
				text: '預期最終資產總額(NT)'
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
}
