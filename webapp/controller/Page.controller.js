sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"rimRob/libs/d3",
	'sap/ui/model/json/JSONModel'
], function(Controller) {
	"use strict";

	var PageController = Controller.extend("rimRob.controller.Page", {
		onInit: function() {
			var that = this;
			var sServiceUrl = "/com.sap.iotservices.mms/v1/api/http/app.svc";
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl);
			var oJsonModel = new sap.ui.model.json.JSONModel();

			oModel.read("/NEO_44BJY7RUO94V54NYSN1W63RQR.T_IOT_0A2332FB47AB524668AC", null, null, true, function(oData) {
				// console.log(oData.results[oData.results.length-1]);

				var dataModeOn = "On";
				var dataModeOff = "Off";

				var dataMotor = oData.results[oData.results.length - 1].C_MOTOR;
				var motor = that.getView().byId("idMotor");
			//	var motorVis = that.getView().byId("idMotorVis");
				if (dataMotor === "false") {
			
					motor.setValueColor("Error");
					motor.setValue(dataModeOff);
				
			//	motor.setFooter(dataModeOff);
			//	motorVis.setVisible(false);
			

				} else {
					motor.setValueColor("Good");
					motor.setValue(dataModeOn);
				//	motor.setFooter(dataModeOn).addStyleClass("deneme");
				//	motorVis.setVisible(false);
			                        
			

				}

				var dataEmergency = oData.results[oData.results.length - 1].C_EMERGENCY;
				var emergency = that.getView().byId("idEmergency");
				//var emergencyVis = that.getView().byId("idEmergencyVis");
				//emergency.setValue(dataEmergency);
				if (dataEmergency === "false") {
					emergency.setValueColor("Error");
					emergency.setValue(dataModeOff);
				//	emergency.setFooter(dataModeOff);
				//	emergencyVis.setVisible(false);
				} else {
					emergency.setValueColor("Good");
					emergency.setValue(dataModeOn);
				//	emergency.setFooter(dataModeOn);
				//	emergencyVis.setVisible(false);
				}

				var dataAuto = oData.results[oData.results.length - 1].C_AUTO;
				var auto = that.getView().byId("idAuto");
			//	var autoVis = that.getView().byId("idAutoVis");
				//auto.setValue(dataAuto);
				if (dataAuto === "false") {
					auto.setValueColor("Error");
					auto.setValue(dataModeOff);
				//	auto.setFooter(dataModeOff);
				//	autoVis.setVisible(false);
				} else {
					auto.setValueColor("Good");
					auto.setValue(dataModeOn);
				//	auto.setFooter(dataModeOn);
				//	autoVis.setVisible(false);
				}

				var dataCpu = oData.results[oData.results.length - 1].C_CPUFANWARNING;
				var cpu = that.getView().byId("idCPU");
				//var cpuVis = that.getView().byId("idCPUVis");
				//cpu.setValue(dataCpu);
				if (dataCpu === "false") {
					cpu.setValueColor("Error");
					cpu.setValue(dataModeOff);
				//	cpu.setFooter(dataModeOff);
				//	cpuVis.setVisible(false);
				} else {
					cpu.setValueColor("Good");
					cpu.setValue(dataModeOn);
				//	cpu.setFooter(dataModeOn);
				//	cpuVis.setVisible(false);
				}

				var dataTemp = oData.results[oData.results.length - 1].C_TEMPERATUREWARNING;
				var temp = that.getView().byId("idTemp");
			//	var tempVis = that.getView().byId("idTempVis");
				//temp.setValue(dataTemp);
				if (dataTemp === "false") {
					temp.setValueColor("Error");
					temp.setValue(dataModeOff);
				//	temp.setFooter(dataModeOff);
				//	tempVis.setVisible(false);
				} else {
					temp.setValueColor("Good");
					temp.setValue(dataModeOn);
				//	temp.setFooter(dataModeOn);
				//	tempVis.setVisible(false);
				}

				var dataCharge = oData.results[oData.results.length - 1].C_SMBBATTERYCHARGE;
				var charge = that.getView().byId("idCharge");
			//	var chargeVis = that.getView().byId("idChargeVis");
				//charge.setValue(dataCharge);
				if (dataCharge === "false") {
					charge.setValueColor("Error");
					charge.setValue(dataModeOff);
					//charge.setFooter(dataModeOff);
					//chargeVis.setVisible(false);
				} else {
					charge.setValueColor("Good");
					charge.setValue(dataModeOn);
					//charge.setFooter(dataModeOn);
					//chargeVis.setVisible(false);
				}

				var dataSpeed = oData.results[oData.results.length - 1].C_SPEED;
				var speed = that.getView().byId("idSpeed");
			//	var speedVis = that.getView().byId("idSpeedVis");
				speed.setValue(dataSpeed);
				speed.setValueColor("Critical");
			//	speed.setFooter(dataSpeed);
			//	speedVis.setVisible(false);

				var dataColor = oData.results[oData.results.length - 1].C_COLOR;
				var color = that.getView().byId("idColor");
				var colorVis = that.getView().byId("idColorVis");
				//color.setValue(dataColor);
				color.setFooter(dataColor);
				colorVis.setVisible(false);

				var dataTotal = oData.results[oData.results.length - 1].C_TOTAL;
				var total = that.getView().byId("idTotal");
				//var totalVis = that.getView().byId("idTotalVis");
				total.setValue(dataTotal);
				total.setValueColor("Critical");
				//total.setFooter(dataTotal);
				//totalVis.setVisible(false);

				var dataOpe = oData.results[oData.results.length - 1].C_OPERATION;
				var ope = that.getView().byId("idOpe");
				var opeVis = that.getView().byId("idOpeVis");
				//ope.setValue(dataOpe);
				ope.setFooter(dataOpe);
				opeVis.setVisible(false);

				oJsonModel.setData(oData.results[oData.results.length - 1]);

				console.log(oData.results[oData.results.length - 1]);
				// console.log(oData.results);
			});
			that.getView().setModel(oJsonModel, "JModel");

			var jmodel = this.getView().getModel("JModel");
			this.intervalHandle = setInterval(function() {
				oModel.read("/NEO_44BJY7RUO94V54NYSN1W63RQR.T_IOT_0A2332FB47AB524668AC", null, null, true, function(oData) {

					var dataModeOn = "On";
					var dataModeOff = "Off";

					var dataMotor = oData.results[oData.results.length - 1].C_MOTOR;
					var motor = that.getView().byId("idMotor");
				//	var motorVis = that.getView().byId("idMotorVis");
					//	motor.setValue(dataMotor);
					if (dataMotor === "false") {
						motor.setValueColor("Error");
						motor.setValue(dataModeOff);
					//	motor.setFooter(dataModeOff);
					//	motorVis.setVisible(false);

					} else {
						motor.setValueColor("Good");
						motor.setValue(dataModeOn);
					//	motor.setFooter(dataModeOn);
					//	motorVis.setVisible(false);
					}

					var dataEmergency = oData.results[oData.results.length - 1].C_EMERGENCY;
					var emergency = that.getView().byId("idEmergency");
				//	var emergencyVis = that.getView().byId("idEmergencyVis");
					//	emergency.setValue(dataEmergency);
					if (dataEmergency === "false") {
						emergency.setValueColor("Error");
						emergency.setValue(dataModeOff);
						//emergency.setFooter(dataModeOff);
					//	emergencyVis.setVisible(false);
					} else {
						emergency.setValueColor("Good");
						emergency.setValue(dataModeOn);
					//	emergency.setFooter(dataModeOn);
					//	emergencyVis.setVisible(false);
					}

					var dataAuto = oData.results[oData.results.length - 1].C_AUTO;
					var auto = that.getView().byId("idAuto");
					//var autoVis = that.getView().byId("idAutoVis");
					//auto.setValue(dataAuto);
					if (dataAuto === "false") {
						auto.setValueColor("Error");
						auto.setValue(dataModeOff);
					//	auto.setFooter(dataModeOff);
					//	autoVis.setVisible(false);
					} else {
						auto.setValueColor("Good");
						auto.setValue(dataModeOn);
					//	auto.setFooter(dataModeOn);
					//	autoVis.setVisible(false);
					}

					var dataCpu = oData.results[oData.results.length - 1].C_CPUFANWARNING;
					var cpu = that.getView().byId("idCPU");
				//	var cpuVis = that.getView().byId("idCPUVis");
					//cpu.setValue(dataCpu);
					if (dataCpu === "false") {
						cpu.setValueColor("Error");
						cpu.setValue(dataModeOff);
						//cpu.setFooter(dataModeOff);
						//cpuVis.setVisible(false);
					} else {
						cpu.setValueColor("Good");
						cpu.setValue(dataModeOn);
						//cpu.setFooter(dataModeOn);
						//cpuVis.setVisible(false);
					}

					var dataTemp = oData.results[oData.results.length - 1].C_TEMPERATUREWARNING;
					var temp = that.getView().byId("idTemp");
					//var tempVis = that.getView().byId("idTempVis");
					//temp.setValue(dataTemp);
					if (dataTemp === "false") {
						temp.setValueColor("Error");
						temp.setValue(dataModeOff);
					//	temp.setFooter(dataModeOff);
					//	tempVis.setVisible(false);
					} else {
						temp.setValueColor("Good");
						temp.setValue(dataModeOn);
					//	temp.setFooter(dataModeOn);
					//	tempVis.setVisible(false);
					}

					var dataCharge = oData.results[oData.results.length - 1].C_SMBBATTERYCHARGE;
					var charge = that.getView().byId("idCharge");
					//var chargeVis = that.getView().byId("idChargeVis");
					//charge.setValue(dataCharge);
					if (dataCharge === "false") {
						charge.setValueColor("Error");
						charge.setValue(dataModeOff);
					//	charge.setFooter(dataModeOff);
					//	chargeVis.setVisible(false);
					} else {
						charge.setValueColor("Good");
						charge.setValue(dataModeOn);
					//	charge.setFooter(dataModeOn);
					//	chargeVis.setVisible(false);
					}

					var dataSpeed = oData.results[oData.results.length - 1].C_SPEED;
					var speed = that.getView().byId("idSpeed");
					//var speedVis = that.getView().byId("idSpeedVis");
					speed.setValue(dataSpeed);
					speed.setValueColor("Critical");
					//speed.setFooter(dataSpeed);
					//speedVis.setVisible(false);
					

					var dataColor = oData.results[oData.results.length - 1].C_COLOR;
					var color = that.getView().byId("idColor");
					var colorVis = that.getView().byId("idColorVis");
					//color.setValue(dataColor);
					color.setFooter(dataColor);
					colorVis.setVisible(false);

					var dataTotal = oData.results[oData.results.length - 1].C_TOTAL;
					var total = that.getView().byId("idTotal");
					//var totalVis = that.getView().byId("idTotalVis");
					total.setValue(dataTotal);
					total.setValueColor("Critical");
					//total.setFooter(dataTotal);
					//totalVis.setVisible(false);
					

					var dataOpe = oData.results[oData.results.length - 1].C_OPERATION;
					var ope = that.getView().byId("idOpe");
					var opeVis = that.getView().byId("idOpeVis");
					//ope.setValue(dataOpe);
					ope.setFooter(dataOpe);
					opeVis.setVisible(false);

					jmodel.setData(oData.results[oData.results.length - 1]);

				});
			}, 2000);

			//	that.getView().byId("container").setModel(this.getView().getModel("JModel"));
		},
		onExit: function() {
			if (this.intervalHandle) {
				clearInterval(this.intervalHandle);
			}
		},
		onAfterRendering: function() {
			var that = this;
			var sServiceUrl = "/com.sap.iotservices.mms/v1/api/http/app.svc";
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl);
			var oJsonModel = new sap.ui.model.json.JSONModel();
			var arraySpeed = [];

			// Create a simple RadioButtonGroup with three items
			var limit = 60 * 1,
				duration = 750,
				now = new Date(Date.now() - duration);

			var width = 700,
				height = 200;

			var groups = {
				current: {
					value: 0,
					color: 'orange',
					data: d3.range(limit).map(function() {
						return 0;
					})
				}
				/*		target: {
							value: 0,
							color: 'green',
							data: 
							d3.range(limit).map(function() {
								return 0;
							})
						},
						output: {
							value: 0,
							color: 'grey',
							data: 
							d3.range(limit).map(function() {
								return 0;
							})
						}*/
			};

			var x = d3.time.scale()
				.domain([now - (limit - 2), now - duration])
				.range([0, width]);

			var y = d3.scale.linear()
				.domain([0, 100])
				.range([height, 0]);

			var line = d3.svg.line()
				.interpolate('basis')
				.x(function(d, i) {
					return x(now - (limit - 1 - i) * duration);
				})
				.y(function(d) {
					return y(d);
				});

			var svg = d3.select('.graph').append('svg')
				.attr('class', 'chart')
				.attr('width', width)
				.attr('height', height + 50);

			var axis = svg.append('g')
				.attr('class', 'x axis')
				.attr('transform', 'translate(0,' + height + ')')
				.call(x.axis = d3.svg.axis().scale(x).orient('bottom'));


			var paths = svg.append('g');

			for (var name in groups) {
				var group = groups[name];
				group.path = paths.append('path')
					.data([group.data])
					.attr('class', name + ' group')
					.style('stroke', group.color);
			}

			function tick() {
				/*console.warn(arguments);*/
				var millisecondsToWait = 2000;
				setTimeout(function() {

					now = new Date();

					oModel.read("/NEO_44BJY7RUO94V54NYSN1W63RQR.T_IOT_0A2332FB47AB524668AC", null, null, true, function(oData) {
						for (var name in groups) {
							/*var speed = oData.results[name].C_SPEED;
							arraySpeed.push(speed);*/
							var group = groups[name];
							//group.data.push(group.value) // Real values arrive at irregular intervals
							for (var i in oData.results) {
								var speed = oData.results[i].C_SPEED;
								group.data.push(speed);
								group.path.attr('d', line);

							}
							arraySpeed.push(speed);
						}
					});

					// Shift domain
					x.domain([now - (limit - 2) * duration, now - duration]);

					// Slide x-axis left
					axis.transition()
						.duration(duration)
						.ease('linear')
						.call(x.axis);

					// Slide paths left
					paths.attr('transform', null)
						.transition()
						.duration(duration)
						.ease('linear')
						.attr('transform', 'translate(' + x(now - (limit - 1) * duration) + ')')
						.each('end', tick);

					// Remove oldest data point from each group
					for (var name in groups) {
						var group = groups[name];
						group.data.shift();
					}
					console.warn('TICK!');
				}, millisecondsToWait);
			}

			console.warn('TICK START!!!');
			tick();
		}
	});
	return PageController;
});