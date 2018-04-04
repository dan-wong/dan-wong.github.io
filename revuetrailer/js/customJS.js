$( document ).ready(function() {
    if (getParameterByName('mobile')) {
    } else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('containerWindow').innerHTML = '<h2 style="color: white; margin-top: 5rem;">Daniel was lazy and didn\'t want to make it mobile compatible</h2>';
    }
});

function move() {
    var elem = document.getElementById("bar"); 
    var width = 1;
    var id = setInterval(frame, 40);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else if (width >= 70) {
            width = 30;
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}

function noDialog() {
    alert('No');
    document.getElementById("radio1").checked = true; 
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}