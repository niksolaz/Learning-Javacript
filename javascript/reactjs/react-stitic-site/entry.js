var React = require('react');
var Router = require('react-router');
var Routes = require('./Routes.jsx');

module.exports = function render(locals, callback) {
  var html = React.renderToStaticMarkup(React.createElement(Handler, locals))
  callback(null, '<!DOCTYPE html>' + html)
};