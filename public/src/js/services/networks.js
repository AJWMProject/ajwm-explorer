'use strict';

angular.module('insight.networks')
	.factory('Networks',
		function(Consajwms, AjwmCoreLib) {
			return {
				getCurrentNetwork: function () {
					return AjwmCoreLib.Networks.get(Consajwms.NETWORK);
				}
			}
		});