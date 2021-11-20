
// function clock(){

//     var hour= document.getElementById('hours');
//     var minutes=document.getElementById('minutes');
//     var seconds=document.getElementById('seconds');
//     var ampm=document.getElementById('am');

//     var time= new Date();
//     var a=time.getHours();
//     var b=time.getMinutes();
//     var c=time.getSeconds();

//     hour.innerHTML=a;
//     minutes.innerHTML=b;
//     seconds.innerHTML=c;

//     let period = "AM";

//     if (a == 0) {
//       a = 12;
//     } else if (a >= 12) {
//       a = a - 12;
//       period = "PM";
//     }
//     a = a < 10 ? "0" + a : a;
//     b = b < 10 ? "0" + b : b;
//     c = c < 10 ? "0" + c : c;
    
// };
// clock();




// setInterval(clock,1000);




let clock = () => {

    var hour= document.getElementById('hours');
    var minutes=document.getElementById('minutes');
    var seconds=document.getElementById('seconds');
    var ampm=document.getElementById('am');

    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";
    if (hrs == 0) {
      hrs = 12;
    } else if (hrs >= 12) {
      hrs = hrs - 12;
      period = "PM";
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    hour.innerHTML=hrs;
    minutes.innerHTML=mins;
    seconds.innerHTML=secs;
    ampm.innerHTML=period;
  
 
    setTimeout(clock, 1000);
  };
  
  clock();






  function settfun(){
    
    let waketime = document.getElementById("wakeUpTimeSelector").value;
    let lunchtime = document.getElementById("lunchTimeSelector").value;
    let naptime = document.getElementById("napTimeSelector").value;
    

    if(waketime=="" || lunchtime=="" || naptime=="" ){

    }
    else{
    var wwtim = document.getElementById("waket").innerText = "wake up time is -- "+waketime;
    var lltim = document.getElementById("luncht").innerText = "lunch up time is -- "+lunchtime;
    var natim = document.getElementById("napt").innerText = "nap up time is -- "+naptime;

    document.getElementById("divbox2").style.display = "block";

    
    
    }
  }





  // function Makediv(){
  // var container= document.createElement('div');
  // container.className='grid-item';
  // container.id="dynamic-block";

  // document.getElementById('grid-container1').appendChild(container);

  // var wake =document.getElementById('wakeUpTimeSelector').innerText = "wake up time is --"+ value;
  // var invalue=document.getElementById('wakeUpTimeSelector');
  // var value=invalue.options[invalue.selectedIndex].text;
  // document.getElementById('dynamic-block').innerHTML="Wake up time" + value; 

  // var invalue=document.getElementById('lunchTimeSelector');
  // var value=invalue.options[invalue.selectedIndex].text;
  // document.getElementById('dynamic-block').innerHTML="Lunch time" + value; 

  // var invalue=document.getElementById('napTimeSelector');
  // var value=invalue.options[invalue.selectedIndex].text;
  // document.getElementById('dynamic-block').innerHTML="Nap time" + value; 

// }

function settime(){
  var i =document.getElementById("wakeUpTimeSelector").value;
  var j =document.getElementById("lunchTimeSelector").value;
  var k =document.getElementById("napTimeSelector").value;

  var hour=new Date().getHours();
  // console.log("Lets Have Some Breakfast");

  if(i==hour){
    document.getElementById("lunchbottom").style.backgroundImage="url(./img/wake_up.png)";
    document.getElementById("lunch").innerHTML="Wake up!! Lets Have Some Breakfast";
  }
  else if(j==hour){
    document.getElementById("lunchbottom").style.backgroundImage="url(./img/lunch_image.png)";
    document.getElementById("lunch").innerHTML="Lets Have Some Lunch";
  }
  else if(k==hour){
    document.getElementById("lunchbottom").style.backgroundImage="url(./img/goodnight.png)";
    document.getElementById("lunch").innerHTML="Good Night !!";
  }
  else{
    document.getElementById("lunchbottom").style.backgroundImage="url(./img/purple bg.png)";
  }
  settfun();
}


