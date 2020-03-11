var app = angular.module("ozeblin",['ngRoute']);

app.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $routeProvider
    .when("/", 
    {
        title: 'Ozeblin',
        templateUrl : "index.html",
        controller: 'glavniCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
   
}]);

app.controller("glavniCtrl", function($scope,$http){
    $scope.scrollInto = function(neki) {
        document.getElementById(neki).scrollIntoView({
            behavior: 'smooth'
        });
    }

        $scope.posaljiMejl = function() {
            $http.post('https://www.ozeblin.rs/mailing/poruka.php',data).then(function(respo){
                console.log(respo);
            });
        }
});