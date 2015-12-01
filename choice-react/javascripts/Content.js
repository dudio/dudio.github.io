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

$(function(){
	ReactDOM.render(
		<Content />,
		document.getElementById('content')
	);	
});
