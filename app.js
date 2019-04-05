var app = new Vue({

	el: "#root",
	data: {
		showingModal:false,
		showingeditModal: false,
		showingdeleteModal: false,
		errorMessage : "",
		successMessage : "",
		interventions: [],
		newIntervention: {
			date: "",
			nameDemandeur: "",
			surnameDemandeur: "",
			company: "",
			email: "",
			number: "",
			address: "",
			nameIntervenant: "",
			surnameIntervenant: "",
			isSigned: ""
		},
		clickedIntervention: {},

	},

	mounted: function () {
		this.getAllInterventions();
	},


	methods: {
		getAllInterventions: function(){
			axios.get("http://localhost/api.php?action=read")
			.then(function(response){
				app.interventions = response.data.intervention;
			});
		},
		saveIntervention:function(){

			var formData = app.toFormData(app.newIntervention);
			axios.post("http://localhost/api.php?action=create", formData)
				.then(function(response){
					console.log(response);
					app.newIntervention = {date: "", nameDemandeur: "", surnameDemandeur: "", company: "", email: ""
				, number: "", address: "", nameIntervenant: "", surnameIntervenant: "", isSigned: ""};
					// if (response.data.error) {
					// 	app.errorMessage = response.data.message;
					// }else{
					app.successMessage = response.data.message;
					app.getAllInterventions();
				});
			},
			updateIntervention:function(){

			var formData = app.toFormData(app.clickedIntervention);
			axios.post("http://localhost/api.php?action=update", formData)
				.then(function(response){
					console.log(response);
					app.clickedIntervention = {};
					app.successMessage = response.data.message;
					app.getAllInterventions();

				});
			},
			deleteIntervention:function(){

			var formData = app.toFormData(app.clickedIntervention);
			axios.post("http://localhost/api.php?action=delete", formData)
				.then(function(response){
					console.log(response);
					app.clickedIntervention = {};
					app.successMessage = response.data.message;
					app.getAllInterventions();
				});
			},
			selectIntervention(intervention){
				app.clickedIntervention = intervention;
			},

			toFormData: function(obj){
				var form_data = new FormData();
			      for ( var key in obj ) {
			          form_data.append(key, obj[key]);
			      }
			      return form_data;
			},
			clearMessage: function(){
				app.errorMessage = "";
				app.successMessage = "";
			},
	}
});
