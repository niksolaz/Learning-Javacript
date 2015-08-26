React.render(
  React.createElement('h1', null, 'Hello, world!'),
  document.getElementById('example_start')
);

var Hello = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});
 
React.render(<Hello name="World" />, document.getElementById('container'));

var Ciao = React.createClass({
	render: function(){
    	return <div>Ciao {this.props.name}</div>;
    }
});
React.render(<Ciao name="Nicola"/>,document.getElementById('new_container'));

var MyComponent = React.createClass({
	render: function(){
    	return <h3>Hello, do you see me?</h3>;
    }
});
var myElement = <MyComponent someProperty={true} />;
React.render(myElement, document.getElementById('example'));

var Div;
var app = <Div color="blue"/>;
var app = React.createElement(Div, {color:"blue"});
React.render(app,document.getElementById('new_example'));


var App = (
  <Form method="post">
    <Form.textarea rows="4" cols="50"/>
    <Form.Label form="label"/>
    <Form.button type="submit" value="Submit"/>
  </Form>
);
var App = (
  React.createElement(Form, null,{
  									method:"post"
  								},
    React.createElement(Form.textarea, null,{
    											rows:"4",
    											cols:"50"
    										}
      React.createElement(Form.Label, null{ 
      											form:"label"
      									   }),
      React.createElement(Form.button, null,{
	  											type:"submit",
	  											value:"Submit",
      										})
    )
  )
);

React.render(App,document.getElementById('form_container'));

var AppNav = (
	<Nav color="red">
		<Nav.a rel="search"/>
		<Nav.a rel="search"/>
		<Nav.a rel="search"/>
	</Nav>
);
var AppNav = (
	React.createElement(Nav,null,{ color:"red" },
		React.createElement(Nav.a,null,{ rel:"search" },
		React.createElement(Nav.a,null,{ rel:"search" },)
		React.createElement(Nav.a,null,{ rel:"search" },)
		)
	)
);
React.render(AppNav,document.getElementById('nav_container'));



var FancyCheckbox = React.createClass({
  render: function() {
    var fancyClass = this.props.checked ? 'FancyChecked' : 'FancyUnchecked';
    return (
      <div className={fancyClass} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
});
var FancyCheckbox = React.createElement(Div,null,{ 
													className:fancyClass, 
												   	onClick:this.props.onClick
												   	);
React.render(
  <FancyCheckbox checked={true} onClick={console.log.bind(console)}>
    Hello world!
  </FancyCheckbox>,
  document.getElementById('fancy_container')
);


