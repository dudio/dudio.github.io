HappyChart = React.createClass({

	draw: function(){
		seriesOptionsBest= [{
			name: "快樂度",
			data: [2,3]
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
			colors: ['#7cb5ec','#f15c80','#434348','#8085e9'],
			xAxis: {
				title: {
					text: '該日花費'
				},
				categories: [2,5]
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
		console.log("this draw");
	},
	componentDidMount: function(){
		this.draw();
	},
	componentDidUpdate: function(){
		this.draw();
	},
	render: function(){
		return (
			<div id="highchartHappy">
				HappyChart
				{this.props.workdayHappiness}
			</div>
		);
	}
});