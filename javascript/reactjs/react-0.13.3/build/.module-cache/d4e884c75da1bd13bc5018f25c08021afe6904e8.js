React.render(
  React.createElement('h1', null, 'Hello, world!'),
  document.getElementById('example_start')
);

var Hello = React.createClass({displayName: "Hello",
    render: function() {
        return React.createElement("div", null, "Hello ", this.props.name);
    }
});
 
React.render(React.createElement(Hello, {name: "World"}), document.getElementById('container'));

var Ciao = React.createClass({displayName: "Ciao",
	render: function(){
    	return React.createElement("div", null, "Ciao ", this.props.name);
    }
});
React.render(React.createElement(Ciao, {name: "Nicola"}),document.getElementById('new_container'));

var MyComponent = React.createClass({displayName: "MyComponent",
	render: function(){
    	return React.createElement("h3", null, "Hello, do you see me?");
    }
});
var myElement = React.createElement(MyComponent, {someProperty: true});
React.render(myElement, document.getElementById('example'));

var Div;
var app = React.createElement(Div, {color: "blue"});
var app = React.createElement(Div, {color:"blue"});
React.render(app,document.getElementById('new_example'));

var Form = MyFormComponent;
var App = (
  React.createElement(Form, null, 
    React.createElement(Form.Row, null, 
      React.createElement(Form.Label, null), 
      React.createElement(Form.Input, null)
    )
  )
);
var App = (
  React.createElement(Form, null,
    React.createElement(Form.Row, null,
      React.createElement(Form.Label, null),
      React.createElement(Form.Input, null)
    )
  )
);

React.render(App,document.getElementById('form_container'));

