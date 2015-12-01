var Content = React.createClass({
	getInitialState: function(){
		return {workdayHappiness:50};
	},
	render: function(){
		return (
			<div>
				<Questions
					workdayHappiness = {this.state.workdayHappiness}
				/>
				<HappyChart
					workdayHappiness = {this.state.workdayHappiness}
				/>
				<PropertyChart />
				<LiveChart />
				<ResultChart />
			</div>
		);
	}
});

$(function(){
	ReactDOM.render(
		<Content />,
		document.getElementById('content')
	);	
});
