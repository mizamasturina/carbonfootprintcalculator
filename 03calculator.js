
		if(localStorage.getItem('userData')){
			var userData = JSON.parse(localStorage.getItem('userData'));
		}else{
			alert('Please fill in your information first');
			window.location.replace('01index.html');
		}

		function showQuestion(questionId) {
			  var questionToDisplay = document.getElementById(questionId);
			  var allQuestions = document.querySelectorAll('.question');
		
			  allQuestions.forEach(function(question) {
				if (question === questionToDisplay) {
				  question.style.display = 'block';
				} else {
				  question.style.display = 'none';
				}
			  });
		}
	
		function calculateEmissions() {

			// Get the selected option values
			var carType= parseFloat(document.getElementById("transportlabel1").value);
			var carpoolFrequency = parseFloat(document.getElementById("transportlabel2").value);
			var carDistance = parseFloat(document.getElementById("transportlabel3").value);
			var publicTransportUsage = parseFloat(document.getElementById("transportlabel4").value);
			var publicTransportFrequency = parseFloat(document.getElementById("transportlabel5").value);
			var publicTransportDistance = parseFloat(document.getElementById("transportlabel6").value);
			var motorcycleType = parseFloat(document.getElementById("transportlabel7").value);
			var motorcycleDistance = parseFloat(document.getElementById("transportlabel8").value);
	
			var electricbill = parseFloat(document.getElementById("electriclabel1").value);
			var electricpeople = parseFloat(document.getElementById("electriclabel2").value);
			var electricefficient = parseFloat(document.getElementById("electriclabel3").value);
			var electrichours = parseFloat(document.getElementById("electriclabel4").value);
			var electricstar = parseFloat(document.getElementById("electriclabel5").value);
	
			var fooddiet = parseFloat(document.getElementById("foodlabel1").value);
			var foodgood = parseFloat(document.getElementById("foodlabel2").value);
			var foodwaste = parseFloat(document.getElementById("foodlabel3").value);
			var foodcompost = parseFloat(document.getElementById("foodlabel4").value); 
	
			var watershower = parseFloat(document.getElementById("waterlabel2").value);
			var watertap = parseFloat(document.getElementById("waterlabel3").value);
			var waterpractice = parseFloat(document.getElementById("waterlabel4").value);
			var waterwaste = parseFloat(document.getElementById("waterlabel5").value);
			var waterrain = parseFloat(document.getElementById("waterlabel6").value);
			
			var bus = parseFloat(document.getElementById("travel1").value);
			var buskm = parseFloat(document.getElementById("travel2").value);
			var flight = parseFloat(document.getElementById("travel3").value);
			var flightkm = parseFloat(document.getElementById("travel4").value); 
			
			// Perform the calculations
			var carEmission = ( carType - (carType * carpoolFrequency) ) * carDistance;
			var publicEmission =  (publicTransportUsage * publicTransportFrequency) * publicTransportDistance;
			var motorEmission =  motorcycleType * motorcycleDistance;
	
			var billcf= electricbill * 12;
			var efficientcf = ((electricefficient * 11 * (3 + electrichours))/1000)*365;
			var starcf = (electricbill * electricstar) * 12;
	
			var cfTransportationyear = ((carEmission + publicEmission + motorEmission)/1000000)*365;	
			var electriccf = ((billcf - efficientcf - starcf)/electricpeople) * 0.0055;
			var foodcfyear= fooddiet + foodgood + foodwaste + foodcompost;
			var watercfyear= ((watershower + watertap + waterpractice - waterwaste - waterrain)* 0.000000298)*365;
			var travelcf= (bus*buskm) + (flight*flightkm);
	
			var totalcf= cfTransportationyear + electriccf + foodcfyear + watercfyear+ travelcf;
			var planttrees= totalcf / (((24*2.3)*365)*0.001);
	
	
			var roundtransportcf = parseFloat(cfTransportationyear.toFixed(2));
			var roundelectriccf = parseFloat(electriccf.toFixed(2));
			var roundfoodcf = parseFloat(foodcfyear.toFixed(2));
			var roundwatercf= parseFloat(watercfyear.toFixed(2));
			var roundtravelcf= parseFloat(travelcf.toFixed(2));
			
			var roundtotalcf= parseFloat(totalcf.toFixed(2));
			var roundplant= parseFloat(planttrees.toFixed(1));

            localStorage.setItem('userTransportCF', roundtransportcf);
            localStorage.setItem('userElectricCF', roundelectriccf);
            localStorage.setItem('userFoodCF', roundfoodcf);
            localStorage.setItem('userWaterCF', roundwatercf);
            localStorage.setItem('userTravelCF', roundtravelcf);
            localStorage.setItem('userTotalCF', roundtotalcf);
				
			// Display the results
			
			document.getElementById("totalTransportationEmissionyear").innerHTML = "Total Daily Transportation Consumption per year: " + roundtransportcf + " tCO2/km";
			document.getElementById("totalelectricyear").innerHTML = "Total Electricity Consumption per year: " + roundelectriccf + " tCO2/kWh";
			document.getElementById("totalfoodyear").innerHTML = "Total Food Consumption per year: " + roundfoodcf + " tCO2/kg";
			document.getElementById("totalwateryear").innerHTML = "Total Water Consumption per year: " + roundwatercf+ " tCO2/l";
			document.getElementById("totaltravelyear").innerHTML = "Total Travel Consumption per year: " + roundtravelcf+ " tCO2/km";
			document.getElementById("totalcfyear").innerHTML = "Total Carbon Footprint  per year: " + roundtotalcf + " tCO2e";
			document.getElementById("totaloffsetyear").innerHTML = "Number of Trees to be Planted Against Carbon Emission : " + roundplant ;


			let formData = new FormData();
			formData.append('submit', '1');
			formData.append('fname', userData.firstName);
			formData.append('lname', userData.lastName);
			formData.append('city', userData.city);
			formData.append('state', userData.state);
			formData.append('roundtransportcf', roundtransportcf + " tCO2/km");
			formData.append('roundelectriccf', roundelectriccf + " tCO2/kWh");
			formData.append('roundfoodcf', roundfoodcf + " tCO2/kg");
			formData.append('roundwatercf', roundwatercf + " tCO2/l");
			formData.append('roundtravelcf', roundtravelcf + " tCO2/km");
			formData.append('roundtotalcf', roundtotalcf + " tCO2e");
			formData.append('roundplant', roundplant);
	

			fetch('submitData.php', {
			    method: 'POST',
			    body: formData
			  }).then((response) => { 
	            return response.json().then((d) => {
	                if(d.status){
	                	
	                	alert(d.msg);

	                }else{

	                	alert(d.msg);

	                }
	            }).catch((err) => {
	                console.log(err);
	            }) 
	        });
		
			
		}

	
		function validateQuestion1() {
		var question1Inputs = document.querySelectorAll('#question1 input, #question1 select');
		var allFilled = true;
		
		question1Inputs.forEach(function(input) {
			if (!input.value || input.value === 'Choose your option') {
			allFilled = false;
			}
		});
		
		if (allFilled) {
			showQuestion('question2');
		} else {
			alert('Please answer all the questions for Daily Transportation Consumption before proceeding.');
		}
		}

		function validateQuestion2() {
		var question1Inputs = document.querySelectorAll('#question2 input, #question2 select');
		var allFilled = true;
		
		question1Inputs.forEach(function(input) {
			if (!input.value || input.value === 'Choose your option') {
			allFilled = false;
			}
		});
		
		if (allFilled) {
			showQuestion('question3');
		} else {
			alert('Please answer all the questions for Electricity Consumption before proceeding.');
		}
	    }

		function validateQuestion3() {
		var question1Inputs = document.querySelectorAll('#question3 input, #question3 select');
		var allFilled = true;
		
		question1Inputs.forEach(function(input) {
			if (!input.value || input.value === 'Choose your option') {
			allFilled = false;
			}
		});
		
		if (allFilled) {
			showQuestion('question4');
		} else {
			alert('Please answer all the questions for Food Consumption before proceeding.');
		}
	    }

		function validateQuestion4() {
		var question1Inputs = document.querySelectorAll('#question4 input, #question4 select');
		var allFilled = true;
		
		question1Inputs.forEach(function(input) {
			if (!input.value || input.value === 'Choose your option') {
			allFilled = false;
			}
		});
		
		if (allFilled) {
			showQuestion('question5');
		} else {
			alert('Please answer all the questions for Water Consumption before proceeding.');
		}
	
        }

        function addData() {

            // Retrieve data
            var feed = document.getElementById('feedback').value;

            let formData = new FormData();
			formData.append('feedback', '1');
			formData.append('fname', userData.firstName);
			formData.append('lname', userData.lastName);
			formData.append('comment', feed);
			
	

			fetch('submitData.php', {
			    method: 'POST',
			    body: formData
			  }).then((response) => { 
	            return response.json().then((d) => {
	                if(d.status){
	                	
	                	alert(d.msg);

	                }else{

	                	alert(d.msg);

	                }
	            }).catch((err) => {
	                console.log(err);
	            }) 
	        });
           
          
            // Store data
            // localStorage.setItem('userFeedback', feed);       
            
        }

