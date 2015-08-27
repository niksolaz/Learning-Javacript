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
			<Div.Form.label type="text"/>
			<Div.Form.button type="submit" value="Submit"/>
		</Div.Form>
	</Div>
);
var Msg = (
	React.createElement(Div,null,{ style:"color:#DC143C" },
		React.createElement(Div.Form,null,{ method:"post" },
			React.createElement(Div.Form.textarea,null,{ 
														rows:"4",
														cols:"50" },
				React.createElement(Div,null,{ 
												type:"submit",
												value:"Submit" },
				)
			)
		)
	)
);
React.render(Msg,document.getElementById('message'));