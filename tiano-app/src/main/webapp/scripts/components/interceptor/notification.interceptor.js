 'use strict';

angular.module('tianoAppApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-tianoAppApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-tianoAppApp-params')});
                }
                return response;
            }
        };
    });
