'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectsApp
 */

// TODO: Add error checking to adding todos
angular.module('projectsApp')
  .controller('MainCtrl', function () {
    this.todos = [];

    this.addTodo = function(todo) {
      this.todos.push(todo);
      this.todo = '';
    };

    this.removeTodo = function(index) {
      this.todos.splice(index, 1);
    };
  });
