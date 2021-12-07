let divSpeHeight = 0;
let div_Id ="product_main_spe_Tech";
let objArray = [];

function incSpeHeightMain(){
	let elem = document.getElementById(div_Id);
    let elemHeight =elem.scrollHeight;
	divSpeHeight += 7;
	elem.style.height = divSpeHeight + "px";
	if (divSpeHeight < elemHeight){
		setTimeout(incSpeHeightMain, 1);
	}
}

function decSpeHeightMain(){
	let elem = document.getElementById(div_Id);
	divSpeHeight -= 7;
	elem.style.height = divSpeHeight + "px";
	if (divSpeHeight > 7){
		setTimeout(decSpeHeightMain, 1);
	}
}

let speToggleMain = function(obj_Id) {
	//let btnA= document.getElementById("product_main_spe_Tech_Menu");
    let btnA= document.getElementById(obj_Id);
    
    div_Id = btnA.nextElementSibling.id;
	console.log(div_Id);

    if (objArray.length < 2){
        objArray.push(div_Id);
    }else{
        objArray.shift();
        objArray.push(div_Id);
    }
    
    let childBtn = btnA.firstElementChild.getAttribute("class");
	console.log(childBtn);
	console.log(btnA.innerHTML);
	if (childBtn == "add"){
        if (objArray.length == 2){
            if (objArray[0] != objArray[1]){
                divSpeHeight = 0;
            }
        }

		setTimeout(incSpeHeightMain, 1);
		console.log(divSpeHeight);
		btnA.firstElementChild.setAttribute("class","minus");
	}else{
        if (objArray.length == 2){
            if (objArray[0] != objArray[1]){
                divSpeHeight = document.getElementById(div_Id).scrollHeight;
            }
        }
		setTimeout(decSpeHeightMain, 1);
		console.log(divSpeHeight);
		btnA.firstElementChild.setAttribute("class","add");
	}
}