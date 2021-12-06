console.log('I am a center of the universe.')
let myString = "Hello World~!";
console.log(myString);

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

let speToggle = function(event) {
	//let btnText = document.getElementById("toggleBtn");
	//let btnA= document.getElementById("spe_Tech_Menu");
	let btnA = document.elementsFromPoint(event.clientX, event.clientY);
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