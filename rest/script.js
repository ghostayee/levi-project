// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Navbar hover animation (matches your scale effect)
document.querySelectorAll(".menu a").forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.transition = "transform 0.2s ease";
        item.style.transform = "scale(1.2)";
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)";
    });
});

// Contact cards subtle lift effect (for Page 4)
const cards = document.querySelectorAll(".pillar, .contact-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transition = "0.3s ease";
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });
});

// Button ripple effect (optional but elegant)
document.querySelectorAll(".btn-primary").forEach(button => {
    button.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        this.appendChild(ripple);

        const x = e.clientX - this.getBoundingClientRect().left;
        const y = e.clientY - this.getBoundingClientRect().top;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        setTimeout(() => ripple.remove(), 600);
    });
});

