var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function () {
    return (
      <header>
      	<nav>
      		<div class="mb1">
		        <Link to='/'><button class="btn btn-primary mb1 bg-blue">Index</button></Link> |
		        <Link to='/about'><button class="btn btn-primary mb1 bg-green">About</button></Link> |
		        <Link to='/contact'><button class="btn btn-primary mb1 bg-orange">Contact</button></Link>
        	</div>
        </nav>
      </header>
    );
  }
});

module.exports = Header;