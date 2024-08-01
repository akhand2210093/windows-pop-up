
var modal = document.getElementById("myModal");


var span = document.getElementsByClassName("close")[0];


var yesBtn = document.getElementsByClassName("yes-btn")[0];
var noBtn = document.getElementsByClassName("no-btn")[0];


window.onload = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    alert("you're smart but i love you, won't let you go this easily!")
}


noBtn.onclick = function() {
    alert("how did you got this?! please say yes")
}


yesBtn.onclick = function() {
    window.location.href = "yes.html";
}


noBtn.onmouseover = function() {
    
    noBtn.style.pointerEvents = 'none';

    var modalContent = document.querySelector('.modal');
    var modalWidth = modalContent.clientWidth;
    var modalHeight = modalContent.clientHeight;
    var buttonWidth = noBtn.offsetWidth;
    var buttonHeight = noBtn.offsetHeight;

    
    var randomX = Math.random() * (modalWidth - buttonWidth - 40) - 500;
    var randomY = Math.random() * (modalHeight - buttonHeight - 70) - 280;

    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    
    setTimeout(function() {
        noBtn.style.pointerEvents = 'auto';
    }, 300);
};
