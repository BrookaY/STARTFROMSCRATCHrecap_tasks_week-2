
/* HTML 
var timer = document.getElementById("timer");
const start = document.getElementById("start");
*/





/* - This works. Now it needs to stop after 12 seconds///////

*/
var timer;
var element = document.getElementById('timer');

(function(){
    var sec = 0;
    timer = setInterval(()=>{
        element.innerHTML = +sec;
        sec ++;
        if (timer < 3){
            clearInterval();
        }
    }, 1000)
})()
















/* OLD CODE ////not necessary at this stage
start.addEventListener('click', function (){
    setInterval(function (){

     timer.textContent =timer ++;
    });

});
*/