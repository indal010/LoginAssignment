var myarr=[];
$(document).ready(function(){
  $("#tag").css("color","dodgerblue");
  $("#mdl1").focus(function()
  {
  //  $(this).css("border","0px dimgray black");
     $(this).css("border","1px solid lightgray");
   });
  $("#username").focus(function(){
   $(this).css("background-color","lightblue");
   });
   $("#username").blur(function()
 {
   $(this).css("background-color","darkslategray");
 })
 $("#pwd").focus(function()
 {
  $(this).css("background-color","lightblue");
  });
  $("#pwd").blur(function()
{
  $(this).css("background-color","darkslategray");
})


  $("#sign").click(function(){
    var userName=$("#username").val();
       var pwd=$("#pwd").val();
     var x=getCookie("mycookie");
       if(x=="")
       {
        document.getElementById("abcdef").click();
       }
       else {
                       var a=2;
                       var getobj=JSON.parse(x);
                       for(i=0;i<getobj.length;i++)
                          {
                           if(getobj[i].userid==userName&&getobj[i].pass==pwd)
                             {
                               a=0;
                               $.ajax(
                                {
                               url:"../Login/template/success.html",
                               async:false,
                               type:"GET",
                               dataType:'html',
                               success: function(data,textStatus,jqXHR)
                               {
                                // console.log(data);
                                 //$("#contact-page").html(data);
                                 //document.getElementById('#c').innerHTML=html(data);
                                 $("#c").html(data);
                               }
                                 });

                              document.getElementById("con").click();
                               break;
                              }
                            }
                    if(a!=0)
                    document.getElementById("about_id").click();
                  }
    });


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
          $("#mdl1").css("border","2px solid red");
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
                  createCookie1("mycookie",str1);
      }
       else
        {
         alert("your passwords are not matching, please enter same password!!");
        }
 });
});



function createCookie1(key,value)
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
  var cookie=document.cookie;
   if(cookie.length>0)
  {
     start=cookie.indexOf(kname+"=");
       if(start!=-1)
       {
         start=start+kname.length+1;
         end=document.cookie.indexOf("]",start);
          return document.cookie.substr(start,end);
      }
  }
  return "";
}
