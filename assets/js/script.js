
    document.addEventListener("DOMContentLoaded", function () {
        // Create cursor element
        let cursorDiv = document.createElement("div");
        cursorDiv.classList.add("custom-cursor");
        document.body.appendChild(cursorDiv);

        // Move cursor with mouse
        document.addEventListener("mousemove", function (e) {
            cursorDiv.style.left = `${e.clientX}px`;
            cursorDiv.style.top = `${e.clientY}px`;
        });

        // Ensure hover effect applies to all elements
        document.querySelectorAll("*").forEach((elem) => {
            elem.addEventListener("mouseenter", () => {
                cursorDiv.classList.add("hover");
            });
            elem.addEventListener("mouseleave", () => {
                cursorDiv.classList.remove("hover");
            });
        });
    });


    let currentIndex = 0;
        const testimonials = document.querySelector('.testimonials .testimonials-carousel .row');
        const testimonialCards = document.querySelectorAll('.testimonials .testimonial-card');
        const totalCards = testimonialCards.length;
        
        function scrollTestimonials() {
            currentIndex = (currentIndex + 1) % totalCards; // Loop back to the start when reaching the last card
            const offset = -currentIndex * (testimonialCards[0].offsetWidth + 20); // Calculate the scroll offset
            testimonials.style.transform = `translateX(${offset}px)`; // Move the carousel
        }
    
        // Auto-scroll every 3 seconds
        setInterval(scrollTestimonials, 3000);


    
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                // Add animation class to the element
                entry.target.classList.add("animate__animated", "animate__zoomInUp");
                // Stop observing the element once it's animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger animation when 50% of the element is in the viewport
    });

    // Observe all elements with the class 'animate__animated'
    const elementsToAnimate = document.querySelectorAll('.animate__animated');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
