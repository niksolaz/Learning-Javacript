//example Basic render 
React.render( 
        React.createElement('h1',null,'Render Basic of test Index'),
        document.getElementById('example')
      );
//form //
var msg = (
	React.createElement(Div, {style: "color:#DC143C"}, 
		React.createElement(Div.Form, {method: "post"}, 
			React.createElement(Div.Form.textarea, {rows: "4", cols: "50"}), 
			React.createElement(Div.Form.label, {type: "text"}), 
			React.createElement(Div.Form.button, {type: "submit", value: "Submit"})
		)
	)
);