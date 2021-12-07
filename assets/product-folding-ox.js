console.log('I am a center of the universe.')
console.log('Hello World.')

// following is the block for specification
let divSpeHeight = 350;
let elementAdj = "spe_Tech";

function incSpeHeight(){
	let elem = document.getElementById(elementAdj);
	divSpeHeight += 1;
	elem.style.height = divSpeHeight + "px";
	if (divSpeHeight < 350){
		setTimeout(incSpeHeight(), 50);
	}
}

function decSpeHeight(){
	let elem = document.getElementById(elementAdj);
	divSpeHeight -= 1;
	elem.style.height = divSpeHeight + "px";
	if (divSpeHeight > 1){
		setTimeout(decSpeHeight(), 50);
	}
}

let speToggle = function(myId) {
	//let btnText = document.getElementById("toggleBtn");
	let btnA= document.getElementById(myId);
	let sibling_id = btnA.nextElementSibling.id;
	elementAdj = btnA.nextElementSibling.id;

	console.log(sibling_id);
	console.log(btnA.innerHTML);
	if (btnA.innerHTML == "+ Technology"){
		setTimeout(incSpeHeight(), 50);
		console.log(divSpeHeight);
		btnA.innerHTML = "- Technology";
	}else{
		setTimeout(decSpeHeight(), 50);
		console.log(divSpeHeight);
		btnA.innerHTML = "+ Technology";
	}
}