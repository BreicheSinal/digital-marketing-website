const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");

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
