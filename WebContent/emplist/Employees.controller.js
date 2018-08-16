sap.ui.controller("emplist.Employees", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf emplist.Employees
*/
	onInit: function() {
		
		var oModel =
			new sap.ui.model.json.JSONModel();
		
		oModel.loadData("model/employeesdata.json");
		this.getView().setModel(oModel, "m2");
		
		var oModel = new sap.ui.model.xml.XMLModel();
		oModel.loadData("model/employeesdata.xml");
		
		this.getView().setModel(oModel); //default model
		
		sap.ui.localResources("i18n");
		var rModel = new sap.ui.model.resource.ResourceModel({
			bundleName : "i18n.mySource"
		});
		
		this.getView().setModel(rModel, "i18n");//named model
     //   var otable = this.getView().byId("idtable");
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf emplist.Employees
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf emplist.Employees
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf emplist.Employees
*/
//	onExit: function() {
//
//	}

});