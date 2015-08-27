//example Basic render 
React.render( 
        React.createElement('h1',null,'Render Basic of test Index'),
        document.getElementById('example')
      );

//Multicomponent example
var Avatar = React.createElement({
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(ProfilePic, {username: this.props.username}), 
        React.createElement(ProfileLink, {username: this.props.username})
      )
    );
  }
});

var ProfilePic = React.createElement({
  render: function() {
    return (
      React.createElement("img", {src: 'https://graph.facebook.com/' + this.props.username + '/picture'})
    );
  }
});

var ProfileLink = React.createElement({
  render: function() {
    return (
      React.createElement("a", {href: 'https://www.facebook.com/' + this.props.username}, 
        this.props.username
      )
    );
  }
});

React.render(
  React.createElement(Avatar, {username: "pwh"}),
  document.getElementById('example_two')
);