// Create file in directory src

React.render(
        <h1>Hello Tutorial React!</h1>,
        document.getElementById('example')
      );
//created first component MyFirstComponent
var MyFirstComponent = React.createClass({ //created class with craeteClass
	render: function(){ //used method render ; it's return syntax DOM in html
		return (
			<h2> Hello {this.props.name}. I am my first Component</h2> //create props
		);
	}
});
React.render(  
	<MyFirstComponent name="SomeName"/>, //component created! added props name
	document.getElementById('myDiv') //myDiv name attribute id
);