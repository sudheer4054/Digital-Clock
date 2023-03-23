const ho=document.getElementById("hour");
const mi=document.getElementById("minute");
const se=document.getElementById("second");
const AMPM=document.getElementById("ampm");
function updateclock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";
    if(h>12){
        h=h-12;
        ampm="PM";
    }
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;

    ho.innerHTML=h;
    mi.innerHTML=m;
    se.innerHTML=s;
    AMPM.innerHTML=ampm;
    setTimeout(function(){updateclock()},1000)
}
updateclock();