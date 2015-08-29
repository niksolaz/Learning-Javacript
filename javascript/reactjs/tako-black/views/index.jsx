var React = require('react');
    
var TodoBox = React.createClass({
  render: function() {
    return (
      <div className = "todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
});

var TodoList = React.createClass({
  // Write code here
  render: function() {
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
          </tbody>
        </table>
      </div>
    );
  }
});
var Todo = React.createClass({
  render: function() {
    return (
      <div className = "todo">
        <p>{this.props.title}</p>
      </div>
    );
  }
});

var TodoForm = React.createClass({
  // Write code here
  render: function() {
    return (
      <div className = "todoForm">
        I am a TodoForm.
      </div>
    );
  }
});


module.exports = TodoBox;