var ullist =document.getElementById('ullist');
var ollist =document.getElementById('ollist');
var btnRight = document.getElementById('btnRight');
var btnLeft = document.getElementById('btnLeft');
var lis = document.getElementById('lis');
var liClone = lis.cloneNode(true);
ullist.appendChild(liClone);

var olNum=0;
var ulNum=0;
var timer = null;
btnRight.onclick = rightMove;
btnLeft.onclick = function(){
	olNum--;
	if(olNum<0){
		olNum=4;
	}
	for (var i = 0; i < ollist.children.length; i++) {
		ollist.children[i].className='';
	}
	ollist.children[olNum].className='current';
	
	ulNum--;
	if(ulNum<0){
		ulNum=4;
		ullist.style.left = '-6130px';
	}
	
	var move = ulNum * -1226;
	animate(ullist,move);
	
}
for (var i = 0; i < ollist.children.length; i++) {
	ollist.children[i].index = i;
	ollist.children[i].onclick = function(){
		for(var j=0;j<ollist.children.length;j++){
			ollist.children[j].className ='';
		}
		this.className = 'current';
		var move = this.index * -1226;
		animate(ullist,move);
		olNum = this.index;
		ulNum = this.index;
	}
}
function rightMove(){
	olNum++;
	if(olNum>4){
		olNum=0;
	}
	for (var i = 0; i < ollist.children.length; i++) {
		ollist.children[i].className ='';
	}	
	ollist.children[olNum].className = 'current';
	
	ulNum++;
	if(ulNum >5){
		ulNum=1;
		ullist.style.left =0;
	}
	var move = ulNum * -1226;
	animate(ullist,move);
}
timer = setInterval(rightMove,3000);

for (var i = 0; i < ullist.children.length; i++) {
	ullist.children[i].onmouseover = function(){
		clearInterval(timer);
	}
	ullist.children[i].onmouseout = function(){
		timer = setInterval(rightMove,3000);
	}
}
