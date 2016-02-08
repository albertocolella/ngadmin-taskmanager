var myApp = angular.module('myApp', ['ng-admin']);
myApp.config(['NgAdminConfigurationProvider', function(nga) {
    var admin = nga.application('Task manager')
  .baseApiUrl('http://127.0.0.1:8000/api/v1/');
  var task = nga.entity('tasks');
  task.listView().fields([
    nga.field('name'),
    nga.field('description')
  ]);
  task.creationView().fields([
      nga.field('name'),
      nga.field('description')
  ]);
  task.editionView().fields(task.creationView().fields());
  admin.addEntity(task);
  nga.configure(admin);
}]);
