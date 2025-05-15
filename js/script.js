// --- Slideshow ---
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Ganti slide tiap 3 detik
}

// --- Auto-slide banner text ---
let messages = [
    "Welcome to our Travel Agent!",
    "Discover amazing destinations.",
    "Book your next adventure with us!"
];

let index = 0;
let bannerText = document.getElementById("banner-text");

function changeText() {
    if (bannerText) {
        bannerText.textContent = messages[index];
        index = (index + 1) % messages.length;
    }
}

setInterval(changeText, 3000);

// --- Form validation ---
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (name === "" || email === "") {
            alert("Nama dan Email wajib diisi.");
            e.preventDefault();
        } else {
            alert("Terima kasih! Form berhasil dikirim.");
        }
    });
}
