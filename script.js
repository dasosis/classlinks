window.onload = function() {
    console.log("Device Ready!");
    loadDate();
    showClass()
};

var myDate = {};

function loadDate() {
    myDate.d = new Date();

    myDate.day = 1;//myDate.d.getDay();
    myDate.h = 11;//myDate.d.getHours();
    myDate.m = myDate.d.getMinutes();
}

function showClass() {
    switch (myDate.day) {
        case 1:
            if(myDate.h>=11&&myDate.h<14){
                document.querySelector(".className").innerHTML = "Computer Organization Class From 11:40 PM";
            }
            else if(myDate.h>=14&&myDate.h<17){
                window.location.href = "http://meet.google.com/uph-yzzt-dza";
            }
            break;
        case 2:
            if(myDate.h>=11&&myDate.h<12){
                window.location.href = "https://zoom.us/j/9944651298?pwd=SFBjMG9SZWd3NWhlSmhyVWxGZlF3dz09";
            }
            if(myDate.h>=12&&myDate.h<14){
                window.location.href = "https://meet.google.com/fwj-faxz-fxq";
            }
            if(myDate.h>=14&&myDate.h<17){
                window.location.href = "http://meet.google.com/uph-yzzt-dza";
            }
            if(myDate.h>=17&&myDate.h<18){
                console.log("EVS Class from 4:50 PM");
            }
            break;
        case 3:
            if(myDate.h>=11&&myDate.h<14){
                window.location.href = "https://meet.google.com/hta-sfdt-uyp";
            }
            else if(myDate.h>=14&&myDate.h<17){
                console.log("Digital Electronics Lab (Group A) from 2:10 PM");
            }
            break;
        case 4:
            if(myDate.h>=11&&myDate.h<14){
                window.location.href = "https://meet.google.com/ixq-kver-kbh";
            }
            else if(myDate.h>=14&&myDate.h<1){
                window.location.href = "https://meet.google.com/rff-rcfi-btr";
            }
            else if(myDate.h>=16&&myDate.h<17){
                console.log("EVS Class from 4:00 PM")
            }
            break;
        case 5:
            if(myDate.h>=10&&myDate.h<11){
                window.location.href = "https://meet.google.com/rff-rcfi-btr";
            }
            else if(myDate.h>=11&&myDate.h<14){
                console.log("Maths Class (MS) from 11:40 AM");
            }
            else if(myDate.h>=14&&myDate.h<15){
                window.location.href = "https://meet.google.com/vvk-mmpx-qbt";
            }
            else if(myDate.h>=15&&myDate.h<18){
                console.log("Computer Organizatiion Lab from 3:10 PM");
            }
            break;
        default:
            break;
    }
}

function redirect() {

    switch (myDate.day) {
        case 1:
            if(myDate.h>=11&&myDate.h<14){
                window.location.href = "https://meet.google.com/vvk-mmpx-qbt";
            }
            else if(myDate.h>=14&&myDate.h<17){
                window.location.href = "http://meet.google.com/uph-yzzt-dza";
            }
            break;
        case 2:
            if(myDate.h>=11&&myDate.h<12){
                window.location.href = "https://zoom.us/j/9944651298?pwd=SFBjMG9SZWd3NWhlSmhyVWxGZlF3dz09";
            }
            if(myDate.h>=12&&myDate.h<14){
                window.location.href = "https://meet.google.com/fwj-faxz-fxq";
            }
            if(myDate.h>=14&&myDate.h<17){
                window.location.href = "http://meet.google.com/uph-yzzt-dza";
            }
            if(myDate.h>=17&&myDate.h<18){
                console.log("EVS Class from 4:50 PM");
            }
            break;
        case 3:
            if(myDate.h>=11&&myDate.h<14){
                window.location.href = "https://meet.google.com/hta-sfdt-uyp";
            }
            else if(myDate.h>=14&&myDate.h<17){
                console.log("Digital Electronics Lab (Group A) from 2:10 PM");
            }
            break;
        case 4:
            if(myDate.h>=11&&myDate.h<14){
                window.location.href = "https://meet.google.com/ixq-kver-kbh";
            }
            else if(myDate.h>=14&&myDate.h<1){
                window.location.href = "https://meet.google.com/rff-rcfi-btr";
            }
            else if(myDate.h>=16&&myDate.h<17){
                console.log("EVS Class from 4:00 PM")
            }
            break;
        case 5:
            if(myDate.h>=10&&myDate.h<11){
                window.location.href = "https://meet.google.com/rff-rcfi-btr";
            }
            else if(myDate.h>=11&&myDate.h<14){
                console.log("Maths Class (MS) from 11:40 AM");
            }
            else if(myDate.h>=14&&myDate.h<15){
                window.location.href = "https://meet.google.com/vvk-mmpx-qbt";
            }
            else if(myDate.h>=15&&myDate.h<18){
                console.log("Computer Organizatiion Lab from 3:10 PM");
            }
            break;
        default:
            break;
    }
    //window.location.href = "https://meet.google.com/ixq-kver-kbh";

};