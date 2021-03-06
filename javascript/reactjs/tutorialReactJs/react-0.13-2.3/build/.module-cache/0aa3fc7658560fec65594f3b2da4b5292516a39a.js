// Create file in directory src

React.render(
        React.createElement("h1", null, "Hello Tutorial React!"),
        document.getElementById('example')
      );
//created first component MyFirstComponent
var MyFirstComponent = React.createClass({displayName: "MyFirstComponent", //created class with craeteClass
	getInitialState: function(){ //specs
		return {
			count: 5
		}
	},
	render: function(){ //used method render ; it's return syntax DOM in html
		return (
			React.createElement("h2", null, this.props.count) //create props
		);
	}
});
React.render(  
	React.createElement(MyFirstComponent, {name: "SomeName"}), //component created! added props name
	document.getElementById('myDiv') //myDiv name attribute id
);