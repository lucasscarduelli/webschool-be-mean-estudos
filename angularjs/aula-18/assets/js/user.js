angular.module('User', [])
.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/users', {
            templateUrl: 'views/users.html',
            controller: 'UserController',
            controllerAs: 'User'
        })
        .when('/users/:id', {
            templateUrl: 'views/users-details.html',
            controller: 'UserDetailsController',
            controllerAs: 'UserDetail'
        });
}])
.service('UserService', UserService)
.controller('UserController', ['UserService', UserController])
.controller('UserDetailsController', UserDetailsController)

function UserService($http) {
    this.list = function() {
        const url = 'http://localhost:3000/api/users';
        const method = 'GET';

        const request = {
            url : url,
            method : method
        };

        return $http(request);
    };
};

function UserDetailsController($routeParams) {
    var vm = this;
    vm.routeParams = $routeParams;
    vm.titulo = 'Be MEAN Usuários';
    vm.editing = false;
    vm.reverse = false;
    vm.modelOptions = { 
        updateOn: 'blur default', 
        debounce: { 
            default:3000,
            blur:0 
        }
    };
    vm.users = [
        { name: 'Lucas Boeing Scarduelli', email: 'lucas@scarduelli.com', type: 'teacher', active: true },
        { name: 'Vanessa Mello Boaroli', email: 'vanessaboaroli@gmail.com', type: 'teacher', active: false },
        { name: 'Luiz Otávio Amboni', email: 'luiz@gmail.com', type: 'student', active: true },
        { name: 'Chimbinha da Silva', email: 'chimbinha@calypso.com.br', type: 'student', active: false },
        { name: 'Joelma Lasqueira', email: 'joelma@calypso.com.br', type: 'student', active: false }
    ];

    vm.add = add;
    function add(user) {
        vm.users.push(angular.copy(user));
    };

    vm.submitForm = submitForm;
    function submitForm(user) {
        add(user);
    };

    vm.regexPhone = /9?([0-9]{4})-?([0-9]{4})/;
};

function UserController(UserService) {
    var vm = this;
    vm.titulo = 'Be MEAN Usuários';
    vm.editing = false;
    vm.reverse = false;
    vm.modelOptions = { 
        updateOn: 'blur default', 
        debounce: { 
            default:3000,
            blur:0 
        }
    };

    UserService.list()
    .success(function(data) {
        console.log('Success: ', data);
        vm.users = data;
    })
    .error(function(err) {
        console.log('Erro: ', err);
    });


    vm.add = add;
    function add(user) {
        vm.users.push(angular.copy(user));
    };

    vm.submitForm = submitForm;
    function submitForm(user) {
        add(user);
    };

    vm.regexPhone = /9?([0-9]{4})-?([0-9]{4})/;
};

//UserController.$inject = ['$http'];