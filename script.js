let Time=31
var score = 0;

function HitRandom(){
    document.querySelector("#hitting").innerText = Math.floor(Math.random()*10)
}



function makeBubble(){
    var group =""
    for(let i=0 ; i<=500 ;i++){
        let rn=(Math.floor(Math.random()*10))
    group+=` <div class="bubble" id="${rn}" >${rn}</div>`;
}
document.querySelector("#bottom").innerHTML= group
}




function runtime(){
    var timer=setInterval(function(){
        if(Time>0){
            Time--;
            document.querySelector('#mytime').innerText=Time
        }
        else{

            clearInterval(timer)
            document.querySelector("#bottom").innerHTML= `<h1>Game Over and Your score is ${score}</h1> `          // appears when game is over
            let but = document.createElement("button");
            but.textContent = "Play Again"; // Use textContent for text
            but.style.cssText = "background-color: rgb(59, 42, 145); color: white; border: none; border-radius: 0.5rem; padding: 0.5rem 0.6rem; text-align: center; text-decoration: none; display: inline-block; font-size: 1.2rem; margin: 0.5rem 0.1rem; cursor: pointer;";
           

            but.addEventListener("click", function() {
                this.style.backgroundColor = "rgb(82, 55, 216)"; 
                location.reload();
            });

            // Append the button to the bottom container
            document.querySelector("#bottom").appendChild(but);
        }
    },1000)

}



 function checkScore(bubblePressed){
    // console.log(bubblePressed.id)
    if(parseInt(document.querySelector("#hitting").innerText) ==parseInt(bubblePressed.id)){
        score+= 10;
        document.querySelector("#Score").innerText=score
        makeBubble()
        HitRandom()
        }

}


runtime()

HitRandom()

makeBubble()


const bubbleContainer = document.querySelector("#bottom");
bubbleContainer.addEventListener("click", function(dets) {
  if (dets.target.classList.contains("bubble")) {
    const bubblePressed = dets.target;
    checkScore(bubblePressed);
  }
});
