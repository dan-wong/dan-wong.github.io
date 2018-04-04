$( document ).ready(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('containerWindow').innerHTML = '<h2 style="color: white; margin-top: 5rem;">Daniel was lazy and didn\'t want to make it mobile compatible</h2>';
    }
});

function move() {
    var elem = document.getElementById("bar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}

function noDialog() {
    alert('No');
}