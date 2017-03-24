var myarr=[];
$(document).ready(function(){
  $("#tag").css("color","dodgerblue");
  $("#username").focus(function(){
   $(this).css("background-color","lightblue");
   });
   $("#username").blur(function()
 {
   $(this).css("background-color","thistle");
 })
 $("#pwd").focus(function()
 {
  $(this).css("background-color","lightblue");
  });
  $("#pwd").blur(function()
{
  $(this).css("background-color","thistle");
})


  $("#sign").click(function(){
    var userName=$("#username").val();
       var pwd=$("#pwd").val();
     var x=getCookie("mycookie");
       if(x=="")
       {
         $("body").load("fail.html");
       }
       else {
               var a=2;
            var getobj=JSON.parse(x);
            for(i=0;i<getobj.length;i++)
            {
              if(getobj[i].userid==userName&&getobj[i].pass==pwd)
                 {
                    a=0;
                   $("body").load("template/success.html");
                  }
                }
                if(a!=0)
                  $("body").load("template/fail.html");

          }
    }
  );


  $("#submit").click(function()
  {
    u1=$("#mdl1").val();
    p1=$("#mdl2").val();
    p2=$("#mdl3").val();
    $("input").val("");
      var validation=false;
     var precookie=getCookie("mycookie");
     if(precookie.length>0)
        {  myarr=JSON.parse(precookie);

          for(i=0;i<myarr.length;i++)
          {
            if(myarr[i].userid==u1)
            {
              validation=true;
              break;
            }
          }
        }
        if(validation)
        {
        alert("entered user name already exists!!!! please select other user name");
        }
        else if(u1=="")
        {
          alert("user name cannot be empty");
        }
         else if(p1==""||p2=="")
          alert("password field cannot be empty");
         else if(p1==p2)
         {
              var str='{"userid":\"'+u1+'\","pass":\"'+p1+'\"}';
                  str=JSON.parse(str);
              if(precookie=="")
                 {
                  myarr[myarr.length]=str;
                 }
                 else
                  {
                         myarr[myarr.length]=str;
                 }
                  var str1=JSON.stringify(myarr);
                  createCookie("mycookie",str1);
      }
       else
        {
         alert("your passwords are not matching, please enter same password!!");
        }
 });
});



function createCookie(key,value)
{
  var expires;
  var days=1;
  var date=new Date();
  date.setTime(date.getTime()+(days*24*60*60*1000));
  expires=";expires=" + date.toGMTString();
  document.cookie=key+"="+value+expires+";path=/";
}


function getCookie(kname)
{
   if(document.cookie.length>0)
  {
     start=document.cookie.indexOf(kname+"=");
       if(start!=-1)
       {
         start=start+kname.length+1;
         end=document.cookie.indexOf("]",start);
          return document.cookie.substr(start,end);
      }
  }
  return "";
}
