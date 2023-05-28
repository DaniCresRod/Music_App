function flute_note(theNote){

    document.querySelectorAll("audio")[4].play();

}

console.log(document.querySelectorAll("audio"));

document.querySelectorAll("#Flute a").forEach(x => {
    x.addEventListener("click", flute_note(1));}
);

console.log(document.querySelectorAll("#Flute a"));
