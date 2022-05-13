
/* HTML 
var timer = document.getElementById("timer");
const start = document.getElementById("start");
*/



/* - This works. Now it needs to stop after 12 seconds///////

*/
var timer;
var element = document.getElementById('timer');

(function(){
    var sec = 1;
    timer = setInterval(()=>{
        element.innerHTML = +sec;
        sec ++;
    }, 1000);
})();

setTimeout(function(){
    clearInterval(timer);
}, 12000);


//////////ITS STOPS AFTER 12!!!!!! DOESN'T MAKE SENSE BECAUSE I'VE PUT 13 SECONDS BUT WHATEVER!!



/* OLD CODE ////not necessary at this stage
start.addEventListener('click', function (){
    setInterval(function (){

     timer.textContent =timer ++;
    });

});
*/