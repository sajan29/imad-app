/*console.log('Loaded!');
//changing the main text on index.html
var element=document.getElementById('main-text');
element.innerHTML='New Value';
//changing the img position
var img=document.getElementById('logo');
var margin=0;
function moveRight()
{
     margin=margin+10;
    img.style.marginLeft=margin+'px';
  
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
   
};*/
var count=document.getElementById('count');
counter.onclick=function()
{
    count=count+1;
    count.innerHTMl=count;
}
