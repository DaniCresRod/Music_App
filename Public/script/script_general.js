let instrumentArea = document.getElementById("sausage_fingers");

document.querySelector("#interactive_area img").addEventListener("click", function(){
    if(instrumentArea.classList.contains("show_sausages")){
        instrumentArea.classList.remove("show_sausages");
    }
    else{
        instrumentArea.classList.add("show_sausages");
    }
});

