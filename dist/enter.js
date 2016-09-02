/*!
 * enter
 * https://github.com/alairjt/enter
 * Version: 1.0.4 - 2016-09-02T19:44:07.568Z
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