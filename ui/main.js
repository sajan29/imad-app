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
var button=document.getElementById('counter');
button.onclick=function()
{
    //Make a request to the counter end point
    
    //Capture the response and store it in a variable
    
    //render the variable in the correct span
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};
