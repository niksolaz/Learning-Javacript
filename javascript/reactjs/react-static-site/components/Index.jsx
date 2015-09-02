var React = require('react');

var Index = React.createClass({
  render: function () {
  	var style= {backgroundImage: "url('http://www.metalinjection.net/wp-content/uploads/2014/07/space-metal.jpg')"};
    return (
      <main>
	   <section id="index-title" className="clearfix border-none">
          <div className="col col-12" className="center px3 py4 white bg-gray bg-cover bg-center" style={style}>
            <h1 className="h1 h0-responsive caps mt4 mb0 regular">Nik Solaz</h1>
	  		<p className="h3">Welcome in the Future</p>
          </div>
        </section>
        <section id="index-code" className="clearfix border-top">
	          <div className="clearfix border-none">
	          	  <div className="col col-12 center px3 py4 black bg-white bg-cover bg-center">
	          	  	<h2 className="h1 h0-responsive caps mt4 mb0 regular">CODE</h2>
	          	  </div>
				  <div className="col col-12 center px3 py4 black bg-silver bg-cover bg-center">
				  	<p className="col col-12 " className="center px3 py4 black bg-silver bg-cover bg-center">
				  	Node.js Python Javascript, to learn more, visit my 
				  	<a href="https://github.com/niksolaz"> GitHub </a>
				  	</p>
				  </div>
				  <div className="col col-12 "></div>
			  </div>
        </section>
      </main>
    );
  }
});

module.exports = Index;