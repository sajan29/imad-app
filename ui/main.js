console.log('Loaded!');
//changing the main text on index.html
var element=document.getElementById('main-text');
element.innerHTML='New Value';
//changing the img position
var img=document.getElementById('logo');
img.onclick=function(){
    img.style.marginLeft='100px';
};