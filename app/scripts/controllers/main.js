'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectsApp
 */
angular.module('projectsApp')
  .controller('MainCtrl', function () {
    this.todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    this.addTodo = function(todo) {
      this.todos.push(todo);
      this.todo = '';
    };
  });
