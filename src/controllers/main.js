'use strict';

angular.module('consoleGame').controller('main', function($scope) {
	var that = this;

	this.$ = $scope;
	this.gamepadObj = {};

	this.init = function() {
		this.initEvents();
		this.checkingGps();
	}

	this.checkingGps = function() {
		navigator.getGamepads().map(function(v) {
			if (v) {
				that.gamepadObj[v.id] = {}
			}
		});	
	}

	this.watchingConsole = function() {
		
	}

	this.initEvents = function() {
		console.log('init events');
		window.addEventListener('gamepadconnected', function(e) {
			console.log('e', e.gamepad);
			that.gamepadObj[e.gamepad.id] = {};
			that.$.message = 'gamepad console connected!';
			that.$.$apply();
		});	

		window.addEventListener('gamepaddisconnected', function(e) {
			delete that.gamepadObj[e.gamepad.id];
			that.$.message = 'gamepad console disconnected';
			that.$.$apply();
		});
	};

	this.init();
});