// Create file in directory src

React.render(
        React.createElement("h1", null, "Hello Tutorial React!"),
        document.getElementById('example')
      );
var MyFirstComponent = React.createClass({displayName: "MyFirstComponent",
	render: function(){
		return (
			React.createElement("h2", null, " Hello. I am my first Component")
		);
	}
});
React.render(
	React.createElement(MyFirstComponent, null),
	document.getElementById('example')
);