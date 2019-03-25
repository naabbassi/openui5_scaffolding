sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
	], function(Controller,UIComponent){
	 	"use strict";
	 	return Controller.extend("myapp.controller.BaseComponent",{
	 		
	 		getRouter : function(){
	 			return UIComponent.getRouterFor(this);
	 		},
	 		getModel: function(mName){
	 			return this.getview().getModel(mName);
	 		},
	 		setModel: function(oModel,sName){
	 			return this.getView().setModel(oModel,sName);
	 		}
	 		
	 	});
	});