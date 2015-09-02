var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function () {
    return (
      <header>
        <Link to='/'>Home</Link> |
        <Link to='/about'>About</Link> |
        <Link to='/contact'>Contact</Link>
      </header>
    );
  }
});

module.exports = Header;