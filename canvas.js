var canvas = document.getElementById("thecanvas");
var ctx = canvas.getContext('2d');
var growbutton = document.getElementById("grow");
var bouncebutton = document.getElementById("bounce");
var stopbutton = document.getElementById("stop");
ctx.fillStyle="red";
ctx.beginPath();

var requestID;
var which = 0;
ctx.fillStyle="red";

var clear = function(e){
    ctx.clearRect(0,0,500,500);
    window.cancelAnimationFrame(requestID);
    if(this.id == "grow"){
	which = 0;
    }
    else{
	which = 1;
    }
};

var animate = function(e){
    var r = 0;
    var y = 250;
    var x = 250;
    var dir = -1;
    var dx = 3;
    var dy = 2;
    var func;

    var drawCircle = function(){
	y = 250;
	x = 250;
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

    var bounceCircle = function(){
	clear();
	ctx.beginPath();
	r = 30;
	ctx.arc(x,y,r,0,2 * Math.PI);
	ctx.fill();
	ctx.stroke();
	x += dx;
	y += dy;
	if(x + dx - r < 0 || x + dx + r > 500){
	    if(x + dx - r < 0){
		x = 0 + r;
	    }
	    else{
		x = 500 - r;
	    }
	    dx *= -1;
	}

	if(y + dy - r < 0 || y + dy + r > 500){
	    if(y + dy - r < 0){
		y = 0 + r;
	    }
	    else{
		y = 500 - r;
	    }
	    dy *= -1;
	}
	console.log(requestID);
	requestID = window.requestAnimationFrame(bounceCircle);

    }

    if(which == 0){
	func = drawCircle;
    }
    else{
	func = bounceCircle;
    }

    requestID = window.requestAnimationFrame(func);
}

var stopit = function(){
    window.cancelAnimationFrame(requestID);
}






growbutton.addEventListener("click",clear);
bouncebutton.addEventListener("click",clear);
stopbutton.addEventListener("click",stopit);
canvas.addEventListener("click",animate);
