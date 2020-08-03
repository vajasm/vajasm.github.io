    var keszHambi = [];
    function rendelesFelvetel() {

var hambiNev = document.querySelector("[id='nev']").value;
var hambiAr = document.querySelector("[id='ar']").value;
var hambiAr = parseInt(hambiAr);
var hambiObjektum = {
    nev: hambiNev,
    ar: hambiAr
};
console.log(hambiObjektum);
keszHambi.push(hambiObjektum);
console.log(keszHambi);
console.log(keszHambi[keszHambi.length-1].nev);

var tr = document.createElement("TR");
var td = document.createElement("TD");
var x = tr.appendChild(td);
var hambiNevTabl = document.createTextNode(keszHambi[keszHambi.length-1].nev);
var tablazatNev = x.appendChild(hambiNevTabl);
document.getElementById("rendeles").appendChild(tablazatNev);

};

