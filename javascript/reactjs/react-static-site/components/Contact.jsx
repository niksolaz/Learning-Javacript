var React = require('react');

var About = React.createClass({
  render: function () {
    return (
      <main>
        <header class="white bg-gray bg-cover bg-center"
		  style="background-image: url(http://www.beam-media.com/wp-content/uploads/2012/10/Gray-Beam-Background2.png)">
		  <nav class="clearfix white">
		    <div class="sm-col">
		      <a href="/" class="btn py2">Home</a>
		      <a href="/About" class="btn py2">About</a>
		      <a href="/Contact" class="btn py2">Contact</a>
		    </div>
		  </nav>
		  <div class="center px2 py4">
	        <img className="gravatar animated zoomInDown center" src="http://s.gravatar.com/avatar/5ce7cd2dca13d28f5ab2b982e7351f8f?s=80" />
		    <nav class="flex-first border" style="width:8rem">
		      <ul class="list-reset mt2 mb2">
		        <li><a href="https://twitter.com/AppNiksolaz" class="btn block">Twitter</a>
		        <li><a href="https://www.linkedin.com/nhome/" class="btn block">linkedin</a>
		        <li><a href="https://github.com/niksolaz" class="btn block">GitHub</a>
		      </ul>
		    </nav>
		  </div>
		</header>
      </main>
    );
  }
});

module.exports = Contact;