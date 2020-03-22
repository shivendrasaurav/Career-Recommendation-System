var dscnt=0, wdcnt=0, epcnt = 0;

function calccar(){
  if(document.getElementById("1").checked==true)
    wdcnt++;
  if(document.getElementById("2").checked==true)
    wdcnt++;
  if(document.getElementById("3").checked==true)
    wdcnt++;
  if(document.getElementById("4").checked==true)
    wdcnt++;
  if(document.getElementById("5").checked==true)
    dscnt++;
  if(document.getElementById("6").checked==true)
    epcnt++;
  if(document.getElementById("7").checked==true)
    epcnt++;
  if(document.getElementById("8").checked==true)
    epcnt++;
  if(document.getElementById("9").checked==true){
    wdcnt++;
    dscnt++;
  }
  if(document.getElementById("10").checked==true)
    dscnt++;
  if(document.getElementById("11").checked==true)
    dscnt++;
  if(document.getElementById("12").checked==true)
    wdcnt++;
console.log(dscnt);
console.log(wdcnt);
console.log(epcnt);

if(wdcnt > dscnt && wdcnt > epcnt)
  document.getElementById("res").innerHTML = "Web Development";
else if(dscnt > wdcnt && dscnt > epcnt)
  document.getElementById("res").innerHTML = "Data Science";
else if(epcnt > dscnt && epcnt > wdcnt)
  document.getElementById("res").innerHTML = "Embedded Programming";
}