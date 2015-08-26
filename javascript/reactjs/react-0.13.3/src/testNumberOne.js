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

var Form = MyFormComponent;
var App = (
  <Form>
    <Form.Row>
      <Form.Label />
      <Form.Input />
    </Form.Row>
  </Form>
);
var MyFormComponent = React.createClass({ displayName: "Form", });

MyFormComponent.Row = React.createClass({ displayName: "Form.Row",  });
MyFormComponent.Label = React.createClass({ displayName: "Form.Label",  });
MyFormComponent.Input = React.createClass({ displayName: "Form.Input",  });

React.render(MyFormComponent,document.getElementById('form_container'));

