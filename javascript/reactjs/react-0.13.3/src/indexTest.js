//example Basic render 
React.render( 
        React.createElement('h1',null,'Render Basic of test Index'),
        document.getElementById('example')
      );
//form //
var Msg = (
	<Div style="color:#DC143C">
		<Div.Form method="post">
			<Div.Form.textarea rows="4" cols="50"/>
			<Div.Form.button type="submit" value="Submit"/>
		</Div.Form>
	</Div>
);
var Msg = (
	React.createElement(Div,null,{ style:"background-color:#DC143C" },
		React.createElement(Div.Form,null,{ method:"post" },
			React.createElement(Div.Form.textarea,null,{ 
														rows:"10",
														cols:"100" },
				React.createElement(Div.Form.button,null,{ 
												type:"submit",
												value:"Submit" },
				)
			)
		)
	)
);
React.render(Msg,document.getElementById('message'));

//Color switch case
var Colors = React.createClass({
				render:function(){
					return (
					  <section>
					    <h1>Color</h1>
					    <h3>Name</h3>
					    <p>{this.state.color || "white"}</p>
					    <h3>Hex</h3>
					    <p>
					      {(() => {
					        switch (this.state.color) {
					          case "red":   return "#FF0000";
					          case "green": return "#00FF00";
					          case "blue":  return "#0000FF";
					          default:      return "#FFFFFF";
					        }
					      })()}
					    </p>
					  </section>
					);
				},
				
			});
React.render(Colors,document.getElementById('color'));