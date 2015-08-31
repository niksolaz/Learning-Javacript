var React = require('react');
    
var TodoBox = React.createClass({
  render: function() {
    return (
      <div className = "todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.props.data}/>
        <TodoForm />
      </div>
    );
  }
});

var TodoList = React.createClass({
  getInitialState: function() { 
    return { 
      data: this.props.data, 
      titleValue: "", 
      detailValue: "" 
    }; 
  }, 
  changeTitle: function(event) { 
    this.setState({titleValue:event.target.value});
  }, 
  changeDetail: function(event) { 
    this.setState({detailValue:event.target.value});
  }, 
  addTodo: function() { 
    var addDataList = {
      this.state.titleValue,
      this.state.detailValue
    };
    addDataList.push({
      title: this.state.titleValue,
      detail: this.state.detailValue
    });
    
  }, 
  render: function() {
    var todo = this.props.data.map(function(obj) {
      return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>
    });
    return (
      <div className = "todoList">
        <div> 
          Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} /> 
          Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} /> 
          <button onClick={this.addTodo}>Add</button> 
        </div>
        <table style = {{border: "2px solid black"}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
});
var Todo = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  getInitialState: function(){
    return { 
      checked: false,
      style: style.notCheckedTodo
    };
  },
  handleChange: function(event){
    this.setState({checked: event.target.checked});
    if(event.target.checked){
      this.setState({
        style: style.checkedTodo
      });
    }else{
      this.setState({
        style: style.notCheckedTodo
      });
    }
  },
  render: function() {
    return (
      <tr style= {this.state.style}>
        <td style={{border:"1px solid black"}}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/></td>
        <td style={{border:"1px solid black"}}>{this.props.title}</td>
        <td style={{border:"1px solid black"}}>{this.props.children}</td>
      </tr>
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

var style = {
  checkedTodo: { 
    textDecoration: "line-through" 
  }, 
  notCheckedTodo: { 
    textDecoration: "none" 
  },
  tableContent: {
    border: "1px solid black"
  }
};


module.exports = TodoBox;