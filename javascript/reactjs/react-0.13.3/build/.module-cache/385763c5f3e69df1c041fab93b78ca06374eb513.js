var Hello = React.createClass({displayName: "Hello",
    render: function() {
        return React.createElement("div", null, "Hello ", this.props.name);
    }
});
 
React.render(React.createElement(Hello, {name: "World"}), document.getElementById('container'));

var Ciao = React.createClass({displayName: "Ciao",
	render: function(){
    	return React.createElement("div", null, "Ciao ", this.props.objects);
   }
});
React.render(React.createElement(Ciao, {objects: "Nicola"}),document.getElementById('container2'));

var MyComponent = React.createClass({displayName: "MyComponent",
	render: function(){
    	return React.createElement("h3", null, "Hello, do you see me?");
    }
});
var myElement = React.createElement(MyComponent, {someProperty: true});
React.render(myElement, document.getElementById('example'));

var div;
var app = React.createElement("div", {color: "blue"});
var app = React.createElement(div, {color:"blue"});
React.render(app,document.getElementById('new_example'));


