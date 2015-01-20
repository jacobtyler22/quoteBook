var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){
	$scope.quotes = dataService.getData();
	$scope.addShow = false;
	$scope.removeShow = false;
	$scope.filterShow = false;

	$scope.addQuote = function(){
		if($scope.addShow === true){
			dataService.addData({text: $scope.newQuote ,author: $scope.newAuthor});
		}
	}

	$scope.removeQuote = function(){
		if($scope.removeShow === true){
			dataService.removeData($scope.removeText);
		}
	}

	$scope.toggleShow = function(show){
		if(show === 'add'){
			$scope.addShow = true;
			$scope.removeShow = false;
			$scope.filterShow = false;
			$scope.newQuote = '';
			$scope.newAuthor = '';
		} else if(show === 'remove'){
			$scope.removeShow = true;
			$scope.addShow = false;
			$scope.filterShow = false;
			$scope.removeText = '';
		} else if(show === 'filter'){
			$scope.filterShow = true;
			$scope.addShow = false;
			$scope.removeShow = false;
			$scope.quoteFilter = '';
		}
	}
});