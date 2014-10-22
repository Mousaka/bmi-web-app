if (screen.width <= 699) {
document.location = "m/index.html";
}

function updateBMI(){
	
	var bmi = calculate(getHeight()/100, getWeight());
	console.log("getHeight: "+ getHeight()+" getWeight: "+ getWeight() + " BMi= "+ bmi);
	if(bmi!=-1){
		console.log("Updating BMI to "+ bmi);
		document.getElementById("bmiOutput").value = Math.round(bmi);
	}
}
function getWeight(){
	return parseInt(document.getElementById("weight").value);
}

function getHeight(){
	return parseInt(document.getElementById("height").value);
}
function calculate(height, weight){
	return (height>0 && weight>0)? weight/(height*height):-1;
}