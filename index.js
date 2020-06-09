

var l=document.querySelectorAll(".drum").length;

for (i=0; i<l;i++){
	document.querySelectorAll("button")[i].addEventListener("click",handleClick);

}


function handleClick(){
	var i=this.innerHTML;
	press(i);
	anim(i);
	}


document.addEventListener("keypress",function(event){
	press(event.key);
	anim(event.key);
})
function press(key){  
		switch (key){
			case "w":
				var s= new Audio("crash.mp3");
				s.play();
				break;
			case "a":
				var s= new Audio("kick-bass.mp3");
				s.play();
				break;
			case "s":
				var s= new Audio("snare.mp3");
				s.play();
				break;
			case "d":
				var s= new Audio("tom-1.mp3");
				s.play();
				break;
			case "j":
				var s= new Audio("tom-3.mp3");
				s.play();
				break;
			case "k":
				var s= new Audio("tom-2.mp3");
				s.play();
				break;
			case "l":
				var s= new Audio("tom-4.mp3");
				s.play();
				break;
			default: console.log(i);


		}
	}

function anim(cur){
	var active=document.querySelector("." + cur);
	active.classList.add("pressed");
	setTimeout(function() {
		active.classList.remove("pressed");
	},100);

}
