//function to capture the clicked keys.
function print(e){
    
    let test = e.innerText;
    let out = document.getElementById("visor");
    
    out.innerText=test;

    console.log(test);
}


// function to wipe the display
function wipe(){
    let erase = document.getElementById("visor");

    erase.innerText = "";
    console.log("asd");
}