var React = require('react');

var About = React.createClass({
  render: function () {
    return (
      <main>
        <section id="index-code" className="clearfix border-top">
	          <div className="clearfix border-none">
				  <div className="col col-12 center px3 py4 black bg-silver bg-cover bg-center">
				  	<address className="col col-12 " className="center px3 py4 black bg-silver bg-cover bg-center">
				  	Hi, I am Nicola Solazzo. I am from Italy and I love to write code. If you want to know me, drop me a 
				  	<a href="mailto:solazzo.nicola@gmail.com"> mail </a>
				  	</address>
				  </div>
				  <div className="col col-12 "></div>
			  </div>
        </section>
      </main>
    );
  }
});

module.exports = About;