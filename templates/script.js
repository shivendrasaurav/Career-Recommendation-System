var dscnt=0, wdcnt=0, epcnt = 0;

function calccar(){
  str="Programming";
  var str1=" ", str2=" ", str3=" ";
  if(document.getElementById("ct").checked==true){
    str1="Computer Technology"
    str2="Data Analysis"
    str3="Marketing"
  }
  if(document.getElementById("da").checked==true){
    str3="Project Management"
    str1="Data Analysis"
    str2="Marketing"
  }
  if(document.getElementById("mkt").checked==true){
    str2="Project Management"
    str3="Design"
    str1="Marketing"
  }
  if(document.getElementById("pm").checked==true){
    str1="Project Management"
    str2="Design"
    str3="Cloud Computing"
  }
  if(document.getElementById("des").checked==true){
    str1="Design"
    str2="Cloud Computing"
    str3="Mobile and Web Development"
  }
  if(document.getElementById("cc").checked==true){
    str1="Cloud Computing"
    str2="Mobile and Web Development"
    str3="Network Structure and Security"
  }
  if(document.getElementById("mwd").checked==true){
    str1="Mobile and Web Development"
    str2="Network Structure and Security"
    str3="Computer Technology"
  }
  if(document.getElementById("nss").checked==true){
    str2="Computer Technology"
    str3="Data Analysis"
    str1="Network Structure and Security"
  }

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
  document.getElementById("res").innerHTML = str1;
else if(dscnt > wdcnt && dscnt > epcnt)
  document.getElementById("res").innerHTML = str2;
else if(epcnt > dscnt && epcnt > wdcnt)
  document.getElementById("res").innerHTML = str3;
}