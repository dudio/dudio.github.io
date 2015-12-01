HappyChart = React.createClass({
	componentDidMount: function(){
		console.log("happy chart mount");
	},
	componentDidUpdate: function(){
		console.log("update happy chart");
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