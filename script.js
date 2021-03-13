let displayContent = "";


//function to capture the clicked keys.
function print(e){
    
    let text = e.innerText;
    let out = document.getElementById("visor");
    
    out.innerText+=text;

    displayContent += text;
    
}


//function to wipe the display
function wipe(){
    let erase = document.getElementById("visor");

    erase.innerText = "";
    
}

// function that sorts operands and operators
TODO: checar notas antes de prosseguir.
function sortInput(i){
    if (i == "+" || i == "-" || i =="x" || i == "/"){
        console.log("eu falei");
    }
    else{
        console.log(parseInt(i));
    }

}

//function that does the actual math
function doCalc(){
    sortInput(displayContent);
}