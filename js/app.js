(function(){
    var app = angular.module('store',[ ]);
    app.controller('StoreController', function(){
        this.product = house;
    });
    
    var house = {
        name: 'Dodecahedron',
        price: 2.95,
        description: '....',
    }
})();

