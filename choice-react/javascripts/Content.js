var Content = React.createClass({
	render: function(){
		return (
			<div>
				<Questions />
				<HappyChart />
				<PropertyChart />
				<LiveChart />
				<ResultChart />
			</div>
		);
	}
});

ReactDOM.render(
	<Content />,
	document.getElementById('content')
);