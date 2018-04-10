//counter code
var button=document.getElementById('counter');
button.onclick=function()
{
    //Make a request to the counter end point
    var request=new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
      if(request.readyState===XMLHttpRequest.DONE)
      {
        if(request.status===200)
        {
            var counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
        }
      }
    };
    
    //render the variable in the correct span
    request.open("GET", "http://sajanshaw387.imad.hasura-app.io/counter", true);
    request.send(null);   
};

var submit=document.getElementById("submit_btn");
submit.onclick=function(){
    
   
    var request=new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
      if(request.readyState===XMLHttpRequest.DONE)
      {
        if(request.status===200)
        {
            var names=request.responseText;
            names=JSON.parse(names);
            var list="";
            for(var i=0;i<names.length;i++)
            {
                 list+='<li>'+names[i]+'</li>';
            }
            var ul=document.getElementById('namelist');
            ul.innerHTML=list;
           
        }
      }
    };
    var nameInput=document.getElementById("name");
    var input=nameInput.value;
    
    //render the variable in the correct span
    request.open("GET", "http://sajanshaw387.imad.hasura-app.io/submit-name?name="+input, true);
    request.send(null);   
   
    
};
//login by using username and password
var submit=document.getElementById("submit_btn");
submit.onclick=function(){
    
   
    var request=new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
      if(request.readyState===XMLHttpRequest.DONE)
      {
        if(request.status===200)
        {
           
           alert('user logged in');
        }
        else if(request.status===403)
        {
           
           alert('username or password is incorrect');
        }
       else if (request.status===500)
        {
          
           alert('Something is wrong');
        }
      }
    };
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
   
    
    //render the variable in the correct span
    request.open("POST", "http://sajanshaw387.imad.hasura-app.io/login", true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username : username ,password : password}));   
   
    
};