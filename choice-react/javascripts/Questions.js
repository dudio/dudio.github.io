Questions = React.createClass({
	setWorkdayWappiness: function(){
		console.log("AA");
		this.props.setWorkdayWappiness(this.ref.workdayHappiness);
		console.log("BB");
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