
var button=document.getElementById('counter');
button.onclick=function()
{
    //Make a request to the counter end point
    var request=new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        
        if(request.status===200)
        {
            var counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
        }
    };
    
    //render the variable in the correct span
    request.open("GET", "sajanshaw387.imad.hasura-app.io", true);
    request.send();   
};
