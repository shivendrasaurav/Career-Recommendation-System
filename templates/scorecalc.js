function showstep1(){
    document.getElementById("step1").style.display = ("block");
    document.getElementById("step2").style.display = ("none");
    document.getElementById("step3").style.display = ("none");
    document.getElementById("results").style.display = ("none");
}

function showstep2(){
    document.getElementById("step1").style.display = ("none");
    document.getElementById("step2").style.display = ("block");
    document.getElementById("step3").style.display = ("none");
    document.getElementById("results").style.display = ("none");
}

function showstep3(){
    document.getElementById("step1").style.display = ("none");
    document.getElementById("step2").style.display = ("none");
    document.getElementById("step3").style.display = ("block");
    document.getElementById("results").style.display = ("none");
}

function showfinal(){
    document.getElementById("step1").style.display = ("none");
    document.getElementById("step2").style.display = ("none");
    document.getElementById("step3").style.display = ("none");
    document.getElementById("results").style.display = ("block");
}
