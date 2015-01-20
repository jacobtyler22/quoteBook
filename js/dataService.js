var app = angular.module('quoteBook');

app.service('dataService', function($cookieStore){
	var text = $cookieStore.get('quotes') || [];

    this.getData = function(){
    	return text;
    };

    this.addData = function(data){
    	if(data.text && data.author){
    		text.push(data);
    		$cookieStore.put('quotes', text);
    	}
    };

    this.removeData = function(remove){
    	for(var i = 0; i < text.length; i++){
    		if(text[i].text == remove){
    			text.splice(i, 1);
    			$cookieStore.put('quotes', text);
    		}
    	}
    };
});