function kalkulal(){

    let szelesseg=document.getElementById('szelesseg').value;
    let magassag=document.getElementById('magassag').value;
    let papir=document.getElementById('papirtipus').value;

    let terulet=Math.round((szelesseg*magassag)/10000);    
    let koltseg=terulet*papir;

    document.getElementById('terulet').innerHTML= terulet
    document.getElementById('papir').innerHTML=papir
    document.getElementById('koltseg').innerHTML=koltseg
    document.getElementById('valasz').style.visibility = "visible";
}