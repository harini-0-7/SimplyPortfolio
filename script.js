// MOBILE MENU
function toggleMenu() {
    document.getElementById("https://script.google.com/macros/s/AKfycby493S8LqCq_sA1rUGsep6QOyBM6V7w14dRRYtkKxtIZD5NBO14fHfgvovfHI-Ctr28-Q/exec").classList.toggle("active");
}

// AOS Animation Init
AOS.init({
  duration: 1000,
});

// EMAIL JS SEND MESSAGE
emailjs.init("service_xr66opc"); // Replace with your EmailJS public key

document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.send("service_xr66opc","template_tyn9q4d",{
      from_name: document.getElementById("name").value,
      reply_to: document.getElementById("email").value,
      message: document.getElementById("message").value
  })
  .then(() => alert("Message Sent Successfully!"))
  .catch(error => alert("Failed to send message"));
});
