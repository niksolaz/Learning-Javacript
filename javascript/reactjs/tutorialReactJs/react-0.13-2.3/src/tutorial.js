
//created first component MyFirstComponent
var MyFirstComponent = React.createClass({ //created class with craeteClass
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
			<div class="my-component">
        		<h1>Count: {this.state.count}</h1> //create props
        		<button type="button" onClick={this.incrementCount}>Increment</button>
      		</div> 
		);
	}
});
React.render(  
	<MyFirstComponent/>, //component created! 
	document.getElementById('myDiv') //myDiv name attribute id
);