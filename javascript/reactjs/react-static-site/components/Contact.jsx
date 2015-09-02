var React = require('react');

var Contact = React.createClass({
  render: function () {
    return (
      <main>
	      <section id="index-code" className="clearfix border-top">
		          <div className="clearfix border-none">
					  <div className="col col-12 center px3 py4 black bg-silver bg-cover bg-center">
					  	<h3> FOLLOW ME </h3>
					  	<li><a href="https://www.linkedin.com/profile/view?id=AAIAAA6Mq9YBqxIBIVMX3bVsTKHWoiV_l8saR7s&trk=nav_responsive_tab_profile_pic" className="btn block">Linkedin</a></li>
				        <li><a href="https://twitter.com/AppNiksolaz" className="btn block">Twitter</a></li>
				        <li><a href="https://github.com/niksolaz" className="btn block">GitHub</a></li>
					  </div>
					  <div className="col col-12 "></div>
				  </div>
	        </section>
      </main>
    );
  }
});

module.exports = Contact;