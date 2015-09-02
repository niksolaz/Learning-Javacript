var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function () {
    return (
      <header>
        <nav className="clearfix white bg-black">
          <div className="sm-col">
            <Link to='/' className="btn py2">Home</Link>
            <Link to='/about' className="btn py2">About Me</Link>
            <Link to='/contact' className="btn py2">Contact Me</Link>
          </div>
        </nav>
      </header>
    );
  }
});

module.exports = Header;
