sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("logaligroup.proyrrhhmas.controller.Menu", {
        onInit: function () {

        },

        onAfterRendering: function () {
            var genericTileFirmarPedido = this.byId("FirmarPedido");
            //Id del dom
            var idGenericTileFirmarPedido = genericTileFirmarPedido.getId();
            //Se vacia el id
            jQuery("#" + idGenericTileFirmarPedido)[0].id = "";
        },

        navToCrearEmpleado: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteCrearEmpleado",{},false);
        }

    });
});