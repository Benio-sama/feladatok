let solution = document.querySelector("#solution");
let reset = document.querySelector("#reset");

solution.addEventListener("click", solutionFunction);

function solutionFunction() {
    document.querySelector("#harom").innerHTML = "3";
    document.querySelector("#hat").innerHTML = "6";
    document.querySelector("#het").innerHTML = "7";
    document.querySelector("#harom2").innerHTML = "3";
    document.querySelector("#nulla1").innerHTML = "0";
    document.querySelector("#nulla2").innerHTML = "0";
    document.querySelector("#egy").innerHTML = "1";
    document.querySelector("#ossz").innerHTML = "Result: 100";
}

reset.addEventListener("click", resetFunction);

function resetFunction() {
    document.querySelector("#harom").innerHTML = "";
    document.querySelector("#hat").innerHTML = "";
    document.querySelector("#het").innerHTML = "";
    document.querySelector("#harom2").innerHTML = "";
    document.querySelector("#nulla1").innerHTML = "";
    document.querySelector("#nulla2").innerHTML = "";
    document.querySelector("#egy").innerHTML = "";
    document.querySelector("#ossz").innerHTML = "Result:";
}