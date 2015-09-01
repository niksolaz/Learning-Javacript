var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function () {
    return (
      <header>
      	<nav>
	        <Link to='/'>Index</Link> |
	        <Link to='/about'>About</Link> |
	        <Link to='/contact'>Contact</Link>
        </nav>
      </header>
    );
  }
});

module.exports = Header;