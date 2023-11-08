document.onreadystatechange = function() {
    function popUp() {
      var popup = document.createElement('div');
      popup.className = 'popup';
      popup.id = 'view';

      var colors = document.createElement('div');
      colors.className = 'colors';
      

      var contain = document.createElement('div');
      contain.className = 'Cont';
      

    

      var pic = document.createElement('img');
      pic.src='red.png'
      pic.id+''
      pic.style.width='30rem'
      pic.className = 'pic';

      var text = document.createElement('p');
      text.className = 'curtim';
      text.innerHTML=Time()




      var close = document.createElement('button');
      close.className = 'close';
      close.innerHTML= "Close"
      close.onclick = function() {
        popup.style.display="none"
      }
      
      let changeColor= ["red","black","blue","beig","pink"]
      changeColor.forEach((element)=>{
        let op=document.createElement("button")
        op.className="colorBtn"
        op.style.backgroundColor=element
        op.addEventListener('click', function(){
          pic.src=element+'.png'
        })
        colors.appendChild(op)
      })

      contain.appendChild(text)
      contain.appendChild(colors)
      contain.appendChild(pic)
      popup.appendChild(contain)
      popup.appendChild(close)
  
      document.body.appendChild(popup);
    }
  
    document.getElementById("btn").onclick = popUp;
  }
  

//translation
 let arabic=document.getElementById("ar") 
 arabic.addEventListener('click', ()=>{
let txt=document.querySelectorAll(".popupButton")
txt.forEach((el) =>{
  el.innerHTML="معاينة"
})
let home=document.getElementById("home")
home.innerHTML="الرئسية"
let prof=document.getElementById("prof")
prof.innerHTML="هويتي"
 })
 
 let englsih=document.getElementById("en") 
 englsih.addEventListener('click', ()=>{
let txt=document.querySelectorAll(".popupButton")
txt.forEach((el) =>{
  el.innerHTML="View"
})
let home=document.getElementById("home")
home.innerHTML="Home"
let prof=document.getElementById("prof")
prof.innerHTML="Profile"
 })
  
  


 //time on watch  
function Time() {
    let date = new Date();
 
    let hour = date.getHours();
    let minutes = date.getMinutes();
 
   let time = hour >= 12 ? 'pm' : 'am';
 
    //  to make AM or PM
    hour = hour % 12;
 
    // to make 0 -> 12
    hour = hour ? hour : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
 
    return(hour + ':' + minutes+ time);

}
 
