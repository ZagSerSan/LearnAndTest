// Примечание: Поскольку для работы примера подгружаются внешние данные, он не будет работать в автономном режиме
// Запускайте пример на веб-сервере!
function TimetableCtrl($scope, $http) {
  $http.get('js/items.json')
  .success(function(data) { $scope.sessions = data.sessions; })
  .error(function(data) { console.log('error'); });
}