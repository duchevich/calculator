$(document).ready(function(){
  
  var pin = "";
  
  $('#pass').click(function(){
      display();
  });
  
  $(".num").click(function(){
    pin += $(this).text();
    display();
  });
  
  $(".cancel").click(function(){
    pin = pin.slice(0,-1);
     display();
  });
  
  $(".clear").click(function(){
    pin = "";
     display();
  });
  
  $(".enter").click(function(){
    if(pin == ""){
      alert( "Ви нічого не ввели");
    }
    else{
      alert( "Ви ввели " + pin);
    }
  });
  
  $(".random").click(function(){
    var rand = 0;
    var len = pin.length;
    var arr = pin.split("");
    var newarr = [];
    for(var i = 0; i < len; i++){
      max = arr.length;
      rand = parseInt(Math.random() * (max - 0) + 0);
      newarr.push(arr[rand]);
      arr.splice(rand, 1);
    }
    pin = newarr.join("");
    display();
  });
  
  function display(){
    if($('#pass').prop('checked')) {
      var pass = "";
      var len = pin.length;
      for(var i = 0; i < len; i++){
        pass += '*';
      }
      $("#display").text(pass);
    } 
    else {
      $("#display").text(pin);
    }
  }
  
});