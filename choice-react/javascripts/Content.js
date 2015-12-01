var Content = React.createClass({
	getInitialState: function(){
		return {workdayHappiness:50};
	},
	setWorkdayHappiness: function(workdayHappiness){
		console.log("good here");
		console.log(workdayHappiness);
		this.setState({workdayHappiness:workdayHappiness});
	},
	render: function(){
		return (
			<div>
				<Questions
					workdayHappiness = {this.state.workdayHappiness}
					setWorkdayHappiness = {this.setWorkdayHappiness}
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
