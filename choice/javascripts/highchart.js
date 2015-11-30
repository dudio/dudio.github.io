var happyViaMoney = [];
var moneyAxix = [];

var propertyData = [];

var liveData = [];
var ageAxix = [];

var expectHappyData = [];

function drawHappy(){
	seriesOptionsBest= [{
		name: "快樂度",
		data: happyViaMoney
	}];

	var showLegend = [1,1,0,0];
	$("#highchartContent-best .highcharts-legend").each(function(){
		$(this).find(".highcharts-legend-item").each(function(i){
			showLegend[i] = ($(this).children("text").css("color")=="rgb(51, 51, 51)");
		});
	});
	//var colors = Highcharts.getOptions().colors;
	//console.log(colors);
	$('#highchartHappy').highcharts({
		chart: {
			height: 350
		},
		title: {
			text: '該日花費與快樂度比較圖',
			x: -20 //center
		},
		colors: ['#f15c80','#7cb5ec','#434348','#8085e9'],
		xAxis: {
			title: {
				text: '該日花費'
			},
			categories: moneyAxix
		},
		yAxis: {
			title: {
				text: ''
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
};


function drawProperty(){
	seriesOptionsBest= [{
		name: "資產",
		data: propertyData
	}];

	var showLegend = [1,1,0,0];
	$("#highchartContent-best .highcharts-legend").each(function(){
		$(this).find(".highcharts-legend-item").each(function(i){
			showLegend[i] = ($(this).children("text").css("color")=="rgb(51, 51, 51)");
		});
	});
	//var colors = Highcharts.getOptions().colors;
	//console.log(colors);
	$('#highchartProperty').highcharts({
		chart: {
			height: 350
		},
		title: {
			text: '資產變化圖',
			x: -20 //center
		},
		colors: ['#7cb5ec','#f15c80','#434348','#8085e9'],
		xAxis: {
			title: {
				text: '年紀'
			},
			categories: ageAxix
		},
		yAxis: {
			title: {
				text: ''
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			valueSuffix: '萬元'
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
			borderWidth: 0
		},
		series: seriesOptionsBest
	});
};

function drawLive(){
	seriesOptionsBest= [{
		name: "存活率",
		data: liveData
	}];

	var showLegend = [1,1,0,0];
	$("#highchartContent-best .highcharts-legend").each(function(){
		$(this).find(".highcharts-legend-item").each(function(i){
			showLegend[i] = ($(this).children("text").css("color")=="rgb(51, 51, 51)");
		});
	});
	//var colors = Highcharts.getOptions().colors;
	//console.log(colors);
	$('#highchartLive').highcharts({
		chart: {
			height: 350
		},
		title: {
			text: '存活機率圖',
			x: -20 //center
		},
		colors: ['#7cb5ec','#f15c80','#434348','#8085e9'],
		xAxis: {
			title: {
				text: '年紀'
			},
			categories: ageAxix
		},
		yAxis: {
			title: {
				text: ''
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			valueSuffix: '%'
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
			borderWidth: 0
		},
		series: seriesOptionsBest
	});
};

function drawExpectHappy(){
	seriesOptionsBest= [{
		name: "快樂度期望值",
		data: expectHappyData
	}];

	var showLegend = [1,1,0,0];
	$("#highchartContent-best .highcharts-legend").each(function(){
		$(this).find(".highcharts-legend-item").each(function(i){
			showLegend[i] = ($(this).children("text").css("color")=="rgb(51, 51, 51)");
		});
	});
	//var colors = Highcharts.getOptions().colors;
	//console.log(colors);
	$('#highchartExpectHappy').highcharts({
		chart: {
			height: 350
		},
		title: {
			text: '快樂度期望值',
			x: -20 //center
		},
		colors: ['#7cb5ec','#f15c80','#434348','#8085e9'],
		xAxis: {
			title: {
				text: '年齡'
			},
			categories: ageAxix
		},
		yAxis: {
			title: {
				text: ''
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			valueSuffix: '歲'
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
			borderWidth: 0
		},
		series: seriesOptionsBest
	});
};