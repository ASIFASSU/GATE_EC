$(document).ready(function(){
    $('.counter').counterUp({
      delay: 1,
      time: 4
    });
  });

  // Subscribe Newsletter
  let button = document.getElementById("btns");
  
button.addEventListener('click', (e)=> {
  e.preventDefault();
  
  let msg = document.getElementById("suscribeMsg");
  let email = document.getElementById("Email");
    
  email.value = "";
  msg.innerText = "Sucessfully! Subscribed";    
})
