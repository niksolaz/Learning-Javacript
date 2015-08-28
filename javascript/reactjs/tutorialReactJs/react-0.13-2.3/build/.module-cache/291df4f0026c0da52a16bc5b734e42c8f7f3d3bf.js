// Create file in directory src

React.render(
        React.createElement("h1", null, "Hello Tutorial React!"),
        document.getElementById('example')
      );

var MyFirstComponent = React.createClass({
	render: function(){
		return (
			<h2> Hello. I am my first Component</h2>
		);
	}
});
React.render(
	<MyFirstComponent/>,
	document.getElementById('myDiv')
);
