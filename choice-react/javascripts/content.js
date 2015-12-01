var Content = React.createClass({
	render: function(){
		return (
			<Questions />
			<HappyChart />
			<PropertyChart />
			<LiveChart />
			<ResultChart />
		);
	}
});

ReactDOM.render(
	<Content />,
	document.getElementById('content')
);