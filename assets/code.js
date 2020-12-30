var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var mapWidth = 500;
var mapHeight = 500;
var gridSize = 60;
var gridOffset = 15;
var gridNumber = Math.floor(mapWidth/gridSize)-1;

var map = {
	img : new Image(),
	url : 'assets/tile.png',
	loaded : false
}
var cow = {
	img : new Image(),
	url : 'assets/vaca.webp',
	loaded : false
}
var chicken = {
	img : new Image(),
	url : 'assets/pollo.webp',
	loaded : false
}
var pig = {
	img : new Image(),
	url : 'assets/cerdo.webp',
	loaded : false
}

loadImage(map,0,0,drawMap);
loadImage(cow,30,30,drawMap);
loadImage(pig,300,20,drawMap);
loadImage(chicken,50,300,drawMap);

window.addEventListener('click',drawMap);

function loadImage(obj,x,y,onLoad=null)
{
	obj.img.src = obj.url;
	obj.img.addEventListener('load',function(e){
		obj.loaded = true;
		if(onLoad) onLoad();
	});
}

function drawMap(argument)
{
	if(map.loaded && cow.loaded && chicken.loaded && pig.loaded){
		ctx.drawImage(map.img,0,0);

		//Draw random animals
		drawRandomAnimalsInMap(cow.img,			random(1,5));
		drawRandomAnimalsInMap(chicken.img,	random(5,15));
		drawRandomAnimalsInMap(pig.img,			random(3,6));
	} 
}

function drawRandomAnimalsInMap(img,howMany)
{
	for (var i = 0; i < howMany; i++) {
		var posX = (gridSize * random(0,gridNumber)) + random(-gridOffset,gridOffset);
		var posY = (gridSize * random(0,gridNumber)) + random(-gridOffset,gridOffset);
		ctx.drawImage(img, posX, posY);
	}
}

function random(min,max)
{
	var res = Math.floor(Math.random() * (max - min + 1)) + min;
	return res;
}