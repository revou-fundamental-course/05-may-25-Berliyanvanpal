
// Auto-slide banner text
let messages = [
    "Welcome to our Travel Agent!",
    "Discover amazing destinations.",
    "Book your next adventure with us!"
  ];
  
  let index = 0;
  let bannerText = document.getElementById("banner-text");
  
  function changeText() {
    bannerText.textContent = messages[index];
    index = (index + 1) % messages.length;
  }
  
  setInterval(changeText, 3000);

  // Form validation
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
  
    if (name === "" || email === "") {
      alert("Nama dan Email wajib diisi.");
      e.preventDefault();
    } else {
      alert("Terima kasih! Form berhasil dikirim.");
    }
  }); 