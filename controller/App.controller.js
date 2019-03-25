sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel"
	],function(BaseController,JSONModel){
		"use strict";
		return BaseController.extend("myapp.controller.App",{
			onInit: function(){
				var oViewModel = new JSONModel({
					busy:true
				});
				this.setModel(oViewModel,"viewModel");
				oViewModel.setProperty("/busy", false);
			}
		});
	});