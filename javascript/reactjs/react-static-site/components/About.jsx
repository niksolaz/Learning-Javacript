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
		    <h1 class="h1 h0-responsive caps mt4 mb0 regular">Solazzo Nicola</h1>
		    <p class="h3">Web Developer</p>
		  </div>
		</header>
      </main>
    );
  }
});

module.exports = About;