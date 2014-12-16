'use strict';

/**
 * @ngdoc directive
 * @name mannheimMongodbMuggithubioApp.directive:twitterTimeline
 * @description
 * # twitterTimeline
 */
angular.module('mannheimMongodbMuggithubioApp')
  .directive('twitterTimeline', function() {

    var template = '<a class="twitter-timeline" width="{{width}}" height="{{height}}" href="https://twitter.com/MongoDBMannheim" data-widget-id="544878777336360960">Tweets von @MongoDBMannheim </a>';
    template += '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?';
    template += '"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";';
    template += 'fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';

    return {
      template: template,
      scope: {
        width: "@",
        height: "@"
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        console.log(element);
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        console.log("w:", w);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        console.log("h:", h);
      }
    };
  });
