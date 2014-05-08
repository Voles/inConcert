angular.module('ic')

  // kudos to http://stackoverflow.com/a/11878038/363448
  .filter('range', function() {
    return function(input, total) {
      total = parseInt(total);
      for (var i=1; i<=total; i++)
        input.push(i);
      return input;
    };
  });
