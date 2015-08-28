// Create file in directory src

React.render(
        React.createElement("h1", null, "Hello Tutorial React!"),
        document.getElementById('example')
      );
//created first component MyFirstComponent
var MyFirstComponent = React.createClass({displayName: "MyFirstComponent", //created class with craeteClass
	render: function(){ //used method render ; it's return syntax DOM in html
		return (
			React.createElement("h2", null, " Hello. I am my first Component")
		);
	}
});
React.render(  
	React.createElement(MyFirstComponent, null), //component created!
	document.getElementById('myDiv') //myDiv name attribute id
);