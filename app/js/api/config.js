angular.module('ic')
    /**
     * API provider
     */
    .provider('APIConfig', function () {
        var that = this;
        this.prefix = '';

        this.$get = function () {
            return {
                prefix: that.prefix
            };
        };
    });