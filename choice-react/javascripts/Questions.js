Questions = React.createClass({
	setWorkdayWappiness: function(){
		console.log(this.props);
		console.log(this.refs.workdayHappiness.value);
		this.props.setWorkdayHappiness(this.refs.workdayHappiness.value);
	},
	render: function(){
		return (
			<div>
				Questions {this.props.workdayHappiness}<br/>
				假如假日的快樂度是一百分 你覺得上班日的快樂度是幾分？(0~100)
				<input ref="workdayHappiness" value="50" type="number" onChange={this.setWorkdayWappiness} />
			</div>
		);
	}
});