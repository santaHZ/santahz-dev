console.log('I am a center of the universe.')
let myString = "Hello World~!";
console.log(myString);
console.log(2+6);

let divHeight = 300;

function incHeight(){
	let elem= document.getElementById("product_data"); //can only define html element inside function
	divHeight += 2;
	elem.style.height = divHeight + "px";
	if (divHeight < 450){
		setTimeout(incHeight, 5);
	}
}

function decHeight(){
	//can only define html element inside function
	let elem= document.getElementById("product_data"); 
	divHeight -= 2;
	elem.style.height = divHeight + "px";
	if (divHeight > 300){
		setTimeout(decHeight, 5);
	}
}

let toggleShow = function() {
	//let btnText = document.getElementById("toggleBtn");
	let btnA= document.getElementById("toggleA");
	//console.log(btnText.value);
	console.log(btnA.innerHTML);
	if (btnA.innerHTML == "Expand"){
		setTimeout(incHeight, 5);
		console.log(divHeight);
		btnA.innerHTML = "Shrink";
	}else{
		setTimeout(decHeight, 5);
		console.log(divHeight);
		btnA.innerHTML = "Expand";
	}
}


// following is the block for specification

let divSpeHeight = 350;
//let divSpeTech = document.getElementById("spe_Tech");
//let divSpeHeightMax = window.getComputedStyle(divSpeTech).getPropertyValue('height');
//console.log(divSpeHeightMax);

function incSpeHeight(){
	let elem = document.getElementById("spe_Tech");
	divSpeHeight += 5;
	elem.style.height = divSpeHeight + "px";
	if (divSpeHeight < 350){
		setTimeout(incSpeHeight, 3);
	}
}

function decSpeHeight(){
	let elem = document.getElementById("spe_Tech");
	divSpeHeight -= 5;
	elem.style.height = divSpeHeight + "px";
	if (divSpeHeight > 5){
		setTimeout(decSpeHeight, 3);
	}
}

let speToggle = function() {
	//let btnText = document.getElementById("toggleBtn");
	let btnA= document.getElementById("spe_Tech_Menu");
	//console.log(btnText.value);
	console.log(btnA.innerHTML);
	if (btnA.innerHTML == "+ Technology"){
		setTimeout(incSpeHeight, 3);
		console.log(divSpeHeight);
		btnA.innerHTML = "- Technology";
	}else{
		setTimeout(decSpeHeight, 3);
		console.log(divSpeHeight);
		btnA.innerHTML = "+ Technology";
	}
}