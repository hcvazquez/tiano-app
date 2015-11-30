'use strict';

angular.module('tianoAppApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


