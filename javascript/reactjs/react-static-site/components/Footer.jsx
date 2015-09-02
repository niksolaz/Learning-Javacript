var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Footer= React.createClass({
  render: function () {
    return (
      <footer className="white bg-black">
        <div className="px2 py3 container">
          <p className="h6 mb0">&copy; 2015 Solazzo Nicola</p>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;