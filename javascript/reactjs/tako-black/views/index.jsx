var React = require('react');
    
var TodoBox = React.createClass({
  render: function() {
    return (
      <div className="todoBox">
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
      <div class = "todoList">
        I am a TodoList.
      </div>
    );
  }
});

var TodoForm = React.createClass({
  // Write code here
  render: function() {
    return (
      <div class = "todoForm">
        I am a TodoForm.
      </div>
    );
  }
});
React.render(TodoBox,document.getElementById("todoBox"));

module.exports = TodoBox;