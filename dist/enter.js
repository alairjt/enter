/*!
 * enter
 * https://github.com/alairjt/enter
 * Version: 0.0.1 - 2016-09-02T19:28:28.601Z
 * License: MIT
 */


(function () { 
'use strict';
angular.module('enter', [])
        .directive('onEnter', Enter);

function Enter() {
    return function (scope, element, attrs) {
        element.bind('keydown keypress', function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.onEnter);
                });

                event.preventDefault();
            }
        });
    };
}
}());