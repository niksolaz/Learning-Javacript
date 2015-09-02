var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function () {
    return (
      <header>
        <Link to='/'>Home</Link> |
        <Link to='/about'>About Me</Link>
      </header>
    );
  }
});

module.exports = Header;