/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"logaligroup/proy_rrhh_mas/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
