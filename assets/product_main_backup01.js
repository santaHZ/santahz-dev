let divSpeHeight = 0;

let div_Id ="product_main_spe_Tech";

function incSpeHeightMain(){
	let elem = document.getElementById(div_Id);
	divSpeHeight += 5;
	elem.style.height = divSpeHeight + "px";
	if (divSpeHeight < 350){
		setTimeout(incSpeHeightMain, 10);
	}
}

function decSpeHeightMain(){
	let elem = document.getElementById(div_Id);
	divSpeHeight -= 5;
	elem.style.height = divSpeHeight + "px";
	if (divSpeHeight > 5){
		setTimeout(decSpeHeightMain, 10);
	}
}

let speToggleMain = function(obj_Id) {
	//let btnA= document.getElementById("product_main_spe_Tech_Menu");
    let btnA= document.getElementById(obj_Id);
    
    div_Id = btnA.nextElementSibling.id;
	console.log(div_Id);

    let menuText = btnA.innerHTML.toString();
    let first_Letter = menuText.substr(0,1);
    let left_Leteters = menuText.substr(1,menuText.length-1);

	if (first_Letter == "+"){
		setTimeout(incSpeHeightMain, 10);
		console.log(divSpeHeight);
		btnA.innerHTML = "-" + left_Leteters;
	}else{
		setTimeout(decSpeHeightMain, 10);
		console.log(divSpeHeight);
		btnA.innerHTML = "+" + left_Leteters;
	}
}