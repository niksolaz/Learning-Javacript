var count = {
	counter:function(start){
		start = 0;
		if(start < 100){
			start = start + 1;
		}		
		console.log('Counter: ' + start);
	}
};

module.exports = count;