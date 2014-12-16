'use strict';

/**
 * @ngdoc function
 * @name mannheimMongodbMuggithubioApp.controller:NextdateCtrl
 * @description
 * # NextdateCtrl
 * Controller of the mannheimMongodbMuggithubioApp
 */
angular.module('mannheimMongodbMuggithubioApp')
  .controller('NextDateCtrl', function () {

    this.nextDate = new Date();

    var next = moment().add(1,"months").startOf("month").add(19,"hours");
    var day = next.format("ddd");

    var counter = 0;

    while (day.toLowerCase() !== "tue" && counter < 10) {
      next = next.add(1,"days");
      day = next.format("ddd");
      counter++;
    }

    this.nextDate = next.toDate();

    console.log("date:", this.nextDate);
    console.log("day:", day);

  });
