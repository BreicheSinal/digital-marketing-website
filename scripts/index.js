/* HAMBURGER NAVBAR */
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");

/* BUTTON ANIMATION */
const button = document.querySelector(".animate");
const arrow = document.querySelector(".arrow");
const buttonText = document.querySelector(".button-txt");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

// GSAP Animation for the deliver items
const deliverItems = document.querySelectorAll(".deliver-item");

// Function to animate items when they come into view
const animateDeliverItems = () => {
  deliverItems.forEach((item, index) => {
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: index * 0.2, // Stagger effect
      ease: "power1.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%", // Start animation when the item is in view
        toggleActions: "play none none reverse",
      },
    });
  });
};

// Call the animation function on page load
window.onload = animateDeliverItems;

button.addEventListener("mouseenter", () => {
  gsap.to(buttonText, {
    opacity: 0,
    duration: 0.3,
    ease: "power1.out",
  });

  gsap.to(arrow, {
    x: 50,
    opacity: 1,
    duration: 0.3,
    ease: "power1.out",
  });
});

button.addEventListener("mouseleave", () => {
  gsap.to(buttonText, {
    opacity: 1,
    duration: 0.3,
    ease: "power1.out",
  });

  gsap.to(arrow, {
    x: 0,
    opacity: 0,
    duration: 0.3,
    ease: "power1.out",
  });
});

button.addEventListener("click", () => {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
});
