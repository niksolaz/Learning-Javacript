
//created first component MyFirstComponent
var MyFirstComponent = React.createClass({displayName: "MyFirstComponent", //created class with craeteClass
	//events
	incrementCount: function(){
		this.setState({
			count: this.state.count + 1
		});
	},
	//specs
	getInitialState: function(){ 
		return {
			count: 0
		}
	},
	render: function(){ //used method render ; it's return syntax DOM in html
		return (
			React.createElement("div", {class: "my-component"}, 
        		React.createElement("h1", null, "Count: ", this.state.count), " //create props", 
        		React.createElement("button", {type: "button", onClick: this.incrementCount}, "Increment")
      		) 
		);
	}
});
React.render(  
	React.createElement(MyFirstComponent, null), //component created! 
	document.getElementById("myDiv") //myDiv name attribute id
);