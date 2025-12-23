// Switch screens
function goToFeedback() {
    document.getElementById("screenQR").classList.remove("active");
    document.getElementById("screenFeedback").classList.add("active");
}

// Star rating
const stars = document.querySelectorAll("#stars span");
stars.forEach(star => {
    star.addEventListener("click", () => {
        let value = star.getAttribute("data-value");
        stars.forEach(s => {
            s.classList.toggle("active", s.getAttribute("data-value") <= value);
        });
    });
});

// Submit feedback → Send email using EmailJS
function submitFeedback() {
    // Count active stars
    let activeStars = document.querySelectorAll("#stars .active");
    let rating = activeStars.length > 0 ? activeStars.length : "No rating";

    // Get comment
    let comment = document.getElementById("comment").value.trim();

    // Send email via EmailJS
    emailjs.send("service_0hebshv", "template_8tgmns9", {
        rating: rating,
        comment: comment
    })
    .then(function(response) {
        document.getElementById("screenFeedback").classList.remove("active");
        document.getElementById("screenThanks").classList.add("active");
    })
    .catch(function(error) {
        alert("There was an error sending your feedback.");
    });
}