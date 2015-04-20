restaurantController.controller('restaurantCtrl', function restaurantCtrl($scope) {
   $scope.restaurants=[];

   $scope.addRestaurant= function(){
     $scope.restaurants.push({name: $scope.resname,cuisine: $scope.cuisine,
     	                      address: $scope.address,rate: $scope.rate});

   }
$scope.deleteRestaurant=function(item){
     var index = $scope.restaurants.indexOf(item);
     $scope.restaurants.splice(index, 1);


};
   
 
});