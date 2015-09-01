var React = require('react');

var Index = React.createClass({
  render: function () {
    return (
      <main>
        <header class="white bg-gray bg-cover bg-center"
		  style="background-image: url(http://img2.themebin.com/hd-wallpapers/1920x1200/space_1920x1200.jpg)">
		  <nav class="clearfix white">
		    <div class="sm-col">
		      <a href="/" class="btn py2">Home</a>
		      <a href="/About" class="btn py2">About</a>
		      <a href="/Contact" class="btn py2">Contact</a>
		    </div>
		  </nav>
		  <div class="center px2 py4">
		    <h1 class="h1 h0-responsive caps mt4 mb0 regular">Node.Js Developer</h1>
		    <p class="h3">Web service applications</p>
		  </div>
		</header>

      </main>
    );
  }
});

module.exports = Index;