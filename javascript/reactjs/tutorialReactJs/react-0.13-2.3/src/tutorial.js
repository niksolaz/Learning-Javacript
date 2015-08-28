// Create file in directory src

React.render(
        <h1>Hello Tutorial React!</h1>,
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