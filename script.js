function buttonClickUp() {
   
    let player = document.getElementsByClassName('player')[0];
    player.classList.add('playerJump');

    setTimeout(function() {
        player.classList.remove('playerJump');
    }, 500);
    // player.classList.remove('playerDown');
}

setInterval(frame, 100)

function frame() {
    let player = document.getElementsByClassName('player')[0];
    let enemy = document.getElementsByClassName('enemy')[0];

    let playerValue = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    console.log(playerValue);

    let enemyValue = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
    // console.log(enemyValue);


     if(enemyValue <150 && enemyValue > 50  && playerValue > 280) {
        alert("you lose!");
     }
}



