$(document).ready(function(){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById('register').style.display = "block";
    // evt.currentTarget.className += " active";
});

function openCity(evt, cityName) {
    bottomborder = document.getElementById("signhr");
    registerbtm = document.getElementById("registerbtn");
    loginbtm = document.getElementById("loginbtn");
    if (cityName === "register"){
      bottomborder.style.marginLeft = "0";
      loginbtm.style.color = "black";
      registerbtm.style.color = "gray";
    }else{
      bottomborder.style.marginLeft = "20%";
      registerbtm.style.color = "black";
      loginbtm.style.color = "gray";
    }
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}