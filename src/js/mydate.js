/**
 * 
 */
angular.module('myApp', [ 'ui.bootstrap' ])

.controller('dateDemo',function($scope) {
	// 创建一个方法，定义一个属性来接收当天日期
	$scope.today = function() {
		$scope.myDate = new Date();
	};

	$scope.today();

	// 清空 myDate
	$scope.clear = function() {
		$scope.myDate = null;
	}
	// 创建open方法 。
	// 下面默认行为并将opened 设为true
	$scope.open = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.opened = true;
	}

	$scope.disabled = function(date, mode) {
		return (mode === 'day' && (date.getDay() === 0 || date
				.getDay() === 6))
	}

	$scope.toggleMin = function() {
		$scope.minDate = $scope.minDate ? null : new Date();
	}

	$scope.toggleMin();

	$scope.dateOptions = {
			formatDay : 'dd',
			formatMonth : 'MM',
			formatYear : 'yyyy',
			formatDayHeader : 'EEE',
			formatDayTitle : 'MMMM yyyy',
			formatMonthTitle : 'yyyy',
			maxDate : new Date(2020, 5, 22),
			minDate : new Date(),
			startingDay : 1
	}
	// 日期格式数组
	$scope.myDateformats = [ 'yyyy-MM-dd', 'dd-MMMM-yyyy',
	                         'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate' ];
	// 将日期格式数组第0项设为默认日期格式
	$scope.myDefaultDateFormat = $scope.myDateformats[0];
})