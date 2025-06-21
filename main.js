// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Matrix Background Effect
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

// Make canvas responsive
function resizeCanvas() {
  canvas.width = Math.min(
    window.innerWidth,
    document.documentElement.clientWidth
  );
  canvas.height = window.innerHeight;

  // Recalculate columns based on new width
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);

  // Reset drops array
  drops.length = 0;
  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }
}

// Initialize canvas
resizeCanvas();

// Resize canvas on window resize
window.addEventListener("resize", resizeCanvas);

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);

const drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#4F46E5";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove("opacity-0", "invisible");
    backToTopButton.classList.add("opacity-100", "visible");
  } else {
    backToTopButton.classList.add("opacity-0", "invisible");
    backToTopButton.classList.remove("opacity-100", "visible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Project Modal
const projectModal = document.getElementById("project-modal");
const projectContent = document.getElementById("project-content");
const closeModal = document.getElementById("close-modal");
const projectDetailsBtns = document.querySelectorAll(".project-details-btn");

const projectData = {
  triprotect: {
    title: "TriProtect Emergency System",
    description:
      "TriProtect is a comprehensive emergency response system designed to provide immediate assistance in critical situations. The system includes real-time alerts, GPS tracking, and communication features to ensure swift response during emergencies.",
    features: [
      "Real-time emergency alerts",
      "GPS location tracking",
      "Instant notification to emergency contacts",
      "Integration with local emergency services",
      "User-friendly mobile interface",
    ],
    technologies: [
      "PHP",
      "JavaScript",
      "MySQL",
      "HTML/CSS",
      "Bootstrap",
      "Google Maps API",
    ],
    image:
      '<div class="bg-gradient-to-br from-blue-600 to-blue-800 h-64 rounded-lg flex items-center justify-center"><i class="fas fa-shield-alt text-white text-6xl"></i></div>',
  },
  voting: {
    title: "Voting System",
    description:
      "A secure and efficient electronic voting system developed for student council elections and organizational voting. The system ensures transparency, security, and real-time results tabulation.",
    features: [
      "Secure authentication",
      "Real-time vote counting",
      "Candidate profiles and platforms",
      "Admin dashboard for monitoring",
      "Results visualization",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Chart.js"],
    image:
      '<div class="bg-gradient-to-br from-purple-600 to-purple-800 h-64 rounded-lg flex items-center justify-center"><i class="fas fa-vote-yea text-white text-6xl"></i></div>',
  },
  inventory: {
    title: "Inventory Tool",
    description:
      "A comprehensive inventory management system designed to track and manage resources efficiently. The system includes features for stock tracking, order management, and analytics.",
    features: [
      "Stock level monitoring",
      "Barcode scanning integration",
      "Purchase order management",
      "Inventory analytics and reporting",
      "User role management",
    ],
    technologies: [
      "VB.NET",
      "MySQL",
      "JavaScript",
      "HTML/CSS",
      "Crystal Reports",
    ],
    image:
      '<div class="bg-gradient-to-br from-green-600 to-green-800 h-64 rounded-lg flex items-center justify-center"><i class="fas fa-boxes text-white text-6xl"></i></div>',
  },
};

projectDetailsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const project = projectData[btn.dataset.project];

    let featuresHTML = "";
    project.features.forEach((feature) => {
      featuresHTML += `
                  <li class="flex items-start mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-400 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      <span>${feature}</span>
                  </li>
              `;
    });

    let technologiesHTML = "";
    project.technologies.forEach((tech) => {
      technologiesHTML += `<span class="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 inline-block">${tech}</span>`;
    });

    projectContent.innerHTML = `
              <div class="mb-6">
                  ${project.image}
              </div>
              <h2 class="text-2xl font-bold mb-4 gradient-text">${project.title}</h2>
              <p class="text-gray-300 mb-6">${project.description}</p>
              
              <h3 class="text-xl font-semibold mb-4 text-white">Key Features</h3>
              <ul class="text-gray-300 mb-6">
                  ${featuresHTML}
              </ul>
              
              <h3 class="text-xl font-semibold mb-4 text-white">Technologies Used</h3>
              <div class="flex flex-wrap mb-6">
                  ${technologiesHTML}
              </div>
              
              <div class="flex justify-end mt-8">
                  <button class="gradient-bg text-white font-medium py-2 px-6 rounded-lg transition duration-300 inline-block hover:shadow-lg hover:shadow-indigo-500/30">
                      View Live Demo
                  </button>
              </div>
          `;

    projectModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });
});

closeModal.addEventListener("click", () => {
  projectModal.classList.add("hidden");
  document.body.style.overflow = "auto";
});

// Close modal when clicking outside
projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    projectModal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
});

// Contact Form Submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Simulate form submission
  setTimeout(() => {
    contactForm.reset();
  }, 1000);
});

// View All Projects Button
document.getElementById("view-all-projects").addEventListener("click", () => {
  alert("More projects will be displayed here.");
});

// View All Services Button
document.getElementById("view-all-services").addEventListener("click", () => {
  alert("More services will be displayed here.");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});

// Fade out 'Scroll to explore' indicator on scroll
const scrollExploreIndicator = document.querySelector(
  ".scroll-explore-indicator"
);
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    scrollExploreIndicator.classList.add("fade-out");
  } else {
    scrollExploreIndicator.classList.remove("fade-out");
  }
});
