
// function sendEmail()
// {
//     Email.send({
//         SecureToken:"12e726ac-e084-4d07-86ae-8a919030377f",
//         To : 'bayazityunusemre@outlook.com',
//         From : 'yunusemre4638@gmail.com',
//         Subject : "New Contact Form Enquiry",
//         Body : "<b>Name</b>: " + document.getElementById("name").value
//         + "<br> <b>Email</b>: " +document.getElementById("email").value
//         + "<br> <b>Message</b>: "+ document.getElementById("message").value 
//     }).then(
//       message => alert("Message Sent Succesfully")
//     );

//     console.log(document.getElementById("email").value);
// }


let popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add("open-popup");
} 

function closePopup(){
  popup.classList.remove("open-popup");
}





// viewmore

function viewMore(){
  var moreDOM = document.getElementById("more");
  var btnDOM = document.getElementById("moreBtn");
  var certificateDOM = document.querySelectorAll(".certificate");

  if(certificateDOM.length > 6){
    if(btnDOM.innerHTML == "View More")
    {
      btnDOM.innerHTML = "View Less";
      moreDOM.style.display = "flex";
    }else{
      btnDOM.innerHTML = "View More";
      moreDOM.style.display = "none";
    }
   
  }
  
}
