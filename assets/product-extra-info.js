console.log('I am a center of the universe.')
let myString = "Hello World~!";
console.log(myString);

// following is the block for specification

let divSpeHeight = 350;
//let divSpeTech = document.getElementById("spe_Tech");
//let divSpeHeightMax = window.getComputedStyle(divSpeTech).getPropertyValue('height');
//console.log(divSpeHeightMax);

function incSpeHeight(){
	let elem = document.getElementById();
	divSpeHeight += 5;
	elem.style.height = divSpeHeight + "px";
	if (divSpeHeight < 350){
		setTimeout(incSpeHeight(), 3);
	}
}

function decSpeHeight(){
	let elem = document.getElementById();
	divSpeHeight -= 5;
	elem.style.height = divSpeHeight + "px";
	if (divSpeHeight > 5){
		setTimeout(decSpeHeight(), 3);
	}
}

let speToggle = function(myId) {
	//let btnText = document.getElementById("toggleBtn");
	let btnA= document.getElementById(myId);

	let sibling_id = btnA.parentNode.childNodes[2].id;

	//for (var i=0; i<sibling.length; i++){
	//	console.log(sibling[i], sibling[i].nodeType);
	//}

	console.log(sibling_id);
	console.log(btnA.innerHTML);
	if (btnA.innerHTML == "+ Technology"){
		setTimeout(incSpeHeight(), 3);
		console.log(divSpeHeight);
		btnA.innerHTML = "- Technology";
	}else{
		setTimeout(decSpeHeight(), 3);
		console.log(divSpeHeight);
		btnA.innerHTML = "+ Technology";
	}
}