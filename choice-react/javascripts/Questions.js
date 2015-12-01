Questions = React.createClass({
	setWorkdayWappiness: function(){
		this.props.setWorkdayHappiness(this.refs.workdayHappiness.value);
	},
	render: function(){
		return (
			<div>
				Questions {this.props.workdayHappiness}<br/>
				假如假日的快樂度是一百分 你覺得上班日的快樂度是幾分？(0~100)
				<input ref="workdayHappiness" value="{this.props.workdayHappiness}" type="number" onChange={this.setWorkdayWappiness} />
			</div>
		);
	}
});