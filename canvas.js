var canvas = document.getElementById("thecanvas");
var ctx = canvas.getContext('2d');
var clearbutton = document.getElementById("clear");
var stopbutton = document.getElementById("stop");
ctx.fillStyle="red";
ctx.beginPath();

var requestID;
var y = 250;
var x = 250;
ctx.fillStyle="red";

var clear = function(){
    ctx.clearRect(0,0,500,500);
    window.cancelAnimationFrame(requestID);
};

var animate = function(e){
    var r = 0;
    var dir = -1;
    var drawCircle = function(){
	clear();
	ctx.beginPath();
	ctx.arc(x,y,r,0,2 * Math.PI);
	ctx.fill();
	ctx.stroke();
	if(r <= 0){
	    dir = 1;
	}
	if(r >= 250){
	    dir = -1;
	}
	r+=dir;
	console.log(requestID);
	requestID = window.requestAnimationFrame(drawCircle);
    
    }
    requestID = window.requestAnimationFrame(drawCircle);
}

var stopit = function(){
    window.cancelAnimationFrame(requestID);
}






clearbutton.addEventListener("click",clear);
stopbutton.addEventListener("click",stopit);
canvas.addEventListener("click",animate);
